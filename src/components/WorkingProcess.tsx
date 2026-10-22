import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';

interface ProcessStep {
  number: string;
  title: string;
  content: string;
}

export const WorkingProcess: React.FC = () => {
  const [openStep, setOpenStep] = useState<number | null>(0);

  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Subtitle 14',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    },
    {
      number: '02',
      title: 'Subtitle 15',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      number: '03',
      title: 'Subtitle 16',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      number: '04',
      title: 'Subtitle 17',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      number: '05',
      title: 'Subtitle 18',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      number: '06',
      title: 'Subtitle 19',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };

  return (
    <section id="process" className="w-full py-12 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Section Title 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          maxWidthDesc="max-w-[292px]"
        />

        {/* Accordion Steps List */}
        <div className="flex flex-col gap-6 sm:gap-7">
          {steps.map((step, idx) => {
            const isOpen = openStep === idx;
            return (
              <div
                key={idx}
                style={{ backgroundColor: isOpen ? '#B9FF66' : '#F3F3F3' }}
                className="border border-[#191A23] rounded-[45px] p-6 sm:p-10 lg:p-12 positivus-shadow transition-all duration-300"
              >
                {/* Header row: Number + Subtitle + Plus/Minus Toggle */}
                <div
                  onClick={() => toggleStep(idx)}
                  className="flex items-center justify-between cursor-pointer select-none"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-['Space_Grotesk'] font-medium text-[36px] sm:text-[50px] lg:text-[60px] leading-none text-black w-14 sm:w-20">
                      {step.number}
                    </span>
                    <h3 className="font-['Space_Grotesk'] font-medium text-[20px] sm:text-[26px] lg:text-[30px] leading-[38px] text-black">
                      {step.title}
                    </h3>
                  </div>

                  {/* Circle toggle button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleStep(idx);
                    }}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F3F3F3] border border-[#191A23] flex items-center justify-center shrink-0 hover:scale-105 transition-transform cursor-pointer"
                    aria-label={isOpen ? 'Collapse step' : 'Expand step'}
                  >
                    {isOpen ? (
                      <svg width="20" height="4" viewBox="0 0 20 4" fill="none">
                        <line x1="0" y1="2" x2="20" y2="2" stroke="#191A23" strokeWidth="3.5" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <line x1="10" y1="2" x2="10" y2="18" stroke="#191A23" strokeWidth="3.5" strokeLinecap="round" />
                        <line x1="2" y1="10" x2="18" y2="10" stroke="#191A23" strokeWidth="3.5" strokeLinecap="round" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Expanded content */}
                {isOpen && (
                  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-black/80 animate-fadeIn">
                    <p className="font-['Space_Grotesk'] font-normal text-[16px] sm:text-[18px] leading-[23px] text-black">
                      {step.content}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
