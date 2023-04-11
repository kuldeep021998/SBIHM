import { Grid } from "@mui/material";
import Header from "../Home/Header";
import C1 from "./C1";
import C2 from "./C2";
import C3 from "./C3";
import C4 from "./C4";
import C5 from "./C5";
import C6 from "./C6";
import H3 from "../Home/H3";
import Footer from "../Footer";
export default function CoursePage() {
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid xs={12} lg={12} sm={12}>
        <Header />
      </Grid>
      <Grid xs={12}>
        <C1 />
      </Grid>
      <Grid xs={12}>
        <C2 />
      </Grid>
      <Grid xs={12}>
        <C3 />
      </Grid>
      <Grid xs={12} sx={{ marginTop: 5 }}>
        <C4 />
      </Grid>
      <Grid xs={12}>
        <C5 />
      </Grid>
      <Grid xs={12}>
        <C6 />
      </Grid>
      <Grid xs={12}>
        <H3 />
      </Grid>
      <Grid xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
