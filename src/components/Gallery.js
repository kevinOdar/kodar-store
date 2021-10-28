import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex-basis: 50%;

  .img-showing-product {
    max-width: 100%;
    height: 80%;
  }

  .img-products {
    padding: 1rem 0;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;

    > img {
      max-width: 18.7%;
      cursor: pointer;
    }

    .selected {
      border: 0.15rem solid var(--clr-primary-4);
      border-radius: 0.2rem;
    }
  }
`;

const Gallery = ({ images = [{ url: '' }] }) => {
  const [shownImage, setShownImage] = useState(images[0].url);

  return (
    <Wrapper>
      <img className="img-showing-product" src={shownImage} alt="main" />
      <div className="img-products">
        {images.map(
          (
            { filename, url },
            index
          ) => (
            <img
              src={url}
              className={url === shownImage ? 'selected' : ''}
              alt={filename}
              onClick={() => setShownImage(url)}
              key={index}
            />
          )
        )}
      </div>
    </Wrapper>
  );
};

export default Gallery;
