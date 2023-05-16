import Image from 'next/image';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

type Props = {
  appRef: React.RefObject<HTMLDivElement>;
  scopeRef: React.RefObject<HTMLDivElement>;
  toolRef: React.RefObject<HTMLDivElement>;
}

const Hero = ({  scopeRef, appRef, toolRef }: Props) => {

  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Background color=" h-screen bg-gray-900 ">

      <Section yPadding="py-6">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <Logo xl />

          <div className="hidden md:flex space-x-8">
            <button className="text-white font-medium" onClick={() => handleScrollToSection(appRef)}>Applications</button>
            <button className="text-white font-medium" onClick={() => handleScrollToSection(scopeRef)}>Scope</button>
            <button className="text-white font-medium" onClick={() => handleScrollToSection(toolRef)}>Tools</button>
          </div>

          <div className="flex md:hidden">
            <button className="text-white">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>
      </Section>

      <Section yPadding="pt-10 pb-32 h-screen" flex={true}>
        <div className='w-1/2'>
          <HeroOneButton
            title="Automatic Modulation Classification"
            description="Automated Modulation Classification (AMC) is used to identify the type of modulation received in wireless communication systems. This process improves spectrum utilization and is used in various scenarios, such as electronic warfare and civil monitoring. In a project, the implementation of a Deep Learning-based modulation classifier is planned due to the reliability and accuracy expected, especially in low signal-to-noise ratios (SNR). However, challenges such as discriminating higher-order modulations like FSK and m-QAM exist within AMC."
          />
        </div>

        <div className='w-1/2 h-full flex justify-center items-center'>
          <Image className='animate' src="/assets/images/signals.png" alt="hero" width={500} height={500} />
        </div>
      </Section>



    </Background>
  );
};

export { Hero };
