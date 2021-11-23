import * as React from 'react'

function SvgClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M286 256l92-92c8-8 8-21 0-30-9-8-22-8-30 0l-92 92-92-92c-8-8-21-8-30 0-8 9-8 22 0 30l92 92-92 92c-4 4-6 9-6 15 0 5 2 11 6 15s10 6 15 6c6 0 11-2 15-6l92-92 92 92c4 4 9 6 15 6 5 0 11-2 15-6s6-10 6-15c0-6-2-11-6-15z" />
    </svg>
  )
}

export default SvgClose
