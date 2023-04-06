import { useRef } from 'react';

import { VerticalFeatures } from './VerticalFeatures';
import {Scope} from './Scope';

import { Meta } from '../layout/Meta';

import { Footer } from './Footer';

import { Hero } from './Hero';

import { AppConfig } from '../utils/AppConfig';
import { Application } from './Applications';
import { Tools } from './Tools';

const Base = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<HTMLDivElement>(null);
  const toolRef = useRef<HTMLDivElement>(null);
 
// • Documentation and training materials for users and administrators. 
  const scopeList = [
    'Analysis and classification of signals into various modulation types (AM, FM, PM, QAM).',
    'Classify Modulations on both simulated and real-world data.',
    'Real-time processing of signals with low SNR (Signal-to-Noise Ratio).',
    'Testing and verification of the system to ensure it functions correctly and meets the required specifications.',
    'Documentation and training materials for users and administrators.',
  ];


  return (
    <div className="antialiased text-white bg-gray-900">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero aboutRef={aboutRef} scopeRef={scopeRef} appRef={appRef} toolRef={toolRef} />
      <VerticalFeatures title="About The Project" forwardRef={aboutRef} />
      <Scope title="Scope" forwardRef={scopeRef} list={scopeList} />
      <Application title="Applications" forwardRef={appRef} />
      <Tools title="Tools" forwardRef={toolRef} />
      <Footer />
    </div>
  );
};

export { Base };
