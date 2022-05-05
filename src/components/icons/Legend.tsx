/* eslint-disable max-len */
import * as React from 'react'

function SvgLegend(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M88 353c7-16 30-16 38 0l42 85c8 15-3 31-19 31H64c-16 0-26-16-19-31zm19 57l-8 17h16zm341-26c12 0 21 10 21 21s-8 20-19 22H235c-12 0-22-10-22-22 0-11 9-20 19-21h3zM149 192c12 0 22 10 22 21v86c0 11-10 21-22 21H64c-12 0-21-10-21-21v-86c0-11 9-21 21-21zm-21 43H85v42h43zm320 0c12 0 21 9 21 21 0 11-8 20-19 21H235c-12 0-22-9-22-21 0-11 9-20 19-21h3zM107 43c35 0 64 28 64 64 0 35-29 64-64 64-36 0-64-29-64-64 0-36 28-64 64-64zm0 42c-12 0-22 10-22 22 0 11 10 21 22 21 11 0 21-10 21-21 0-12-10-22-21-22zm341 0c12 0 21 10 21 22 0 11-8 20-19 21H235c-12 0-22-10-22-21s9-20 19-22h3z" />
    </svg>
  )
}

export default SvgLegend
