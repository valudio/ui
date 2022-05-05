/* eslint-disable max-len */
import * as React from 'react'

function SvgAttention(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M256 277c-12 0-21-9-21-21v-85c0-12 9-22 21-22s21 10 21 22v85c0 12-9 21-21 21zm8 84c-5 2-11 2-16 0-3-1-5-3-7-5s-4-4-5-7c-1-2-1-5-1-8 0-5 2-11 6-15 2-2 4-3 7-4 6-3 14-2 20 2s9 10 9 17c0 6-2 11-6 15-2 2-4 4-7 5zm-8 108c-118 0-213-95-213-213S138 43 256 43s213 95 213 213c0 57-22 111-62 151s-94 62-151 62zm0-384c-94 0-171 77-171 171s77 171 171 171 171-77 171-171c0-45-18-89-50-121s-76-50-121-50z" />
    </svg>
  )
}

export default SvgAttention
