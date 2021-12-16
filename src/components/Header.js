import styled from 'styled-components';
import logo from '../assets/logo.png';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';

import { CartIcons } from '../components';
import Navbar from './Navbar';
import { useGlobalContext } from '../context/sidebar_context';

const Wrapper = styled.header`
  top: 0;
  position: sticky;
  z-index: 3; //arreglar esto, las imagenes del hero
  width: 100%;
  background-color: var(--clr-white);

  .container {
    display: flex;
    justify-content: space-between;
    height: 5rem;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      .logo {
        width: 140px;
        /* margin-left: -15px; */
      }
    }

    .hamburguer-btn {
      background: transparent;
      border: transparent;
      color: var(--clr-primary-5);
      cursor: pointer;

      svg {
        font-size: 2rem;
      }
    }

    .active {
      display: none;
    }
  }

  @media screen and (min-width: 760px) {
    .container {
      .active {
        display: flex;
        align-items: center;
      }

      .hamburguer-btn {
        display: none;
      }
    }
  }
`;

const Header = () => {
  const { openSidebar, closeSidebar, isSidebarOpen } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container section-center">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
        <Navbar />
        <CartIcons />

        <button className="hamburguer-btn" type="button">
          {!isSidebarOpen ? (
            <FaBars onClick={openSidebar} />
          ) : (
            <ImCross onClick={closeSidebar} />
          )}
        </button>
      </div>
    </Wrapper>
  );
};

export default Header;
