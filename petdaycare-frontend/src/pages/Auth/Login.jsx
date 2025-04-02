import { Button, TextField, Typography, Box } from "@mui/material";

export default function Login() {
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 8 }}>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <TextField fullWidth label="Email" sx={{ mb: 2 }} />
      <TextField fullWidth label="Password" type="password" sx={{ mb: 2 }} />
      <Button variant="contained" fullWidth>
        Login
      </Button>
    </Box>
  );
}
