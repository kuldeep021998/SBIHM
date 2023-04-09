import { Grid, Typography, Button, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import "../style.css";
export default function Map1() {
  const courses = [
    { id: 1, cn: "abcd" },
    { id: 2, cn: "abnvkcd" },
    { id: 3, cn: "abciehfid" },
  ];

  const fillCategoryDropDown = () => {
    return courses.map((item) => {
      return <MenuItem value={item.id}>{item.cn}</MenuItem>;
    });
  };

  return (
    <Grid container>
      <Grid lg={6} sm={12} xs={12} item sx={{ textAlign: "right" }}>
        <img
          className="map1"
          src="/Assets/Map.png"
          height={"100%"}
          width={"100%"}
          style={{
            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
          }}
        />
      </Grid>

      <Grid
        className="form"
        xs={12}
        lg={6}
        sx={{
          display: "flex",
          backgroundColor: "#1E73BE14",
          borderTopRightRadius: "12px",
          borderEndEndRadius: "12px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10%",
          }}
        >
          <div style={{ marginBottom: 5 }}>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "DM Sans",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "28px",
                letterSpacing: "0.02em",
                textAlign: "left",
                color: "#0A253D",
              }}
            >
              Get in touch with us
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "DM Sans",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "28px",
                letterSpacing: "0.02em",
                textAlign: "left",
                color: "#666666",
                marginBottom: "10px",
              }}
            >
              Fill out the form and our team will get back to you
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              size="small"
              InputProps={{ style: { borderRadius: 50 } }}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              size="small"
              InputProps={{ style: { borderRadius: 50, marginLeft: 2 } }}
            />
          </div>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            size="small"
            InputProps={{ style: { borderRadius: 50 } }}
            style={{ marginTop: 10 }}
          />
          <TextField
            label="Phone No."
            variant="outlined"
            fullWidth
            size="small"
            InputProps={{ style: { borderRadius: 50 } }}
            style={{ marginTop: 10 }}
          />
          <FormControl fullWidth size="small" sx={{ marginTop: "10px" }}>
            <InputLabel id="demo-simple-select-label">Courses</InputLabel>
            <Select
              // value={categoryId}
              // label="Category Name"
              // onChange={(event) => setCategoryId(event.target.value)}
              // InputProps={{ style: { borderRadius: 50 } }}
              style={{ borderRadius: 50 }}
            >
              {fillCategoryDropDown()}
            </Select>
          </FormControl>
          <TextField
            label="Message"
            multiline
            rows={3}
            maxRows={5}
            fullWidth
            InputProps={{ style: { borderRadius: 20 } }}
            style={{ marginTop: 10 }}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ marginTop: 2, borderRadius: 20 }}
          >
            Submit
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
