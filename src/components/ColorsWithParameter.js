import { FaCircle, FaCheckCircle } from 'react-icons/fa';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: x-large;
  display: inline-flex;

  > svg {
    margin: 0 0.3rem;
    cursor: pointer;
  }
`;

const Colors = ({ colors, changeFilters, selection }) => <Wrapper className="color-icon">
  {colors.map((color, index) =>
    selection.selectedColor !== color ? (
      <FaCircle
        style={{ color, opacity: 0.5 }}
        key={index}
        onClick={() =>
          changeFilters({ ...selection, selectedColor: color })
        }
        role='icon'
      />
    ) : (
      <FaCheckCircle key={index} style={{ color }} />
    )
  )}
</Wrapper>

export default Colors;
