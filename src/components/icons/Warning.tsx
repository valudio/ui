import * as React from 'react'

function SvgWarning(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M282 68c5 3 10 7 13 13l171 320c8 16 2 35-14 43-4 3-9 4-15 4H96c-18 0-32-14-32-32 0-5 1-10 4-15L238 81c9-16 28-22 44-13zm-16 268c-7 0-14 3-19 8-6 6-8 12-8 20 0 9 2 16 8 21s12 7 20 7c7 0 14-2 19-7 6-5 9-12 9-21 0-8-3-14-9-20-5-5-12-8-20-8zm2-168c-9 0-16 2-21 6-6 4-8 10-8 18 0 4 0 11 1 21v6l6 64c1 9 3 15 6 19 2 4 7 6 14 6 6 0 11-2 14-6 2-4 4-8 5-14v-4l8-67c1-6 2-12 2-18 0-10-2-18-6-23-3-5-10-8-21-8z" />
    </svg>
  )
}

export default SvgWarning
