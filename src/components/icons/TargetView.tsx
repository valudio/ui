import * as React from 'react'

function SvgTargetView(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M414 177c9-8 22-8 30 0s8 20 2 28l-2 2-109 106c-7 7-19 8-27 2l-2-1-71-66-90 87c-8 8-20 8-28 2l-2-2c-7-8-8-20-1-28l2-2 104-102c7-7 19-8 27-2l2 2 71 65zm34 250H85V64c0-12-9-21-21-21s-21 9-21 21v384c0 12 9 21 21 21h384c12 0 21-9 21-21s-9-21-21-21z" />
    </svg>
  )
}

export default SvgTargetView
