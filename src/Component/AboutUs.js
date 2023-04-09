import { Grid, Typography } from "@mui/material";
import List from "./List";
export default function AboutUs() {
  return (
    <Grid container sx={{ padding: 5 }}>
      <Grid
        lg={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img
          src="/Assets/banner.png"
          style={{
            height: "100%",
            width: "25%",
            borderRadius: "12px",
            margin: "10px",
          }}
        />
        <img
          src="/Assets/banner.png"
          style={{
            height: "100%",
            width: "25%",
            borderRadius: "12px",
            margin: "10px",
          }}
        />
        <img
          src="/Assets/banner.png"
          style={{
            height: "100%",
            width: "25%",
            borderRadius: "12px",
            margin: "10px",
          }}
        />
      </Grid>
      <Grid xs={12} lg={6} sx={{ padding: 4 }}>
        <Typography
          sx={{
            fontFamily: "Noto Serif",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "48px",
            letterSpacing: "0.02em",
            textAlign: "left",
            color: "#0A253D",
            marginBottom: "10px",
          }}
        >
          Why Join SBIHM Kharagpur
        </Typography>
        <Typography
          sx={{
            fontFamily: "DM Sans",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "36px",
            letterSpacing: "0.02em",
            textAlign: "left",
            color: "#666666",
          }}
        >
          South Bengal Institute of Hotel Management, KGP is established in 2014
          and it is a best hotel management institute at West Medinipur in West
          Bengal. South Bengal Institute of Hotel Management, kharagpur provides
          Degree, Diploma and Certificate courses to its students. South Bengal
          Institute of Hotel Management,kharagpur has been consistently ranked
          amongst the top Hotel Management institute in Kharagpur which have
          modern class infrastructure at the greenly area of Prembazar. South
          Bengal Institute of Hotel Management, kharagpur provides a holistic
          environment for all around learning and development.
        </Typography>
      </Grid>
      <Grid
        lg={6}
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="/Assets/banner.png" height={"350px"} width={"100%"} />
      </Grid>

      <Grid
        lg={6}
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="/Assets/banner.png" height={"350px"} width={"100%"} />
      </Grid>

      <Grid lg={6} xs={12} sx={{ padding: 4 }}>
        <Typography
          sx={{
            fontFamily: "DM Sans",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "36px",
            letterSpacing: "0.02em",
            textAlign: "left",
            color: "#666666",
          }}
        >
          The institute is very proud on itself on being a student-centric
          institute, where the students get, all-round development above
          academic performance. The Students' forum of South Bengal Institute of
          Hotel Management, Kharagpur is responsible and accountable for all
          activities on the Campus throughout the year.The institute has
          developed own unique learning technique which have come to be the
          hallmark of the institute. The students have been developed with the
          help of faculty, who are in touch with the industry's current needs
          and the active participation of the students themselves for growing
          their future easily in the various corporate sectors.
        </Typography>
      </Grid>

      <Grid>
        <List />
      </Grid>

      <Grid
        lg={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img
          src="/Assets/banner.png"
          style={{
            height: "100%",
            width: "25%",
            borderRadius: "12px",
            margin: "10px",
          }}
        />
        <img
          src="/Assets/banner.png"
          style={{
            height: "100%",
            width: "25%",
            borderRadius: "12px",
            margin: "10px",
          }}
        />
        <img
          src="/Assets/banner.png"
          style={{
            height: "100%",
            width: "25%",
            borderRadius: "12px",
            margin: "10px",
          }}
        />
        <img
          src="/Assets/banner.png"
          style={{
            height: "100%",
            width: "25%",
            borderRadius: "12px",
            margin: "10px",
          }}
        />
        <img
          src="/Assets/banner.png"
          style={{
            height: "100%",
            width: "25%",
            borderRadius: "12px",
            margin: "10px",
          }}
        />
        <img
          src="/Assets/banner.png"
          style={{
            height: "100%",
            width: "25%",
            borderRadius: "12px",
            margin: "10px",
          }}
        />
      </Grid>
    </Grid>
  );
}
