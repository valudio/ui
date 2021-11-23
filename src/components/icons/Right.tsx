import * as React from 'react'

function SvgRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M213 406c-5 0-9-2-13-5-5-4-7-9-8-14 0-6 1-12 5-16l96-114-93-115c-3-4-5-10-4-16 0-5 3-10 8-14 4-4 10-6 16-5 6 0 11 3 15 8l103 128c6 8 6 19 0 27L231 398c-4 6-11 8-18 8z" />
    </svg>
  )
}

export default SvgRight
