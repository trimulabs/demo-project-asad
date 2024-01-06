import React from 'react'

const Settings = ({ color }: { color?: string }) => {
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
        d="M12.8573 10.6404C12.8181 10.4241 12.8446 10.2011 12.9333 9.99999C13.0178 9.80281 13.1582 9.63464 13.337 9.51619C13.5159 9.39774 13.7255 9.33418 13.94 9.33332H14C14.3536 9.33332 14.6927 9.19285 14.9428 8.9428C15.1928 8.69275 15.3333 8.35361 15.3333 7.99999C15.3333 7.64637 15.1928 7.30723 14.9428 7.05718C14.6927 6.80713 14.3536 6.66666 14 6.66666H13.8867C13.6721 6.6658 13.4625 6.60223 13.2837 6.48378C13.1048 6.36533 12.9645 6.19717 12.88 5.99999V5.94666C12.7912 5.74558 12.7648 5.52253 12.804 5.30626C12.8432 5.09 12.9463 4.89044 13.1 4.73332L13.14 4.69332C13.264 4.56949 13.3623 4.42244 13.4294 4.26058C13.4965 4.09871 13.531 3.92521 13.531 3.74999C13.531 3.57477 13.4965 3.40127 13.4294 3.2394C13.3623 3.07754 13.264 2.93049 13.14 2.80666C13.0162 2.68269 12.8691 2.58434 12.7072 2.51724C12.5454 2.45014 12.3719 2.41561 12.1967 2.41561C12.0214 2.41561 11.8479 2.45014 11.6861 2.51724C11.5242 2.58434 11.3772 2.68269 11.2533 2.80666L11.2133 2.84666C11.0562 3.00035 10.8566 3.10345 10.6404 3.14266C10.4241 3.18187 10.2011 3.1554 9.99999 3.06666C9.80281 2.98215 9.63464 2.84183 9.51619 2.66297C9.39774 2.48411 9.33418 2.27451 9.33332 2.05999V1.99999C9.33332 1.64637 9.19285 1.30723 8.9428 1.05718C8.69275 0.807132 8.35361 0.666656 7.99999 0.666656C7.64637 0.666656 7.30723 0.807132 7.05718 1.05718C6.80713 1.30723 6.66666 1.64637 6.66666 1.99999V2.11332C6.6658 2.32785 6.60223 2.53744 6.48378 2.7163C6.36533 2.89516 6.19717 3.03548 5.99999 3.11999H5.94666C5.74558 3.20873 5.52253 3.23521 5.30626 3.19599C5.09 3.15678 4.89044 3.05368 4.73332 2.89999L4.69332 2.85999C4.56949 2.73602 4.42244 2.63768 4.26058 2.57058C4.09871 2.50348 3.92521 2.46894 3.74999 2.46894C3.57477 2.46894 3.40127 2.50348 3.2394 2.57058C3.07754 2.63768 2.93049 2.73602 2.80666 2.85999C2.68269 2.98382 2.58434 3.13087 2.51724 3.29274C2.45014 3.4546 2.41561 3.6281 2.41561 3.80332C2.41561 3.97854 2.45014 4.15205 2.51724 4.31391C2.58434 4.47577 2.68269 4.62283 2.80666 4.74666L2.84666 4.78666C3.00035 4.94378 3.10345 5.14333 3.14266 5.3596C3.18187 5.57586 3.1554 5.79891 3.06666 5.99999C2.99047 6.20715 2.85372 6.38659 2.67419 6.515C2.49466 6.6434 2.28065 6.71483 2.05999 6.71999H1.99999C1.64637 6.71999 1.30723 6.86047 1.05718 7.11051C0.807132 7.36056 0.666656 7.6997 0.666656 8.05332C0.666656 8.40694 0.807132 8.74608 1.05718 8.99613C1.30723 9.24618 1.64637 9.38666 1.99999 9.38666H2.11332C2.32785 9.38751 2.53744 9.45108 2.7163 9.56953C2.89516 9.68798 3.03548 9.85614 3.11999 10.0533C3.20873 10.2544 3.23521 10.4775 3.19599 10.6937C3.15678 10.91 3.05368 11.1095 2.89999 11.2667L2.85999 11.3067C2.73602 11.4305 2.63768 11.5775 2.57058 11.7394C2.50348 11.9013 2.46894 12.0748 2.46894 12.25C2.46894 12.4252 2.50348 12.5987 2.57058 12.7606C2.63768 12.9224 2.73602 13.0695 2.85999 13.1933C2.98382 13.3173 3.13087 13.4156 3.29274 13.4827C3.4546 13.5498 3.6281 13.5844 3.80332 13.5844C3.97854 13.5844 4.15205 13.5498 4.31391 13.4827C4.47577 13.4156 4.62283 13.3173 4.74666 13.1933L4.78666 13.1533C4.94378 12.9996 5.14333 12.8965 5.3596 12.8573C5.57586 12.8181 5.79891 12.8446 5.99999 12.9333C6.20715 13.0095 6.38659 13.1463 6.515 13.3258C6.6434 13.5053 6.71483 13.7193 6.71999 13.94V14C6.71999 14.3536 6.86047 14.6927 7.11051 14.9428C7.36056 15.1928 7.6997 15.3333 8.05332 15.3333C8.40694 15.3333 8.74608 15.1928 8.99613 14.9428C9.24618 14.6927 9.38666 14.3536 9.38666 14V13.8867C9.38751 13.6721 9.45108 13.4625 9.56953 13.2837C9.68798 13.1048 9.85614 12.9645 10.0533 12.88C10.2544 12.7912 10.4775 12.7648 10.6937 12.804C10.91 12.8432 11.1095 12.9463 11.2667 13.1L11.3067 13.14C11.4305 13.264 11.5775 13.3623 11.7394 13.4294C11.9013 13.4965 12.0748 13.531 12.25 13.531C12.4252 13.531 12.5987 13.4965 12.7606 13.4294C12.9224 13.3623 13.0695 13.264 13.1933 13.14C13.3173 13.0162 13.4156 12.8691 13.4827 12.7072C13.5498 12.5454 13.5844 12.3719 13.5844 12.1967C13.5844 12.0214 13.5498 11.8479 13.4827 11.6861C13.4156 11.5242 13.3173 11.3772 13.1933 11.2533L13.1533 11.2133C12.9996 11.0562 12.8965 10.8566 12.8573 10.6404ZM9.99999 7.99999C9.99999 9.10456 9.10456 9.99999 7.99999 9.99999C6.89542 9.99999 5.99999 9.10456 5.99999 7.99999C5.99999 6.89542 6.89542 5.99999 7.99999 5.99999C9.10456 5.99999 9.99999 6.89542 9.99999 7.99999Z"
        fill={color || '#B6C0DD'}
      />
    </svg>
  )
}

export default Settings
