import { Grid, Typography } from "@mui/material";
import "../../style.css";
export default function C5() {
  return (
    <Grid container sx={{ backgroundColor: "#FAFAFA" }}>
      <Grid xs={12} lg={6}>
        <div
          className="style_iandt"
          style={{
            fontFamily: "Noto Serif",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "48px",
            letterSpacing: "0.02em",
            color: "#0A253D",
            margin: "30px",
            paddingLeft: "20px",
          }}
        >
          Internship & Training
        </div>

        <div
          className="style_itext"
          style={{
            fontFamily: "DM Sans",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "32px",
            letterSpacing: "0.02em",
            color: "#0A253D",
            margin: "30px",
            paddingLeft: "20px",
          }}
        >
          Internship & Training Programme is too much essential or compulsory
          for each student. In this training the student will have live exposure
          of the 5-star Hotels, and also develop skills, discipline, knowledge
          and experiences which will help everyone during campus recruitment to
          get best job opportunities. The Industrial Training is a combination
          of Theory and Practice.
        </div>

        <div
          style={{
            fontFamily: "DM Sans",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "32px",
            letterSpacing: "0.02em",
            color: "#0A253D",
            margin: "30px",
            paddingLeft: "20px",
          }}
        >
          <li>Kitchen Operation</li>
          <li>Food and Beverage Cum Bar service</li>
          <li>Front Office Operation</li>
          <li>Housekeeping Operation</li>
        </div>
      </Grid>
      <Grid
        lg={6}
        xs={12}
        sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}
      >
        <img src="/Assets/training.png" className="c4_image" width={"524px"} height={"360px"} />
      </Grid>
    </Grid>
  );
}
