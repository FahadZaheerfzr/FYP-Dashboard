import { Section } from "../layout/Section";
import Typewriter from "typewriter-effect";
import { useRef, useState, useEffect } from "react";

type scopeProps = {
  title: string;
  forwardRef?: React.ForwardedRef<HTMLDivElement>;
  ref?:
    | React.RefObject<HTMLDivElement>
    | React.MutableRefObject<HTMLDivElement>;
  list?: string[];
};

const Scope = ({ title, forwardRef, ref, list }: scopeProps) => {
  return (
    <div ref={forwardRef || ref} className="h-full">
      <Section  title={title}></Section>
      <ul className="flex flex-col items-start justify-start w-full  mx-auto space-y-2 text-xl px-10">
        {list?.map((item, index) => (
          <li key={index} className="flex items-start py-2 ml-10 space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mt-1 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 10.293a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L12 8.414V14a1 1 0 01-2 0V8.414l-1.293 1.293a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-200 text-2xl">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Scope };
