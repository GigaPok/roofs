import React from 'react';
import '../../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import ImageGallery from 'react-image-gallery';

export const Lead = () => {
  const images = [
    {
      original:
        'https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      thumbnail:
        'https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      original:
        'https://i.pinimg.com/originals/9d/d8/a2/9dd8a2e45080600bbc2e574355cae5ff.jpg',
      thumbnail:
        'https://i.pinimg.com/originals/9d/d8/a2/9dd8a2e45080600bbc2e574355cae5ff.jpg',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      thumbnailPosition={'bottom'}
    />
  );
};
