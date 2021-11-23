import * as React from 'react'

function SvgTemplate(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M43 345V107c0-34 26-62 60-64h238c34 0 62 26 64 60v4c34 0 62 26 64 60v25c0 12-9 21-21 21-11 0-20-8-21-19v-23c0-11-9-20-19-22H171c-11 0-20 9-22 19v237c0 11 9 20 19 22h24c12 0 21 9 21 21 0 11-8 20-19 21h-23c-34 0-62-26-64-60v-4c-34 0-62-26-64-60zm257-114c12-24 48-24 59 0l18 37 41 6c26 3 37 35 20 54l-2 2-29 29 7 40c4 26-22 46-46 36l-2-1-36-19-36 19c-24 12-51-7-49-33l1-3 6-40-29-28c-19-18-9-50 16-56h3l40-6zm30 36l-20 40-43 6 31 31-7 43 39-21 38 21-7-43 31-31-43-6zm11-182H107c-11 0-20 9-22 19v237c0 11 9 20 19 22h3V171c0-34 26-62 60-64h196c0-11-9-20-19-22z" />
    </svg>
  )
}

export default SvgTemplate
