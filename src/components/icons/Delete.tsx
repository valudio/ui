import * as React from "react"

function SvgDelete(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M299 21c34 0 62 27 64 61v25h85c12 0 21 9 21 21 0 11-8 20-19 21h-23v278c0 34-27 62-61 64H149c-34 0-62-27-64-61V149H64c-12 0-21-9-21-21 0-11 8-20 19-21h87V85c0-34 27-62 61-64h3zm85 128H128v278c0 11 8 20 19 21h216c11 0 20-8 21-19v-2zm-171 64c11 0 20 9 22 19v131c0 11-10 21-22 21-11 0-20-8-21-19V235c0-12 10-22 21-22zm86 0c11 0 20 9 21 19v131c0 11-10 21-21 21s-20-8-22-19V235c0-12 10-22 22-22zm0-149h-86c-11 0-20 8-21 19v24h128V85c0-11-8-20-19-21z" />
    </svg>
  )
}

export default SvgDelete
