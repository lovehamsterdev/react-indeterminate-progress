import React from 'react';
import styled from 'styled-components';
import ProgressRing from './ProgressRing';

const Dimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return <Dimmer>
    <ProgressRing color="white" size={50} />
  </Dimmer>
};

export default Loader;