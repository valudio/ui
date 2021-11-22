import * as React from "react"

function SvgSap(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M480 0c18 0 32 14 32 32v448c0 18-14 32-32 32H32c-18 0-32-14-32-32V32C0 14 14 0 32 0zM282 160h-54l-48 122c-6-27-34-38-52-42-47-12-50-18-50-27 0-24 62-13 78-7 4-12 13-35 13-35s-17-11-69-11c-53 0-68 32-68 53 0 20 11 43 40 52 31 9 54 11 54 26 0 16-52 19-82 0l-12 40s17 14 68 14c27 0 49-7 63-19l-7 19h54l9-27c11 4 23 7 37 7s26-3 37-7l9 27h85v-46h23c39 0 70-31 70-69 0-39-31-70-70-70h-69v147zm-26 53l23 66c-6 5-14 6-23 6s-17-1-23-6zm154-7c13 0 24 11 24 24 0 12-11 23-24 23h-23v-47z" />
    </svg>
  )
}

export default SvgSap
