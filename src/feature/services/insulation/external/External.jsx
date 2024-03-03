import React from "react";
import "../../../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";
import img1 from "../../../../assets/Insulation/EXTERNAL INSULATION/image00001.jpeg";
import img2 from "../../../../assets/Insulation/EXTERNAL INSULATION/image00002.jpeg";
import img3 from "../../../../assets/Insulation/EXTERNAL INSULATION/image00003.jpeg";
import img4 from "../../../../assets/Insulation/EXTERNAL INSULATION/image00004.jpeg";
import img5 from "../../../../assets/Insulation/EXTERNAL INSULATION/image00005.jpeg";
import img6 from "../../../../assets/Insulation/EXTERNAL INSULATION/image00006.jpeg";
import img7 from "../../../../assets/Insulation/EXTERNAL INSULATION/image00007.jpeg";
import img8 from "../../../../assets/Insulation/EXTERNAL INSULATION/image00008.jpeg";
import img9 from "../../../../assets/Insulation/EXTERNAL INSULATION/image00009.jpeg";
import img10 from "../../../../assets/Insulation/EXTERNAL INSULATION/image00010.jpeg";
import img11 from "../../../../assets/Insulation/EXTERNAL INSULATION/image00011.jpeg";
import img12 from "../../../../assets/Insulation/EXTERNAL INSULATION/image00012.jpeg";
import img13 from "../../../../assets/Insulation/EXTERNAL INSULATION/image00013.jpeg";
import img14 from "../../../../assets/Insulation/EXTERNAL INSULATION/image00014.jpeg";
import img15 from "../../../../assets/Insulation/EXTERNAL INSULATION/image00015.jpeg";
import img16 from "../../../../assets/Insulation/EXTERNAL INSULATION/image00016.jpeg";
import img17 from "../../../../assets/Insulation/EXTERNAL INSULATION/image00017.jpeg";
import img18 from "../../../../assets/Insulation/EXTERNAL INSULATION/image00018.jpeg";
import img19 from "../../../../assets/Insulation/EXTERNAL INSULATION/image00019.jpeg";

export const External = () => {
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
    {
      original: img13,
      thumbnail: img13,
    },
    {
      original: img14,
      thumbnail: img14,
    },
    {
      original: img15,
      thumbnail: img15,
    },
    {
      original: img16,
      thumbnail: img16,
    },
    {
      original: img17,
      thumbnail: img17,
    },
    {
      original: img18,
      thumbnail: img18,
    },
    {
      original: img19,
      thumbnail: img19,
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