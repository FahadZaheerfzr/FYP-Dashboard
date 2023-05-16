import { ReactNode } from "react";
import Typewriter from "typewriter-effect";

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children?: ReactNode;
  typeWriter?: boolean;
  class?: string;
  flex?: boolean;
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-xl mx-auto px-0 ${props.yPadding ? props.yPadding : "py-16"
      } ${props.flex ? "flex" : ""}`}
  >
    {(props.title || props.description) && (
      <div className=" text-center">
        {props.title && (
          <h2 className={`text-4xl text-green-400 font-bold ${props.class}`}>
            {props.typeWriter ?
              <Typewriter
                options={{
                  strings: [props.title],
                  autoStart: true,
                  //change speed
                  delay: 100,
                  pauseFor: 100000,
                  loop: true,
                }} /> :
              props.title
            }

          </h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">
            <Typewriter
              options={{
                strings: [props.description],
                autoStart: true,
                //change speed
                delay: 70,
                pauseFor: 100000,
                loop: true,
              }}
            />
          </div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
