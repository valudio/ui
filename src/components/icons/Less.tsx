import * as React from "react"

function SvgLess(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M384 277H128c-12 0-21-9-21-21s9-21 21-21h256c12 0 21 9 21 21s-9 21-21 21z" />
    </svg>
  )
}

export default SvgLess
