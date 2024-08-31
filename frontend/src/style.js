export const customFieldStyle = {
    fontSize: "1.5rem",
    marginBottom: "3dvh",
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ff7754', // Default border color
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ff7754', // Border color when focused
      },
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'black', // Label color when focused
    }
  };

  export const customButtonStyleBlue = {
    backgroundColor: '#312651', 
    color: 'white', 
    padding:"3%",
    fontSize:'1.2rem',
    textTransform: 'none',
    borderRadius:'10px',
    '&:hover': {
      backgroundColor: '#231c3a',
    },
  }