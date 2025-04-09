import { useState } from 'react';
import { Link } from 'react-router';

function List({ icon, text, isActive, onClick, className }) {
  return (
    <li>
      <Link
        to="/"
        className={`h-[74px] 
        shadow-[0_5px_10px_rgba(0,165,185,0.1)]
        flex flex-col justify-center items-center gap-y-[4px]
          ${
            isActive
              ? 'bg-[#00A5B9] border-0'
              : 'bg-[transparent] border border-[#DDE0E3]'
          }
          ${className}
        `}
        onClick={onClick}
      >
        <span className="block">{icon}</span>
        <p className={`text-[14px] ${isActive ? 'text-white' : 'text-black'}`}>
          {text}
        </p>
      </Link>
    </li>
  );
}

// 주소설정 배달포장
export default function OrderLeft() {
  const [active, setActive] = useState(0);

  return (
    <>
      <ul className="w-[80px]">
        <List
          className="rounded-[4px_4px_0px_0px]"
          icon={
            active === 0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  id="ic_delevery_on_h24_"
                  data-name="ic_delevery_on(h24)"
                  transform="translate(-0.402 0)"
                >
                  <rect
                    id="area"
                    width="24"
                    height="24"
                    transform="translate(0.402 0)"
                    fill="none"
                  />
                  <g id="ic_배달" transform="translate(4.548 1.925)">
                    <path
                      id="패스_14669"
                      data-name="패스 14669"
                      d="M6.239,8.62A6.217,6.217,0,0,0,.75,14.65V19.2a2.6,2.6,0,0,0,2.675,2.53H6.239"
                      transform="translate(-0.75 -4.074)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <path
                      id="패스_14670"
                      data-name="패스 14670"
                      d="M16.53,8.62a6.217,6.217,0,0,1,5.489,6.03V19.2a2.6,2.6,0,0,1-2.675,2.53H17.285"
                      transform="translate(-7.609 -4.074)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <path
                      id="패스_14671"
                      data-name="패스 14671"
                      d="M12.4,29.944v.477a2.136,2.136,0,0,1-2.061,2.2,2.133,2.133,0,0,1-2.056-2.2V26.593a2.133,2.133,0,0,1,2.056-2.2,2.136,2.136,0,0,1,2.061,2.2v3.35"
                      transform="translate(-2.898 -12.314)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <path
                      id="패스_14622"
                      data-name="패스 14622"
                      d="M9.914,3.293h2.417"
                      transform="translate(0.656 -0.331)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                    />
                    <path
                      id="패스_14668"
                      data-name="패스 14668"
                      d="M9.914,3.293h2.417"
                      transform="translate(-8.49 -0.331)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                    />
                    <path
                      id="패스_14672"
                      data-name="패스 14672"
                      d="M8.676,4.922A2.677,2.677,0,0,1,8.27,3.495a2.745,2.745,0,0,1,5.489,0,2.677,2.677,0,0,1-.406,1.427,2.38,2.38,0,0,1-.29.395,1.043,1.043,0,0,1-.11.116,2.734,2.734,0,0,1-3.987-.116,2.38,2.38,0,0,1-.29-.395"
                      transform="translate(-3.81 -0.75)"
                      fill="none"
                      stroke="#fff"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                    />
                  </g>
                </g>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  id="ic_delevery_off_h24_"
                  data-name="ic_delevery_off(h24)"
                  transform="translate(-0.402 0)"
                >
                  <rect
                    id="area"
                    width="24"
                    height="24"
                    transform="translate(0.402 0)"
                    fill="none"
                  />
                  <g id="ic_배달" transform="translate(4.548 1.925)">
                    <path
                      id="패스_14669"
                      data-name="패스 14669"
                      d="M6.239,8.62A6.217,6.217,0,0,0,.75,14.65V19.2a2.6,2.6,0,0,0,2.675,2.53H6.239"
                      transform="translate(-0.75 -4.074)"
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.5"
                    />
                    <path
                      id="패스_14670"
                      data-name="패스 14670"
                      d="M16.53,8.62a6.217,6.217,0,0,1,5.489,6.03V19.2a2.6,2.6,0,0,1-2.675,2.53H17.285"
                      transform="translate(-7.609 -4.074)"
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.5"
                    />
                    <path
                      id="패스_14671"
                      data-name="패스 14671"
                      d="M12.4,29.944v.477a2.136,2.136,0,0,1-2.061,2.2,2.133,2.133,0,0,1-2.056-2.2V26.593a2.133,2.133,0,0,1,2.056-2.2,2.136,2.136,0,0,1,2.061,2.2v3.35"
                      transform="translate(-2.898 -12.314)"
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.5"
                    />
                    <path
                      id="패스_14622"
                      data-name="패스 14622"
                      d="M9.914,3.293h2.417"
                      transform="translate(0.656 -0.331)"
                      fill="none"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                    />
                    <path
                      id="패스_14668"
                      data-name="패스 14668"
                      d="M9.914,3.293h2.417"
                      transform="translate(-8.49 -0.331)"
                      fill="none"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                    />
                    <path
                      id="패스_14672"
                      data-name="패스 14672"
                      d="M8.676,4.922A2.677,2.677,0,0,1,8.27,3.495a2.745,2.745,0,0,1,5.489,0,2.677,2.677,0,0,1-.406,1.427,2.38,2.38,0,0,1-.29.395,1.043,1.043,0,0,1-.11.116,2.734,2.734,0,0,1-3.987-.116,2.38,2.38,0,0,1-.29-.395"
                      transform="translate(-3.81 -0.75)"
                      fill="none"
                      stroke="#000"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                    />
                  </g>
                </g>
              </svg>
            )
          }
          text="배달"
          isActive={active === 0}
          onClick={() => setActive(0)}
        ></List>
        <List
          className="rounded-[0px_0px_4px_4px]"
          icon={
            active === 1 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  id="ic_pickup_on_h24_"
                  data-name="ic_pickup_on(h24)"
                  transform="translate(-3.106 -3.192)"
                >
                  <rect
                    id="area"
                    width="24"
                    height="24"
                    transform="translate(3.106 3.192)"
                    fill="none"
                  />
                  <g
                    id="그룹_140"
                    data-name="그룹 140"
                    transform="translate(6.489 5.803)"
                  >
                    <g
                      id="합치기_37"
                      data-name="합치기 37"
                      transform="translate(2.616 0.389)"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M2.783,18V6.517L0,0H12.218L15,6.517V16a2,2,0,0,1-2,2Z"
                        stroke="none"
                      />
                      <path
                        d="M 12.99960041046143 16.5 C 13.27519035339355 16.5 13.49940013885498 16.275390625 13.49940013885498 15.99930000305176 L 13.49940013885498 6.823656558990479 L 11.22686576843262 1.5 L 2.27154541015625 1.5 L 4.162290096282959 5.927840232849121 C 4.241809844970703 6.114049911499023 4.282800197601318 6.314430236816406 4.282800197601318 6.516900062561035 L 4.282800197601318 16.5 L 12.99960041046143 16.5 M 12.99960041046143 18 L 2.782799959182739 18 L 2.782799959182739 6.516900062561035 L 6.942748598248727e-08 0 L 12.21749973297119 0 L 14.99940013885498 6.516900062561035 L 14.99940013885498 15.99930000305176 C 14.99940013885498 17.10449981689453 14.10389995574951 18 12.99960041046143 18 Z"
                        stroke="none"
                        fill="#fff"
                      />
                    </g>
                    <path
                      id="패스_14723"
                      data-name="패스 14723"
                      d="M173.745,592.264h3"
                      transform="translate(-165 -587.966)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                    />
                  </g>
                  <path
                    id="패스_14724"
                    data-name="패스 14724"
                    d="M7,12H2.635A1.471,1.471,0,0,1,1,10.313V1.425l2.664-6.3"
                    transform="translate(6.106 11.442)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.5"
                  />
                </g>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  id="ic_pickup_off_h24_"
                  data-name="ic_pickup_off(h24)"
                  transform="translate(-3.106 -3.192)"
                >
                  <rect
                    id="area"
                    width="24"
                    height="24"
                    transform="translate(3.106 3.192)"
                    fill="none"
                  />
                  <g
                    id="그룹_140"
                    data-name="그룹 140"
                    transform="translate(6.489 5.803)"
                  >
                    <g
                      id="합치기_37"
                      data-name="합치기 37"
                      transform="translate(2.616 0.389)"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M2.783,18V6.517L0,0H12.218L15,6.517V16a2,2,0,0,1-2,2Z"
                        stroke="none"
                      />
                      <path
                        d="M 12.99960041046143 16.5 C 13.27519035339355 16.5 13.49940013885498 16.275390625 13.49940013885498 15.99930000305176 L 13.49940013885498 6.823656558990479 L 11.22686576843262 1.5 L 2.27154541015625 1.5 L 4.162290096282959 5.927840232849121 C 4.241809844970703 6.114049911499023 4.282800197601318 6.314430236816406 4.282800197601318 6.516900062561035 L 4.282800197601318 16.5 L 12.99960041046143 16.5 M 12.99960041046143 18 L 2.782799959182739 18 L 2.782799959182739 6.516900062561035 L 6.942748598248727e-08 0 L 12.21749973297119 0 L 14.99940013885498 6.516900062561035 L 14.99940013885498 15.99930000305176 C 14.99940013885498 17.10449981689453 14.10389995574951 18 12.99960041046143 18 Z"
                        stroke="none"
                        fill="#000"
                      />
                    </g>
                    <path
                      id="패스_14723"
                      data-name="패스 14723"
                      d="M173.745,592.264h3"
                      transform="translate(-165 -587.966)"
                      fill="none"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                    />
                  </g>
                  <path
                    id="패스_14724"
                    data-name="패스 14724"
                    d="M7,12H2.635A1.471,1.471,0,0,1,1,10.313V1.425l2.664-6.3"
                    transform="translate(6.106 11.442)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="1.5"
                  />
                </g>
              </svg>
            )
          }
          text="픽업"
          isActive={active === 1}
          onClick={() => setActive(1)}
        ></List>
        <li className="w-full mt-[6px]">
          <Link
            to="/"
            className="border border-[#DDE0E3] block text-[13px] rounded-[4px]
          leading-[32px] tracking-[-0.025em] text-black h-[32px] text-center
          px-[13px]
          "
          >
            매장찾기
          </Link>
        </li>
      </ul>
    </>
  );
}
