import * as React from 'react'

function SvgTxt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M480 0c18 0 32 14 32 32v448c0 18-14 32-32 32H32c-18 0-32-14-32-32V32C0 14 14 0 32 0zM352 352H64v64h288zm96-128H64v64h384zm0-128H64v64h384z" />
    </svg>
  )
}

export default SvgTxt
