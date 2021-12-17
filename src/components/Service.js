import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: var(--clr-primary-7);
  padding: 2.5rem 1.3rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin: 0.5rem;
    color: var(--clr-primary-2);
  }

  .icon {
    background-color: var(--clr-primary-10);
    border-radius: 100%;
    font-size: xx-large;

    svg {
      display: flex;
      font-size: xx-large;
      margin: 1rem;
    }
  }

  p {
    text-align: center;
  }
`;

const Service = ({ icon, title, text }) => <Wrapper>
  <span className="icon">{icon}</span>
  <h4>{title}</h4>
  <p>{text}</p>
</Wrapper>

export default Service;
