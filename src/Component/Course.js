import { Button, Grid, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export default function Course() {
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid xs={12} lg={6} sx={{ backgroundColor: "#1E73BE14", padding: 10 }}>
        <Typography
          sx={{
            fontFamily: "DM Sans",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "32px",
            letterSpacing: "0.02em",
            textAlign: "left",
            color: "#1E73BE",
          }}
        >
          Degree Courses
        </Typography>
        <Typography
          sx={{
            fontFamily: "Noto Serif",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "48px",
            letterSpacing: "0.02em",
            textAlign: "left",
            color: "#0A253D",
          }}
        >
          Bachelor Degree in Hotel
        </Typography>
        <Typography
          sx={{
            fontFamily: "Noto Serif",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "48px",
            letterSpacing: "0.02em",
            textAlign: "left",
            color: "#0A253D",
          }}
        >
          Management
        </Typography>
        <div>
          <Button
            sx={{ borderRadius: 15, marginTop: "20px", width: "40%" }}
            size="small"
            fullWidth
            variant="outlined"
          >
            About the Course
          </Button>
          <div>
            <Button
              sx={{ borderRadius: 15, marginTop: "10px", width: "40%" }}
              size="small"
              fullWidth
              variant="contained"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </Grid>
      <Grid xs={12} lg={6}>
        <img src="/Assets/banner.png" height={"100%"} width={"100%"} />
      </Grid>

      <Grid
        sx={{
          padding: 5,
          backgroundColor: "#1E73BE",
          margin: 5,
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
          borderRadius: "10px",
          width: "100%",
        }}
      >
        <Grid lg={3} sx={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "20px",
              letterSpacing: "0.02em",
              color: "#FFFFFFA3",
            }}
          >
            Duration
          </div>
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "28px",
              letterSpacing: "0.02em",
              color: "#FFFFFF",
            }}
          >
            3 years
          </div>
        </Grid>
        <Grid lg={3} sx={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "20px",
              letterSpacing: "0.02em",
              color: "#FFFFFFA3",
            }}
          >
            Eligibility
          </div>
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "28px",
              letterSpacing: "0.02em",
              color: "#FFFFFF",
            }}
          >
            10 + 2
          </div>
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "28px",
              letterSpacing: "0.02em",
              color: "#FFFFFF",
            }}
          >
            Passed
          </div>
        </Grid>
        <Grid lg={3} sx={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "20px",
              letterSpacing: "0.02em",
              color: "#FFFFFFA3",
            }}
          >
            Industrial Training Duration
          </div>
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "28px",
              letterSpacing: "0.02em",
              color: "#FFFFFF",
            }}
          >
            6 months in
          </div>
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "28px",
              letterSpacing: "0.02em",
              color: "#FFFFFF",
            }}
          >
            5 star hotel
          </div>
        </Grid>
        <Grid lg={3} sx={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "20px",
              letterSpacing: "0.02em",
              color: "#FFFFFFA3",
            }}
          >
            Placement
          </div>
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "28px",
              letterSpacing: "0.02em",
              color: "#FFFFFF",
            }}
          >
            Indian &
          </div>
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "28px",
              letterSpacing: "0.02em",
              color: "#FFFFFF",
            }}
          >
            Foreign
          </div>
        </Grid>
      </Grid>

      <Grid xs={12} lg={12}>
        <Typography
          sx={{
            fontFamily: "Noto Serif",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "48px",
            letterSpacing: "0.02em",
            textAlign: "center",
            color: "#0A253D",
          }}
        >
          Course Curriculum
        </Typography>
      </Grid>

      <Grid lg={4} sx={{ backgroundColor: "#1E73BE14", padding: 2, margin: 5 }}>
        <Typography
          sx={{
            color: "#0A253D",
            fontFamily: "Noto Serif",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "32px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          1st Year
        </Typography>
        <div>
          <span>
            <CircleIcon size={5}  />
          </span>
          <span>Communication English</span>
        </div>
      </Grid>
    </Grid>
  );
}
