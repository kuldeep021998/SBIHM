import { Grid, Typography, TextField } from "@mui/material";
import React, { Fragment, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

export default function Apply() {
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
    <Grid spacing={2} container>
      <Grid item xs={12} sx={{ bgcolor: "#FFFFF" }}>
        <Typography
          sx={{
            fontFamily: "Noto Serif",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "48px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#523D1C",
          }}
        >
          Apply Now
        </Typography>
        <Typography
          sx={{
            fontFamily: "DM Sans",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "36px",
            letterSpacing: "0.02em",
            textAlign: "center",
            color: "#666666",
          }}
        >
          Admission Process at SBHIM Kharagpur for the Academic Year 2022-23
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          bgcolor: "#FAF5ED",
          margin: 10,
          padding: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: "DM Sans",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "28px",
            letterSpacing: "0.02em",
            // textAlign: "center",
            color: "#000000",
          }}
        >
          Application Form
        </Typography>
        <Typography
          sx={{
            fontFamily: "DM Sans",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "28px",
            letterSpacing: "0.02em",
            // textAlign: "center",
            color: "#666666",
            marginTop: "10px",
          }}
        >
          Fill out the application form and our team will get back to you
        </Typography>

        <Grid item sx={{ bgcolor: "#FFFFFF", width: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography
              sx={{
                height: 20,
                width: 20,
                borderRadius: 20,
                backgroundColor: "#1E73BE",
                textAlign: "center",
                fontSize: 14,
                marginTop: 1.5,
                marginRight: 2,
                marginLeft: 2,
              }}
            >
              1
            </Typography>
            <Typography
              sx={{
                fontFamily: "DM Sans",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "24px",
                letterSpacing: "0.02em",
                color: "#000000",
                marginTop: "10px",
              }}
            >
              Personal Information
            </Typography>
          </div>

          <Grid item sx={{ margin: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Courses</InputLabel>
              <Select
                // value={categoryId}
                label="Category Name"
                // onChange={(event) => setCategoryId(event.target.value)}
                // InputProps={{ style: { borderRadius: 50 } }}
                style={{ borderRadius: 50 }}
              >
                {fillCategoryDropDown()}
              </Select>
            </FormControl>
            <TextField
              label="Applicant’s Full Name"
              variant="outlined"
              fullWidth
              InputProps={{ style: { borderRadius: 50 } }}
              style={{ marginTop: 10 }}
            />
            <TextField
              label="Applicant’s Mobile No."
              variant="outlined"
              fullWidth
              InputProps={{ style: { borderRadius: 50 } }}
              style={{ marginTop: 10 }}
            />
            <TextField
              label="Applicant’s Email"
              variant="outlined"
              fullWidth
              InputProps={{ style: { borderRadius: 50 } }}
              style={{ marginTop: 10 }}
            />
            <TextField
              label="Communicating Address"
              multiline
              rows={3}
              maxRows={5}
              fullWidth
              InputProps={{ style: { borderRadius: 20 } }}
              style={{ marginTop: 10 }}
            />
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Grid xs={3} item sx={{ marginTop: "10px" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Courses</InputLabel>
                  <Select
                    // value={categoryId}
                    label="Category Name"
                    // onChange={(event) => setCategoryId(event.target.value)}
                    // InputProps={{ style: { borderRadius: 50 } }}
                    style={{ borderRadius: 50 }}
                  >
                    {fillCategoryDropDown()}
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={3} item sx={{ marginTop: "10px" }}>
                <TextField
                  label="District"
                  variant="outlined"
                  fullWidth
                  InputProps={{ style: { borderRadius: 50 } }}
                />
              </Grid>
              <Grid xs={3} item sx={{ marginTop: "10px" }}>
                <TextField
                  label="Pincode"
                  variant="outlined"
                  fullWidth
                  InputProps={{ style: { borderRadius: 50 } }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
