import {
  Divider,
  Grid,
  Hidden,
  Typography,
  MenuItem,
  Paper,
  MenuList,
  ListItemText,
} from "@mui/material";
import React, { Fragment, useState, useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Footer() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDegree, setOpenDegree] = useState(false);
  const [openCertificate, setOpenCertificate] = useState(false);
  const [openDiploma, setOpenDiploma] = useState(false);

  const degrees = [
    "Bachelor Degree in Hotel Management",
    "Diploma in Hotel Management",
    "MBA in Hotel Management",
    "Master Degree in Hotel Management",
    "Post Graduation Diploma in Hotel Management",
  ];

  const certificates = [
    "Certificate In Front Office Operation",
    "Certificate In Accomodation Operation",
    "Certificate In Kitchen Operation",
    "Certificate In Restaurant & Bar Operation",
  ];

  const diplomas = [
    "Certificate In Front Office Operation",
    "Certificate In Accomodation Operation",
    "Certificate In Kitchen Operation",
    "Certificate In Restaurant & Bar Operation",
  ];

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
          }}
        >
          <div
            style={{
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
              Degree Courses
            </div>
            <div>
              <KeyboardArrowDownIcon
                onClick={() => setOpenDegree(!openDegree)}
                fontSize="large"
                htmlColor="white"
              />
            </div>
          </div>

          <div>
            {openDegree && (
              <div style={{ textAlign: "left" }}>
                <ul>
                  {degrees.map((item) => (
                    <div
                      style={{
                        fontFamily: "DM Sans",
                        fontSize: "16px",
                        marginBottom: "10px",
                        color: "#FFFFFF",
                        backgroundColor: "",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>
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
        <Grid xs={12}>
          <div
            style={{
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
            <div>
              <KeyboardArrowDownIcon
                onClick={() => setOpenCertificate(!openCertificate)}
                fontSize="large"
                htmlColor="white"
              />
            </div>
          </div>

          <div>
            {openCertificate && (
              <div style={{ textAlign: "left" }}>
                <ul>
                  {certificates.map((certificate) => (
                    <div
                      style={{
                        fontFamily: "DM Sans",
                        fontSize: "16px",
                        marginBottom: "10px",
                        color: "#FFFFFF",
                        backgroundColor: "",
                      }}
                    >
                      {certificate}
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Grid>
        <div
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "grey",
            marginBottom: "10px",
          }}
        ></div>
        <Grid xs={12}>
          <div
            style={{
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
            <div>
              <KeyboardArrowDownIcon
                onClick={() => setOpenDiploma(!openDiploma)}
                fontSize="large"
                htmlColor="white"
              />
            </div>
          </div>

          <div>
            {openDiploma && (
              <div style={{ textAlign: "left" }}>
                <ul>
                  {certificates.map((diploma) => (
                    <div
                      style={{
                        fontFamily: "DM Sans",
                        fontSize: "16px",
                        marginBottom: "10px",
                        color: "#FFFFFF",
                      }}
                    >
                      {diploma}
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>
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
