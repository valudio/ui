/* eslint-disable max-len */
import * as React from 'react'

function SvgSync(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M128 156l37-12c8-2 16 0 22 5 6 6 9 15 7 23s-8 14-16 17l-89 27c-6 2-12 1-17-2-6-3-10-8-12-14l-27-89c-2-8 0-16 5-22 6-6 14-9 23-7 8 2 14 8 17 16l10 33C144 45 255 8 354 48c59 25 105 75 125 136 3 8 1 17-5 23-5 6-14 9-22 7s-15-8-17-16c-20-63-75-109-140-118-66-9-131 20-167 76zm287 190l-42 11c-8 2-17-1-23-7-5-6-8-14-5-22 2-9 9-15 17-17l85-21c4-2 9-2 14-2 9 2 17 9 19 18l23 90c3 12-5 25-17 28s-25-4-28-17l-8-30c-45 65-123 101-203 92-79-9-148-60-178-134l-6-15c-5-12 1-25 13-30 11-5 25 1 30 12l6 15c24 59 79 100 142 106 64 6 126-23 161-77z" />
    </svg>
  )
}

export default SvgSync
