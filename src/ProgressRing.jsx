import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const Ring = styled.div`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: ${props => props.border}px solid ${props => props.color};
  border-radius: 50%;
  clip-path: polygon(0 15%, 100% 15%, 100% 85%, 0 85%);
  animation: ${animation} 1s linear infinite;
`;

const ProgressRing = ({ color, size }) => {
  const border = (size ?? 200) * 0.03
  return <Ring 
    color={color ?? 'dodgerblue'} 
    size={size ?? 200}
    border={border}
  />
};

export default ProgressRing;