import * as React from 'react'

function SvgLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M295 405c-6 0-12-3-16-8L176 269c-7-7-7-19 0-27l106-128c8-9 21-10 30-2 9 7 11 21 3 30l-95 114 92 114c5 7 6 16 3 23-4 8-11 12-20 12z" />
    </svg>
  )
}

export default SvgLeft
