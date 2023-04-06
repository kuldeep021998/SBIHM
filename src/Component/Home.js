import React, { useState } from "react";
import { Grid, Button, TextField } from "@mui/material";
import Header from "./Header";
import Slider1 from "./Slider1";
import H1 from "./H1";
import H2 from "./H2";
import H3 from "./H3";
import Count from "./Count";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import Footer from "./Footer";
import Zoom1 from "./Zoom1";
import Zoom2 from "./Zoom2";
import Map from "./Map";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function Home() {
  const [open, setOpen] = useState("");

  const handleClose = () => {
    setOpen(true);
  };

  const showDialog = () => {
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Category Interface"}
          </DialogTitle>
          <DialogContent>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              size="small"
              InputProps={{ style: { borderRadius: 50 } }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              size="small"
              InputProps={{ style: { borderRadius: 50 } }}
              style={{ marginTop: 10 }}
            />
            <TextField
              label="Phone No."
              variant="outlined"
              fullWidth
              size="small"
              InputProps={{ style: { borderRadius: 50 } }}
              style={{ marginTop: 10 }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  return (
    <Grid container sx={{ backgroundColor: "#FFFFFF" }}>
      <div>{showDialog()}</div>
      <Grid item xs={12}>
        <Header />
        <Slider1 />
      </Grid>
      <Grid item xs={12}>
        <H1 />
        <Count />
        <Slider2 />
        <H2 />
      </Grid>
      <Grid item xs={12}>
        <Zoom1 />
      </Grid>
      <Grid item xs={12} sx={{ marginTop: 8 }}>
        <Zoom2 />
      </Grid>
      <Grid item xs={12} sx={{ marginTop: 2 }}>
        <Map />
      </Grid>
      <Grid item xs={12} sx={{ marginTop: 2 }}>
        <H3 />
      </Grid>
      <Grid item xs={12} sx={{ marginTop: 2 }}>
        <Slider3 />
      </Grid>
      <Grid item xs={12} sx={{ marginTop: 2 }}>
        <Footer />
      </Grid>
    </Grid>
  );
}
