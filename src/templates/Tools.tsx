import { Section } from "../layout/Section";
import { FaPython, FaDatabase, FaAws, FaToolbox } from "react-icons/fa";
import { Tool } from "../feature/Tool";

type ToolsProps = {
  title: string;
  forwardRef?: React.ForwardedRef<HTMLDivElement>;
  ref?:
    | React.RefObject<HTMLDivElement>
    | React.MutableRefObject<HTMLDivElement>;
};

const Tools = ({ title, forwardRef, ref }: ToolsProps) => (
  <div ref={forwardRef || ref}>
    <Section title={title} yPadding="py-20">
      <div className="flex flex-wrap justify-center mt-20">
        <Tool title="Python" Icon={FaPython} />
        <Tool title="Pandas" Icon={FaDatabase} />
        <Tool title="AWS" Icon={FaAws} />
        <Tool title="Tensor Flow" Icon={FaToolbox} />
      </div>
    </Section>
  </div>
);

export { Tools };
