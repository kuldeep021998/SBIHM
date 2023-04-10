import { Grid, Typography } from "@mui/material";
import "../../style.css";

export default function Zoom1() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#1E73BE14",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12} lg={12}>
        <Typography
          style={{
            fontFamily: "Noto Serif",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "48px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#0A253D",
            marginTop: 10,
          }}
        >
          Our Degree Courses
        </Typography>
      </Grid>
      <Grid
        lg={3}
        xs={12}
        className="Stylesheet_trendingimg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margin: 3,
        }}
      >
        <img
          src="/Assets/banner.png"
          style={{
            height: 200,
            width: 280,
            borderRadius: "12px",
          }}
        />

        <div style={{}}>
          <Typography
            style={{
              fontFamily: "DM Sans",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "24px",
              letterSpacing: "0.02em",
              textAlign: "center",
              color: "#FFFFFF",
              marginTop: "-50%",
            }}
          >
            Diploma in Hotel
          </Typography>
          <Typography
            style={{
              fontFamily: "DM Sans",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "24px",
              letterSpacing: "0.02em",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Management
          </Typography>
        </div>
      </Grid>

      <Grid
        lg={3}
        xs={12}
        className="Stylesheet_trendingimg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 3,
          flexDirection: "column",
        }}
      >
        <img
          src="/Assets/banner.png"
          style={{
            height: 200,
            width: 280,
            borderRadius: "12px",
          }}
        />

        <div style={{}}>
          <Typography
            style={{
              fontFamily: "DM Sans",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "24px",
              letterSpacing: "0.02em",
              textAlign: "center",
              color: "#FFFFFF",
              marginTop: "-60%",
            }}
          >
            MBA in Hotel
          </Typography>
          <Typography
            style={{
              fontFamily: "DM Sans",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "24px",
              letterSpacing: "0.02em",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Management
          </Typography>
        </div>
      </Grid>

      <Grid
        className="Stylesheet_trendingimg"
        lg={3}
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margin: 3,
        }}
      >
        <img
          src="/Assets/blue.png"
          style={{
            height: 200,
            width: 280,
            borderRadius: "12px",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            style={{
              fontFamily: "DM Sans",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "24px",
              letterSpacing: "0.02em",
              textAlign: "center",
              color: "#FFFFFF",
              marginTop: "-105%",
            }}
          >
            B.Voc in Hotel
          </Typography>
          <Typography
            style={{
              fontFamily: "DM Sans",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "24px",
              letterSpacing: "0.02em",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Management
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: 1000,
              color: "white",
            }}
          >
            |
          </Typography>
          <div style={{ flexDirection: "row", display: "flex" }}>
            <div style={{ marginRight: "20px" }}>
              <div
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "20px",
                  letterSpacing: "0.02em",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                Durations
              </div>
              <div
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "20px",
                  letterSpacing: "0.02em",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                3 Years
              </div>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <div
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "20px",
                  letterSpacing: "0.02em",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                Eligibility
              </div>
              <div
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "20px",
                  letterSpacing: "0.02em",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                10 + 2 Passed
              </div>
            </div>
          </div>
          <div
            style={{
              padding: 10,
              paddingRight: 20,
              paddingLeft: 20,
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              marginTop: "20px",
            }}
          >
            Learn More
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
