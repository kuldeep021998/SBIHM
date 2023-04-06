import { Grid, Typography } from "@mui/material";
import "../style.css";

export default function Zoom2() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={12}>
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
          Our Certificate Courses
        </Typography>
      </Grid>

      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "row",
          margin: 5,
        }}
      >
        <Grid className="Stylesheet_trendingimg" sx={{ margin: 2 }}>
          <img
            src="/Assets/banner.png"
            height={200}
            width={280}
            style={{
              borderRadius: 10,
            }}
          />
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "DM Sans",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "24px",
              letterSpacing: "0.02em",
              textAlign: "center",
              color: "#FFFFFF",
              marginTop: "-80px",
            }}
          >
            MBA in Hotel
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
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
        </Grid>
        <Grid className="Stylesheet_trendingimg" sx={{ margin: 2 }}>
          <img
            src="/Assets/banner.png"
            height={200}
            width={280}
            style={{
              borderRadius: 10,
            }}
          />
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "DM Sans",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "24px",
              letterSpacing: "0.02em",
              textAlign: "center",
              color: "#FFFFFF",
              marginTop: "-80px",
            }}
          >
            MBA in Hotel
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
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
        </Grid>
        <Grid
          sx={{
            height: 200,
            width: 250,
            backgroundColor: "#1E73BE",
            padding: 2,
            borderRadius: "12px",
            margin: 2,
          }}
          className="Stylesheet_trendingimg"
        >
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "DM Sans",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "24px",
              letterSpacing: "0.02em",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            B. Voc in Hotel
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
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
              fontFamily: "DM Sans",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "24px",
              letterSpacing: "0.02em",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            |
          </Typography>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 2,
              marginLeft: 2,
            }}
          >
            <Grid>
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "DM Sans",
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "20px",
                  letterSpacing: "0.02em",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                Duration
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "DM Sans",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "20px",
                  letterSpacing: "0.02em",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                3 years
              </Typography>
            </Grid>
            <Grid>
              <Typography
                sx={{
                  textAlign: "center",
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
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
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
              </Typography>
            </Grid>
          </Grid>
          <Grid
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginTop: 2,
            }}
          >
            <Grid
              sx={{
                height: 28,
                width: 100,
                backgroundColor: "white",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginTop: "8px",
              }}
            >
              <Typography>Learn More</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid className="Stylesheet_trendingimg" sx={{ margin: 2 }}>
          <img
            src="/Assets/banner.png"
            height={200}
            width={280}
            style={{
              borderRadius: 10,
            }}
          />
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "DM Sans",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "24px",
              letterSpacing: "0.02em",
              textAlign: "center",
              color: "#FFFFFF",
              marginTop: "-80px",
            }}
          >
            Diploma in Hotel
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
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
        </Grid>
      </Grid>
    </Grid>
  );
}
