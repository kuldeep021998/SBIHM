import {
  Grid,
  MenuItem,
  Paper,
  MenuList,
  ListItemText,
  Button,
  Typography,
  Hidden,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KeyboardArrowDown } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Abc from "./Abc";
import "../../style.css";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Divider } from "@mui/material";
export default function Header() {
  const [status, setStatus] = useState(false);

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

  const handleStatus = () => {
    setStatus(false);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    setStatus(true);
  };

  return (
    <Grid container>
      <Grid xs={12} lg={12}>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#1E73BE",
          }}
        >
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
          <Typography>|</Typography>
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
              cursor: "pointer",
            }}
            onClick={() => navigate("./ApplyPage")}
          >
            Apply Online
          </Typography>
        </div>
      </Grid>

      <Hidden smUp>
        <Grid
          lg={2}
          xs={6}
          md={2}
          sm={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "5px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <div>
            <img
              src="/Assets/logo.jpg"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              fontSize: "10px",
              fontWeight: 800,
            }}
          >
            <div>SBIHM</div>
            <div>Kharagpur</div>
          </div>
        </Grid>
      </Hidden>
      <Hidden smDown>
        <Grid
          lg={2}
          xs={6}
          md={2}
          sm={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "5px",
            cursor: 'pointer',
          }}
          onClick={() => navigate("/")}
        >
          <div>
            <img
              src="/Assets/logo.jpg"
              style={{ width: "40px", height: "40px", marginLeft: "50px" }}
            />
          </div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              fontSize: "10px",
              fontWeight: 800,
            }}
          >
            <div>SBIHM</div>
            <div>Kharagpur</div>
          </div>
        </Grid>

        <Grid
          lg={6}
          md={6}
          sm={6}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            padding: "5px",
          }}
        >
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0.02em",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              color: "#0A253D",
              cursor: "pointer",
            }}
            onClick={() => navigate("/AboutUs")}
          >
            About Us
          </div>

          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => setOpenDegree(!openDegree)}
          >
            <InputLabel
              style={{
                fontFamily: "DM Sans",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                letterSpacing: "0.02em",
                color: "#0A253D",
              }}
              id="demo-select-small"
            >
              Degree Courses
            </InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              // value={age}
              label="Age"
              // onChange={handleChange}
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
              }}
            >
              {degrees.map((item) => (
                <MenuItem
                  style={{
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    marginBottom: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("CoursePage")}
                >
                  {item}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => setOpenDegree(!openDegree)}
          >
            <InputLabel
              style={{
                fontFamily: "DM Sans",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                letterSpacing: "0.02em",
                color: "#0A253D",
              }}
              id="demo-select-small"
            >
              Certificate Courses
            </InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              // value={age}
              label="Age"
              // onChange={handleChange}
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
              }}
            >
              {certificates.map((item) => (
                <MenuItem
                  style={{
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    marginBottom: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("CoursePage")}
                >
                  {item}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => setOpenDegree(!openDegree)}
          >
            <InputLabel
              style={{
                fontFamily: "DM Sans",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                letterSpacing: "0.02em",
                color: "#0A253D",
              }}
              id="demo-select-small"
            >
              Diploma Courses
            </InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              // value={age}
              label="Age"
              // onChange={handleChange}
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
              }}
            >
              {diplomas.map((item) => (
                <MenuItem
                  style={{
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    marginBottom: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("CoursePage")}
                >
                  {item}
                </MenuItem>
              ))}
            </Select>
          </div>
        </Grid>
      </Hidden>

      <Hidden smDown>
        <Grid
          lg={4}
          md={4}
          sm={4}
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            padding: "5px",
          }}
        >
          <Button
            variant="outlined"
            style={{ borderRadius: 50, marginRight: 10 }}
            onClick={() => navigate("./ContactUs")}
          >
            Contact Us
          </Button>
          <Button
            onClick={() => navigate("./ApplyPage")}
            variant="contained"
            style={{ borderRadius: 50 }}
          >
            Apply now
          </Button>
        </Grid>
      </Hidden>

      <Hidden smUp>
        <Grid
          xs={6}
          sx={{
            justifyContent: "flex-end",
            alignItems: "center",
            display: "flex",
            padding: "5px",
          }}
        >
          <MenuIcon fontSize="large" onClick={handleClick} />
        </Grid>
      </Hidden>

      <div style={{ width: "5%" }}>
        <Abc status={status} handleStatus={handleStatus} />
      </div>
    </Grid>
  );
}
