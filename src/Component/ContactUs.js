import * as React from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Header from "./Header";
import H3 from "./H3";
import Footer from "./Footer";

export default function ContactUs() {
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

  return (
    <Grid
      container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12} sx={{ marginTop: 5 }}>
        <Typography
          style={{
            fontFamily: "Noto Serif",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "48px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#0A253D",
            marginTop: 10,
          }}
        >
          Contact us
        </Typography>
        <Typography
          style={{
            fontFamily: "Noto Serif",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "36px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#666666",
            marginTop: 10,
          }}
        >
          Reach out to us if you have any queries
        </Typography>
      </Grid>
      <Grid item sx={{ padding: 5 }}>
        <img src="/Assets/Map.png" height={450} width={500} />
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 5,
          }}
        >
          <Grid sx={{ marginBottom: 5 }}>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "DM Sans",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "28px",
                letterSpacing: "0.02em",
                textAlign: "left",
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
                textAlign: "left",
                color: "#666666",
              }}
            >
              Fill out the form and our team will get back to you
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
          <FormControl fullWidth size="small" sx={{ marginTop: "10px" }}>
            <InputLabel id="demo-simple-select-label">Courses</InputLabel>
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
          <TextField
            label="Message"
            multiline
            rows={3}
            maxRows={5}
            fullWidth
            InputProps={{ style: { borderRadius: 20 } }}
            style={{ marginTop: 10 }}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ marginTop: 2, borderRadius: 20 }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <H3 />
      </Grid>
      <Grid item xs={12} sx={{ marginTop: 5 }}>
        <Footer />
      </Grid>
    </Grid>
  );
}
