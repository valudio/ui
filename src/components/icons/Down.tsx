import * as React from "react"

function SvgDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M416 206c0 7-3 13-8 17L280 326c-8 6-19 6-27 0L125 219c-9-7-10-21-3-30 8-9 21-10 30-3l115 96 114-93c6-5 15-6 23-2 7 3 12 11 12 19z" />
    </svg>
  )
}

export default SvgDown
