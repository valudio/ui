import * as React from 'react'

function SvgPlateView(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M448 277c12 0 21 10 21 22v149c0 12-9 21-21 21H299c-12 0-22-9-22-21V299c0-12 10-22 22-22zm-235 0c12 0 22 10 22 22v149c0 12-10 21-22 21H64c-12 0-21-9-21-21V299c0-12 9-22 21-22zm214 43H320v107h107zm-235 0H85v107h107zm21-277c12 0 22 9 22 21v149c0 12-10 22-22 22H64c-12 0-21-10-21-22V64c0-12 9-21 21-21zm235 0c12 0 21 9 21 21v149c0 12-9 22-21 22H299c-12 0-22-10-22-22V64c0-12 10-21 22-21zM192 85H85v107h107zm235 0H320v107h107z" />
    </svg>
  )
}

export default SvgPlateView
