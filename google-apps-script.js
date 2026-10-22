/**
 * GOOGLE APPS SCRIPT CHO GOOGLE SHEET NAMIND
 * ID Sheet: 1IcQhIf8LJuszyWZBvNyVDPqKNJNeMYBq8hS3Q7gpFLQ
 * 
 * Hướng dẫn:
 * 1. Mở Google Sheet -> Tiện ích mở rộng (Extensions) -> Apps Script
 * 2. Xóa hết code cũ, dán toàn bộ file này vào
 * 3. Bấm Triển khai (Deploy) -> Tùy chọn triển khai mới (New deployment)
 * 4. Chọn loại: "Ứng dụng web" (Web app)
 * 5. Thực thi dưới dạng: "Tôi" (email của bạn)
 * 6. Ai có quyền truy cập: "Bất kỳ ai" (Anyone)
 * 7. Bấm Triển khai và copy URL dán lại vào web
 */

const SPREADSHEET_ID = "1IcQhIf8LJuszyWZBvNyVDPqKNJNeMYBq8hS3Q7gpFLQ";
const ZALO_LINK = "https://zalo.me/g/a2y2x036pqkwzig7u9ri";

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: "ready", message: "NAMIND Webhook is active" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    let customerName = "";
    let customerPhone = "";
    let customerEmail = "";

    // Đọc dữ liệu từ form website gửi lên (JSON hoặc Form Post)
    if (e && e.postData && e.postData.contents) {
      try {
        const body = JSON.parse(e.postData.contents);
        customerName = body.name || "";
        customerPhone = body.phone || "";
        customerEmail = body.email || "";
      } catch (err) {
        if (e.parameter) {
          customerName = e.parameter.name || "";
          customerPhone = e.parameter.phone || "";
          customerEmail = e.parameter.email || "";
        }
      }
    } else if (e && e.parameter) {
      customerName = e.parameter.name || "";
      customerPhone = e.parameter.phone || "";
      customerEmail = e.parameter.email || "";
    }

    customerName = (customerName || "Bạn").trim();
    customerPhone = (customerPhone || "").trim();
    customerEmail = (customerEmail || "").trim();

    const timestamp = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });

    // 1. Lưu chính xác thông tin người dùng vừa nhập vào Google Sheet
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getActiveSheet();
    sheet.appendRow([timestamp, customerName, customerPhone, customerEmail]);

    // 2. Gửi email xác nhận kèm link nhóm Zalo ĐẾN CHÍNH EMAIL NGƯỜI ĐÓ VỪA NHẬP
    if (customerEmail && customerEmail.indexOf("@") !== -1) {
      sendWelcomeEmail(customerName, customerEmail);
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      saved: {
        name: customerName,
        phone: customerPhone,
        email: customerEmail
      }
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendWelcomeEmail(name, toEmail) {
  const subject = "[NAMIND] Xac Nhan Giu Cho - Thu Thach 2 Ngay Affiliate Dong Tien 100 Trieu";

  const htmlBody = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NAMIND</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap');
    </style>
  </head>
  <body style="margin: 0; padding: 0; background-color: #F8F9FA; font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #191A23;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #F8F9FA; padding: 40px 15px;">
      <tr>
        <td align="center">
          <!-- Main Card: Sạch sẽ, không viền ngoài thô, chuẩn Figma Positivus -->
          <table role="presentation" width="100%" style="max-width: 580px; background-color: #FFFFFF; border-radius: 24px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
            
            <!-- Header Brand Bar -->
            <tr>
              <td style="background-color: #191A23; padding: 22px 30px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td align="left">
                      <span style="font-family: 'Space Grotesk', sans-serif; font-size: 22px; font-weight: 700; color: #B9FF66; letter-spacing: 0.5px;">NAMIND</span>
                    </td>
                    <td align="right">
                      <span style="font-family: 'Space Grotesk', sans-serif; font-size: 11px; font-weight: 700; background-color: #B9FF66; color: #191A23; padding: 5px 12px; border-radius: 8px; text-transform: uppercase; letter-spacing: 0.5px;">XÁC NHẬN GIỮ CHỖ</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Body Content -->
            <tr>
              <td style="padding: 36px 30px 28px 30px;">
                <h1 style="font-family: 'Space Grotesk', sans-serif; font-size: 26px; font-weight: 700; line-height: 34px; color: #191A23; margin: 0 0 18px 0; text-transform: uppercase;">
                  CHÚC MỪNG <span style="background-color: #B9FF66; padding: 2px 10px; border-radius: 6px;">` + name + `</span>!
                </h1>

                <p style="font-family: 'Space Grotesk', sans-serif; font-size: 15px; line-height: 25px; color: #2D2E36; margin: 0 0 16px 0;">
                  Cảm ơn bạn đã đăng ký tham gia chương trình <strong>Thử Thách 2 Ngày Affiliate - Dòng Tiền 100 Triệu/Tháng</strong>.
                </p>

                <p style="font-family: 'Space Grotesk', sans-serif; font-size: 15px; line-height: 25px; color: #2D2E36; margin: 0 0 24px 0;">
                  Thông tin giữ chỗ của bạn đã được hệ thống ghi nhận thành công. Vì đây là chương trình trực tiếp và có phần cầm tay chỉ việc, <strong>toàn bộ tài liệu, link phòng Zoom và thông báo quan trọng sẽ được cập nhật độc quyền trong Nhóm Zalo Kín</strong>.
                </p>

                <!-- Box Hướng dẫn: Bo góc mềm, viền đứt thanh lịch -->
                <table role="presentation" width="100%" style="background-color: #F8F9FA; border: 1px dashed #CBD5E1; border-radius: 16px; margin: 0 0 28px 0;">
                  <tr>
                    <td style="padding: 18px 20px;">
                      <p style="font-family: 'Space Grotesk', sans-serif; margin: 0 0 6px 0; font-size: 13px; font-weight: 700; text-transform: uppercase; color: #191A23; letter-spacing: 0.5px;">
                        HƯỚNG DẪN BƯỚC TIẾP THEO:
                      </p>
                      <p style="font-family: 'Space Grotesk', sans-serif; margin: 0; font-size: 14px; line-height: 22px; color: #4B5563;">
                        Bấm vào nút bên dưới để tham gia nhóm Zalo ngay nhằm nhận <strong>Tài Liệu Khởi Động</strong> và kích hoạt vé của bạn.
                      </p>
                    </td>
                  </tr>
                </table>

                <!-- Nút CTA Zalo chuẩn Figma -->
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td align="center">
                      <a href="` + ZALO_LINK + `" target="_blank" style="display: inline-block; background-color: #B9FF66; color: #191A23; font-family: 'Space Grotesk', sans-serif; font-size: 15px; font-weight: 700; text-decoration: none; padding: 16px 36px; border-radius: 14px; text-transform: uppercase; letter-spacing: 0.5px; border: 1.5px solid #191A23;">
                        BẤM VÀO ĐÂY ĐỂ VÀO NHÓM ZALO
                      </a>
                    </td>
                  </tr>
                </table>

                <p style="font-family: 'Space Grotesk', sans-serif; font-size: 12px; color: #6B7280; text-align: center; margin: 16px 0 28px 0;">
                  (Nếu nút không mở, bạn có thể copy link: <a href="` + ZALO_LINK + `" style="color: #191A23; font-weight: 600; text-decoration: underline;">` + ZALO_LINK + `</a>)
                </p>

                <div style="height: 1px; background-color: #E5E7EB; margin: 24px 0;"></div>

                <p style="font-family: 'Space Grotesk', sans-serif; font-size: 14px; line-height: 22px; color: #4B5563; margin: 0;">
                  Hẹn gặp lại bạn trong buổi thử thách!<br>
                  <strong style="color: #191A23;">Đội ngũ NAMIND & Nam Anh</strong>
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color: #FAFAFA; border-top: 1px solid #F1F5F9; padding: 16px 30px; text-align: center;">
                <p style="font-family: 'Space Grotesk', sans-serif; margin: 0; font-size: 11px; color: #9CA3AF;">
                  © 2026 NAMIND. Mọi quyền được bảo lưu. Email này được gửi tự động khi bạn đăng ký giữ chỗ.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;

  // Gửi trực tiếp đến email người đăng ký
  GmailApp.sendEmail(toEmail, subject, "Chúc mừng bạn đã giữ chỗ thành công! Vui lòng vào nhóm Zalo để nhận tài liệu.", {
    htmlBody: htmlBody,
    name: "NAMIND"
  });
}
