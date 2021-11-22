import * as React from "react"

function SvgPdf(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M480 0c18 0 32 14 32 32v448c0 18-14 32-32 32H32c-18 0-32-14-32-32V32C0 14 14 0 32 0zM113 170H47v176h34v-67h32c18 0 32-5 43-15 10-9 15-22 15-39s-5-31-15-41c-11-9-25-14-43-14zm141 0h-62v176h61c20 0 36-5 48-16 11-11 17-29 17-54v-36c0-25-6-43-17-54s-27-16-47-16zm204 0H346v176h33v-73h68v-29h-68v-45h79zm-204 29c10 0 18 3 23 10s7 18 7 33v34c0 14-2 24-7 31s-13 10-23 10h-28V199zm-142 0c8 0 14 2 19 7 4 4 6 11 6 19s-2 14-6 18c-5 5-11 7-19 7H81v-51z" />
    </svg>
  )
}

export default SvgPdf
