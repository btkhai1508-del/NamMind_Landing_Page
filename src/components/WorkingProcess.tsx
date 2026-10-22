import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';

interface ProcessStep {
  number: string;
  title: string;
  content: React.ReactNode;
}

export const WorkingProcess: React.FC = () => {
  const [openStep, setOpenStep] = useState<number | null>(0);

  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'QUÀ TẶNG #1',
      content: (
        <div className="space-y-3.5 font-['Space_Grotesk'] text-[16px] sm:text-[18px] leading-[26px] sm:leading-[30px] text-[#191A23]">
          <div className="pb-3 border-b border-[#191A23]/20">
            <h4 className="font-black text-[20px] sm:text-[25px] lg:text-[28px] text-black">
              Hệ Thống Nội Dung Đăng Lên MXH Làm Sẵn 365 Ngày
            </h4>
          </div>
          <p>Mạng xã hội là mỏ vàng miễn phí cho bất kỳ ai biết cách khai thác....</p>
          <p>Vấn đề? 99% bỏ cuộc vì không biết đăng gì mỗi ngày.</p>
          <p className="font-black text-black text-[17px] sm:text-[19px]">
            👉 Tôi đã làm sẵn cho bạn: 365 nội dung đỉnh cao cho 365 ngày.
          </p>
          <p>Chỉ việc sao chép, và biến Facebook thành cỗ máy hút khách hàng không giới hạn.</p>
          <p className="pt-1 font-medium text-neutral-900">
            Bạn nhận được món quà đắt tiền này <strong className="font-black text-black">MIỄN PHÍ</strong> khi tham gia thử thách 2 ngày Affiliate cùng chúng tôi. (tiết lộ chỉ có 7 phần quà cho 7 chỗ ngồi duy nhất) Nhanh tay mới kịp.
          </p>

          {/* Trị giá ở dưới cùng của card, bold lớn với font size cực đại */}
          <div className="mt-6 pt-5 border-t-2 border-[#191A23]/25 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
            <span className="font-['Space_Grotesk'] font-extrabold text-[20px] sm:text-[26px] uppercase tracking-wider text-[#191A23]">
              Trị giá:
            </span>
            <span className="font-['Space_Grotesk'] font-black text-[34px] sm:text-[44px] lg:text-[50px] leading-none text-[#E11D48] tracking-tight">
              10.868.000 VNĐ
            </span>
          </div>
        </div>
      ),
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
          title="QUÀ TẶNG KHỔNG LỒ"
          description="CHỈ 7 SUẤT CHO 7 NGƯỜI CÙNG TÔI PHÁ ĐẢO DÒNG THU NHẬP 30 TRIỆU TỪ AFFILIATE- TỰ ĐỘNG"
          maxWidthDesc="max-w-[480px]"
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

                {/* Content Area (shown when open) */}
                {isOpen && (
                  <div className="mt-6 pt-6 border-t border-[#191A23] font-['Space_Grotesk'] font-normal text-[16px] sm:text-[18px] leading-[26px] sm:leading-[30px] text-black">
                    {step.content}
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
