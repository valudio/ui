import * as React from "react"

function SvgExport(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M256 43c34 0 62 26 64 60v25c0 12-10 21-21 21s-20-8-22-18v-24c0-11-8-20-19-22H128c-11 0-20 9-21 19v301c0 11 8 20 19 22h130c11 0 20-9 21-19v-24c0-12 10-21 22-21 11 0 20 8 21 19v23c0 34-27 62-60 64H128c-34 0-62-26-64-60V107c0-34 27-62 60-64h4zm113 113c8-9 22-9 30 0l85 85c2 2 4 4 5 7 2 5 2 11 0 16-1 3-3 5-5 7l-85 85c-5 6-13 8-21 6-7-2-13-8-15-15-2-8 0-15 6-21l49-49H213c-11 0-21-9-21-21s10-21 21-21h205l-49-49c-9-9-9-22 0-30z" />
    </svg>
  )
}

export default SvgExport
