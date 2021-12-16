import { links } from '../utils/constants';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../context/sidebar_context';

const Wrapper = styled.nav`
  .menu {
    display: flex;
    flex-direction: column;

    li {
      font-size: 1rem;

      &:hover {
        background-color: var(--clr-grey-10);
      }

      a {
        display: inline-block;
        color: var(--clr-grey-3);
        padding: 1rem;
        letter-spacing: var(--spacing);
        white-space: pre;
        text-transform: capitalize;
        transition: transform 1s;
      }
    }
  }

  a:hover {
    transform: translateX(1rem);
  }

  @media screen and (min-width: 760px) {
    .menu {
      flex-direction: row;

      li {
        margin: 0 0.1rem;
        font-size: initial;

        a:hover {
          text-decoration: underline var(--clr-primary-7) 2px;
          text-underline-offset: 12px;
        }

        &:hover {
          background-color: initial;
          a {
            &:hover {
              transform: none;
            }
          }
        }
      }
    }
  }
`;

const Navbar = () => {
  const { closeSidebar } = useGlobalContext();
  return (
    <Wrapper className="active">
      <ul className="menu">
        {links.map(({ id, text, url }) => (
          <li key={id} onClick={closeSidebar}>
            <Link to={url}> {text} </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Navbar;
