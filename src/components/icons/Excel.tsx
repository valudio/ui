import * as React from 'react'

function SvgExcel(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M480 0c18 0 32 14 32 32v448c0 18-14 32-32 32H32c-18 0-32-14-32-32V32C0 14 14 0 32 0zm-32 96H64v320h384zM160 320v64H96v-64zm256 0v64H192v-64zm0-96v64H192v-64zm-256 0v64H96v-64zm256-96v64H192v-64zm-256 0v64H96v-64z" />
    </svg>
  )
}

export default SvgExcel
