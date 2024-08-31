import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Box, Typography} from '@mui/material';
import Form1 from './Form1';
import Form2 from './Form2';
import ProfileProgress from './ProfileProgress';
export default function Signupmodal() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        skills: [],
        resume: null,
    });
    const navigate = useNavigate();
    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrev = () => {
        setStep(step - 1);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            resume: e.target.files[0],
        });
    };

    const handleSkillAdd = (skill) => {
        setFormData({
            ...formData,
            skills: [...formData.skills, skill],
        });
    };
    const handleSkillDelete = (skillToDelete) => {
        setFormData({
            ...formData,
            skills: formData.skills.filter(skill => skill !== skillToDelete),
        });
    };

    const handleSubmit = async () => {
        const formDataToSend = new FormData();  // Renamed to avoid conflict
    
        // Append individual fields from the original formData object
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('password', formData.password);
        formDataToSend.append('resume', formData.resume);
    
        // Append skills (this is where the error was occurring)
        formData.skills.forEach(skill => formDataToSend.append('skills', skill));
    
        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                body: formDataToSend,
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log('Registration successful:', data);
                navigate('/success'); // Redirect to the Thank You page
            } else {
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    
    const removeResume = () => {
        setFormData({
            ...formData,
            resume: null, // Clear the uploaded file
        });
    };
  return (
    <Box
    sx={{
      backgroundColor: 'white',
      position: 'fixed',
      top:  {
        xs:"6dvh",//0
         sm:"7dvh", //600
        md:'9dvh', //900
        lg:"11dvh", // 1200
         xl:'12dvh', //1536

      }, 
      
      left: {
        xs:"4dvw",//0
         sm:"20dvw", //600
        md:'30dvw', //900
        lg:"35dvw", // 1200
         xl:'35dvw', //1536

      }, 
      minHeight: '75dvh', 
      zIndex: 2,
      width: {
        xs:"92dvw",//0
         sm:"60dvw", //600
        md:'40dvw', //900
        lg:"30dvw", // 1200
         xl:'30dvw', //1536

      },
      borderRadius:"5%",
      padding:"4%" 
    }}
  >
  <ProfileProgress value ={step}/>
  <Typography variant="h3" component="h2" align='center'sx={{fontWeight:600 , marginBottom:'2dvh', marginTop:'2dvh'}}>
    Sign Up
  </Typography>
 
    
  {step===1?( <Form1  formData={formData}  handleChange={handleChange} handleNext={handleNext}/>):
  (<Form2 formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} handleSkillAdd={handleSkillAdd} handleSkillDelete={handleSkillDelete} handlePrev={handlePrev}  handleSubmit={handleSubmit} removeResume={removeResume}/>)}

 

  </Box>
  )
}
