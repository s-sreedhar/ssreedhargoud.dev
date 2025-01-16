import type { SVGProps } from 'react';

export function SQL(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
     <path fill='currentColor' d="M18,9H14a2,2,0,0,0-2,2V21a2,2,0,0,0,2,2h1v2a2,2,0,0,0,2,2h2V25H17V23h1a2,2,0,0,0,2-2V11A2,2,0,0,0,18,9ZM14,21V11h4V21Z"></path><path fill='currentColor' d="M8,23H2V21H8V17H4a2,2,0,0,1-2-2V11A2,2,0,0,1,4,9h6v2H4v4H8a2,2,0,0,1,2,2v4A2,2,0,0,1,8,23Z"></path>
 </svg>
  );
}
