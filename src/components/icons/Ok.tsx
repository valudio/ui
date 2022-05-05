/* eslint-disable max-len */
import * as React from 'react'

function SvgOk(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M314 198l-92 92-35-35c-5-6-14-9-21-7-8 2-14 8-16 16-2 7 1 16 7 21l50 50c4 4 9 6 15 6s11-2 15-6l107-107c4-4 6-9 6-15 0-5-2-11-6-15-9-8-22-8-30 0zM256 43C138 43 43 138 43 256s95 213 213 213 213-95 213-213c0-57-22-111-62-151s-94-62-151-62zm0 384c-94 0-171-77-171-171S162 85 256 85s171 77 171 171c0 45-18 89-50 121s-76 50-121 50z" />
    </svg>
  )
}

export default SvgOk
