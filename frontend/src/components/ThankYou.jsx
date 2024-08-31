
import { Typography, Box } from '@mui/material';
export default function ThankYou() {
  return (
    <Box sx={{ textAlign: 'center', marginTop: '20vh' }}>
            <Typography variant="h3" component="h1">
                Thank You for Registering!
            </Typography>
            <Typography variant="body1" component="p" sx={{ marginTop: '2vh' }}>
                We have received your registration. You can now search for jobs on our platform.
            </Typography>
        </Box>
  )
}
