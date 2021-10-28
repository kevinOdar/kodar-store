import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Contact from '../components/Contact';
import styled from 'styled-components';
import FeaturedProducts from '../components/FeaturedProducts';
const Wrapper = styled.div`
  position: relative;
`

const Home = () => {

  return (
    <Wrapper>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </Wrapper>
  );
};

export default Home;
