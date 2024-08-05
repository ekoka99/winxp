import React from 'react';
import styled from 'styled-components';
import HtmlPage from './HtmlPage';

function Main({ className }) {
  return (
    <div className={className}>
      <HtmlPage />
    </div>
  );
}

export default styled(Main)`
  // You can keep any global styles here if needed
  width: 100%;
  height: 100vh;
`;
