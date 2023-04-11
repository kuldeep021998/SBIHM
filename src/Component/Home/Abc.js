import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { Button, TextField, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
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
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid sx={{ marginTop: "15px" }}>
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
          <KeyboardArrowDownIcon
            onClick={() => setOpenDegree(!openDegree)}
            fontSize="small"
            style={{ marginLeft: "40px" }}
          />
        </div>
        <div>
          {openDegree && (
            <div>
              <ul>
                {degrees.map((item) => (
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
      </Grid>

      <div
        style={{
          height: "2px",
          width: "100%",
          backgroundColor: "grey",
          marginBottom: "10px",
          marginTop: "5px",
        }}
      ></div>

      <Grid sx={{ padding: "5px" }}>
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
          Certificate Courses
          <KeyboardArrowDownIcon
            onClick={() => setOpenCertificate(!openCertificate)}
            fontSize="small"
            style={{ marginLeft: "15px" }}
          />
        </div>
        <div>
          {openCertificate && (
            <div>
              <ul>
                {certificates.map((certificate) => (
                  <div
                    style={{
                      fontFamily: "DM Sans",
                      fontSize: "16px",
                      marginBottom: "10px",
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
          height: "2px",
          width: "100%",
          backgroundColor: "grey",
          marginBottom: "10px",
        }}
      ></div>
      <Grid sx={{ padding: "5px" }}>
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
      </Grid>

      <div
        style={{
          height: "2px",
          width: "100%",
          backgroundColor: "grey",
          marginBottom: "20px",
        }}
      ></div>

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
    </Grid>
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
