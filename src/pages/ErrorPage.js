import styled from 'styled-components';
import Button from '../components/shared/Button';

const Wrapper = styled.div`
  background-color: var(--clr-primary-10);
  display: grid;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 10rem;
  }
`;

const Error = () => <Wrapper className="page-100">
  <section className="title">
    <h1>404</h1>
    <h3>Sorry, the page you tried cannot be found</h3>
    <Button type='primary' size='medium' linkTo="/" label='BACK HOME' />
  </section>
</Wrapper>

export default Error;