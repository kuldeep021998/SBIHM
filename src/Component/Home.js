import { Grid } from "@mui/material";
import Header from "./Header";
import Slider1 from "./Slider1";
import H1 from "./H1";
export default function Home() {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} item>
        <Header />
        <Slider1 />
        <H1 />
      </Grid>
    </Grid>
  );
}
