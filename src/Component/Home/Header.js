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
import { useNavigation } from "react-router-dom";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Abc from "./Abc";
import "../../style.css";
export default function Header() {
  const [status, setStatus] = useState(false);

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
          }}
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
          }}
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
              textAlign: "left",
              color: "#0A253D",
            }}
          >
            About Us
          </div>
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
            Degree Courses
            <KeyboardArrowDown fontSize="small" style={{ marginLeft: "5px" }} />
          </div>
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
            <KeyboardArrowDown fontSize="small" style={{ marginLeft: "5px" }} />
          </div>
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
            <KeyboardArrowDown fontSize="small" style={{ marginLeft: "5px" }} />
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
