import * as React from "react"

function SvgHome(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M451 147L305 19c-28-25-70-25-98 0L61 147c-16 14-25 34-24 55v213c0 40 32 73 73 73h292c41 0 73-33 73-73V202c1-21-8-41-24-55zM305 464v1c0 13 10 23 23 23H183c13 0 24-11 24-24V326c0-18 11-33 25-33h48c14 0 25 15 25 33zm122-49c0 14-11 24-25 24h-48V318c0-41-33-74-74-74h-48c-41 0-74 33-74 74v121h-48c-14 0-25-10-25-24V202c0-7 3-14 9-19L240 55c9-8 23-8 32 0l146 128c6 5 9 12 9 19z" />
    </svg>
  )
}

export default SvgHome
