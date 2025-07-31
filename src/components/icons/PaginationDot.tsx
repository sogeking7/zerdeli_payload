import React from 'react';

interface PaginationDotProps {
  isActive?: boolean;
}

export const PaginationDot = ({ isActive }: PaginationDotProps) => (
  <svg
    width={8}
    height={8}
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx={4} cy={4} r={4} fill={isActive ? "#4AA30A" : "#E3E3E3"} />
  </svg>
);