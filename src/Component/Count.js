import { Grid, Typography } from "@mui/material";

export default function Count() {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        // xs={2}
        sx={{ height: "150px", width: "100px", backgroundColor: "#1E73BE0A" }}
      >
        <Typography>Hii</Typography>
      </Grid>
    </Grid>
  );
}
