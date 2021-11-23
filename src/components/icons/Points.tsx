import * as React from 'react'

function SvgPoints(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M107 213c23 0 42 19 42 43s-19 43-42 43c-24 0-43-19-43-43s19-43 43-43zm149 0c24 0 43 19 43 43s-19 43-43 43-43-19-43-43 19-43 43-43zm149 0c24 0 43 19 43 43s-19 43-43 43c-23 0-42-19-42-43s19-43 42-43z" />
    </svg>
  )
}

export default SvgPoints
