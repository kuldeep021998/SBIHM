import {
  Grid,
  MenuItem,
  Paper,
  MenuList,
  ListItemText,
  Button,
  Typography,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

export default function Abc() {
  const [open, setOpen] = useState(false);

  const degrees = [
    "Bachelor Degree in Hotel Management",
    "Diploma in Hotel Management",
    "MBA in Hotel Management",
    "Master Degree in Hotel Management",
    "Post Graduation Diploma in Hotel Management",
  ];

  return (
    <Grid container>
      <Grid
        xs={12}
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Button variant="contained" onClick={() => setOpen(!open)}>
          Click
        </Button>
        
      </Grid>
    </Grid>
  );
}
