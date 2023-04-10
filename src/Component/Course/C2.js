import { Grid, Typography, Hidden } from "@mui/material";

export default function C2() {
  return (
    <Grid container>
      <Hidden smDown xsDown>
        <Grid lg={2}></Grid>
      </Hidden>
      <Grid
        lg={6}
        xs={12}
        sx={{
          fontFamily: "Noto Serif",
          fontSize: "20px",
          fontWeight: 600,
          lineHeight: "36px",
          letterSpacing: "0.02em",
          textAlign: "left",
          color: "#0A253D",
        }}
      >
        <div style={{ padding: 50 }} className="style_course_motive">
          We have a well-equipped and organized placement cell, which is in
          constant touch with the industry for better placement opportunities
          for students.
        </div>
      </Grid>

      <Grid lg={4} xs={12} sx={{ padding: 5 }} className="style_background">
        <div className="style_course_button">
          <Typography
            sx={{
              color: "#1E73BE",
              fontFamily: "DM Sans",
              fontSize: "48px",
              fontWeight: 700,
              lineHeight: "56px",
            }}
          >
            40+
          </Typography>
          <Typography
            sx={{
              fontFamily: "Noto Serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0.02em",
              textAlign: "left",
              color: "#0A253D",
            }}
          >
            Brands visit our campus every year to pick students
          </Typography>
        </div>
        <div className="style_course_button">
          <Typography
            sx={{
              color: "#1E73BE",
              fontFamily: "DM Sans",
              fontSize: "48px",
              fontWeight: 700,
              lineHeight: "56px",
              marginTop: "20px",
            }}
          >
            40+
          </Typography>
          <Typography
            sx={{
              fontFamily: "Noto Serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0.02em",
              textAlign: "left",
              color: "#0A253D",
            }}
          >
            Students get successfully placed by the end of their academic year
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}
