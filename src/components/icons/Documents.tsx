/* eslint-disable max-len */
import * as React from 'react'

function SvgDocuments(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M427 191c-1-2-1-4-2-6v-2c-1-2-2-4-4-6L293 49c-1-2-3-3-6-4h-2c-2-1-4-2-6-2H149c-35 0-64 28-64 64v298c0 36 29 64 64 64h214c35 0 64-28 64-64zm-128-76l55 56h-34c-12 0-21-10-21-22zm85 290c0 12-10 22-21 22H149c-11 0-21-10-21-22V107c0-12 10-22 21-22h107v64c0 36 29 64 64 64h64z" />
    </svg>
  )
}

export default SvgDocuments
