import { Grid, Typography, TextField, Button } from "@mui/material";
import React, { Fragment, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { blueGrey } from "@mui/material/colors";

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
    <Grid container>
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
          bgcolor: "#1E73BE14",
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

        <Grid
          item
          sx={{
            bgcolor: "#FFFFFF",
            width: "100%",
            borderRadius: 2,
            marginTop: 5,
          }}
        >
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
            <FormControl fullWidth size="small">
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
              size="small"
              label="Applicant’s Full Name"
              variant="outlined"
              fullWidth
              InputProps={{ style: { borderRadius: 50 } }}
              style={{ marginTop: 10 }}
            />
            <TextField
              size="small"
              label="Applicant’s Mobile No."
              variant="outlined"
              fullWidth
              InputProps={{ style: { borderRadius: 50 } }}
              style={{ marginTop: 10 }}
            />
            <TextField
              size="small"
              label="Applicant’s Email"
              variant="outlined"
              fullWidth
              InputProps={{ style: { borderRadius: 50 } }}
              style={{ marginTop: 10 }}
            />
            <TextField
              size="small"
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
                <FormControl size="small" fullWidth>
                  <InputLabel id="demo-simple-select-label">State</InputLabel>
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
                  size="small"
                  label="District"
                  variant="outlined"
                  fullWidth
                  InputProps={{ style: { borderRadius: 50 } }}
                />
              </Grid>
              <Grid xs={3} item sx={{ marginTop: "10px" }}>
                <TextField
                  size="small"
                  label="Pincode"
                  variant="outlined"
                  fullWidth
                  InputProps={{ style: { borderRadius: 50 } }}
                />
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Grid xs={5} item sx={{ marginTop: "10px" }}>
                <TextField
                  placeholder="Date Of Birth"
                  variant="outlined"
                  fullWidth
                  size="small"
                  InputProps={{
                    style: { borderRadius: 50 },
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarMonthIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid xs={5} item sx={{ marginTop: "10px" }}>
                <TextField
                  size="small"
                  label="Blood Group"
                  variant="outlined"
                  fullWidth
                  InputProps={{ style: { borderRadius: 50 } }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ marginLeft: 2 }}>
              <Typography
                sx={{
                  fontFamily: "DM Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0.02em",
                  textAlign: "left",
                  color: "#666666",
                  marginTop: "10px",
                }}
              >
                Sex :
              </Typography>

              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="male"
                  row
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>

              <Typography
                sx={{
                  fontFamily: "DM Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0.02em",
                  textAlign: "left",
                  color: "#666666",
                  marginTop: "10px",
                }}
              >
                Language Known :
              </Typography>

              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  // justifyContent: "center",
                  marginTop: 2,
                }}
              >
                <Typography>1</Typography>
                <TextField
                  variant="outlined"
                  // fullWidth
                  size="small"
                  InputProps={{
                    style: {
                      borderRadius: 50,
                      marginLeft: 10,
                      marginRight: 50,
                    },
                    // startAdornment: (
                    //   <InputAdornment position="start">
                    //     <CalendarMonthIcon />
                    //   </InputAdornment>
                    // ),
                  }}
                />
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: blueGrey[900],
                          "&.Mui-checked": {
                            color: blueGrey[900],
                          },
                        }}
                      />
                    }
                    label="Read"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: blueGrey[900],
                          "&.Mui-checked": {
                            color: blueGrey[900],
                          },
                        }}
                      />
                    }
                    label="Write"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: blueGrey[900],
                          "&.Mui-checked": {
                            color: blueGrey[900],
                          },
                        }}
                      />
                    }
                    label="Speak"
                  />
                </FormGroup>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  // justifyContent: "center",
                  marginTop: 2,
                }}
              >
                <Typography>2</Typography>
                <TextField
                  variant="outlined"
                  // fullWidth
                  size="small"
                  InputProps={{
                    style: {
                      borderRadius: 50,
                      marginLeft: 10,
                      marginRight: 50,
                    },
                    // startAdornment: (
                    //   <InputAdornment position="start">
                    //     <CalendarMonthIcon />
                    //   </InputAdornment>
                    // ),
                  }}
                />
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: blueGrey[900],
                          "&.Mui-checked": {
                            color: blueGrey[900],
                          },
                        }}
                      />
                    }
                    label="Read"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: blueGrey[900],
                          "&.Mui-checked": {
                            color: blueGrey[900],
                          },
                        }}
                      />
                    }
                    label="Write"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: blueGrey[900],
                          "&.Mui-checked": {
                            color: blueGrey[900],
                          },
                        }}
                      />
                    }
                    label="Speak"
                  />
                </FormGroup>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  // justifyContent: "center",
                  marginTop: 2,
                }}
              >
                <Typography>3</Typography>
                <TextField
                  variant="outlined"
                  // fullWidth
                  size="small"
                  InputProps={{
                    style: {
                      borderRadius: 50,
                      marginLeft: 10,
                      marginRight: 50,
                    },
                    // startAdornment: (
                    //   <InputAdornment position="start">
                    //     <CalendarMonthIcon />
                    //   </InputAdornment>
                    // ),
                  }}
                />
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: blueGrey[900],
                          "&.Mui-checked": {
                            color: blueGrey[900],
                          },
                        }}
                      />
                    }
                    label="Read"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: blueGrey[900],
                          "&.Mui-checked": {
                            color: blueGrey[900],
                          },
                        }}
                      />
                    }
                    label="Write"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: blueGrey[900],
                          "&.Mui-checked": {
                            color: blueGrey[900],
                          },
                        }}
                      />
                    }
                    label="Speak"
                  />
                </FormGroup>
              </Grid>
            </Grid>
            <TextField
              variant="outlined"
              placeholder="Father’s / Guardian’s Name"
              fullWidth
              size="small"
              InputProps={{
                style: {
                  borderRadius: 50,
                  marginLeft: 2,
                  marginTop: 15,
                },
              }}
            />
            <TextField
              size="small"
              variant="outlined"
              placeholder="Guardian’s Mobile No."
              fullWidth
              InputProps={{
                style: {
                  borderRadius: 50,
                  marginLeft: 2,
                  marginTop: 10,
                  marginBottom: 15,
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            bgcolor: "#FFFFFF",
            width: "100%",
            borderRadius: 2,
            marginTop: 5,
          }}
        >
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
              2
            </Typography>
            <div>
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
                Educational Qualifications
              </Typography>
              <Typography
                sx={{
                  fontFamily: "DM Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "28px",
                  letterSpacing: "0.02em",
                  color: "#666666",
                }}
              >
                Check the examinations you’ve completed/graduated
              </Typography>
            </div>
          </div>

          <Grid item sx={{ margin: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked
                  sx={{
                    color: blueGrey[900],
                    "&.Mui-checked": {
                      color: blueGrey[900],
                    },
                  }}
                />
              }
              label="10th Examination"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextField
                size="small"
                variant="outlined"
                placeholder="Subject"
                // fullWidth
                InputProps={{
                  style: {
                    borderRadius: 50,
                    marginLeft: 2,
                    marginTop: 10,
                    marginBottom: 15,
                  },
                }}
              />
              <TextField
                size="small"
                variant="outlined"
                placeholder="Board Council"
                // fullWidth
                InputProps={{
                  style: {
                    borderRadius: 50,
                    marginLeft: 2,
                    marginTop: 10,
                    marginBottom: 15,
                  },
                }}
              />
              <TextField
                size="small"
                variant="outlined"
                placeholder="Year of Passing"
                // fullWidth
                InputProps={{
                  style: {
                    borderRadius: 50,
                    marginLeft: 2,
                    marginTop: 10,
                    marginBottom: 15,
                  },
                }}
              />
              <TextField
                size="small"
                variant="outlined"
                placeholder="Marks"
                // fullWidth
                InputProps={{
                  style: {
                    borderRadius: 50,
                    marginLeft: 2,
                    marginTop: 10,
                    marginBottom: 15,
                  },
                }}
              />
            </div>

            <FormControlLabel
              control={
                <Checkbox
                  checked
                  sx={{
                    color: blueGrey[900],
                    "&.Mui-checked": {
                      color: blueGrey[900],
                    },
                  }}
                />
              }
              label="12th Examination"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextField
                size="small"
                variant="outlined"
                placeholder="Subject"
                // fullWidth
                InputProps={{
                  style: {
                    borderRadius: 50,
                    marginLeft: 2,
                    marginTop: 10,
                    marginBottom: 15,
                  },
                }}
              />
              <TextField
                size="small"
                variant="outlined"
                placeholder="Board Council"
                // fullWidth
                InputProps={{
                  style: {
                    borderRadius: 50,
                    marginLeft: 2,
                    marginTop: 10,
                    marginBottom: 15,
                  },
                }}
              />
              <TextField
                size="small"
                variant="outlined"
                placeholder="Year of Passing"
                // fullWidth
                InputProps={{
                  style: {
                    borderRadius: 50,
                    marginLeft: 2,
                    marginTop: 10,
                    marginBottom: 15,
                  },
                }}
              />
              <TextField
                size="small"
                variant="outlined"
                placeholder="Marks"
                // fullWidth
                InputProps={{
                  style: {
                    borderRadius: 50,
                    marginLeft: 2,
                    marginTop: 10,
                    marginBottom: 15,
                  },
                }}
              />
            </div>

            <FormControlLabel
              control={
                <Checkbox
                  checked
                  sx={{
                    color: blueGrey[900],
                    "&.Mui-checked": {
                      color: blueGrey[900],
                    },
                  }}
                />
              }
              label="Diploma"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextField
                size="small"
                variant="outlined"
                placeholder="Subject"
                // fullWidth
                InputProps={{
                  style: {
                    borderRadius: 50,
                    marginLeft: 2,
                    marginTop: 10,
                    marginBottom: 15,
                  },
                }}
              />
              <TextField
                size="small"
                variant="outlined"
                placeholder="Board Council"
                // fullWidth
                InputProps={{
                  style: {
                    borderRadius: 50,
                    marginLeft: 2,
                    marginTop: 10,
                    marginBottom: 15,
                  },
                }}
              />
              <TextField
                size="small"
                variant="outlined"
                placeholder="Year of Passing"
                // fullWidth
                InputProps={{
                  style: {
                    borderRadius: 50,
                    marginLeft: 2,
                    marginTop: 10,
                    marginBottom: 15,
                  },
                }}
              />
              <TextField
                size="small"
                variant="outlined"
                placeholder="Marks"
                // fullWidth
                InputProps={{
                  style: {
                    borderRadius: 50,
                    marginLeft: 2,
                    marginTop: 10,
                    marginBottom: 15,
                  },
                }}
              />
            </div>

            <FormControlLabel
              control={
                <Checkbox
                  checked
                  sx={{
                    color: blueGrey[900],
                    "&.Mui-checked": {
                      color: blueGrey[900],
                    },
                  }}
                />
              }
              label="Graduation Degree"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextField
                size="small"
                variant="outlined"
                placeholder="Subject"
                // fullWidth
                InputProps={{
                  style: {
                    borderRadius: 50,
                    marginLeft: 2,
                    marginTop: 10,
                    marginBottom: 15,
                  },
                }}
              />
              <TextField
                size="small"
                variant="outlined"
                placeholder="Board Council"
                // fullWidth
                InputProps={{
                  style: {
                    borderRadius: 50,
                    marginLeft: 2,
                    marginTop: 10,
                    marginBottom: 15,
                  },
                }}
              />
              <TextField
                size="small"
                variant="outlined"
                placeholder="Year of Passing"
                // fullWidth
                InputProps={{
                  style: {
                    borderRadius: 50,
                    marginLeft: 2,
                    marginTop: 10,
                    marginBottom: 15,
                  },
                }}
              />
              <TextField
                size="small"
                variant="outlined"
                placeholder="Marks"
                // fullWidth
                InputProps={{
                  style: {
                    borderRadius: 50,
                    marginLeft: 2,
                    marginTop: 10,
                    marginBottom: 15,
                  },
                }}
              />
            </div>

            <FormControlLabel
              control={
                <Checkbox
                  checked
                  sx={{
                    color: blueGrey[900],
                    "&.Mui-checked": {
                      color: blueGrey[900],
                    },
                  }}
                />
              }
              label="Post - Graduation Degree"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextField
                size="small"
                variant="outlined"
                placeholder="Subject"
                // fullWidth
                InputProps={{
                  style: {
                    borderRadius: 50,
                    marginLeft: 2,
                    marginTop: 10,
                    marginBottom: 15,
                  },
                }}
              />
              <TextField
                size="small"
                variant="outlined"
                placeholder="Board Council"
                // fullWidth
                InputProps={{
                  style: {
                    borderRadius: 50,
                    marginLeft: 2,
                    marginTop: 10,
                    marginBottom: 15,
                  },
                }}
              />
              <TextField
                size="small"
                variant="outlined"
                placeholder="Year of Passing"
                // fullWidth
                InputProps={{
                  style: {
                    borderRadius: 50,
                    marginLeft: 2,
                    marginTop: 10,
                    marginBottom: 15,
                  },
                }}
              />
              <TextField
                size="small"
                variant="outlined"
                placeholder="Marks"
                // fullWidth
                InputProps={{
                  style: {
                    borderRadius: 50,
                    marginLeft: 2,
                    marginTop: 10,
                    marginBottom: 15,
                  },
                }}
              />
            </div>
          </Grid>
        </Grid>
        <Grid item sx={{ textAlign: "center", marginTop: 5 }}>
          <Button sx={{ borderRadius: 15 }} fullWidth variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
