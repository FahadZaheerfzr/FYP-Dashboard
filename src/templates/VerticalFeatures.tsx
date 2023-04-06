import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";

type IVerticalFeaturesProps = {
  title: string;
  forwardRef?: React.ForwardedRef<HTMLDivElement>;
  ref?:
    | React.RefObject<HTMLDivElement>
    | React.MutableRefObject<HTMLDivElement>;
};

const VerticalFeatures = ({
  title,
  forwardRef,
  ref,
}: IVerticalFeaturesProps) => (
  <div
  ref = {forwardRef||ref}
  >
    <Section
      title={title}
    >
      <VerticalFeatureRow
        description="The AMC system uses Deep Learning to automatically identify modulation types, such as FSK, PSK, and m-QAM, in received signals. It's commonly used in telecommunications and other signal processing applications. In addition, preventing audio leaks of politicians is an important issue that requires attention."
        image="/assets/images/feature.svg"
        imageAlt="First feature alt text"
      />
    </Section>
  </div>
);

export { VerticalFeatures };
