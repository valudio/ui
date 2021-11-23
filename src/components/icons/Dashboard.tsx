import * as React from "react"

function SvgDashboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M256 43c118 0 213 95 213 213s-95 213-213 213S43 374 43 256 138 43 256 43zm133 320H123c31 39 79 64 133 64s102-25 133-64zM256 85c-94 0-171 77-171 171 0 23 5 44 13 64h121l-67-117c-5-10-3-22 6-28l2-2c10-5 23-2 29 8l79 139h146c8-20 13-41 13-64 0-94-77-171-171-171z" />
    </svg>
  )
}

export default SvgDashboard
