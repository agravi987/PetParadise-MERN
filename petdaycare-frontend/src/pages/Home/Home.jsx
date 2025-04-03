import { Button, Typography, Box } from "@mui/material";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <Box textAlign="center">
      <Navbar />
      <h1 class="text-3xl font-bold underline">Hello Friends!</h1>
     
      <Typography variant="h3" gutterBottom>
        🐶 PetDaycare
      </Typography>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Book daycare for your pets!
      </Typography>
      <Button variant="contained" href="/login" size="large">
        Get Started
      </Button>
    </Box>
  );
}
