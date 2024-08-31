import  { useRef } from "react";
import { Typography, Box, TextField, Button, Chip, IconButton } from "@mui/material";

import { customButtonStyleBlue, customFieldStyle } from "../style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Form2({ formData, handleChange, handleFileChange, handleSkillAdd, handleSkillDelete, handlePrev, handleSubmit, removeResume }) {
    const fileInputRef = useRef(null);

    const handleFileButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <>
            <TextField
                label="Skills"
                placeholder="Add top 3 skills"
                fullWidth
                margin="normal"
                sx={customFieldStyle}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.target.value) {
                        handleSkillAdd(e.target.value);
                        e.target.value = '';
                    }
                }}
            />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {formData.skills.map((skill) => (
                    <Chip
                        key={skill}
                        label={skill}
                        onDelete={() => handleSkillDelete(skill)}
                    />
                ))}
            </Box>
            
            {formData.resume ? (
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <Typography variant="body2" sx={{ flexGrow: 1 }}>
                        {formData.resume.name}
                    </Typography>
                    <IconButton
                        color="error"
                        onClick={removeResume}
                        sx={{ ml: 1 }}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </IconButton>
                </Box>
            ) : (
                <Button
                    variant="contained"
                    fullWidth
                    sx={{ ...customButtonStyleBlue, my: 2, backgroundColor:"#F5F5F5", color:"#D9D9D9" }}
                    onClick={handleFileButtonClick}
                    startIcon={<FontAwesomeIcon icon={faUpload} />}
                >
                    Upload Resume
                </Button>
            )}
            
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                <Button
                    sx={{...customButtonStyleBlue,m:2}}
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={handlePrev}
                >
                    Previous
                </Button>
                <Button
                fullWidth
                    variant="contained"
                    sx={{...customButtonStyleBlue,m:2}}
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </Box>
        </>
    );
}
