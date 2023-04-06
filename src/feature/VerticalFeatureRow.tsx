import className from "classnames";
import { useRouter } from "next/router";
import { Transition } from "@headlessui/react";
import { useRef, useEffect, useState } from "react";

type IVerticalFeatureRowProps = {
  title?: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  translateFrom?: string;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    "mt-20",
    "flex",
    "flex-wrap",
    "items-center",
    {
      "flex-row-reverse": props.reverse,
    }
  );

  const imageRef = useRef<HTMLDivElement>(null);
  const [showImage, setShowImage] = useState(false);

  const router = useRouter();


  useEffect(() => {
    if (imageRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShowImage(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(imageRef.current);
    }
  }, [imageRef.current]);

  return (
    <div className={verticalFeatureClass} ref={imageRef}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        {props.title && (
          <h3 className="text-3xl text-gray-600 font-semibold">
            {props.title}
          </h3>
        )}
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>

      <div className="w-full sm:w-1/2 p-6 relative">
        <Transition
          show={showImage}
          //fade in from right
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom={props.translateFrom==="left"?"-translate-x-full opacity-0":"translate-x-full opacity-0"}
          enterTo="translate-x-0 opacity-100"
        >
          <img
            src={`${router.basePath}${props.image}`}
            alt={props.imageAlt}
            className="absolute w-64 h-64 inset-0 m-auto"
          />
        </Transition>
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
