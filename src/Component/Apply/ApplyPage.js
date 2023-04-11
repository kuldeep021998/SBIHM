import { Grid } from "@mui/material";
import Header from "../Home/Header";
import Apply from "./Apply";
import ApplyM from "./ApplyM";
import H3 from "../Home/H3";
import { FoodBank } from "@mui/icons-material";
import Footer from "../Footer";
export default function ApplyPage() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12} sx={{ marginTop: "10px" }}>
        <Apply />
      </Grid>
      <Grid item xs={12}>
        <ApplyM />
      </Grid>
      <Grid item xs={12}>
        <H3 />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
