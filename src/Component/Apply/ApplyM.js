import { Grid, Typography, Hidden, TextField, Button } from "@mui/material";
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
import "../../style.css";
import { useState } from "react";
export default function ApplyM() {
  const [openTenth, setOpenTenth] = useState(false);
  const [openTwelth, setOpenTwelth] = useState(false);
  const [openDiploma, setOpenDiploma] = useState(false);
  const [openGraduation, setOpenGraduation] = useState(false);
  const [openPostGraduation, setOpenPostGraduation] = useState(false);

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
      <Hidden smUp>
        <Grid item xs={12} sx={{ bgcolor: "#FFFFF" }}>
          <div className="apply1">
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
          </div>
          <div className="apply1">
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
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            bgcolor: "#1E73BE14",
            margin: "10px",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "DM Sans",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "28px",
              letterSpacing: "0.02em",
              textAlign: "center",
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
              textAlign: "center",
              color: "#666666",
              marginTop: "10px",
            }}
          >
            Fill out the application form and our team will get back to you
          </Typography>

          <Grid
            sx={{
              bgcolor: "#FFFFFF",
              width: "100%",
              borderRadius: "10px",
              marginTop: "15px",
              padding: "10px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "40px",
                  backgroundColor: "#1E73BE",
                  fontSize: 20,
                  fontWeight: 800,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                1
              </div>
              <div
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "24px",
                  letterSpacing: "0.02em",
                  color: "#000000",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "10px",
                }}
              >
                Personal Information
              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
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
              <FormControl fullWidth size="small" style={{ marginTop: 10 }}>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
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
                label="District"
                variant="outlined"
                fullWidth
                InputProps={{ style: { borderRadius: 50 } }}
                style={{ marginTop: 10 }}
              />
              <TextField
                size="small"
                label="Pincode"
                variant="outlined"
                fullWidth
                InputProps={{ style: { borderRadius: 50 } }}
                style={{ marginTop: 10 }}
              />
              <TextField
                placeholder="Date Of Birth"
                variant="outlined"
                fullWidth
                size="small"
                style={{ marginTop: 10 }}
                InputProps={{
                  style: { borderRadius: 50 },
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarMonthIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                size="small"
                label="Blood Group"
                variant="outlined"
                fullWidth
                InputProps={{ style: { borderRadius: 50 } }}
                style={{ marginTop: 10 }}
              />
            </div>

            <div style={{ marginTop: "15px", marginLeft: "15px" }}>
              <div
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  letterSpacing: "0.02em",
                  // textAlign: "left",
                  color: "#666666",
                  marginTop: "10px",
                }}
              >
                Sex :
              </div>
              <div>
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
              </div>
            </div>

            <div style={{ marginTop: "15px", marginLeft: "15px" }}>
              <div
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  letterSpacing: "0.02em",
                  // textAlign: "left",
                  color: "#666666",
                  marginTop: "10px",
                }}
              >
                Caste Category :
              </div>
              <div>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="UR"
                    row
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="UR"
                      control={<Radio />}
                      label="UR"
                    />
                    <FormControlLabel
                      value="OBC"
                      control={<Radio />}
                      label="OBC"
                    />
                    <FormControlLabel
                      value="SC"
                      control={<Radio />}
                      label="SC"
                    />
                    <FormControlLabel
                      value="ST"
                      control={<Radio />}
                      label="ST"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>

            <div style={{ marginTop: "15px", marginLeft: "15px" }}>
              <div
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  letterSpacing: "0.02em",
                  // textAlign: "left",
                  color: "#666666",
                  marginTop: "10px",
                }}
              >
                Language Known :
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "15px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "20px",
                  }}
                >
                  1
                </div>
                <div>
                  <TextField
                    variant="outlined"
                    size="small"
                    InputProps={{
                      style: {
                        borderRadius: 50,
                      },
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
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
              </div>

              <div
                style={{
                  display: "flex",
                  marginTop: "15px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "20px",
                  }}
                >
                  2
                </div>
                <div>
                  <TextField
                    variant="outlined"
                    size="small"
                    InputProps={{
                      style: {
                        borderRadius: 50,
                      },
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
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
              </div>

              <div
                style={{
                  display: "flex",
                  marginTop: "15px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "20px",
                  }}
                >
                  3
                </div>
                <div>
                  <TextField
                    variant="outlined"
                    size="small"
                    InputProps={{
                      style: {
                        borderRadius: 50,
                      },
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
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
              </div>
            </div>
            <TextField
              variant="outlined"
              placeholder="Father’s / Guardian’s Name"
              fullWidth
              size="small"
              InputProps={{
                style: {
                  borderRadius: 50,
                },
              }}
              style={{ marginTop: "15px" }}
            />
            <TextField
              size="small"
              variant="outlined"
              placeholder="Guardian’s Mobile No."
              fullWidth
              InputProps={{
                style: {
                  borderRadius: 50,
                },
              }}
              style={{ marginTop: "10px" }}
            />
          </Grid>
          <div
            style={{
              height: "2px",
              width: "100%",
              backgroundColor: "#1E73BE14",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          ></div>
          <Grid
            sx={{
              bgcolor: "#FFFFFF",
              width: "100%",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "40px",
                  backgroundColor: "#1E73BE",
                  fontSize: 20,
                  fontWeight: 800,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                2
              </div>

              <div
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "24px",
                  letterSpacing: "0.02em",
                  color: "#000000",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "10px",
                }}
              >
                Educational Qualifications
              </div>
            </div>

            <div
              style={{
                fontFamily: "DM Sans",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "16px",
                letterSpacing: "0.02em",
                alignItems: "center",
                color: "#666666",
                marginLeft: "50px",
              }}
            >
              Check the examinations you've completed/graduated
            </div>

            <div style={{ display: "flex", marginTop: "10px" }}>
              <Checkbox
                sx={{
                  color: blueGrey[900],
                  "&.Mui-checked": {
                    color: blueGrey[900],
                  },
                }}
                value={openTenth}
                onChange={() => setOpenTenth(!openTenth)}
              />
              <div
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  letterSpacing: "0.02em",
                  color: "#666666",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                10th Examination
              </div>
            </div>
            {openTenth && (
              <div>
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Subject"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 50,
                    },
                  }}
                />
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Board Council"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 50,
                    },
                  }}
                  style={{ marginTop: "10px" }}
                />
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Year of Passing"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 50,
                    },
                  }}
                  style={{ marginTop: "10px" }}
                />
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Marks"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 50,
                    },
                  }}
                  style={{ marginTop: "10px" }}
                />
              </div>
            )}

            <div style={{ display: "flex", marginTop: "10px" }}>
              <Checkbox
                sx={{
                  color: blueGrey[900],
                  "&.Mui-checked": {
                    color: blueGrey[900],
                  },
                }}
                value={openTwelth}
                onChange={() => setOpenTwelth(!openTwelth)}
              />
              <div
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  letterSpacing: "0.02em",
                  color: "#666666",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                12th Examination
              </div>
            </div>
            {openTwelth && (
              <div>
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Subject"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 50,
                    },
                  }}
                />
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Board Council"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 50,
                    },
                  }}
                  style={{ marginTop: "10px" }}
                />
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Year of Passing"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 50,
                    },
                  }}
                  style={{ marginTop: "10px" }}
                />
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Marks"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 50,
                    },
                  }}
                  style={{ marginTop: "10px" }}
                />
              </div>
            )}

            <div style={{ display: "flex", marginTop: "10px" }}>
              <Checkbox
                sx={{
                  color: blueGrey[900],
                  "&.Mui-checked": {
                    color: blueGrey[900],
                  },
                }}
                value={openDiploma}
                onChange={() => setOpenDiploma(!openDiploma)}
              />
              <div
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  letterSpacing: "0.02em",
                  color: "#666666",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                Diploma
              </div>
            </div>
            {openDiploma && (
              <div>
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Subject"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 50,
                    },
                  }}
                />
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Board Council"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 50,
                    },
                  }}
                  style={{ marginTop: "10px" }}
                />
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Year of Passing"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 50,
                    },
                  }}
                  style={{ marginTop: "10px" }}
                />
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Marks"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 50,
                    },
                  }}
                  style={{ marginTop: "10px" }}
                />
              </div>
            )}

            <div style={{ display: "flex", marginTop: "10px" }}>
              <Checkbox
                sx={{
                  color: blueGrey[900],
                  "&.Mui-checked": {
                    color: blueGrey[900],
                  },
                }}
                value={openGraduation}
                onChange={() => setOpenGraduation(!openGraduation)}
              />
              <div
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  letterSpacing: "0.02em",
                  color: "#666666",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                Graguation Degree
              </div>
            </div>
            {openGraduation && (
              <div>
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Subject"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 50,
                    },
                  }}
                />
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Board Council"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 50,
                    },
                  }}
                  style={{ marginTop: "10px" }}
                />
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Year of Passing"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 50,
                    },
                  }}
                  style={{ marginTop: "10px" }}
                />
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Marks"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 50,
                    },
                  }}
                  style={{ marginTop: "10px" }}
                />
              </div>
            )}

            <div style={{ display: "flex", marginTop: "10px" }}>
              <Checkbox
                sx={{
                  color: blueGrey[900],
                  "&.Mui-checked": {
                    color: blueGrey[900],
                  },
                }}
                value={openPostGraduation}
                onChange={() => setOpenPostGraduation(!openPostGraduation)}
              />
              <div
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  letterSpacing: "0.02em",
                  color: "#666666",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                Post - Graduation Degree
              </div>
            </div>
            {openPostGraduation && (
              <div>
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Subject"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 50,
                    },
                  }}
                />
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Board Council"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 50,
                    },
                  }}
                  style={{ marginTop: "10px" }}
                />
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Year of Passing"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 50,
                    },
                  }}
                  style={{ marginTop: "10px" }}
                />
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Marks"
                  fullWidth
                  InputProps={{
                    style: {
                      borderRadius: 50,
                    },
                  }}
                  style={{ marginTop: "10px" }}
                />
              </div>
            )}
          </Grid>
          <Grid style={{ marginTop: "20px" }}>
            <Button sx={{ borderRadius: 15 }} fullWidth variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  );
}
