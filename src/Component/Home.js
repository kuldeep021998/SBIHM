import React, { useState } from "react";
import { Grid, Button, TextField, Typography } from "@mui/material";
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
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function Home() {
  const [open, setOpen] = useState(true);

  const courses = [
    { id: 1, cn: "abcd" },
    { id: 2, cn: "abnvkcd" },
    { id: 3, cn: "abciehfid" },
  ];

  const fillCategoryDropDown = () => {
    return courses.map((item) => {
      return <MenuItem value={item.id}>{item.cn}</MenuItem>;
    });
  };

  const handleClose = () => {
    setOpen(false);
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
          <DialogActions>
            <CloseRoundedIcon
              sharp
              color="action"
              onClick={handleClose}
              autofocus
            />
          </DialogActions>

          <DialogContent>
            <Grid item sx={{ padding: 3 }}>
              <Grid sx={{ marginBottom: 5 }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontFamily: "DM Sans",
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "28px",
                    letterSpacing: "0.02em",
                    textAlign: "center",
                    color: "#0A253D",
                  }}
                >
                  Get in touch with us
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontFamily: "DM Sans",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "28px",
                    letterSpacing: "0.02em",
                    textAlign: "center",
                    color: "#666666",
                  }}
                >
                  If you are interested or have any questions, send us a
                  message.
                </Typography>
              </Grid>
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
              <FormControl fullWidth size="small" style={{ marginTop: 10 }}>
                <InputLabel id="demo-simple-select-label">
                  Interested Course
                </InputLabel>
                <Select
                  // value={categoryId}
                  // label="Category Name"
                  // onChange={(event) => setCategoryId(event.target.value)}
                  // InputProps={{ style: { borderRadius: 50 } }}
                  style={{ borderRadius: 50 }}
                >
                  {fillCategoryDropDown()}
                </Select>
              </FormControl>
              <Button
                fullWidth
                variant="contained"
                sx={{ borderRadius: 15, marginTop: "10px" }}
              >
                Apply Now
              </Button>
            </Grid>
          </DialogContent>
        </Dialog>
      </div>
    );
  };

  const showHomePage = () => {
    return (
      <Grid container>
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
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div>{showHomePage()}</div>
      <div>{showDialog()}</div>
    </div>
  );
}
