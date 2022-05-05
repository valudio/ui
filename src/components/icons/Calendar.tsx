/* eslint-disable max-len */
import * as React from 'react'

function SvgCalendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M341 43c12 0 22 9 22 21v21h21c35 0 64 29 64 64v256c0 36-29 64-64 64H128c-35 0-64-28-64-64V149c0-35 29-64 64-64h21V64c0-12 10-21 22-21 11 0 21 9 21 21v21h128V64c0-12 10-21 21-21zm64 234H107v128c0 12 9 22 21 22h256c12 0 21-10 21-22zm-234 43c11 0 21 10 21 21 0 12-10 22-21 22-12 0-22-10-22-22 0-11 10-21 22-21zm170 0c12 0 22 10 22 21 0 12-10 22-22 22h-85c-12 0-21-10-21-22 0-11 9-21 21-21zM149 128h-21c-12 0-21 10-21 21v86h298v-86c0-11-9-21-21-21h-21v21c0 12-10 22-22 22-11 0-21-10-21-22v-21H192v21c0 12-10 22-21 22-12 0-22-10-22-22z" />
    </svg>
  )
}

export default SvgCalendar
