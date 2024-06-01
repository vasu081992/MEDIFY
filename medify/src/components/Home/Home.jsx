import { Container, Box, Stack } from "@mui/material";
// import HeroSlider from "../components/HeroSlider/HeroSlider";
import SearchHospital from "../SearchHospital/SearchHospital";
import NavBar from "../navbar/navbar";
import HeroServices from "../IconLayout/HeroServices";
import HeroSlider from "../HeroSection/Hero";

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <NavBar />
        <Container maxWidth="xl">
           <HeroSlider />
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <SearchHospital />
            <HeroServices />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
