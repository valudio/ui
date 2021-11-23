import * as React from 'react'

function SvgMaterial(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M486 178c0-3 0-5-1-7v-3c-1-2-3-5-5-7L326 8c-2-2-4-4-7-5h-2c-3-2-6-3-9-3H205c-43 0-77 34-77 77v25h-26c-42 0-76 35-76 77v256c0 43 34 77 76 77h205c43 0 77-34 77-77v-25h26c42 0 76-35 76-77zM333 87l66 67h-41c-14 0-25-12-25-26zm0 348c0 14-12 26-26 26H102c-14 0-25-12-25-26V179c0-14 11-25 25-25h26v179c0 42 34 77 77 77h128zm102-102c0 14-11 25-25 25H205c-14 0-26-11-26-25V77c0-14 12-26 26-26h77v77c0 42 34 77 76 77h77z" />
    </svg>
  )
}

export default SvgMaterial
