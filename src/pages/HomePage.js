import styled from 'styled-components';
import { FeaturedProducts, Hero, Newsletter, Services } from '../components/';

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