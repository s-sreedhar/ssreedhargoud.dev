import type { SVGProps } from 'react';

export function Instagram(props: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M128 16C77.68 16 38.2 23.49 23.79 36.57A60.28 60.28 0 0 0 16 55.7C12.37 71.1 9.33 104.1 9.33 128s3.04 56.9 6.67 72.3a60.28 60.28 0 0 0 7.79 19.13c14.41 13.08 53.89 20.57 104.21 20.57s89.8-7.49 104.21-20.57a60.28 60.28 0 0 0 7.79-19.13c3.63-15.4 6.67-48.4 6.67-72.3s-3.04-56.9-6.67-72.3a60.28 60.28 0 0 0-7.79-19.13C217.8 23.49 178.32 16 128 16Zm64 88a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm-64 72a56 56 0 1 1 56-56 56.07 56.07 0 0 1-56 56Zm0-96a40 40 0 1 0 40 40 40.05 40.05 0 0 0-40-40Z"
      />
    </svg>
  );
}
