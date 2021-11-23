import * as React from 'react'

function SvgSignOut(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M213 448c0-12-9-21-21-21h-85c-12 0-22-10-22-22V107c0-12 10-22 22-22h85c12 0 21-9 21-21s-9-21-21-21h-85c-36 0-64 28-64 64v298c0 36 28 64 64 64h85c12 0 21-9 21-21zm250-177c2-2 4-4 5-7 2-5 2-11 0-16-1-3-3-5-5-7l-85-85c-9-9-22-9-30 0-9 8-9 21 0 30l49 49H192c-12 0-21 9-21 21s9 21 21 21h205l-49 49c-6 6-8 13-6 21 2 7 8 13 15 15 8 2 15 0 21-6z" />
    </svg>
  )
}

export default SvgSignOut
