import express from 'express';
import cors from 'cors';
import multer from 'multer';
import bcrypt from 'bcryptjs';
import pg from 'pg';
import path from 'path';
import fs from 'fs';

// Ensure __dirname is correctly defined
const __dirname = path.resolve(path.dirname(''));

// Initialize the Express app
const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());

// Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Initialize the PostgreSQL client
const db = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'usersdb',
    password: '123456',
    port: 5432,
});
db.connect();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// User registration route
app.post('/api/register', upload.single('resume'), async (req, res) => {
    const { name, email, password, skills } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const resumePath = req.file ? req.file.path : null;

    try {
        // Insert the user into the database, using 'name' instead of 'username'
        const userResult = await db.query(
            `INSERT INTO users (name, email, password, resume_path) 
            VALUES ($1, $2, $3, $4) RETURNING id`,
            [name, email, hashedPassword, resumePath]
        );

        const userId = userResult.rows[0].id;

        if (skills && skills.length > 0) {
            const skillPromises = skills.map(skill => {
                return db.query(
                    `INSERT INTO skills (user_id, skill) VALUES ($1, $2)`,
                    [userId, skill]
                );
            });
            await Promise.all(skillPromises);
        }

        res.status(201).send({ message: 'User registered successfully!' });
    } catch (err) {
        console.error('Error during registration:', err);
        res.status(500).send('Server error');
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
