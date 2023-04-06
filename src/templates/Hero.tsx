import Image from 'next/image';

import { Logo } from './Logo';
import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import Typewriter from 'typewriter-effect';

type Props = {
  aboutRef: React.RefObject<HTMLDivElement>;
  scopeRef: React.RefObject<HTMLDivElement>;
  appRef: React.RefObject<HTMLDivElement>;
  toolRef: React.RefObject<HTMLDivElement>;
}

const Hero = ({ aboutRef, scopeRef, appRef, toolRef }: Props) => {

  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Background color="bg-gray-900 h-screen">
      <Section yPadding="py-6">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <Logo xl />

          <div className="hidden md:flex space-x-8">
            <button className="text-white font-medium" onClick={() => handleScrollToSection(aboutRef)}>About</button>
            <button className="text-white font-medium" onClick={() => handleScrollToSection(scopeRef)}>Scope</button>
            <button className="text-white font-medium" onClick={() => handleScrollToSection(appRef)}>Applications</button>
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

      <Section yPadding="pt-20 pb-32">
        <div className="flex justify-center">
          <div className="animate-spin-slow ">
            <Image src="/images/logo.png" width={120} height={80} />
          </div>
        </div>
        <HeroOneButton
          title="Automatic Modulation Classification"
          description="The AMC system is designed to automatically classify signals into various modulation types such 
          as amplitude modulation (AM), frequency modulation (FM), or phase modulation (PM)."
        />
      </Section>
    </Background>
  );
};

export { Hero };
