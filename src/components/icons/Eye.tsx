import * as React from "react"

function SvgEye(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M250 107c128-4 203 115 217 138 3 7 3 15 0 22-19 32-87 135-205 138h-5C131 405 59 290 46 267c-4-7-4-15 0-22 18-32 86-135 204-138zm9 42h-7c-85 3-141 73-162 107 19 30 79 109 171 107 85-2 140-73 162-107-19-30-79-109-171-107zm-3 32c41 0 75 34 75 75s-34 75-75 75-75-34-75-75 34-75 75-75zm0 43c-18 0-32 14-32 32s14 32 32 32 32-14 32-32-14-32-32-32z" />
    </svg>
  )
}

export default SvgEye
