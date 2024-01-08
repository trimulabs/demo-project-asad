import React from 'react'

const Applications = ({ color }: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 1C2.89543 1 2 1.89543 2 3V13C2 14.1046 2.89543 15 4 15H12C13.1046 15 14 14.1046 14 13V3C14 1.89543 13.1046 1 12 1H4ZM4.75 11C4.33579 11 4 11.3358 4 11.75C4 12.1642 4.33579 12.5 4.75 12.5H11.25C11.6642 12.5 12 12.1642 12 11.75C12 11.3358 11.6642 11 11.25 11H4.75ZM4 8.75C4 8.33579 4.33579 8 4.75 8H11.25C11.6642 8 12 8.33579 12 8.75C12 9.16421 11.6642 9.5 11.25 9.5H4.75C4.33579 9.5 4 9.16421 4 8.75ZM6.75 4C6.33579 4 6 4.33579 6 4.75C6 5.16421 6.33579 5.5 6.75 5.5H9.25C9.66421 5.5 10 5.16421 10 4.75C10 4.33579 9.66421 4 9.25 4H6.75Z"
        fill={color || '#B6C0DD'}
      />
    </svg>
  )
}

export default Applications
