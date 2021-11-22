import * as React from "react"

function SvgMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M427 363c11 0 21 9 21 21s-10 21-21 21H85c-11 0-21-9-21-21s10-21 21-21zm0-128c11 0 21 9 21 21s-10 21-21 21H85c-11 0-21-9-21-21s10-21 21-21zm0-128c11 0 21 9 21 21s-10 21-21 21H85c-11 0-21-9-21-21s10-21 21-21z" />
    </svg>
  )
}

export default SvgMenu
