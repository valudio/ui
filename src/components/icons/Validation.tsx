import * as React from "react"

function SvgValidation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M72 268c-9-9-24-8-33 1s-9 23-2 33l53 58c5 5 11 8 18 8 6 0 12-3 17-7l162-175c6-6 8-15 5-24-2-8-8-15-17-17-8-2-17 0-23 7L108 307zm186 0c-9-9-23-8-32 1s-10 23-2 33l53 58c5 5 11 8 17 8 7 0 13-3 17-7l162-175c6-6 8-15 6-24-2-8-9-15-17-17s-17 0-23 7L295 307z" />
    </svg>
  )
}

export default SvgValidation
