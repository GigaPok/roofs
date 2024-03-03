import React from "react";
import "../../../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";
import img1 from "../../../../assets/Insulation/ATTIC INSULATION/image00001.jpeg";
import img2 from "../../../../assets/Insulation/ATTIC INSULATION/image00002.jpeg";
import img3 from "../../../../assets/Insulation/ATTIC INSULATION/image00003.jpeg";
import img4 from "../../../../assets/Insulation/ATTIC INSULATION/image00004.jpeg";
import img5 from "../../../../assets/Insulation/ATTIC INSULATION/image00005.jpeg";
import img6 from "../../../../assets/Insulation/ATTIC INSULATION/image00006.jpeg";
import img7 from "../../../../assets/Insulation/ATTIC INSULATION/image00007.jpeg";
import img8 from "../../../../assets/Insulation/ATTIC INSULATION/image00008.jpeg";

export const Attic = () => {
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
  ];
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      thumbnailPosition={"bottom"}
    />
  );
};
