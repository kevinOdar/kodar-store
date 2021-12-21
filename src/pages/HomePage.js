import Hero from '../components/Hero';
import Services from '../components/Services';
import Newsletter from '../components/Newsletter';
import styled from 'styled-components';
import FeaturedProducts from '../components/FeaturedProducts';
const Wrapper = styled.div`
  position: relative;
`

const Home = () => <Wrapper>
  <Hero />
  <FeaturedProducts />
  <Services />
  <Newsletter />
</Wrapper>

export default Home;