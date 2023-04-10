import { Divider, Grid, Hidden, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function Footer() {
  const [degree, setDegree] = React.useState("");

  const handleChange = (event) => {
    setDegree(event.target.value);
  };
  const degrees = [
    { text: "Bachelor Degree in Hotel Management" },
    { text: "Diploma in Hotel Management" },
    { text: "MBA in Hotel Management" },
    { text: "Master Degree in Hotel Management" },
    { text: "Post Graduation Diploma in Hotel Management" },
  ];

  const getDegrees = () => {
    return degrees.map((item) => {
      return <MenuItem>{item.text}</MenuItem>;
    });
  };
  //   {
  //     id: 2,
  //     text1: "Certificate In Front Office Operation",
  //     text2: "Certificate In Accomodation Operation",
  //     text3: "Certificate In Kitchen Operation",
  //     text4: "Certificate In Restaurant & Bar Operation",
  //   },
  //   {
  //     id: 3,
  //     text1: "Certificate In Front Office Operation",
  //     text2: "Certificate In Accomodation Operation",
  //     text3: "Certificate In Kitchen Operation",
  //     text4: "Certificate In Restaurant & Bar Operation",
  //   },
  // ];
  return (
    <Grid
      container
      sx={{
        bgcolor: "#0A253D",
        padding: 3,
      }}
    >
      <Grid lg={3}>
        <div
          style={{
            fontFamily: "Roboto Slab",
            fontSize: "32px",
            fontWeight: 500,
            lineHeight: "56px",
            letterSpacing: "0em",
            color: "#FFFFFF",
          }}
        >
          SBIHM Kharagpur
        </div>

        <div
          style={{
            fontFamily: "DM Sans",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            letterSpacing: "0em",
            color: "#FFFFFF",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Amet erat et tempor lorem.
          Integer purus lobortis commodo amet turpis lectus sed tincidunt non.
          Id orci ultricies lectus nisi.
        </div>

        <div
          style={{
            flexDirection: "row",
            display: "flex",
          }}
        >
          <div style={{ marginTop: 10 }}>
            <FacebookIcon htmlColor="white" />
          </div>
          <div style={{ marginLeft: 10, marginTop: 10 }}>
            <LinkedInIcon htmlColor="white" />
          </div>
          <div style={{ marginLeft: 10, marginTop: 10 }}>
            <InstagramIcon htmlColor="white" />
          </div>
        </div>
      </Grid>

      <Hidden smDown xsDown mdDown>
        <Grid
          lg={3}
          sx={{
            // backgroundColor: "grey",
            paddingLeft: "80px",
            paddingTop: "20px",
          }}
        >
          <div
            style={{
              fontFamily: "Roboto Slab",
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "24px",
              letterSpacing: "0em",
              color: "#FFFFFF",
              textAlign: "left",
            }}
          >
            Degree Courses
          </div>
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "22px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            <div style={{ marginTop: "10px" }}>
              Bachelor Degree in Hotel Management
            </div>
            <div style={{ marginTop: "5px" }}>Diploma in Hotel Management</div>
            <div style={{ marginTop: "5px" }}>MBA in Hotel Management</div>
            <div style={{ marginTop: "5px" }}>
              Master Degree in Hotel Management
            </div>
            <div style={{ marginTop: "5px" }}>
              Post Graduation Diploma in Hotel Management
            </div>
          </div>
        </Grid>
      </Hidden>

      <Hidden xsDown mdDown smDown>
        <Grid
          lg={3}
          sx={{
            paddingLeft: "80px",
            paddingTop: "20px",
          }}
        >
          <div
            style={{
              fontFamily: "Roboto Slab",
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "24px",
              letterSpacing: "0em",
              color: "#FFFFFF",
              textAlign: "left",
            }}
          >
            Certificate Courses
          </div>
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "22px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            <div style={{ marginTop: "10px" }}>
              Certificate In Front Office Operation
            </div>
            <div style={{ marginTop: "5px" }}>
              Certificate In Accomodation Operation
            </div>
            <div style={{ marginTop: "5px" }}>
              Certificate In Kitchen Operation
            </div>
            <div style={{ marginTop: "5px" }}>
              Certificate In Restaurant & Bar Operation
            </div>
          </div>
        </Grid>
      </Hidden>

      <Hidden xsDown smDown mdDown>
        <Grid
          lg={3}
          sx={{
            // backgroundColor: "grey",
            paddingLeft: "80px",
            paddingTop: "20px",
          }}
        >
          <div
            style={{
              fontFamily: "Roboto Slab",
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "24px",
              letterSpacing: "0em",
              color: "#FFFFFF",
              textAlign: "left",
            }}
          >
            Diploma Courses
          </div>
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "22px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            <div style={{ marginTop: "10px" }}>
              Certificate In Front Office Operation
            </div>
            <div style={{ marginTop: "5px" }}>
              Certificate In Accomodation Operation
            </div>
            <div style={{ marginTop: "5px" }}>
              Certificate In Kitchen Operation
            </div>
            <div style={{ marginTop: "5px" }}>
              Certificate In Restaurant & Bar Operation
            </div>
          </div>
        </Grid>
      </Hidden>

      <Hidden smUp mdUp>
        <Grid
          xs={12}
          sx={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <FormControl fullWidth variant="standard" size="large">
            <InputLabel
              id="demo-simple-select-standard-label"
              style={{
                fontFamily: "Roboto Slab",
                fontSize: "20px",
                fontWeight: 500,
                color: "#FFFFFF",
                paddingLeft: 10,
              }}
            >
              Degree Courses
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={degree}
              onChange={handleChange}
              label="Age"
            >
              {getDegrees()}
            </Select>
          </FormControl> */}
          <div
            style={{
              fontFamily: "Roboto Slab",
              fontSize: "32px",
              fontWeight: 500,
              lineHeight: "56px",
              letterSpacing: "0em",
              color: "#FFFFFF",
            }}
          >
            Degree Courses
          </div>
          <KeyboardArrowDownIcon fontSize="large" htmlColor="white" />
        </Grid>
        <div
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "grey",
            marginBottom: "10px",
            marginTop: "10px",
          }}
        ></div>
        <Grid
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Roboto Slab",
              fontSize: "32px",
              fontWeight: 500,
              lineHeight: "56px",
              letterSpacing: "0em",
              color: "#FFFFFF",
            }}
          >
            Certificate Courses
          </div>
          <KeyboardArrowDownIcon fontSize="large" htmlColor="white" />
        </Grid>
        <div
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "grey",
            marginBottom: "10px",
          }}
        ></div>
        <Grid
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Roboto Slab",
              fontSize: "32px",
              fontWeight: 500,
              lineHeight: "56px",
              letterSpacing: "0em",
              color: "#FFFFFF",
            }}
          >
            Diploma Courses
          </div>
          <KeyboardArrowDownIcon fontSize="large" htmlColor="white" />
        </Grid>
        <div
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "grey",
          }}
        ></div>
      </Hidden>
    </Grid>
  );
}
