import { Button, TextField, Typography, Box } from "@mui/material";

export default function Signup() {
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 8 }}>
      <Typography variant="h5" gutterBottom>
        Sign Up
      </Typography>
      <TextField fullWidth label="Full Name" sx={{ mb: 2 }} />
      <TextField fullWidth label="Email" sx={{ mb: 2 }} />
      <TextField fullWidth label="Password" type="password" sx={{ mb: 2 }} />
      <Button variant="contained" fullWidth>
        Create Account
      </Button>
    </Box>
  );
}
