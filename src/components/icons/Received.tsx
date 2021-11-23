import * as React from 'react'

function SvgReceived(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M189 301c0 3 1 6 2 8 2 6 6 10 12 12 2 1 5 2 8 2h90c12 0 22-10 22-22s-10-21-22-21h-39l54-54c9-8 9-22 0-30-8-9-21-9-30 0l-54 54v-39c0-6-2-11-6-15s-10-7-15-7c-6 0-11 3-15 7s-7 9-7 15zm-84 106c83 83 219 83 302 0s83-219 0-302-219-83-302 0c-40 40-62 94-62 151s22 111 62 151zm272-272c66 67 66 175 0 242-67 66-175 66-242 0-66-67-66-175 0-242 32-32 76-50 121-50s89 18 121 50z" />
    </svg>
  )
}

export default SvgReceived
