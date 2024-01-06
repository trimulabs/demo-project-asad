import React from 'react'

const Manifest = ({ color }: { color?: string }) => {
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
        d="M1 4C1 2.89543 1.89543 2 3 2H13C14.1046 2 15 2.89543 15 4V13C15 14.1046 14.1046 15 13 15H3C1.89543 15 1 14.1046 1 13V4ZM9 10C9 9.44772 9.44771 9 10 9H12C12.5523 9 13 9.44772 13 10V12C13 12.5523 12.5523 13 12 13H10C9.44771 13 9 12.5523 9 12V10ZM3 4C2.44772 4 2 4.44772 2 5C2 5.55228 2.44772 6 3 6H13C13.5523 6 14 5.55228 14 5C14 4.44772 13.5523 4 13 4H3Z"
        fill={color || '#B6C0DD'}
      />
      <rect
        x="10"
        y="4"
        width="4"
        height="2"
        rx="1"
        transform="rotate(-90 10 4)"
        fill={color || '#B6C0DD'}
      />
      <rect
        x="4"
        y="4"
        width="4"
        height="2"
        rx="1"
        transform="rotate(-90 4 4)"
        fill={color || '#B6C0DD'}
      />
    </svg>
  )
}

export default Manifest
