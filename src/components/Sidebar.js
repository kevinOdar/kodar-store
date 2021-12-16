import { CartIcons } from '.';
import Navbar from './Navbar';
import styled from 'styled-components';
import { useGlobalContext } from '../context/sidebar_context';

const Wrapper = styled.nav`
  position: fixed;
  height: 90vh;
  z-index: 1;
  background-color: var(--clr-white);
  width: 100vw;
  top: 10vh;
  transform: translate(-100%);
  
  nav {
    display: block;
  }

  &.show-sidebar{
    transform: translate(0%);
    transition: var(--transition);
  }
`;

const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <Wrapper className={`${isSidebarOpen ? 'show-sidebar' : ''}`}>
      <Navbar />
      <CartIcons />
    </Wrapper>
  );
};

export default Sidebar;
