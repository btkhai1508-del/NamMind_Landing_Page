import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ArrowUpRightIcon } from './PositivusIcons';
import {
  SeoIllustration,
  PpcIllustration,
  SocialIllustration,
  EmailIllustration,
  ContentIllustration,
  AnalyticsIllustration,
} from './PositivusIllustrations';

interface ServiceCardData {
  id: number;
  badge1: string;
  badge2: string;
  bg: string;
  badgeBg: string;
  textColor: string;
  arrowBg: string;
  arrowColor: string;
  linkTextColor: string;
  illustration: React.ReactNode;
}

export const Services: React.FC = () => {
  const cards: ServiceCardData[] = [
    {
      id: 1,
      badge1: 'Subtitle 1',
      badge2: 'Subtitle 2',
      bg: '#F3F3F3',
      badgeBg: '#B9FF66',
      textColor: '#000000',
      arrowBg: '#191A23',
      arrowColor: '#B9FF66',
      linkTextColor: '#000000',
      illustration: <SeoIllustration />,
    },
    {
      id: 2,
      badge1: 'Subtitle 3',
      badge2: 'Subtitle 4',
      bg: '#B9FF66',
      badgeBg: '#FFFFFF',
      textColor: '#000000',
      arrowBg: '#191A23',
      arrowColor: '#B9FF66',
      linkTextColor: '#000000',
      illustration: <PpcIllustration />,
    },
    {
      id: 3,
      badge1: 'Subtitle 5',
      badge2: 'Subtitle 6',
      bg: '#191A23',
      badgeBg: '#FFFFFF',
      textColor: '#000000',
      arrowBg: '#FFFFFF',
      arrowColor: '#000000',
      linkTextColor: '#FFFFFF',
      illustration: <SocialIllustration />,
    },
    {
      id: 4,
      badge1: 'Subtitle 7',
      badge2: 'Subtitle 8',
      bg: '#F3F3F3',
      badgeBg: '#B9FF66',
      textColor: '#000000',
      arrowBg: '#191A23',
      arrowColor: '#B9FF66',
      linkTextColor: '#000000',
      illustration: <EmailIllustration />,
    },
    {
      id: 5,
      badge1: 'Subtitle 9',
      badge2: 'Subtitle 10',
      bg: '#B9FF66',
      badgeBg: '#FFFFFF',
      textColor: '#000000',
      arrowBg: '#191A23',
      arrowColor: '#B9FF66',
      linkTextColor: '#000000',
      illustration: <ContentIllustration />,
    },
    {
      id: 6,
      badge1: 'Subtitle 11',
      badge2: 'Subtitle 12',
      bg: '#191A23',
      badgeBg: '#B9FF66',
      textColor: '#000000',
      arrowBg: '#FFFFFF',
      arrowColor: '#000000',
      linkTextColor: '#FFFFFF',
      illustration: <AnalyticsIllustration />,
    },
  ];

  return (
    <section id="services" className="w-full py-12 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subheading */}
        <SectionHeading
          title="Section Title 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />

        {/* Cards Grid: 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {cards.map((card) => (
            <div
              key={card.id}
              style={{ backgroundColor: card.bg }}
              className="group border border-[#191A23] rounded-[45px] p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 min-h-[310px] positivus-shadow hover:-translate-y-1 transition-all duration-200"
            >
              {/* Left Column: Dual Badges and Link */}
              <div className="flex flex-col justify-between h-full gap-8 sm:gap-16">
                {/* Heading Badges (h3) */}
                <div className="flex flex-col items-start gap-1">
                  <span
                    style={{ backgroundColor: card.badgeBg, color: card.textColor }}
                    className="inline-block px-[7px] py-0 rounded-[7px] font-['Space_Grotesk'] font-medium text-[24px] sm:text-[30px] leading-[34px] sm:leading-[38px]"
                  >
                    {card.badge1}
                  </span>
                  <span
                    style={{ backgroundColor: card.badgeBg, color: card.textColor }}
                    className="inline-block px-[7px] py-0 rounded-[7px] font-['Space_Grotesk'] font-medium text-[24px] sm:text-[30px] leading-[34px] sm:leading-[38px]"
                  >
                    {card.badge2}
                  </span>
                </div>

                {/* Learn More link with round arrow button */}
                <a
                  href="#contact"
                  className="flex items-center gap-4 group/link cursor-pointer"
                  aria-label="Learn more about this service"
                >
                  <ArrowUpRightIcon
                    circleBg={card.arrowBg}
                    arrowColor={card.arrowColor}
                  />
                  <span
                    style={{ color: card.linkTextColor }}
                    className="font-['Space_Grotesk'] font-normal text-[18px] sm:text-[20px] leading-[28px] group-hover/link:underline"
                  >
                    Learn More
                  </span>
                </a>
              </div>

              {/* Right Column: Custom Illustration */}
              <div className="self-center sm:self-auto shrink-0 flex items-center justify-center">
                {card.illustration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
