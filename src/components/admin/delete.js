import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";
import { useHistory, useParams } from "react-router-dom";
//MaterialUI
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

export default function DeletePost() {
  const history = useHistory();
  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .delete(`admin/delete/` + id)
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }
      })
      .then(() => {
        history.push({ pathname: "/" });
        window.location.reload();
      });
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        m={1}
        p={1}
        bgcolor="background.paper"
      >
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          onClick={handleSubmit}
        >
          Press here to confirm delete
        </Button>
      </Box>
    </Container>
  );
}
