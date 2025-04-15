import { Link } from 'react-router';

export default function Copyright() {
  return (
    <div className="mt-[30px] flex gap-x-[20px] items-center">
      <h3 className="text-[13px] leading-[18px] tracking-[-0.025em] text-[#999]">
        copyright © 2023 Lotte GRS co.,ltd all right reserved
      </h3>
      <ul className="flex gap-x-[14px]">
        <li>
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <defs>
                <clipPath id="a">
                  <rect
                    width="24"
                    height="24"
                    transform="translate(0.035)"
                    fill="#fff"
                    opacity="0"
                  />
                </clipPath>
              </defs>
              <g transform="translate(-0.035)" opacity="0.2">
                <g clipPath="url(#a)">
                  <path d="M0,0H24.385V24.385H0Z" fill="none" />
                  <path
                    d="M8.561,6.829H6v3.415H8.561V20.488h4.268V10.244h3.109l.306-3.415H12.829V5.406c0-.815.164-1.138.952-1.138h2.463V0H12.993C9.923,0,8.561,1.351,8.561,3.94Z"
                    transform="translate(1.309 1.463)"
                  />
                </g>
              </g>
            </svg>
          </Link>
        </li>
        <li>
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <defs>
                <clipPath id="a">
                  <rect
                    width="24"
                    height="24"
                    transform="translate(1.385)"
                    fill="#fff"
                    opacity="0"
                  />
                </clipPath>
              </defs>
              <g transform="translate(-1.385)" opacity="0.2">
                <g clipPath="url(#a)">
                  <path
                    d="M0,0H24.385V24.385H0Z"
                    transform="translate(1)"
                    fill="none"
                  />
                  <path
                    d="M9.329,1.758c2.6,0,3.337.01,4.366.057,2.643.12,3.878,1.374,4,4,.047,1.028.056,1.337.056,3.941s-.01,2.913-.056,3.941c-.121,2.621-1.352,3.878-4,4-1.029.047-1.336.057-3.942.057s-2.913-.01-3.941-.057c-2.65-.121-3.878-1.381-4-4-.047-1.028-.057-1.336-.057-3.941s.011-2.912.057-3.941c.121-2.623,1.352-3.878,4-4,1.029-.046.913-.056,3.517-.056ZM9.753,0C7.1,0,6.773.011,5.733.059,2.19.221.222,2.186.059,5.732.011,6.773,0,7.1,0,9.753s.011,2.981.059,4.022c.163,3.542,2.128,5.511,5.673,5.673,1.041.047,1.373.059,4.022.059s2.981-.011,4.022-.059c3.539-.163,5.512-2.128,5.672-5.673.048-1.04.059-1.373.059-4.022s-.011-2.981-.059-4.021C19.289,2.194,17.321.222,13.776.059,12.735.011,12.4,0,9.753,0Zm0,4.745a5.009,5.009,0,1,0,5.008,5.008A5.009,5.009,0,0,0,9.753,4.745Zm0,8.26A3.251,3.251,0,1,1,13,9.753,3.251,3.251,0,0,1,9.753,13ZM14.96,3.377a1.17,1.17,0,1,0,1.17,1.17A1.171,1.171,0,0,0,14.96,3.377Z"
                    transform="translate(3.439 2.439)"
                  />
                </g>
              </g>
            </svg>
          </Link>
        </li>
        <li>
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <defs>
                <clipPath id="a">
                  <rect
                    width="24"
                    height="24"
                    transform="translate(-0.315)"
                    fill="#fff"
                  />
                </clipPath>
              </defs>
              <g transform="translate(0.315)" opacity="0.2">
                <g clipPath="url(#a)">
                  <path d="M0,0H24.385V24.385H0Z" fill="rgba(0,0,0,0)" />
                  <path
                    d="M22.294,4.011a18.232,18.232,0,0,1-3.044,1,3.85,3.85,0,0,0-4.444-.746,3.983,3.983,0,0,0-2.659,3.784V9.065A9.537,9.537,0,0,1,4.029,5.014s-4.243,7.527,4.059,11.14A10.014,10.014,0,0,1,2,18.179a13.646,13.646,0,0,0,10.181,1.536,11.155,11.155,0,0,0,7.763-7.84,13.99,13.99,0,0,0,.5-3.8c0-.252,1.532-2.807,1.845-4.064Z"
                    transform="translate(0.046 0.089)"
                  />
                </g>
              </g>
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
}
