import * as React from "react"

function SvgDownload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M448 299c-12 0-21 9-21 21v85c0 12-10 22-22 22H107c-12 0-22-10-22-22v-85c0-12-9-21-21-21s-21 9-21 21v85c0 36 28 64 64 64h298c36 0 64-28 64-64v-85c0-12-9-21-21-21zm-207 36c2 2 4 4 7 5 5 2 11 2 16 0 3-1 5-3 7-5l85-85c9-9 9-22 0-30-8-9-21-9-30 0l-49 49V64c0-12-9-21-21-21s-21 9-21 21v205l-49-49c-6-6-13-8-21-6-7 2-13 8-15 15-2 8 0 15 6 21z" />
    </svg>
  )
}

export default SvgDownload
