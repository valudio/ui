import * as React from "react"

function SvgAdd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M384 277H277v107c0 12-9 21-21 21s-21-9-21-21V277H128c-12 0-21-9-21-21s9-21 21-21h107V128c0-12 9-21 21-21s21 9 21 21v107h107c12 0 21 9 21 21s-9 21-21 21z" />
    </svg>
  )
}

export default SvgAdd
