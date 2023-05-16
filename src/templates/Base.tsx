import { useRef } from 'react';


import { Meta } from '../layout/Meta';

import { Footer } from './Footer';

import { Hero } from './Hero';

import { AppConfig } from '../utils/AppConfig';
import { Tools } from './Tools';
import Applications from '../about/Applications';
import Scope from '../scope/Scope';

const Base = () => {
  const scopeRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<HTMLDivElement>(null);
  const toolRef = useRef<HTMLDivElement>(null);

  // • Documentation and training materials for users and administrators. 



  return (
    <div className="antialiased text-white bg-gray-900">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero scopeRef={scopeRef} appRef={appRef} toolRef={toolRef} />
      <Applications forwardRef={appRef} />
      <Scope forwardRef={scopeRef} />
      <div className='mt-20'>
        <Tools title="Tools" forwardRef={toolRef} />
      </div>
      <Footer />
    </div>
  );
};

export { Base };
