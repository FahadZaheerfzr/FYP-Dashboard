import React from 'react'
import { } from '../feature/VerticalFeatureRow'

type ScopeProps = {
  forwardRef?: React.ForwardedRef<HTMLDivElement>;
  ref?:
  | React.RefObject<HTMLDivElement>
  | React.MutableRefObject<HTMLDivElement>;
};

const scopeList = [
  'Analysis and classification of signals into various modulation types (AM, FM, PM, QAM).',
  'Classify Modulations on both simulated and real-world data.',
  'Real-time processing of signals with low SNR (Signal-to-Noise Ratio).',
  'Testing and verification of the system to ensure it functions correctly and meets the required specifications.',
  'Documentation and training materials for users and administrators.',
  'Developing the AMC system to meet specific application requirements can also be included in the scope. For example, the AMC system can be optimized for satellite communication, military communication, or wireless communication.'
];

export default function Scope({ forwardRef, ref }: ScopeProps) {
  return (
    <div ref={forwardRef || ref} className='w-full flex h-screen overflow-hidden'>

      <div className='w-1/2 h-full bg-green-400 -skew-x-6 relative right-10'>
        <div className=''>

        </div>
      </div>

      <div className='w-1/2 h-full flex flex-col pl-20 '>
        <span className='text-4xl text-green-400 font-bold mt-10'>
          Scope
        </span>


        {scopeList.map((item, index) => (
          <div key={index} className='flex items-start py-4 text-justify mr-10 space-x-2'>
            <li>

              <span className='text-gray-200 text-2xl'>
                {item}
              </span>
            </li>
          </div>
        ))}
      </div>

    </div>
  )
}
