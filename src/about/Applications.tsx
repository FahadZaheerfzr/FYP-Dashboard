import React from 'react'
import {  } from '../feature/VerticalFeatureRow'

type ApplicationProps = {
  forwardRef?: React.ForwardedRef<HTMLDivElement>;
  ref?:
    | React.RefObject<HTMLDivElement>
    | React.MutableRefObject<HTMLDivElement>;
};

export default function Applications({forwardRef, ref}:ApplicationProps) {
  return (
    <div ref={forwardRef || ref} className='w-full flex h-screen overflow-hidden'>
      <div className='w-1/2 h-full flex flex-col pl-20 '>
        <span className='text-4xl text-green-400 font-bold mt-10'>
          Applications
        </span>


        <span className='text-3xl mt-10 text-gray-200 font-semibold'>
          The Military
        </span>

        <span className='mt-2 text-xl leading-9'>
          AMC is used by the military for defense to identify and classify different types of communication signals in order to gain a tactical advantage.
        </span>
        <span className='text-3xl mt-10 text-gray-200 font-semibold'>
          Civil Monitoring
        </span>

        <span className='mt-2 text-xl leading-9'>
          Monitoring civil scenarios involves the identification of various communication signals in order to prevent potential security breaches.
        </span>


        <span className='text-3xl mt-10 text-gray-200 font-semibold'>
          Electronic Warfare
        </span>

        <span className='mt-2 text-xl leading-9'>
          Electronic warfare involves disrupting enemy communication through the identification and manipulation of signals.
        </span>
        <span className='text-3xl mt-10 text-gray-200 font-semibold'>
          Communication Disruption
        </span>

        <span className='mt-2 text-xl leading-9'>
          The ability to disrupt enemy communication is an important application of AMC in military operations.
        </span>

      </div>
      <div className='w-1/2 h-full bg-green-400 -skew-x-6 relative left-10'>
        <div className=''>

        </div>
      </div>

    </div>
  )
}
