import * as React from 'react'

function SvgMap(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M435 126l-85-39h-17l-77 35-77-35h-1l-2-2h-13l-85 39c-9 3-15 12-14 21v260c0 8 4 14 10 18 3 2 7 4 11 4 3 0 6-1 9-2l77-35 76 35h1c5 2 11 2 16 0h1l76-35 77 35c3 1 6 2 9 2 4 0 8-2 11-4 6-4 10-10 10-18V145c0-8-5-16-13-19zm-328 33l42-19v213l-42 19zm85-19l43 19v213l-43-19zm85 19l43-19v213l-43 19zm128 213l-42-19V140l42 19z" />
    </svg>
  )
}

export default SvgMap
