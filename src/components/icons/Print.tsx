import * as React from "react"

function SvgPrint(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M149 213c-11 0-21 10-21 22 0 11 10 21 21 21 12 0 22-10 22-21 0-12-10-22-22-22zm256-85h-21V64c0-12-10-21-21-21H149c-11 0-21 9-21 21v64h-21c-36 0-64 29-64 64v128c0 35 28 64 64 64h21v64c0 12 10 21 21 21h214c11 0 21-9 21-21v-64h21c36 0 64-29 64-64V192c0-35-28-64-64-64zM171 85h170v43H171zm170 342H171v-86h170zm86-107c0 12-10 21-22 21h-21v-21c0-12-10-21-21-21H149c-11 0-21 9-21 21v21h-21c-12 0-22-9-22-21V192c0-12 10-21 22-21h298c12 0 22 9 22 21z" />
    </svg>
  )
}

export default SvgPrint
