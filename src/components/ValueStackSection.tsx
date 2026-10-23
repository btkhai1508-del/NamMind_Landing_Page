import React from 'react';
import { SectionHeading } from './SectionHeading';

interface ValueStackSectionProps {
  onCtaClick?: () => void;
}

export const ValueStackSection: React.FC<ValueStackSectionProps> = ({ onCtaClick }) => {
  const items = [
    {
      type: 'course',
      label: 'CHƯƠNG TRÌNH CHÍNH',
      title: 'Thử Thách 2 ngày Tự Động-Affiliate',
      value: '12.970.000 vnđ',
      isVoGia: false,
    },
    {
      type: 'gift',
      label: 'TẶNG #1',
      title: 'Hệ Thống Nội Dung Đăng Lên MXH Làm Sẵn 365 Ngày',
      value: '10.970.000 vnđ',
      isVoGia: false,
    },
    {
      type: 'gift',
      label: 'TẶNG #2',
      title: 'Hệ Thống Nội Dung Chia Sẻ Giá Trị Làm Sẵn 365 Ngày',
      value: '12.970.000 vnđ',
      isVoGia: false,
    },
    {
      type: 'gift',
      label: 'TẶNG #3',
      title: 'Hệ Thống Xây Thương Hiệu Chuyên Gia',
      value: '12.970.000 vnđ',
      isVoGia: false,
    },
    {
      type: 'gift',
      label: 'TẶNG #4',
      title: 'Hệ Thống Xây Kênh Triệu View Thần Tốc',
      value: '7.970.000 vnđ',
      isVoGia: false,
    },
    {
      type: 'gift',
      label: 'TẶNG #5',
      title: 'Hệ Thống Đào Tạo Tự Nhân Bản',
      value: '9.970.000 vnđ',
      isVoGia: false,
    },
    {
      type: 'gift',
      label: '#TẶNG #6',
      title: 'Hệ Thống Tài Liệu Phát Triển Trọn Đời',
      value: '39.970.000 vnđ',
      isVoGia: false,
    },
    {
      type: 'gift',
      label: 'TẶNG #7',
      title: 'Bí Mật Hệ Thống Dòng Tiền Trọn Đời',
      value: '19.970.000 vnđ',
      isVoGia: false,
    },
    {
      type: 'gift',
      label: 'TẶNG #8',
      title: 'Nhóm Kín Bí Mật Dòng Tiền',
      value: 'VÔ GIÁ',
      isVoGia: true,
    },
  ];

  return (
    <section id="value-stack" className="w-full py-14 sm:py-20 bg-[#F3F3F3]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="TỔNG KẾT QUÀ TẶNG"
          description="ĐÂY LÀ TẤT CẢ NHỮNG GÌ BẠN SẼ NHẬN ĐƯỢC KHI THAM GIA THỬ THÁCH"
          titleClassName="font-black uppercase tracking-tight text-[22px] sm:text-[32px] md:text-[38px]"
          descClassName="font-black text-[17px] sm:text-[20px] lg:text-[22px] leading-snug uppercase text-black"
          maxWidthDesc="max-w-[660px]"
        />

        {/* Khung tổng thể Stack Value theo Positivus */}
        <div className="bg-white border-2 border-[#191A23] rounded-[36px] sm:rounded-[45px] p-6 sm:p-10 lg:p-12 positivus-shadow">
          <div className="text-center max-w-[860px] mx-auto mb-8 sm:mb-10">
            <span className="font-['Space_Grotesk'] font-bold text-xs sm:text-sm uppercase tracking-wider text-[#191A23] bg-[#B9FF66] px-4 py-1.5 rounded-[7px]">
              Gói tài nguyên độc quyền
            </span>
            <h3 className="font-['Space_Grotesk'] font-black text-[26px] sm:text-[36px] lg:text-[42px] leading-tight text-[#191A23] mt-3 uppercase">
              ĐÂY LÀ TẤT CẢ BẠN NHẬN ĐƯỢC
            </h3>
            <p className="font-['Space_Grotesk'] font-semibold text-[16px] sm:text-[19px] text-neutral-700 mt-2">
              Khi bạn đăng ký tham gia thử thách 2 ngày ngay hôm nay!
            </p>
          </div>

          {/* Danh sách các phần quà: Dùng Prime Green #B9FF66, bỏ dấu tick, size nút chuyển thành size section title */}
          <div className="space-y-3.5 sm:space-y-4 max-w-[960px] mx-auto">
            {items.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 rounded-[22px] border-2 border-[#191A23] transition-all ${
                  item.isVoGia
                    ? 'bg-[#B9FF66]/20 shadow-[0px_4px_0px_#191A23]'
                    : 'bg-white shadow-[0px_3px_0px_#191A23]'
                }`}
              >
                {/* Phần Trái: Nút TẶNG # size Section Title (Prime Green, bo góc 7px, không dấu tick) + Tiêu đề */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4 flex-1">
                  <div className="shrink-0">
                    <span className="bg-[#B9FF66] text-[#191A23] font-['Space_Grotesk'] font-bold text-[18px] sm:text-[22px] px-3.5 py-1 rounded-[7px] leading-tight whitespace-nowrap inline-flex items-center">
                      {item.label}
                    </span>
                  </div>
                  <h4 className="font-['Space_Grotesk'] font-bold text-[17px] sm:text-[19px] lg:text-[20px] text-[#191A23] leading-snug">
                    {item.title}
                  </h4>
                </div>

                {/* Phần Phải: Trị giá (Nếu là VÔ GIÁ: phóng to lên và có circle màu đỏ theo yêu cầu) */}
                <div className="self-end sm:self-center shrink-0 flex items-center gap-2.5">
                  {item.isVoGia ? (
                    <div className="flex items-center gap-2 bg-red-50 border-2 border-red-500 px-4 py-1.5 rounded-[12px] shadow-sm">
                      {/* Circle của Vô Giá màu đỏ theo yêu cầu */}
                      <span
                        className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-600 shrink-0 inline-block"
                        aria-hidden="true"
                      />
                      <span className="font-['Space_Grotesk'] font-black text-[22px] sm:text-[28px] text-red-600 uppercase tracking-wider leading-none">
                        VÔ GIÁ
                      </span>
                    </div>
                  ) : (
                    <span className="font-['Space_Grotesk'] font-black text-[16px] sm:text-[18px] text-[#191A23] bg-neutral-100 px-3.5 py-1.5 rounded-[10px] border border-[#191A23]/30 whitespace-nowrap">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bảng chốt Tổng kết giá trị */}
          <div className="mt-8 sm:mt-12 pt-8 sm:pt-10 border-t-2 border-dashed border-[#191A23]/30 max-w-[960px] mx-auto">
            <div className="p-6 sm:p-8 bg-[#191A23] text-white rounded-[28px] sm:rounded-[36px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0px_6px_0px_#B9FF66]">
              <div className="text-center md:text-left space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-2 text-neutral-300 font-['Space_Grotesk'] text-[16px] sm:text-[18px]">
                  <span>Thông thường:</span>
                  <span className="line-through text-red-400 font-bold text-[18px] sm:text-[20px]">
                    125.970.000 VNĐ
                  </span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-white font-black text-[22px] sm:text-[28px] uppercase tracking-tight">
                    HÔM NAY:
                  </span>
                  {/* Chữ MIỄN PHÍ dạng highlight không viền bo theo đúng ảnh mẫu thứ 2 */}
                  <span className="text-[#191A23] bg-[#B9FF66] px-4 py-1.5 rounded-[8px] font-black text-[28px] sm:text-[36px] tracking-wide inline-block leading-none">
                    MIỄN PHÍ
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 italic">
                  * Chỉ dành cho đúng 7 suất đăng ký sớm nhất trước khi đóng link
                </p>
              </div>

              {/* Nút đăng ký */}
              <button
                type="button"
                onClick={onCtaClick}
                className="w-full md:w-auto px-8 sm:px-10 py-5 bg-[#B9FF66] hover:bg-white text-[#191A23] font-['Space_Grotesk'] font-black text-[18px] sm:text-[20px] uppercase rounded-[14px] border-2 border-[#191A23] shadow-[0px_4px_0px_#000] hover:shadow-[0px_6px_0px_#000] hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap text-center"
              >
                🎁 Nhận toàn bộ quà tặng ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

