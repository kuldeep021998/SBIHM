import { Grid } from "@mui/material";
import Header from "./Header";
import Slider1 from "./Slider1";
import H1 from "./H1";
import Count from "./Count";
import Slider2 from "./Slider2";
import Footer from "./Footer";
export default function Home() {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} item>
        <Header />
        <Slider1 />
        <H1 />
      </Grid>
      <Count />
      <Grid xs={12} item>
        <Slider2 />
        <Footer />
      </Grid>
    </Grid>
  );
}
