import * as React from 'react'

function SvgCustomer(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M102 0h308c56 0 102 46 102 102v308c0 56-46 102-102 102H102C46 512 0 466 0 410V102C0 46 46 0 102 0zm0 51c-28 0-51 23-51 51v308c0 28 23 51 51 51h308c28 0 51-23 51-51V102c0-28-23-51-51-51zm32 410h-32c-7 0-14-2-20-5 11-43 43-79 85-96 9-3 19-2 26 4 7 5 11 15 10 24-2 9-8 17-17 20-24 9-43 29-52 53zm243 0c-9-25-29-44-53-53-9-3-16-11-17-20-2-9 2-18 9-24s17-7 26-4c43 16 76 52 88 97-7 2-13 4-20 4h-33zM256 102c57 0 102 46 102 103v51c0 57-45 102-102 102s-102-45-102-102v-51c0-57 45-103 102-103zm0 52c-28 0-51 23-51 51v51c0 28 23 51 51 51s51-23 51-51v-51c0-28-23-51-51-51z" />
    </svg>
  )
}

export default SvgCustomer
