import * as React from 'react'

function SvgWellView(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M384 64c34 0 62 27 64 60v25c0 12-10 22-21 22s-20-9-22-19v-24c0-11-8-20-19-21H128c-11 0-20 8-21 19v258c0 11 8 20 19 21h23c12 0 22 10 22 22 0 11-9 20-19 21h-24c-34 0-62-27-64-60V128c0-34 27-62 60-64h4zm-39 131c42 34 51 96 21 141l62 62c8 8 8 22 0 30-9 8-22 8-30 0l-62-62-4 3c-46 27-104 17-137-24-35-43-32-104 7-143 38-39 100-42 143-7zm-113 37c-25 25-25 66 0 91s65 25 90 0c17-17 23-40 17-62s-23-40-45-45c-22-6-46 0-62 16z" />
    </svg>
  )
}

export default SvgWellView
