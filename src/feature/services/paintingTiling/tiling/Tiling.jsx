import React from "react";
import "../../../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";
import img1 from "../../../../assets/Painting Tiling/Tiling INDooR  OUTDooR/image00001.jpeg";
import img2 from "../../../../assets/Painting Tiling/Interior  exterior  paint/image00002.jpeg";
import img3 from "../../../../assets/Painting Tiling/Interior  exterior  paint/image00003.jpeg";
import img4 from "../../../../assets/Painting Tiling/Interior  exterior  paint/image00004.jpeg";
import img5 from "../../../../assets/Painting Tiling/Interior  exterior  paint/image00005.jpeg";
import img6 from "../../../../assets/Painting Tiling/Interior  exterior  paint/image00006.jpeg";
import img7 from "../../../../assets/Painting Tiling/Interior  exterior  paint/image00007.jpeg";
import img8 from "../../../../assets/Painting Tiling/Interior  exterior  paint/image00008.jpeg";
import img9 from "../../../../assets/Painting Tiling/Interior  exterior  paint/image00009.jpeg";
import img10 from "../../../../assets/Painting Tiling/Interior  exterior  paint/image00010.jpeg";
import img11 from "../../../../assets/Painting Tiling/Interior  exterior  paint/image00011.jpeg";
import img17 from "../../../../assets/Painting Tiling/Interior  exterior  paint/image00012.jpeg";
import img12 from "../../../../assets/Painting Tiling/Interior  exterior  paint/image00013.jpeg";

export const Tiling = () => {
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
