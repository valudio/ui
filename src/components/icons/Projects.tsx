import * as React from 'react'

function SvgProjects(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M384 245L238 392c-3 3-7 5-11 6l-93 23c-17 4-33-11-29-28l24-93c1-4 3-8 6-11L356 68c6-7 14-12 22-15h-1c-4-4-10-6-16-6H221v142c-1 11-9 19-18 20H58v233c0 13 11 23 23 23h280c13 0 23-10 23-23zm42-144c-10-10-27-10-37 0L172 317l-12 49 49-12 217-216c9-10 10-25 2-35zM180 74l-89 89h89zm251 125v243c0 39-32 70-70 70H81c-38 0-69-31-69-70V186c0-6 2-12 6-16L181 7c5-5 11-7 17-7h163c31 0 58 21 67 49v1c12 3 22 9 31 18 28 28 28 74 0 103z" />
    </svg>
  )
}

export default SvgProjects
