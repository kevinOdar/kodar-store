import heroBcg2 from '../assets/hero-bcg-2.jpeg';
import heroBcg from '../assets/hero-bcg.jpeg';

import styled from 'styled-components';
import Button from '../components/Button';

import { Link } from 'react-router-dom';

const Wrapper = styled.main`
  display: flex;
  height: 60vh;
  padding: 1rem 0;
  gap: 5rem;
  align-items: center;

  .hero-content {
    margin-right: 1rem;

    > h5 {
      line-height: 2.5rem;
      color: var(--clr-grey-6);
      font-weight: 500;
      padding: 0.8rem 0;
    }
  }

  .img-container {
    display: none;
  }

  button {
    padding: 1rem 2rem;
  }

  @media screen and (min-width: 760px) {
    height: calc(100vh - 5rem);

    > * {
      flex-basis: 50%;
    }

    .img-container {
      display: block;
      position: relative;

      &::before {
        position: absolute;
        bottom: 0;
        background-color: var(--clr-primary-9);
        display: inline-block;
        content: '';
        border-radius: 0.15rem;
        width: 10%;
        height: 80%;
        left: -6%;
      }

      .primary-img {
        position: relative;
        display: block;
        height: 550px;
        z-index: 1;
        width: 100%;
      }

      .secondary-img {
        position: absolute;
        width: 250px;
        left: -18%;
        z-index: 2;
        bottom: 0;
      }
    }
  }
`;

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <div className="hero-content">
        <h1>Design Your Comfort Zone</h1>
        <h5>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </h5>
        <Link to="/products">
          <Button>SHOP NOW</Button>
        </Link>
      </div>
      <div className="img-container">
        <img src={heroBcg} className="primary-img" alt="" />
        <img src={heroBcg2} className="secondary-img" alt="" />
      </div>
    </Wrapper>
  );
};

export default Hero;
