
import { TextField, Button } from "@mui/material"
import { customFieldStyle, customButtonStyleBlue } from "../style"
export default function Form1({ formData, handleChange, handleNext }) {
  return (
    <>
     <TextField
     required
                label=" Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx = {customFieldStyle}
            />
            <TextField
            required
                label="Email Adress"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx = {customFieldStyle}
            />
            <TextField
            required
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx = {customFieldStyle}
            />
            <Button
                variant="contained"
                
                onClick={handleNext}
                fullWidth
                size="large"
        sx={customButtonStyleBlue}
            >
                Next
            </Button>
    
    </>
  )
}
