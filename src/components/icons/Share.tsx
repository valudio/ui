/* eslint-disable max-len */
import * as React from 'react'

function SvgShare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M91 427c10 0 19-7 22-16 19-78 86-136 166-143v24c0 15 9 29 23 35 16 7 34 4 46-7l108-94c8-7 13-18 13-29s-5-21-13-28L348 75c-13-12-31-14-46-7-14 6-24 20-24 35v25C158 137 65 237 64 357c0 18 2 36 7 54 2 9 11 16 21 16zm209-203c-74 0-143 33-188 91 22-86 99-145 188-144 12 0 21-10 21-22v-41l103 89-103 90v-42c0-12-10-21-21-21z" />
    </svg>
  )
}

export default SvgShare
