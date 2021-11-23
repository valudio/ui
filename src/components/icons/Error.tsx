import * as React from 'react'

function SvgError(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M260 64c108 0 196 88 196 196s-88 196-196 196S64 368 64 260 152 64 260 64zm0 252c-8 0-15 3-20 8-5 6-8 12-8 20 0 9 3 16 8 21 6 5 13 7 20 7 8 0 14-2 20-7 5-5 8-12 8-21 0-8-3-14-8-20-6-5-12-8-20-8zm1-168c-8 0-16 2-21 6s-8 10-8 18c0 4 0 11 1 21l1 6 6 64c1 9 3 15 5 19 3 4 7 6 14 6s11-2 14-6c2-4 4-8 5-14l1-4 8-67c1-6 1-12 1-18 0-10-2-18-5-23-4-5-11-8-22-8z" />
    </svg>
  )
}

export default SvgError
