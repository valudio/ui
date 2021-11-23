import * as React from 'react'

function SvgEdi(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M480 0c18 0 32 14 32 32v448c0 18-14 32-32 32H32c-18 0-32-14-32-32V32C0 14 14 0 32 0zM83 237c-10 0-19 8-19 19 0 77 46 146 116 176 71 30 152 16 208-37v34c0 10 9 19 19 19 11 0 19-9 19-19v-87c0-10-8-18-18-19h-87c-11 0-19 9-19 20 0 10 8 19 19 19h46c-43 45-110 59-168 36s-96-79-97-142c0-11-8-19-19-19zM256 64c-49 0-97 19-132 53V83c0-10-9-19-19-19-11 0-19 9-19 19v87c0 10 8 19 19 19h86c11 0 19-9 19-19 0-11-8-20-19-20h-46c43-45 110-59 168-36s96 79 97 142c0 11 8 19 19 19 10 0 19-8 19-19 0-51-20-100-56-136s-85-56-136-56z" />
    </svg>
  )
}

export default SvgEdi
