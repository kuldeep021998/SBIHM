import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Grid } from "@mui/material";

export default function Images2() {
  const itemData = [
    {
      img: "/Assets/banner.png",
      rows: 2,
      cols: 2,
    },
    {
      img: "/Assets/sbihm/img_1_1628229558197.jpg",
    },
    {
      img: "/Assets/sbihm/Screenshot_2021-10-02-09-30-33-28_40deb401b9ffe8e1df2f1cc5ba480b12.jpg",
    },
    {
      img: "/Assets/sbihm/IMG20220207112819.jpg",
      cols: 2,
    },
    {
      img: "/Assets/sbihm/P_20180217_061318.jpg",
      cols: 2,
    },
    {
      img: "/Assets/sbihm/P_20190407_132934.jpg",
      rows: 2,
      cols: 2,
    },
    {
      img: "/Assets/sbihm/P_20190330_173006.jpg",
    },
    {
      img: "/Assets/training.png",
    },
    {
      img: "/Assets/sbihm/img_1_1628229558197.jpg",
      rows: 2,
      cols: 2,
    },
    {
      img: "/Assets/sbihm/P_20190330_173734.jpg",
    },
    {
      img: "/Assets/sbihm/P_20190407_132923.jpg",
    },
    {
      img: "/Assets/sbihm/Screenshot_2022-05-04-15-20-49-55_40deb401b9ffe8e1df2f1cc5ba480b12.jpg",
      cols: 2,
    },
  ];

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <Grid container>
      <Grid lg={12} xs={12}>
        <ImageList
          //   sx={{ width: 500, height: 450 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
}
