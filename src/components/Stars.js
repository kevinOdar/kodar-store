import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiStar } from 'react-icons/fi';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  ul {
    padding-right: 0.7rem;
    display: flex;

    li {
      color: var(--clr-primary-6);
      font-size: large;
      line-height: 0;
    }
  }
`;

const Stars = ({ stars, reviews }) => {
  return (
    <Wrapper>
      <ul>
        {[...Array(Math.floor(stars))].map((_, index) => (
          <li key={index}>
            <BsStarFill />
          </li>
        ))}

        <li>
          {stars - Math.floor(stars) >= 0.5 ? <BsStarHalf /> : <FiStar />}
        </li>

        {[...Array(5 - Math.ceil(stars))].map((_, index) => (
          <li key={index}>
            <FiStar />
          </li>
        ))}
      </ul>
      <div className="reviews-amount">({reviews} customer reviews)</div>
    </Wrapper>
  );
};

export default Stars;
