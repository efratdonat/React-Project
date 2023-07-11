import { Container, Typography, Box, Paper, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";

const CardDetailPage = () => {
  const { id } = useParams();
  const {
    value: { card },
    handleGetCard,
  } = useCards();

  useEffect(() => {
    handleGetCard(id);
  }, []);

  return (
    <Container maxWidth="lg">
      <PageHeader
        title="Business Details"
        subtitle="Here you can find more details about the business"
      />
      {card && (
        <Box mt={4}>
          <Typography variant="h4" color="primary" align="center" mb={2}>
            {card.title}
          </Typography>
          <Typography variant="h6" align="center" mb={4}>
            {card.subtitle}
          </Typography>

          <Paper
            elevation={3}
            sx={{
              width: 300,
              margin: "0 auto",
              backgroundColor: "#f2f2f2",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            {card.image && (
              <img
                src={card.image.url}
                alt={card.image.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            )}
          </Paper>

          <Box mt={4} textAlign="center">
            <Typography variant="h6" component="div">
              Visit our website:
              <a
                href={card.web}
                style={{
                  color: "#FF4081",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {card.web}
              </a>
            </Typography>
          </Box>

          <Box mt={4} textAlign="center">
            <Typography variant="h6" component="div">
              Hey, we're not really far from you! <br /> This is our address:
            </Typography>
            <Typography variant="body1">
              {card.address.street} {card.address.houseNumber}
              <br />
              {card.address.city}, {card.address.state}, {card.address.country}
            </Typography>
          </Box>
        </Box>
      )}

      <Box mt={4} display="flex" justifyContent="center">
        <Typography variant="h6" component="div">
          Details of card: {id}
        </Typography>
      </Box>
    </Container>
  );
};

export default CardDetailPage;
