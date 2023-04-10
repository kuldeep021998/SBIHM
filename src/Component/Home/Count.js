import { Grid, Hidden, Typography } from "@mui/material";
export default function Count() {
  return (
    <Grid
      container
      sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}
    >
      <Grid
        lg={3}
        xs={6}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: 50,
            width: 70,
            backgroundColor: "#1E73BE0A",
            margin: 10,
            borderRadius: "10px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontFamily: "Noto Serif",
              fontWeight: 700,
              lineHeight: "64px",
              letterSpacing: "0em",
              marginTop: 35,
              color: "#1E73BE",
            }}
          >
            9
          </div>
        </div>

        <Typography
          style={{
            fontSize: "16px",
            fontFamily: "DM Sans",
            fontWeight: 400,
            lineHeight: "24px",
            letterSpacing: "0.02em",
            color: "#0A253D",
            marginTop: "10px",
          }}
        >
          Course Offered
        </Typography>
      </Grid>

      <Grid
        lg={3}
        xs={6}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: 50,
            width: 70,
            backgroundColor: "#1E73BE0A",
            margin: 10,
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontFamily: "Noto Serif",
              fontWeight: 700,
              lineHeight: "64px",
              letterSpacing: "0em",
              marginTop: 35,
              color: "#1E73BE",
            }}
          >
            60+
          </div>
        </div>

        <Typography
          style={{
            fontSize: "16px",
            fontFamily: "DM Sans",
            fontWeight: 400,
            lineHeight: "24px",
            letterSpacing: "0.02em",
            color: "#0A253D",
            marginTop: "10px",
          }}
        >
          Yearly Graduates
        </Typography>
      </Grid>

      <Grid
        lg={3}
        xs={6}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: 50,
            width: 70,
            backgroundColor: "#1E73BE0A",
            margin: 10,
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontFamily: "Noto Serif",
              fontWeight: 700,
              lineHeight: "64px",
              letterSpacing: "0em",
              marginTop: 35,
              color: "#1E73BE",
            }}
          >
            #3
          </div>
        </div>

        <Typography
          style={{
            fontSize: "16px",
            fontFamily: "DM Sans",
            fontWeight: 400,
            lineHeight: "24px",
            letterSpacing: "0.02em",
            color: "#0A253D",
            marginTop: "10px",
          }}
        >
          State Ranked
        </Typography>
      </Grid>

      <Grid
        xs={6}
        lg={3}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: 50,
            width: 70,
            backgroundColor: "#1E73BE0A",
            margin: 10,
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontFamily: "Noto Serif",
              fontWeight: 700,
              lineHeight: "64px",
              letterSpacing: "0em",
              marginTop: 35,
              color: "#1E73BE",
            }}
          >
            12+
          </div>
        </div>
        <Typography
          style={{
            fontSize: "16px",
            fontFamily: "DM Sans",
            fontWeight: 400,
            lineHeight: "24px",
            letterSpacing: "0.02em",
            color: "#0A253D",
            marginTop: "10px",
          }}
        >
          Partners
        </Typography>
      </Grid>
    </Grid>
  );
}
