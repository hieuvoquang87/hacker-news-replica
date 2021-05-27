import React from 'react';
import styled from 'styled-components';

const StyledPage = styled.div`
  display: flex;
  height: 100%;
  max-width: 1000px;
  margin: auto;
`;

type PageProps = {
  children: JSX.Element | JSX.Element[];
};

export default ({ children }: PageProps): JSX.Element => {
  return <StyledPage>{children}</StyledPage>;
};
