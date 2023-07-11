import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "../components/PageHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const StyledImage = styled("img")({
  width: "100%",
  borderRadius: "8px",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
});

const AboutPage = () => {
  return (
    <Container>
      <PageHeader
        title="About Our Website"
        subtitle="Empowering Businesses for Success"
      />

      <Grid container spacing={2}>
        <Grid item xs={12} md={8} alignSelf="center">
        <Typography variant="body1" sx={{ color: "#555", marginBottom: "1rem" }}>
  Welcome to our business management platform! We are passionate about helping businesses thrive and succeed in today's competitive market.
</Typography>
<Typography variant="body1" sx={{ color: "#555", marginBottom: "1rem" }}>
  At our website, we offer a comprehensive solution for businesses to manage their operations, promote their products or services, and connect with their target audience. We believe that a strong online presence is crucial for business growth and customer engagement.
</Typography>
<Typography variant="body1" sx={{ color: "#555", marginBottom: "1rem" }}>
  With our user-friendly interface, businesses can easily create and showcase professional business cards. These cards serve as a powerful tool to highlight unique offerings, contact information, and leave a lasting impression on potential customers.
</Typography>
<Typography variant="body1" sx={{ color: "#555", marginBottom: "1rem" }}>
  Furthermore, our platform provides valuable insights and analytics, empowering businesses to make data-driven decisions. By tracking performance, understanding customer preferences, and analyzing trends, businesses can optimize their strategies and maximize their success.
</Typography>
<Typography variant="body1" sx={{ color: "#555", marginBottom: "1rem" }}>
  Join us on this journey of business growth and success. Register today and unlock the full potential of your business!
</Typography>
<Typography variant="body1" sx={{ color: "#555" }}>
  After registering on our website, you will be able to upload your business cards and have full control over them. You can easily edit or delete a card that you have uploaded.
</Typography>

        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <Box sx={{ maxWidth: "100%", textAlign: "center" }}>
            <StyledImage src="/assets/images/card.jpg" alt="card" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
