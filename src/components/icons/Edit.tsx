import * as React from 'react'

function SvgEdit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M327 70L81 316c-3 2-5 5-6 9L43 442c-4 16 11 31 27 27l117-32c4-1 7-3 9-6l247-246c21-20 29-50 21-78-7-29-29-51-58-58-28-8-58 0-79 21zm68 20c14 4 24 14 28 28l1 3c2 12-2 25-11 34L170 397l-76 21 21-76 243-242c9-9 21-13 34-11z" />
    </svg>
  )
}

export default SvgEdit
