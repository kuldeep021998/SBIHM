import { Divider, Grid, Button, Typography, Hidden } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      heading: "Degree Courses",
      texts: {
        text1: "Bachelor Degree in Hotel Management",
        text2: "Diploma in Hotel Management",
        text3: "MBA in Hotel Management",
        text4: "Master Degree in Hotel Management",
        text5: "Post Graduation Diploma in Hotel Management",
      },
    },
    {
      id: 2,
      heading: "Certificate Courses",
      texts: {
        text1: "Certificate In Front Office Operation",
        text2: "Certificate In Accomodation Operation",
        text3: "Certificate In Kitchen Operation",
        text4: "Certificate In Restaurant & Bar Operation",
      },
    },
    {
      id: 3,
      heading: "Diploma Courses",
      texts: {
        text1: "Certificate In Front Office Operation",
        text2: "Certificate In Accomodation Operation",
        text3: "Certificate In Kitchen Operation",
        text4: "Certificate In Restaurant & Bar Operation",
      },
    },
  ];

  useEffect(function () {
    // handleShow();
  }, []);

  const showHeadings = () => {
    return data.map((item) => {
      return (
        <Button
          value={item.id}
          style={{
            fontFamily: "DM Sans",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            letterSpacing: "0.02em",
            textAlign: "left",
          }}
          // onClick={handleClick}
        >
          {item.heading}
          <KeyboardArrowDownIcon />
        </Button>
      );
    });
  };

  const showMenu = () => {
    return data.map((item) => {
      console.log(item.texts);
      return <MenuItem onClick={handleClose}>{item.texts}</MenuItem>;
    });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            item
            xs={12}
            sx={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#1E73BE",
            }}
          >
            <Grid item>
              <Typography
                sx={{
                  marginRight: "5px",
                  fontFamily: "DM Sans",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "24px",
                  letterSpacing: "0.02em",
                  textAlign: "left",
                }}
              >
                Admission 2022 - 2023
              </Typography>
            </Grid>
            <Grid>
              <Typography>|</Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  textDecoration: "underline",
                  marginLeft: "5px",
                  fontFamily: "DM Sans",
                  fontFamily: "DM Sans",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0.02em",
                  textAlign: "left",
                }}
              >
                Apply Online
              </Typography>
            </Grid>
          </Grid>
          <AppBar position="static" color="inherit">
            <Toolbar>
              <img src="/Assets/logo.jpg" style={{ width: 70, padding: 3 }} />
              <Grid item>
                <Typography>SBIHM</Typography>
                <Typography>Kharagpur</Typography>
              </Grid>

              <Box component="div" sx={{ flexGrow: 1 }}></Box>
              <Hidden xsDown smDown>
                <Box>
                  <Button
                    style={{
                      fontFamily: "DM Sans",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      letterSpacing: "0.02em",
                      textAlign: "left",
                    }}
                  >
                    About Us
                  </Button>
                  {showHeadings()}
                  {/* <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {showMenu()}
                </Menu> */}
                </Box>
              </Hidden>
              <Box sx={{ flexGrow: 1 }} component="div"></Box>
              <Hidden xsDown smDown>
                <Box>
                  <Button
                    variant="outlined"
                    style={{ borderRadius: 50, marginRight: 10 }}
                  >
                    Contact Us
                  </Button>
                  <Button variant="contained" style={{ borderRadius: 50 }}>
                    Apply now
                  </Button>
                </Box>
              </Hidden>
            </Toolbar>
          </AppBar>
        </Box>
      </Grid>
    </Grid>
  );
}
