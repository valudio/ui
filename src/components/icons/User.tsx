/* eslint-disable max-len */
import * as React from 'react'

function SvgUser(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M316 262c13-15 21-34 21-53 0-45-36-81-80-81-45 0-81 36-81 81 0 19 8 38 21 53-38 19-64 56-69 98-1 12 7 23 19 24s22-7 24-19c5-43 41-75 84-75s80 32 85 75c1 11 11 20 23 19h2c12-1 20-12 19-23-5-43-30-80-68-99zm-60-15c-15 0-29-10-35-24s-3-30 8-41 27-14 42-8c14 5 23 19 23 35 0 21-17 38-38 38zM405 43H107c-36 0-64 28-64 64v298c0 36 28 64 64 64h298c36 0 64-28 64-64V107c0-36-28-64-64-64zm22 362c0 12-10 22-22 22H107c-12 0-22-10-22-22V107c0-12 10-22 22-22h298c12 0 22 10 22 22z" />
    </svg>
  )
}

export default SvgUser
