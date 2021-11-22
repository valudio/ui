import * as React from "react"

function SvgGroupValidation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M299 64c34 0 62 27 64 60v25h21c34 0 62 27 64 61v25c0 11-10 21-21 21s-20-8-22-19v-24c0-11-8-20-19-21H192c-11 0-20 8-21 19v194c0 11 8 20 19 22h23c12 0 22 9 22 21 0 11-9 20-19 21h-24c-34 0-62-26-64-60v-25h-21c-34 0-62-27-64-60V128c0-34 26-62 60-64h4zm2 43H107c-11 0-20 8-22 19v194c0 11 9 20 19 21h24V213c0-34 27-62 60-64h132v-21c0-11-8-20-19-21zm141 219c-8-8-22-8-30 0l-72 71-26-26c-9-8-22-8-31 0-8 9-8 22 1 31l41 40c8 8 21 8 30 0l87-86c8-8 8-21 0-30z" />
    </svg>
  )
}

export default SvgGroupValidation
