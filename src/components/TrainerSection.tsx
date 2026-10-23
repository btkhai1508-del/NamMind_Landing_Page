import React from 'react';
import { SectionHeading } from './SectionHeading';

interface TrainerSectionProps {
  onCtaClick?: () => void;
}

export const TrainerSection: React.FC<TrainerSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="trainer" className="w-full py-12 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="NGƯỜI HUẤN LUYỆN"
          description="ĐỒNG HÀNH CÙNG BẠN TRONG SUỐT 2 NGÀY THỬ THÁCH ĐỘT PHÁ DÒNG TIỀN"
          titleClassName="font-black uppercase tracking-tight text-[22px] sm:text-[32px] md:text-[38px]"
          descClassName="font-black text-[17px] sm:text-[20px] lg:text-[22px] leading-snug uppercase text-black"
          maxWidthDesc="max-w-[620px]"
        />

        {/* Bố cục 2 Card cân xứng: Card bên trái để trống chèn ảnh - Card bên phải là hình ảnh Huấn luyện viên Nam Anh */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* CARD BÊN TAY TRÁI: Hình ảnh hoạt động thực chiến của Huấn luyện viên Nam Anh */}
          <div className="border-2 border-[#191A23] rounded-[36px] sm:rounded-[45px] p-6 sm:p-8 bg-[#F3F3F3] positivus-shadow flex flex-col justify-between relative overflow-hidden min-h-[460px] sm:min-h-[520px]">
            {/* Header hoạt động */}
            <div className="flex items-center justify-between w-full mb-4 z-10">
              <span className="font-['Space_Grotesk'] font-bold text-xs sm:text-sm uppercase tracking-wider text-[#191A23] bg-[#B9FF66] px-3.5 py-1.5 rounded-[7px]">
                Huấn Luyện Thực Chiến
              </span>
              <span className="font-['Space_Grotesk'] font-bold text-sm sm:text-base text-neutral-600">
                Trực tiếp tại lớp
              </span>
            </div>

            {/* Khung ảnh Nam Anh giảng dạy trực tiếp */}
            <div className="relative w-full flex-1 rounded-[28px] border-2 border-[#191A23] bg-white overflow-hidden flex items-center justify-center min-h-[330px] sm:min-h-[380px] shadow-inner">
              <img
                src="/assets/aistudio/phell_f1_presentation.png"
                alt="Nam Anh hướng dẫn xây dựng phễu Affiliate thực chiến"
                className="w-full h-full object-cover object-top"
              />

              {/* Dải thông tin dưới chân ảnh */}
              <div className="absolute bottom-3 inset-x-3 z-20 bg-white/95 backdrop-blur-sm border-2 border-[#191A23] rounded-[18px] px-4 py-2.5 shadow-sm text-center">
                <p className="font-['Space_Grotesk'] font-bold text-[15px] sm:text-[17px] text-[#191A23]">
                  Hệ Thống Phễu Affiliate Tự Động
                </p>
                <p className="font-['Space_Grotesk'] text-xs text-neutral-600 font-medium">
                  Cầm tay chỉ việc – Dễ dàng áp dụng chỉ bằng chiếc điện thoại
                </p>
              </div>
            </div>
          </div>

          {/* CARD BÊN TAY PHẢI: Hình ảnh NGƯỜI HUẤN LUYỆN Nam Anh */}
          <div className="border-2 border-[#191A23] rounded-[36px] sm:rounded-[45px] p-6 sm:p-8 bg-[#F3F3F3] positivus-shadow flex flex-col justify-between relative overflow-hidden min-h-[460px] sm:min-h-[520px]">
            {/* Header tác giả */}
            <div className="flex items-center justify-between w-full mb-4 z-10">
              <span className="font-['Space_Grotesk'] font-bold text-xs sm:text-sm uppercase tracking-wider text-black bg-[#B9FF66] px-3.5 py-1.5 rounded-full border border-[#191A23]">
                Huấn luyện viên chính
              </span>
              <span className="font-['Space_Grotesk'] font-black text-xl sm:text-2xl text-[#191A23]">
                Nam Anh
              </span>
            </div>

            {/* Khung ảnh chân dung Người huấn luyện Nam Anh */}
            <div className="relative w-full flex-1 rounded-[28px] border-2 border-[#191A23] bg-gradient-to-b from-[#EBF7E3] to-[#D5F5B5] overflow-hidden flex items-end justify-center min-h-[330px] sm:min-h-[380px] shadow-inner">
              {/* Vòng trang trí phong cách Positivus phía sau */}
              <div className="absolute w-64 h-64 rounded-full bg-white/50 border border-[#191A23]/10 -top-12 -right-12 pointer-events-none" />
              <div className="absolute w-48 h-48 rounded-full bg-[#B9FF66]/60 border border-[#191A23]/10 bottom-0 -left-12 pointer-events-none" />

              <img
                src="/assets/aistudio/namanh_portrait_nobg.png?v=20261022_final"
                alt="Người huấn luyện Nam Anh"
                className="relative z-10 h-full max-h-[400px] w-auto object-contain object-bottom drop-shadow-[0_12px_20px_rgba(0,0,0,0.18)]"
              />

              {/* Dải thông tin dưới chân ảnh */}
              <div className="absolute bottom-3 inset-x-3 z-20 bg-white/95 backdrop-blur-sm border-2 border-[#191A23] rounded-[18px] px-4 py-2.5 shadow-sm text-center">
                <p className="font-['Space_Grotesk'] font-black text-[16px] sm:text-[18px] text-[#191A23]">
                  Nam Anh – Huấn Luyện Viên 2 Ngày Thử Thách
                </p>
                <p className="font-['Space_Grotesk'] text-xs text-neutral-600 font-medium">
                  Chuyên gia thực chiến & xây dựng dòng tiền Affiliate
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PHẦN CÂU CHUYỆN STORYTELLING & 3 LUẬN ĐIỂM TRUYỀN CẢM HỨNG */}
        <div className="mt-10 sm:mt-14 space-y-8">
          {/* Câu trích dẫn đặc trưng */}
          <div className="p-6 sm:p-8 bg-[#F3F3F3] rounded-[28px] sm:rounded-[36px] border-2 border-[#191A23] shadow-[0px_4px_0px_#191A23] text-center max-w-[1020px] mx-auto">
            <p className="font-['Space_Grotesk'] font-bold italic text-[18px] sm:text-[22px] leading-[30px] sm:leading-[36px] text-[#191A23]">
              “Một người phụ nữ bận rộn từng mù công nghệ, cô ấy đã vươn lên trở thành cái tên nổi tiếng trong cộng đồng xây dựng dòng tiền dành riêng cho chị em phụ nữ bận rộn muốn khởi nghiệp thực chiến.”
            </p>
          </div>

          {/* 3 luận điểm Storytelling truyền cảm hứng */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-['Space_Grotesk'] text-[15px] sm:text-[17px] leading-[24px] sm:leading-[28px]">
            <div className="flex flex-col justify-between p-6 rounded-[24px] bg-white border-2 border-[#191A23] shadow-[0px_4px_0px_#191A23]">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#B9FF66] border border-[#191A23] flex items-center justify-center font-black text-base mb-4 shadow-sm">
                  1
                </div>
                <h4 className="font-black text-[#191A23] text-[18px] sm:text-[20px] mb-2 leading-tight">
                  Giúp hơn 100 người đạt 30 triệu/tháng thụ động
                </h4>
                <p className="text-neutral-700">
                  Trong cộng đồng của mình, cô ấy đã trực tiếp dẫn dắt hàng trăm người đạt mức thu nhập thụ động 30 triệu/tháng mà không cần biết công nghệ.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 rounded-[24px] bg-white border-2 border-[#191A23] shadow-[0px_4px_0px_#191A23]">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#B9FF66] border border-[#191A23] flex items-center justify-center font-black text-base mb-4 shadow-sm">
                  2
                </div>
                <h4 className="font-black text-[#191A23] text-[18px] sm:text-[20px] mb-2 leading-tight">
                  Công thức độc quyền xây kênh 100 triệu lượt xem
                </h4>
                <p className="text-neutral-700">
                  Bằng công thức độc quyền xây kênh triệu view nhanh chóng, trong tháng vừa qua cộng đồng của cô ấy đã thu hút hơn 100 triệu lượt xem miễn phí và mang về dòng tiền thụ động lớn cho đội nhóm.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 rounded-[24px] bg-white border-2 border-[#191A23] shadow-[0px_4px_0px_#191A23]">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#B9FF66] border border-[#191A23] flex items-center justify-center font-black text-base mb-4 shadow-sm">
                  3
                </div>
                <h4 className="font-black text-[#191A23] text-[18px] sm:text-[20px] mb-2 leading-tight">
                  Chia sẻ tận tâm và liên tục trao đi MIỄN PHÍ
                </h4>
                <p className="text-neutral-700">
                  Cô ấy được cộng đồng đặc biệt yêu mến vì sự nhiệt tình chia sẻ bí quyết kiếm tiền online của mình MIỄN PHÍ rộng rãi ra bên ngoài, và cô ấy vẫn đang liên tục làm như vậy mỗi ngày.
                </p>
              </div>
            </div>
          </div>

          {/* Nút hành động học cùng Nam Anh */}
          <div className="pt-4 flex justify-center">
            <button
              type="button"
              onClick={onCtaClick}
              className="px-8 sm:px-12 py-4 sm:py-5 bg-[#191A23] text-white hover:bg-[#B9FF66] hover:text-[#191A23] font-['Space_Grotesk'] font-black text-[17px] sm:text-[20px] uppercase rounded-[20px] border-2 border-[#191A23] shadow-[0px_4px_0px_#191A23] hover:shadow-[0px_6px_0px_#191A23] hover:-translate-y-0.5 transition-all cursor-pointer text-center"
            >
              Tham gia học cùng Nam Anh ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
