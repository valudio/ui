import * as React from "react"

function SvgFilter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M341 341c12 0 22 10 22 22 0 11-10 21-22 21H171c-12 0-22-10-22-21 0-12 10-22 22-22zm43-106c12 0 21 9 21 21s-9 21-21 21H128c-12 0-21-9-21-21s9-21 21-21zm64-107c12 0 21 10 21 21 0 12-9 22-21 22H64c-12 0-21-10-21-22 0-11 9-21 21-21z" />
    </svg>
  )
}

export default SvgFilter
