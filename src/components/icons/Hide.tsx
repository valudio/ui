import * as React from "react"

function SvgHide(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M80 65c7-2 15 0 21 5l341 342c4 4 6 9 6 15 0 5-2 11-6 15s-10 6-15 6c-6 0-11-2-15-6L292 322c-30 15-65 10-89-13-23-23-28-59-13-88L70 101c-5-6-7-14-5-21 2-8 7-13 15-15zm27 103l31 30c-18 17-35 37-48 58 19 30 79 109 171 107 12-1 24-2 36-6l34 34c-22 9-46 14-69 14h-5C131 405 59 290 46 267c-4-7-4-15 0-22 16-28 37-54 61-77zm143-61c128-4 203 115 217 138 4 7 4 15 1 22-17 28-38 55-63 77l-32-30c19-17 35-37 49-58-19-30-79-109-171-107-12 1-24 3-36 6l-34-34c22-9 46-14 69-14zm-26 148v1c0 18 14 32 32 32h1z" />
    </svg>
  )
}

export default SvgHide
