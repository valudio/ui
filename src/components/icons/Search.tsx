import * as React from 'react'

function SvgSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M442 412l-73-73c24-30 36-66 36-104 0-95-76-171-170-171-95 0-171 76-171 171 0 94 76 170 171 170 38 0 74-12 104-36l73 73c4 4 9 6 15 6 5 0 11-2 15-6s6-10 6-15c0-6-2-11-6-15zM107 235c0-71 57-128 128-128 70 0 128 57 128 128 0 70-58 128-128 128-71 0-128-58-128-128z" />
    </svg>
  )
}

export default SvgSearch
