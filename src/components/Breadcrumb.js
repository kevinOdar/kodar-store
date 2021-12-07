import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: var(--clr-primary-10);
  min-height: 20vh;
  display: flex;
  align-items: center;
  color: var(--clr-primary-1);

  h3 {
    display: inline-block;

    a {
      color: var(--clr-primary-3);
      transition: var(--transition);
      padding: 0 0.5rem;

      &:hover {
        color: var(--clr-primary-1);
      }
    }
  }
`;

const Breadcrumb = ({ finalPath }) => {
  let pages = [{ path: '/', description: 'home' }];
  switch (finalPath) {
    case 'about':
      pages.push({ path: null, description: finalPath });
      break;
    case 'products':
      pages.push({ path: null, description: finalPath });
      break;
    case 'cart':
      pages.push({ path: null, description: finalPath });
      break;
    default:
      pages.push(
        { path: '/products', description: 'products' },
        { path: null, description: finalPath }
      );
      break;
  }

  return (
    <Wrapper>
      <div className="section-center">
        {pages.map(({ path, description }, index) => (
          <h3 key={index}>
            {path ? (
              <Link to={path} >
                {index !== 0 ? '/ ' : ''}
                {description}
              </Link>
            ) : (
              <>
                {'/ ' + description}
              </>
            )}
          </h3>
        ))}
      </div>
    </Wrapper>
  );
};

export default Breadcrumb;
