import { Grid, Button, Typography } from "@mui/material";
import "../../style.css";

export default function C1() {
  return (
    <Grid container sx={{ backgroundColor: "#1E73BE14" }}>
      <Grid xs={12} lg={6} sx={{ padding: 10 }}>
        <div className="style_course_heading">
          <Typography
            style={{
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
        </div>
        <div className="style_course_texts">
          <Typography
            style={{
              fontFamily: "Noto Serif",
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "48px",
              letterSpacing: "0.02em",
              color: "#0A253D",
            }}
          >
            Bachelor Degree in Hotel
          </Typography>
        </div>
        <div className="style_course_texts">
          <Typography
            style={{
              fontFamily: "Noto Serif",
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "48px",
              letterSpacing: "0.02em",
              color: "#0A253D",
            }}
          >
            Management
          </Typography>
        </div>
        <div className="style_course_button">
          <Button
            sx={{
              borderRadius: 15,
              marginTop: "20px",
              width: "70%",
              borderColor: "#0A253D",
              color: "#0A253D",
            }}
            size="small"
            fullWidth
            variant="outlined"
          >
            About the Course
          </Button>
          <Button
            sx={{ borderRadius: 15, marginTop: "10px", width: "70%" }}
            size="small"
            fullWidth
            variant="contained"
          >
            Apply Now
          </Button>
        </div>
      </Grid>

      <Grid xs={12} lg={6}>
        <img src="/Assets/banner.png" height={"100%"} width={"100%"} />
      </Grid>
    </Grid>
  );
}
