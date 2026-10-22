/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Logotypes } from './components/Logotypes';
import { Services } from './components/Services';
import { CtaBanner } from './components/CtaBanner';
import { CaseStudies } from './components/CaseStudies';
import { WorkingProcess } from './components/WorkingProcess';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal';
import { ThankYouPage } from './components/ThankYouPage';
import { AffiliateModelSection } from './components/AffiliateModelSection';

export default function App() {
  const [showKitModal, setShowKitModal] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'thank-you'>('home');

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const handleRegisterSuccess = () => {
    setCurrentPage('thank-you');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-black font-['Space_Grotesk'] selection:bg-[#B9FF66] selection:text-black">
      {/* Topbar trên Topbar (Announcement Bar màu #B9FF66 đặt trên Navbar, không có dấu chấm phía trước) */}
      <div className="w-full bg-[#B9FF66] border-b-2 border-[#191A23] py-2.5 sm:py-3 px-4 z-50">
        <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-['Space_Grotesk'] font-bold text-[14px] sm:text-[16px] text-black tracking-tight">
            Thử thách trưc tiếp! 2 ngày Affiliate 100 triệu/ tháng chỉ bằng chiếc điện thoại
          </p>
          <button
            onClick={openRegisterModal}
            className="shrink-0 bg-[#191A23] text-white px-4 py-1.5 rounded-[10px] font-['Space_Grotesk'] font-bold text-[13px] sm:text-[14px] hover:bg-white hover:text-black transition-colors cursor-pointer border border-[#191A23] shadow-sm whitespace-nowrap"
          >
            Giữ chỗ ngay
          </button>
        </div>
      </div>

      {/* Navigation Header (Topbar) */}
      <Navbar onQuoteClick={openRegisterModal} onLogoClick={handleBackToHome} />

      {/* Main Content: Chuyển trang sang Thank You Page khi gửi vé thành công */}
      {currentPage === 'thank-you' ? (
        <ThankYouPage onBackToHome={handleBackToHome} />
      ) : (
        <main id="about">
          {/* Hero Section */}
          <Hero onCtaClick={openRegisterModal} />

          {/* Chữ đen chạy ngang không có đường viền trên dưới, không có bảng led đằng sau (thay thế line sponsor) */}
          <Logotypes />

          {/* Section Title 2: THỬ THÁCH 2 NGÀY AFFILIATE TỰ ĐỘNG DÒNG TIỀN 100 TRIỆU – DÀNH CHO BẠN, NẾU... */}
          <CaseStudies onCtaClick={openRegisterModal} />

          {/* Ô Subtitle 13 (Đổi lên trên Section Title 1) */}
          <CtaBanner onCtaClick={openRegisterModal} />

          {/* Section Title 5: Tin nhắn từ Nam Anh */}
          <Testimonials onCtaClick={openRegisterModal} />

          {/* Section trắng mới: Một mô hình Affiliate MỚI cho người không cần biết công nghệ! */}
          <AffiliateModelSection onCtaClick={openRegisterModal} />

          {/* Services Block (Section Title 1) */}
          <Services />

          {/* Working Process (01-06 Interactive Accordions) */}
          <WorkingProcess />

          {/* Team Section (6 Cards with Flower Avatar Masks) */}
          <Team onSeeAllClick={openRegisterModal} />

          {/* Contact Us Form with Radio Options & Illustration */}
          <ContactSection />
        </main>
      )}

      {/* Footer */}
      <Footer />

      {/* Popup Form Modal (Cửa sổ pop up điền form đăng ký theo ảnh) */}
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        onSuccess={handleRegisterSuccess}
      />

      {/* Floating Design Kit Reference Info Drawer/Modal */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setShowKitModal(true)}
          className="flex items-center gap-2 px-3.5 py-2 bg-[#191A23] text-white border border-[#B9FF66] rounded-full text-xs font-medium shadow-lg hover:bg-[#B9FF66] hover:text-[#191A23] transition-all cursor-pointer"
          title="View Figma Kit References"
        >
          <span className="w-2 h-2 rounded-full bg-[#B9FF66]" />
          <span>Figma References</span>
        </button>
      </div>

      {/* Reference Modal */}
      {showKitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-[28px] max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto border-2 border-[#191A23] positivus-shadow">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-[#B9FF66] text-black text-xs font-semibold rounded-md">
                  Design Fidelity
                </span>
                <h3 className="text-xl font-bold">NAMIND UI System Reference</h3>
              </div>
              <button
                onClick={() => setShowKitModal(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-700 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-6 text-sm text-gray-700">
              <div>
                <h4 className="font-semibold text-black text-base mb-2">Color Palette Tokens</h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl border border-black/10 bg-[#B9FF66] text-black">
                    <p className="font-bold">#B9FF66</p>
                    <p className="text-xs">Primary Green</p>
                  </div>
                  <div className="p-3 rounded-xl border border-black/10 bg-[#191A23] text-white">
                    <p className="font-bold">#191A23</p>
                    <p className="text-xs">Dark Neutral</p>
                  </div>
                  <div className="p-3 rounded-xl border border-black/10 bg-[#F3F3F3] text-black">
                    <p className="font-bold">#F3F3F3</p>
                    <p className="text-xs">Grey Surface</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-black text-base mb-2">Typography & Card Specs</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Font Family: <strong>Space Grotesk</strong> (400, 500, 700)</li>
                  <li>Card Radius: <strong>45px</strong> | Button Radius: <strong>14px</strong> | Badge Radius: <strong>7px</strong></li>
                  <li>Card Shadow: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-black">0px 5px 0px #191A23</code></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-black text-base mb-2">Design Asset Frames</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-xl p-4 bg-gray-50 flex flex-col justify-between">
                    <div>
                      <p className="font-bold text-black">Portfolio</p>
                      <p className="text-xs text-gray-500 mt-1">Creator of the original free UI Kit design</p>
                    </div>
                    <a
                      href="https://bit.ly/48zeONe"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block text-center px-4 py-2 bg-[#B9FF66] text-black rounded-lg font-medium text-xs hover:bg-black hover:text-white transition-colors"
                    >
                      Go to portfolio
                    </a>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-4 bg-gray-50 flex flex-col justify-between">
                    <div>
                      <p className="font-bold text-black">Community Feedback</p>
                      <p className="text-xs text-gray-500 mt-1">Share your feedback about the UI version</p>
                    </div>
                    <a
                      href="https://bit.ly/48zeONe"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block text-center px-4 py-2 bg-[#191A23] text-white rounded-lg font-medium text-xs hover:bg-[#B9FF66] hover:text-black transition-colors"
                    >
                      Share Your Feedback
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setShowKitModal(false)}
                className="px-6 py-2.5 bg-[#191A23] text-white font-medium rounded-xl hover:bg-black transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
