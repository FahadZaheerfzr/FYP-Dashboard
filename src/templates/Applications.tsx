import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";

type ApplicationProps = {
  title: string;
  forwardRef?: React.ForwardedRef<HTMLDivElement>;
  ref?:
    | React.RefObject<HTMLDivElement>
    | React.MutableRefObject<HTMLDivElement>;
};

const Application = ({ title, forwardRef, ref }: ApplicationProps) => (
  <div ref={forwardRef || ref}>
    <Section title={title} yPadding="py-20">
      <VerticalFeatureRow
        title="The Military"
        description="AMC is used by the military for defense to identify and classify different types of communication signals in order to gain a tactical advantage."
        image="/assets/images/feature.svg"
        imageAlt="The Military"
        translateFrom="left"
      />
      <VerticalFeatureRow
        reverse
        title="Civil Monitoring"
        description="Monitoring civil scenarios involves the identification of various communication signals in order to prevent potential security breaches."
        image="/assets/images/feature2.svg"
        imageAlt="Civil Monitoring"
      />
      <VerticalFeatureRow
        title="Electronic Warfare"
        description="Electronic warfare involves disrupting enemy communication through the identification and manipulation of signals."
        image="/assets/images/feature3.svg"
        imageAlt="Electronic Warfare"
        translateFrom="left"
      />
      <VerticalFeatureRow
        reverse
        title="Communication Disruption"
        description="The ability to disrupt enemy communication is an important application of AMC in military operations."
        image="/assets/images/feature2.svg"
        imageAlt="Communication Disruption"
      />
    </Section>
  </div>
);

export { Application };
