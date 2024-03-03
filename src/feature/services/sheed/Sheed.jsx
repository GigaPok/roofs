import React from "react";
import "../../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";
import img1 from "../../../assets/Sheed  Landscaping/NeW SheeD  ReNew/image00001.jpeg";
import img2 from "../../../assets/Sheed  Landscaping/NeW SheeD  ReNew/image00002.jpeg";
import img3 from "../../../assets/Sheed  Landscaping/NeW SheeD  ReNew/image00003.jpeg";
import img4 from "../../../assets/Sheed  Landscaping/NeW SheeD  ReNew/image00004.jpeg";
import img5 from "../../../assets/Sheed  Landscaping/NeW SheeD  ReNew/image00005.jpeg";
import img6 from "../../../assets/Sheed  Landscaping/NeW SheeD  ReNew/image00006.png";
import img7 from "../../../assets/Sheed  Landscaping/NeW SheeD  ReNew/image00007.jpeg";
import img8 from "../../../assets/Sheed  Landscaping/NeW SheeD  ReNew/image00008.jpeg";
import img9 from "../../../assets/Sheed  Landscaping/NeW SheeD  ReNew/image00009.jpeg";
import img10 from "../../../assets/Sheed  Landscaping/NeW SheeD  ReNew/image00010.jpeg";
import img11 from "../../../assets/Sheed  Landscaping/NeW SheeD  ReNew/image00011.jpeg";
import img12 from "../../../assets/Sheed  Landscaping/NeW SheeD  ReNew/image00012.jpeg";

export const Sheed = () => {
  const images = [
    {
      original: img1,
      thumbnail: img1,
    },
    {
      original: img2,
      thumbnail: img2,
    },
    {
      original: img3,
      thumbnail: img3,
    },
    {
      original: img4,
      thumbnail: img4,
    },
    {
      original: img5,
      thumbnail: img5,
    },
    {
      original: img6,
      thumbnail: img6,
    },
    {
      original: img7,
      thumbnail: img7,
    },
    {
      original: img8,
      thumbnail: img8,
    },
    {
      original: img9,
      thumbnail: img9,
    },
    {
      original: img10,
      thumbnail: img10,
    },
    {
      original: img11,
      thumbnail: img11,
    },
    {
      original: img12,
      thumbnail: img12,
    },
  ];
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      thumbnailPosition={"bottom"}
    />
  );
};
