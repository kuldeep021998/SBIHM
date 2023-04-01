import { Grid, Typography } from "@mui/material";

export default function Count() {
  const data = [
    { id: 1, type: "", numbers: 9, text: "Courses Offered" },
    { id: 2, type: "+", numbers: 60, text: "Yearly Graduates" },
    { id: 3, type: "", numbers: "#3", text: "State Ranked" },
    { id: 4, type: "+", numbers: 12, text: "Partners" },
  ];

  const getData = () => {
    return data.map((item) => {
      return (
        <Grid
       
          item
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: 5,
          }}
        >
          <Typography
            sx={{
              height: 40,
              width: 60,
              backgroundColor: "#1E73BE0A",

              fontFamily: "Noto Serif",
              fontSize: "56px",
              fontWeight: 700,
              lineHeight: "64px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "#1E73BE",
            }}
          >
            {item.numbers}
            {item.type}
          </Typography>
          <Typography
            sx={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0.02em",
              textAlign: "center",
              color: "#0A253D",
            }}
          >
            {item.text}
          </Typography>
        </Grid>
      );
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {getData()}
      </Grid>
    </Grid>
  );
}
