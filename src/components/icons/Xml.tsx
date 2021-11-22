import * as React from "react"

function SvgXml(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M480 0c18 0 32 14 32 32v448c0 18-14 32-32 32H32c-18 0-32-14-32-32V32C0 14 14 0 32 0zM86 176H49l47 79-51 85h35l34-60 33 60h37l-52-86 47-78h-36l-28 53zm141 0h-31v164h31v-98l31 67h21l32-66v97h31V176h-31l-42 91zm174 0h-31v164h103v-27h-72z" />
    </svg>
  )
}

export default SvgXml
