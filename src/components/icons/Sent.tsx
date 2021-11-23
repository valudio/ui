import * as React from 'react'

function SvgSent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M323 211c0-3-1-6-2-8-2-6-6-10-12-12-2-1-5-2-8-2h-90c-12 0-22 10-22 22s10 21 22 21h39l-54 54c-9 9-9 22 0 30 8 9 22 9 30 0l54-54v39c0 6 2 11 6 15s10 7 15 7c6 0 11-3 15-7s7-9 7-15zm84-106c-83-83-219-83-302 0s-83 219 0 302 219 83 302 0c40-40 62-94 62-151s-22-111-62-151zM135 377c-66-67-66-175 0-242 67-66 175-66 242 0 66 67 66 175 0 242-32 32-76 50-121 50s-89-18-121-50z" />
    </svg>
  )
}

export default SvgSent
