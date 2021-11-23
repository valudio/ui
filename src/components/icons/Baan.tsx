import * as React from "react"

function SvgBaan(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M480 0c18 0 32 14 32 32v448c0 18-14 32-32 32H32c-18 0-32-14-32-32V32C0 14 14 0 32 0zM259 161h-12c-103 3-211 63-212 127 0 21 16 40 33 40 15 0 57-15 105-49l3-4 2 1-2 6c-4 12-6 22-6 28 0 13 6 19 17 19 15 0 37-16 70-39l-3-3-4 3c-14 9-19 12-24 12-4 0-7-2-7-7 1-3 2-8 3-13zm224 0h-12c-103 3-211 63-212 127 0 21 15 40 33 40 15 0 57-15 105-49l3-4 2 1-2 6c-4 12-6 22-6 28 0 13 6 19 17 19 15 0 37-16 70-39l-3-3-4 3c-14 9-19 12-24 12-4 0-7-2-7-7 1-3 2-8 3-13zm-304 97l-6 5c-36 25-70 38-78 38-7 0-13-12-13-27 0-23 13-47 28-64 17-17 49-30 93-30zm224 0l-6 5c-36 25-70 38-78 38-7 0-13-12-13-27 0-23 13-47 28-64 17-17 49-30 93-30z" />
    </svg>
  )
}

export default SvgBaan
