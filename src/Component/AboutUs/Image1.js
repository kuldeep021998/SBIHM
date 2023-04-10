import { Grid } from "@mui/material";

export default function Images1() {
  return (
    <Grid container>
      <Grid
        lg={4}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img
          src="/Assets/sbihm/img_1_1628229558197.jpg"
          width={"100%"}
          height={200}
          style={{ margin: 5, borderRadius: "10px" }}
          className= "list"
        />
      </Grid>
      <Grid
        lg={4}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img
          src="/Assets/sbihm/Screenshot_2021-10-02-09-30-33-28_40deb401b9ffe8e1df2f1cc5ba480b12.jpg"
          width={"100%"}
          height={200}
          style={{ marginLeft: 5, marginRight: 5, borderRadius: "10px" }}
        />
      </Grid>
      <Grid
        lg={4}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img
          src="/Assets/sbihm/img_1_1628229558197.jpg"
          width={"100%"}
          height={200}
          style={{ margin: 5, borderRadius: "10px" }}
        />
      </Grid>
    </Grid>
  );
}
