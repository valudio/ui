import * as React from "react"

function SvgCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M224 357c-6 0-11-2-15-6l-91-91c-5-5-8-13-6-21 2-7 8-13 16-15 7-2 15 0 20 6l76 75 135-135c9-9 22-9 31 0 8 8 8 21 0 30L239 351c-4 4-10 6-15 6z" />
    </svg>
  )
}

export default SvgCheck
