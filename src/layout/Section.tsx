import { ReactNode } from "react";
import Typewriter from "typewriter-effect";

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children?: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-lg mx-auto px-3 ${
      props.yPadding ? props.yPadding : "py-16"
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl text-green-400 font-bold">
            <Typewriter
              options={{
                strings: [props.title],
                autoStart: true,
                //change speed
                delay: 100,
                pauseFor: 100000,
                loop: true,
              }}
            />
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
