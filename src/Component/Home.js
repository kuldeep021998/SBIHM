import { Grid } from "@mui/material";
import Header from "./Header";
import Slider1 from "./Slider1";
import H1 from "./H1";
import H2 from "./H2";
import H3 from "./H3";
import Count from "./Count";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import Footer from "./Footer";
import Zoom1 from "./Zoom1";
import Zoom2 from "./Zoom2";
export default function Home() {
  return (
    <Grid container spacing={2} sx={{ backgroundColor: "#FFFFFF" }}>
      <Grid xs={12} item>
        <Header />
        <Slider1 />
        <H1 />
        <Count />
      </Grid>
      <Grid xs={12} item>
        <Slider2 />
        <H2 />
        <Grid item sx={{ marginBottom: 5 }}>
          <Zoom2 />
        </Grid>
        <Grid item sx={{ marginBottom: 5 }}>
          <Zoom1 />
        </Grid>
        <H3 />
        <Grid item sx={{ margin: 2 }}></Grid>
        <Slider3 />
        <Grid item sx={{ margin: 2 }}></Grid>
        <Footer />
      </Grid>
    </Grid>
  );
}
