import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { Button, TextField, Grid, Box, List, Divider } from "@mui/material";
import { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import ListItemIcon from "@mui/material/ListItemIcon";
export default function Abc(props) {
  const navigate = useNavigate();
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

  const [state, setState] = useState({
    top: false,
    left: false,
    right: false,
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    props.handleStatus(open);
    setState({ ...state, ["right"]: open });
  };

  useEffect(
    function () {
      setState({ ...state, ["right"]: props.status });
    },
    [props]
  );

  const handleClose = () => {
    setState({ ...state, ["right"]: false });
  };

  const list = (anchor) => (
    <Box sx={{ padding: "10px" }}>
      <List>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "right",
            marginBottom: "10px",
          }}
        >
          <ListItemIcon
            style={{
              justifyContent: "right",
            }}
          >
            <CancelIcon onClick={toggleDrawer("right", false)} />
          </ListItemIcon>
        </div> */}
        <div
          onClick={() => setOpenDegree(!openDegree)}
          style={{
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0.02em",
              color: "#0A253D",
            }}
          >
            Degree Courses
          </div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <KeyboardArrowDownIcon fontSize="small" />
          </div>
        </div>
        <div style={{ marginLeft: "10px", marginTop: "10px" }}>
          {openDegree && (
            <div>
              {degrees.map((item) => (
                <div
                  style={{
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    marginBottom: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("CoursePage")}
                >
                  {item}
                  <div style={{ marginTop: "2px" }}>
                    <Divider />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          style={{
            height: "2px",
            width: "100%",
            backgroundColor: "grey",
            marginBottom: "10px",
            marginTop: "5px",
          }}
        ></div>

        <div
          onClick={() => setOpenCertificate(!openCertificate)}
          style={{
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0.02em",
              color: "#0A253D",
            }}
          >
            Certificate Courses
          </div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <KeyboardArrowDownIcon fontSize="small" />
          </div>
        </div>
        <div style={{ marginLeft: "10px", marginTop: "10px" }}>
          {openCertificate && (
            <div>
              {certificates.map((certificate) => (
                <div
                  style={{
                    fontFamily: "DM Sans",
                    fontSize: "16px",
                    marginBottom: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("CoursePage")}
                >
                  {certificate}
                  <div style={{ marginTop: "2px" }}>
                    <Divider />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          style={{
            height: "2px",
            width: "100%",
            backgroundColor: "grey",
            marginBottom: "10px",
          }}
        ></div>
        {/* <Grid sx={{ padding: "5px" }}>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0.02em",
              textAlign: "left",
              color: "#0A253D",
            }}
          >
            Diploma Courses
            <KeyboardArrowDownIcon
              onClick={() => setOpenDiploma(!openDiploma)}
              fontSize="small"
              style={{ marginLeft: "30px" }}
            />
          </div>
          <div>
            {openDiploma && (
              <div>
                <ul>
                  {diplomas.map((item) => (
                    <div
                      style={{
                        fontFamily: "DM Sans",
                        fontSize: "16px",
                        marginBottom: "10px",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Grid> */}

        <Grid
          sx={{
            marginTop: "10px",
            // bgcolor: "white",
          }}
        >
          <Button
            fullWidth
            variant="outlined"
            style={{
              borderRadius: 50,
              marginRight: 10,
              color: "#0A253D",
              borderColor: "#0A253D",
            }}
            onClick={() => navigate("./ContactUs")}
          >
            Contact Us
          </Button>

          <Button
            fullWidth
            onClick={() => navigate("./ApplyPage")}
            variant="outlined"
            style={{
              borderRadius: 50,
              marginTop: "10px",
              borderColor: "#0A253D",
              color: "#0A253D",
            }}
          >
            Apply now
          </Button>
        </Grid>
      </List>
    </Box>
  );

  return (
    <Grid container>
      <Grid key={"right"}>
        <Drawer
          PaperProps={{
            sx: {
              width: "50%",
              backgroundColor: "#1E73BE",
            },
          }}
          anchor={"right"}
          open={state.right}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </Grid>
    </Grid>
  );
}
