import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CategoryList from "../components/shared/CategoryList";

export default function HomePage() {
  return (
    <>
      <Container>
        <Box
          sx={{
            pt: 4,
            pb: 2,
          }}
        >
          <CategoryList />
        </Box>
      </Container>
      <div style={{ marginTop: 50 }}></div>
    </>
  );
}
