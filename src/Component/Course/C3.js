import { Grid, Typography } from "@mui/material";

export default function C3() {
  return (
    <Grid container sx={{ backgroundColor: "#1E73BE" }}>
      <Grid
        xs={12}
        lg={12}
        sx={{
          backgroundColor: "grey",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
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
        </Typography>
        <Typography
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
        </Typography>
      </Grid>
    </Grid>
  );
}
