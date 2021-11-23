import * as React from 'react'

function SvgReports(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M256 102c-14 0-26 12-26 26v256c0 14 12 26 26 26s26-12 26-26V128c0-14-12-26-26-26zM128 256c-14 0-26 11-26 26v102c0 14 12 26 26 26s26-12 26-26V282c0-15-12-26-26-26zm256-51c-14 0-26 11-26 25v154c0 14 12 26 26 26s26-12 26-26V230c0-14-12-25-26-25zM435 0H77C34 0 0 34 0 77v358c0 43 34 77 77 77h358c43 0 77-34 77-77V77c0-43-34-77-77-77zm26 435c0 14-12 26-26 26H77c-14 0-26-12-26-26V77c0-14 12-26 26-26h358c14 0 26 12 26 26z" />
    </svg>
  )
}

export default SvgReports
