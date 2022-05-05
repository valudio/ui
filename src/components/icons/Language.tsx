/* eslint-disable max-len */
import * as React from 'react'

function SvgLanguage(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M469 256c0-57-22-111-62-151s-94-62-151-62C138 43 43 138 43 256s95 213 213 213 213-95 213-213zm-44-21h-62c-4-51-21-99-50-140 61 22 104 76 112 140zm-231 42h126c-5 53-28 103-64 141-36-38-58-88-62-141zm0-42c5-53 27-102 62-141 36 38 59 88 64 141zm7-140c-29 41-46 89-50 140H87c8-65 53-120 114-140zM87 277h64c3 51 21 99 50 140-62-21-106-75-114-140zm225 140c29-41 47-89 51-140h63c-9 65-53 119-114 140z" />
    </svg>
  )
}

export default SvgLanguage
