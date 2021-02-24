import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  50% {
    width: 100%;
  }

  100% {
    right: 0;
  }
`;

const Progress = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  border-radius: 20px;
  box-shadow: 0 0 1px inset;
  margin: 5px;
`;

const Bar = styled.div`
  position: absolute;
  width: 0;
  height: 100%;
  background-color: ${props => props.color ?? 'dodgerblue'};
  border-radius: 20px;
  animation: ${animation} 1s linear infinite;
`;

const ProgressBar = ({ color }) => {
  return <Progress>
    <Bar color={color} />
  </Progress>
};

export default ProgressBar;