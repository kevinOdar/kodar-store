import { services } from '../utils/constants';
import Service from '../components/Service';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: var(--clr-primary-10);
  color: var(--clr-primary-2);
  padding-bottom: 5rem;

  .services-title {
    display: flex;
    justify-content: space-between;
    padding: 5rem 0;

    .title {
      flex-basis: 30%;
      text-align: start;
    }

    .description {
      flex-basis: 50%;
      padding-right: 3rem;
    }
  }

  .services {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 2rem;
  }

  @media screen and (min-width: 760px) {
    .services {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2.5rem;
      row-gap: 2rem;
    }
  }

  @media screen and (min-width: 1100px) {
    padding-bottom: 12rem;
    margin-bottom: 5rem;

    .section-center {
      position: relative;
    }

    .services {
      position: absolute;
      bottom: -18rem;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

const Services = () => <Wrapper>
  <div className="section-center">
    <article className="services-title">
      <h3 className="title">Custom Furniture Built Only For You</h3>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
        dolorum debitis consectetur reprehenderit non aliquam voluptates
        dolore aut vero consequuntur.
      </p>
    </article>
    <div className="services">
      {services.map((service) => (
        <Service {...service} key={service.id}></Service>
      ))}
    </div>
  </div>
</Wrapper>

export default Services;
