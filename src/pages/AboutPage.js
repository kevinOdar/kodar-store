import styled from 'styled-components';
import aboutImg from '../assets/hero-bcg.jpeg';
import Breadcrumb from '../components/Breadcrumb';

const Wrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;

  .img-container {
    .img-about {
      border-radius: var(--radius);
      height: 500px;
      width: 100%;
      display: block;
      object-fit: cover;
    }
  }

  .description {
    padding-top: 3rem;
    h2 {
      text-align: start;
    }
    p {
      padding: 2rem 0;
      color: var(--clr-grey-5);
      font-size: 1rem;
      line-height: 1.7rem;
    }
  }

  .underline {
    margin-left: 0;
  }

  @media screen and (min-width: 760px) {
    gap: 4rem;
    flex-direction: row;
    > * {
      flex-basis: 50%;
    }

    .description {
      padding-top: 0rem;
    }
  }
`;

const About = () => <>
  <Breadcrumb finalPath="about" />
  <Wrapper className="section-center">
    <div className="img-container">
      <img src={aboutImg} className="img-about" alt="" />
    </div>

    <div className="description">
      <div className="title">
        <h2>our story</h2>
        <div className="underline" />
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
        accusantium sapiente tempora sed dolore esse deserunt eaque
        excepturi, delectus error accusamus vel eligendi, omnis beatae.
        Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
        dolore, obcaecati incidunt sequi blanditiis est exercitationem
        molestiae delectus saepe odio eligendi modi porro eaque in libero
        minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
        ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
        similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
        iste.
      </p>
    </div>
  </Wrapper>
</>

export default About;
