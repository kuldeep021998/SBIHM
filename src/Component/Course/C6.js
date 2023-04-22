import { Grid, Typography, Hidden, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function C6() {
  const navigate = useNavigate();
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#1E73BE14",
        padding: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid lg={12}>
        <Typography
          sx={{
            fontFamily: "DM Sans",
            fontSize: "28px",
            fontWeight: 700,
            lineHeight: "40px",
            letterSpacing: "0.02em",
            color: "#0A253D",
            textAlign: "center",
          }}
        >
          Don’t miss out on the opportunity to build your career with
        </Typography>
        <Typography
          sx={{
            fontFamily: "Noto Serif",
            fontSize: "28px",
            fontWeight: 600,
            lineHeight: "40px",
            letterSpacing: "0.02em",
            color: "#1E73BE",
            textAlign: "center",
          }}
        >
          Bachelor Degree in Hotel Management
        </Typography>
      </Grid>

      <Hidden mdDown>
        <Grid
          lg={12}
          md={12}
          sx={{
            justifyContent: "center",
            display: "flex",
            paddingTop: 5,
          }}
        >
          <Button
            onClick={() => navigate("/ContactUs")}
            variant="outlined"
            style={{
              borderColor: "black",
              borderRadius: "30px",
              width: "20%",
              marginRight: "5%",
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0.02em",
              color: "#0A253D",
              textAlign: "center",
            }}
          >
            Talk to Institute
          </Button>
          <Button
            onClick={() => navigate("/ApplyPage")}
            style={{
              borderColor: "black",
              borderRadius: "30px",
              width: "20%",
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0.02em",
              color: "#FFFFFF",
              textAlign: "center",
            }}
            variant="contained"
          >
            Apply Now
          </Button>
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Grid
          lg={12}
          md={12}
          sx={{
            justifyContent: "center",
            display: "flex",
            paddingTop: 5,
            flexDirection: "column",
          }}
        >
          <Button
            variant="outlined"
            style={{
              borderColor: "black",
              borderRadius: "30px",
              width: "100%",
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0.02em",
              color: "#0A253D",
              textAlign: "center",
            }}
            onClick={() => navigate("/ContactUs")}
          >
            Talk to Institute
          </Button>
          <Button
            style={{
              marginTop: "10px",
              borderColor: "black",
              borderRadius: "30px",
              width: "100%",
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0.02em",
              color: "#FFFFFF",
              textAlign: "center",
            }}
            variant="contained"
            onClick={() => navigate("/ApplyPage")}
          >
            Apply Now
          </Button>
        </Grid>
      </Hidden>
    </Grid>
  );
}
