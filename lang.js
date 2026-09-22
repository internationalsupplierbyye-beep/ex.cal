/* TG Excal — centralized language dictionaries
 * Loaded before the main application HTML.
 * SYS_DICT: live screen labels
 * I18N: exported/reprinted receipt labels
 */
(function (root) {
  'use strict';

  const common = {
    my: {
      app_title: 'MMK ↔ THB & VND ငွေလဲတွက်ချက်ခြင်း',
      app_sub: 'MMK ↔ THB & VND Exchange Calculator',
      export_st_title: 'Save PNG/JPEG + Bank QR',
      export_st_sub: 'QR / Bank Info / မပါ — တစ်ခုတည်းပဲရွေးနိုင်',
      lbl_save_lang: 'Save Export Language',
      lbl_cus: '👥 Customer (မရွေးပါက ပြေစာတွင်မပါပါ)',
      btn_quick_add: '➕ အမြန်ထည့်မည်',
      lbl_bank_sel: 'Bank Select',
      ph_bank_sel: '— ဘဏ်ရွေးပါ —',
      ph_qr_sel: '— QR ရွေးပါ —',
      ph_cus_sel: '— မထည့်ပါ —',
      ph_enter: 'ရိုက်ထည့်ပါ',
      lbl_inc: 'Export ထဲ ဘာထည့်မလဲ',
      preview: 'Preview',
      owner_name: 'အကောင့်နာမည်:',
      bank_preview: 'Bank Info Preview',
      thb_to_mmk: 'ဘတ် → မြန်မာကျပ်',
      mmk_to_thb: 'မြန်မာကျပ် → ဘတ်',
      vnd_to_mmk: 'ဗီယက်နမ်ဒေါင် → မြန်မာကျပ်',
      mmk_to_vnd: 'မြန်မာကျပ် → ဗီယက်နမ်ဒေါင်',
      lbl_thb: 'ဘတ်',
      lbl_mmk: 'မြန်မာကျပ်',
      lbl_vnd: 'ဗီယက်နမ်ဒေါင်',
      bank_title: 'ငွေလွှဲရန်အတွက် အောက်ပါအချက်အလက်မှ ဘဏ်သို့ လွှဲပါ။',
      bank_label: 'ဘဏ်အချက်အလက်',
      qr_title: 'ငွေလွှဲရန်အတွက် အောက်ပါ QR ကို Scan (စကန်) ဖတ်ပါ။',
      account_name: 'ဘဏ်အကောင့်နာမည်',
      account_number: 'ဘဏ်အကောင့်နံပါတ်'
    },
    en: {
      app_title: 'MMK ↔ THB & VND Exchange Calculator',
      app_sub: 'MMK ↔ THB & VND Exchange Calculator',
      export_st_title: 'Save PNG/JPEG + Bank QR',
      export_st_sub: 'Choose one: QR / Bank Info / None',
      lbl_save_lang: 'Save Export Language',
      lbl_cus: '👥 Customer (leave empty to hide on receipt)',
      btn_quick_add: '➕ Quick Add',
      lbl_bank_sel: 'Bank Select',
      ph_bank_sel: '— Select Bank —',
      ph_qr_sel: '— Select QR —',
      ph_cus_sel: '— No Customer —',
      ph_enter: 'Enter value',
      lbl_inc: 'What to include in Export',
      preview: 'Preview',
      owner_name: 'Account Name:',
      bank_preview: 'Bank Info Preview',
      thb_to_mmk: 'THB → MMK',
      mmk_to_thb: 'MMK → THB',
      vnd_to_mmk: 'VND → MMK',
      mmk_to_vnd: 'MMK → VND',
      lbl_thb: 'THB',
      lbl_mmk: 'MMK',
      lbl_vnd: 'VND',
      bank_title: 'Please transfer to the bank using the information below.',
      bank_label: 'Bank Information',
      qr_title: 'Scan the QR below to make a transfer.',
      account_name: 'Account Name',
      account_number: 'Account Number'
    },
    th: {
      app_title: 'เครื่องคำนวณแลกเปลี่ยน MMK ↔ THB และ VND',
      app_sub: 'เครื่องคำนวณแลกเปลี่ยน MMK ↔ THB และ VND',
      export_st_title: 'บันทึก PNG/JPEG + QR ธนาคาร',
      export_st_sub: 'เลือกอย่างใดอย่างหนึ่ง: QR / ข้อมูลธนาคาร / ไม่ใส่',
      lbl_save_lang: 'ภาษาสำหรับใบเสร็จ',
      lbl_cus: '👥 ลูกค้า (ไม่เลือกจะไม่แสดงในใบเสร็จ)',
      btn_quick_add: '➕ เพิ่มด่วน',
      lbl_bank_sel: 'เลือกธนาคาร',
      ph_bank_sel: '— เลือกธนาคาร —',
      ph_qr_sel: '— เลือก QR —',
      ph_cus_sel: '— ไม่เลือกลูกค้า —',
      ph_enter: 'กรอกข้อมูล',
      lbl_inc: 'สิ่งที่จะใส่ในไฟล์ส่งออก',
      preview: 'ตัวอย่าง',
      owner_name: 'ชื่อบัญชี:',
      bank_preview: 'ตัวอย่างข้อมูลธนาคาร',
      thb_to_mmk: 'บาท → จ๊าดพม่า',
      mmk_to_thb: 'จ๊าดพม่า → บาท',
      vnd_to_mmk: 'ดองเวียดนาม → จ๊าดพม่า',
      mmk_to_vnd: 'จ๊าดพม่า → ดองเวียดนาม',
      lbl_thb: 'บาท',
      lbl_mmk: 'จ๊าดพม่า',
      lbl_vnd: 'ดองเวียดนาม',
      bank_title: 'กรุณาโอนเงินไปยังธนาคารตามข้อมูลด้านล่าง',
      bank_label: 'ข้อมูลธนาคาร',
      qr_title: 'สแกน QR ด้านล่างเพื่อโอนเงิน',
      account_name: 'ชื่อบัญชี',
      account_number: 'เลขที่บัญชี'
    },
    vi: {
      app_title: 'Máy tính đổi tiền MMK ↔ THB & VND',
      app_sub: 'Máy tính đổi tiền MMK ↔ THB & VND',
      export_st_title: 'Lưu PNG/JPEG + QR ngân hàng',
      export_st_sub: 'Chọn một: QR / Thông tin ngân hàng / Không có',
      lbl_save_lang: 'Ngôn ngữ xuất hóa đơn',
      lbl_cus: '👥 Khách hàng (không chọn sẽ không hiện trên biên lai)',
      btn_quick_add: '➕ Thêm nhanh',
      lbl_bank_sel: 'Chọn ngân hàng',
      ph_bank_sel: '— Chọn ngân hàng —',
      ph_qr_sel: '— Chọn QR —',
      ph_cus_sel: '— Không chọn khách hàng —',
      ph_enter: 'Nhập giá trị',
      lbl_inc: 'Nội dung xuất',
      preview: 'Xem trước',
      owner_name: 'Tên tài khoản:',
      bank_preview: 'Xem trước thông tin ngân hàng',
      thb_to_mmk: 'THB → MMK',
      mmk_to_thb: 'MMK → THB',
      vnd_to_mmk: 'VND → MMK',
      mmk_to_vnd: 'MMK → VND',
      lbl_thb: 'THB',
      lbl_mmk: 'MMK',
      lbl_vnd: 'VND',
      bank_title: 'Vui lòng chuyển tiền đến ngân hàng theo thông tin dưới đây.',
      bank_label: 'Thông tin ngân hàng',
      qr_title: 'Quét mã QR bên dưới để chuyển tiền.',
      account_name: 'Tên tài khoản',
      account_number: 'Số tài khoản'
    }
  };

  const receipt = {
    en: {
      titleTop: 'Thailand Guide - Supplier By Ye',
      h_thb2mmk: 'THB → MMK', sub_thb2mmk: 'Customer receives MMK',
      h_mmk2thb: 'MMK → THB', sub_mmk2thb: 'Customer receives THB',
      h_vnd2mmk: 'VND → MMK', sub_vnd2mmk: 'Customer receives MMK',
      h_mmk2vnd: 'MMK → VND', sub_mmk2vnd: 'Customer receives VND',
      lbl_thb: 'THB', lbl_mmk: 'MMK', lbl_vnd: 'VND',
      in_thb: 'Amount received (THB)', out_mmk: 'Amount sent (MMK)',
      in_mmk: 'Amount received (MMK)', out_thb: 'Amount sent (THB)',
      in_vnd: 'Amount received (VND)', out_vnd: 'Amount sent (VND)',
      rateTpl: '100,000 MMK = {r} THB | 1 THB = {inv} MMK',
      rateVndTpl: '1 MMK = {v} VND',
      qrTitle: 'Scan the QR below to make a transfer.',
      bankTitle: 'Please transfer to the bank using the information below.',
      bankLabel: 'Bank Information', owner: 'Account Name', accName: 'Account Name', accNo: 'Account Number'
    },
    th: {
      titleTop: 'Thailand Guide - Supplier By Ye',
      h_thb2mmk: 'บาท → จ๊าดพม่า', sub_thb2mmk: 'ลูกค้ารับเงินจ๊าดพม่า',
      h_mmk2thb: 'จ๊าดพม่า → บาท', sub_mmk2thb: 'ลูกค้ารับเงินบาท',
      h_vnd2mmk: 'ดองเวียดนาม → จ๊าดพม่า', sub_vnd2mmk: 'ลูกค้ารับเงินจ๊าดพม่า',
      h_mmk2vnd: 'จ๊าดพม่า → ดองเวียดนาม', sub_mmk2vnd: 'ลูกค้ารับเงินดองเวียดนาม',
      lbl_thb: 'บาท', lbl_mmk: 'จ๊าดพม่า', lbl_vnd: 'ดองเวียดนาม',
      in_thb: 'จำนวนเงินเข้า (บาท)', out_mmk: 'จำนวนเงินออก (จ๊าดพม่า)',
      in_mmk: 'จำนวนเงินเข้า (จ๊าดพม่า)', out_thb: 'จำนวนเงินออก (บาท)',
      in_vnd: 'จำนวนเงินเข้า (ดองเวียดนาม)', out_vnd: 'จำนวนเงินออก (ดองเวียดนาม)',
      rateTpl: '100,000 จ๊าด = {r} บาท | 1 บาท = {inv} จ๊าด',
      rateVndTpl: '1 จ๊าด = {v} ดอง',
      qrTitle: 'สแกน QR ด้านล่างเพื่อโอนเงิน',
      bankTitle: 'กรุณาโอนเงินไปยังธนาคารตามข้อมูลด้านล่าง',
      bankLabel: 'ข้อมูลธนาคาร', owner: 'ชื่อบัญชี', accName: 'ชื่อบัญชี', accNo: 'เลขที่บัญชี'
    },
    vi: {
      titleTop: 'Thailand Guide - Supplier By Ye',
      h_thb2mmk: 'THB → MMK', sub_thb2mmk: 'Khách hàng nhận MMK',
      h_mmk2thb: 'MMK → THB', sub_mmk2thb: 'Khách hàng nhận THB',
      h_vnd2mmk: 'VND → MMK', sub_vnd2mmk: 'Khách hàng nhận MMK',
      h_mmk2vnd: 'MMK → VND', sub_mmk2vnd: 'Khách hàng nhận VND',
      lbl_thb: 'THB', lbl_mmk: 'MMK', lbl_vnd: 'VND',
      in_thb: 'Số tiền nhận (THB)', out_mmk: 'Số tiền gửi (MMK)',
      in_mmk: 'Số tiền nhận (MMK)', out_thb: 'Số tiền gửi (THB)',
      in_vnd: 'Số tiền nhận (VND)', out_vnd: 'Số tiền gửi (VND)',
      rateTpl: '100.000 MMK = {r} THB | 1 THB = {inv} MMK',
      rateVndTpl: '1 MMK = {v} VND',
      qrTitle: 'Quét mã QR bên dưới để chuyển tiền.',
      bankTitle: 'Vui lòng chuyển tiền đến ngân hàng theo thông tin dưới đây.',
      bankLabel: 'Thông tin ngân hàng', owner: 'Tên tài khoản', accName: 'Tên tài khoản', accNo: 'Số tài khoản'
    }
  };

  // Admin modal contains legacy static labels without data-i18n attributes.
  // Keep their original text as the stable key and translate only exact static
  // text nodes, so Firebase data, account names, amounts, and logs are untouched.
  const settingsText = {
    '⚙️ Admin Settings': { en:'⚙️ Admin Settings', th:'⚙️ การตั้งค่าแอดมิน', vi:'⚙️ Cài đặt quản trị' },
    '🔄 Connection စစ်နေသည်...': { en:'🔄 Checking connection...', th:'🔄 กำลังตรวจสอบการเชื่อมต่อ...', vi:'🔄 Đang kiểm tra kết nối...' },
    '🔁 Retry': { en:'🔁 Retry', th:'🔁 ลองใหม่', vi:'🔁 Thử lại' },
    '🔄 Device Mode ပြန်ပြောင်း': { en:'🔄 Switch Device Mode', th:'🔄 เปลี่ยนโหมดอุปกรณ์', vi:'🔄 Đổi chế độ thiết bị' },
    '📋 Work Queue': { en:'📋 Work Queue', th:'📋 คิวงาน', vi:'📋 Hàng đợi công việc' },
    '📊 Dashboard': { en:'📊 Dashboard', th:'📊 แดชบอร์ด', vi:'📊 Bảng điều khiển' },
    '📜 မှတ်တမ်းများ': { en:'📜 History', th:'📜 ประวัติ', vi:'📜 Lịch sử' },
    '💰 လက်ကျန်ငွေ': { en:'💰 Treasury', th:'💰 ยอดคงเหลือ', vi:'💰 Kho bạc' },
    '👥 Customers': { en:'👥 Customers', th:'👥 ลูกค้า', vi:'👥 Khách hàng' },
    'အထွေထွေ': { en:'General', th:'ทั่วไป', vi:'Cài đặt chung' },
    '💸 အသုံးစရိတ်': { en:'💸 Expenses', th:'💸 ค่าใช้จ่าย', vi:'💸 Chi phí' },
    'QR များ': { en:'QR Accounts', th:'QR', vi:'Tài khoản QR' },
    'ဘဏ်များ': { en:'Banks', th:'ธนาคาร', vi:'Ngân hàng' },
    '🏦 Agent Bank / QR': { en:'🏦 Agent Bank / QR', th:'🏦 ธนาคาร / QR ของเอเจนต์', vi:'🏦 Ngân hàng / QR Agent' },
    '📝 Logs': { en:'📝 Logs', th:'📝 บันทึกระบบ', vi:'📝 Nhật ký' },
    '📋 ဝန်ထမ်းအလုပ်စာရင်း (Staff Work Queue)': { en:'📋 Staff Work Queue', th:'📋 คิวงานพนักงาน', vi:'📋 Hàng đợi nhân viên' },
    '🔄 Refresh': { en:'🔄 Refresh', th:'🔄 รีเฟรช', vi:'🔄 Làm mới' },
    '🔁 Retry Failed': { en:'🔁 Retry Failed', th:'🔁 ลองรายการที่ล้มเหลวใหม่', vi:'🔁 Thử lạiรายการ lỗi' },
    '⏳ Pending': { en:'⏳ Pending', th:'⏳ รอดำเนินการ', vi:'⏳ Đang chờ' },
    '💸 Owing': { en:'💸 Owing', th:'💸 ค้างชำระ', vi:'💸 Còn nợ' },
    '🔎 ပြန်စစ်ရန်': { en:'🔎 Review', th:'🔎 ตรวจสอบ', vi:'🔎 Kiểm tra' },
    '🔄 Connection စစ်နေသည်...': { en:'🔄 Checking connection...', th:'🔄 กำลังตรวจสอบการเชื่อมต่อ...', vi:'🔄 Đang kiểm tra kết nối...' },
    '📊 ငွေလွှဲပမာဏ နှင့် အမြတ်ငွေ (Volume & Auto Profit)': { en:'📊 Transfer Volume & Auto Profit', th:'📊 ปริมาณโอนและกำไรอัตโนมัติ', vi:'📊 Khối lượng giao dịch & lợi nhuận tự động' },
    'ယနေ့ အချက်အလက်များ': { en:"Today's Data", th:'ข้อมูลวันนี้', vi:'Dữ liệu hôm nay' },
    '➕ Manual Lot ထည့်ရန်': { en:'➕ Add Manual Lot', th:'➕ เพิ่มล็อตด้วยตนเอง', vi:'➕ Thêm lô thủ công' },
    '📄 PDF စာရင်းချုပ်': { en:'📄 PDF Summary', th:'📄 สรุป PDF', vi:'📄 Tóm tắt PDF' },
    '📈 FIFO Profit & Active Lots (အမြတ် နှင့် လက်ကျန်)': { en:'📈 FIFO Profit & Active Lots', th:'📈 กำไร FIFO และล็อตคงเหลือ', vi:'📈 Lợi nhuận FIFO & các lô đang hoạt động' },
    'စုစုပေါင်း အမြတ်ငွေ (Total Profit)': { en:'Total Profit', th:'กำไรรวม', vi:'Tổng lợi nhuận' },
    '📜 ငွေလွှဲမှတ်တမ်းများ': { en:'📜 Exchange History', th:'📜 ประวัติการแลกเปลี่ยน', vi:'📜 Lịch sử giao dịch' },
    '💳 Transaction Fee အမျိုးအစားများ': { en:'💳 Transaction Fee Types', th:'💳 ประเภทค่าธรรมเนียมธุรกรรม', vi:'💳 Loại phí giao dịch' },
    'History မှာ Fee ထည့်ရာတွင် ရွေးချယ်ရန် အမျိုးအစားများကို ဒီနေရာမှ စီမံနိုင်ပါသည်။': { en:'Manage the fee types available when adding a fee to History.', th:'จัดการประเภทค่าธรรมเนียมที่เลือกใช้ในประวัติได้ที่นี่', vi:'Quản lý các loại phí dùng khi thêm phí vào Lịch sử.' },
    'ထည့်မည်': { en:'Add', th:'เพิ่ม', vi:'Thêm' },
    '⏱ အချိန်သတ်မှတ်ချက်များ (Main Admin သီးသန့်)': { en:'⏱ Time Settings (Main Admin only)', th:'⏱ ตั้งเวลา (เฉพาะ Main Admin)', vi:'⏱ Cài đặt thời gian (chỉ Main Admin)' },
    'Pending အနီရောင်ပြရန် စောင့်ရမည့်အချိန် (နာရီ)': { en:'Pending time before showing red (hours)', th:'เวลารอ Pending ก่อนแสดงสีแดง (ชั่วโมง)', vi:'Thời gian Pending trước khi hiển thị màu đỏ (giờ)' },
    'Auto Cancel ပြုလုပ်မည့် အချိန် (ရက်)': { en:'Auto Cancel after (days)', th:'เวลาสำหรับ Auto Cancel (วัน)', vi:'Thời gian Auto Cancel (ngày)' },
    '🎨 လက်ကျန်ငွေ အရောင်သတ်မှတ်ချက်များ': { en:'🎨 Balance Color Thresholds', th:'🎨 เกณฑ์สีของยอดคงเหลือ', vi:'🎨 Ngưỡng màu số dư' },
    'ငွေကြေး': { en:'Currency', th:'สกุลเงิน', vi:'Tiền tệ' },
    'အနီ (အောက်)': { en:'Red (Low)', th:'แดง (ต่ำ)', vi:'Đỏ (thấp)' },
    'အစိမ်း (အထက်)': { en:'Green (High)', th:'เขียว (สูง)', vi:'Xanh (cao)' },
    'ဆက်တင်များအားလုံး သိမ်းမည်': { en:'Save All Settings', th:'บันทึกการตั้งค่าทั้งหมด', vi:'Lưu tất cả cài đặt' },
    '🎨 ပြေစာ နောက်ခံဒီဇိုင်း (Receipt Theme)': { en:'🎨 Receipt Background Theme', th:'🎨 ธีมพื้นหลังใบเสร็จ', vi:'🎨 Chủ đề nền biên lai' },
    'သတိပေးချက် ၁ (Warning 1)': { en:'Warning 1', th:'คำเตือน 1', vi:'Cảnh báo 1' },
    'သတိပေးချက် ၂ (Warning 2)': { en:'Warning 2', th:'คำเตือน 2', vi:'Cảnh báo 2' },
    'သတိပေးချက် ၃ (Warning 3)': { en:'Warning 3', th:'คำเตือน 3', vi:'Cảnh báo 3' },
    'ကျေးဇူးတင်လွှာ (Thanks Message)': { en:'Thanks Message', th:'ข้อความขอบคุณ', vi:'Lời cảm ơn' },
    'Copy Text အောက်ခြေစာသား (Copy Bottom)': { en:'Copy Text Bottom', th:'ข้อความด้านล่างสำหรับคัดลอก', vi:'Nội dung cuối bản sao' },
    'Receipt Noti (Account Name အောက်တွင် ပေါ်မည့်စာ)': { en:'Receipt Noti (shown below Account Name)', th:'ข้อความใบเสร็จ (แสดงใต้ชื่อบัญชี)', vi:'Thông báo biên lai (hiện dưới tên tài khoản)' },
    'စာသားများ သိမ်းမည်': { en:'Save Texts', th:'บันทึกข้อความ', vi:'Lưu nội dung' },
    '🤖 Telegram Bot ချိတ်ဆက်ရန်': { en:'🤖 Connect Telegram Bot', th:'🤖 เชื่อมต่อ Telegram Bot', vi:'🤖 Kết nối Telegram Bot' },
    'Telegram Chat ID': { en:'Telegram Chat ID', th:'Telegram Chat ID', vi:'Telegram Chat ID' },
    'Telegram Settings သိမ်းမည်': { en:'Save Telegram Settings', th:'บันทึกการตั้งค่า Telegram', vi:'Lưu cài đặt Telegram' },
    '📊 Daily Closing Report (နေ့စဉ် အနှစ်ချုပ်)': { en:'📊 Daily Closing Report', th:'📊 รายงานปิดยอดประจำวัน', vi:'📊 Báo cáo chốt ngày' },
    'Daily Report ကို ဖွင့်မည်': { en:'Enable Daily Report', th:'เปิดรายงานประจำวัน', vi:'Bật báo cáo hằng ngày' },
    '💾 Auto Scheduled Backup': { en:'💾 Auto Scheduled Backup', th:'💾 สำรองข้อมูลอัตโนมัติ', vi:'💾 Sao lưu tự động theo lịch' },
    'Auto Backup ကို ဖွင့်မည်': { en:'Enable Auto Backup', th:'เปิดการสำรองข้อมูลอัตโนมัติ', vi:'Bật sao lưu tự động' },
    '🔑 API Keys (Developer Settings)': { en:'🔑 API Keys (Developer Settings)', th:'🔑 API Keys (การตั้งค่านักพัฒนา)', vi:'🔑 API Keys (Cài đặt nhà phát triển)' },
    'API Keys သိမ်းမည်': { en:'Save API Keys', th:'บันทึก API Keys', vi:'Lưu API Keys' },
    '📱 စနစ်ထဲဝင်ရောက်ထားသော Device များ': { en:'📱 Devices in the System', th:'📱 อุปกรณ์ในระบบ', vi:'📱 Thiết bị trong hệ thống' },
    '🔑 Email / Password ဖြင့် Login ဝင်ခွင့်ရှိသော Account များ': { en:'🔑 Email / Password Login Accounts', th:'🔑 บัญชีเข้าสู่ระบบด้วย Email / Password', vi:'🔑 Tài khoản đăng nhập Email / Password' },
    '🚀 System Data Management & Backup': { en:'🚀 System Data Management & Backup', th:'🚀 จัดการข้อมูลและสำรองข้อมูลระบบ', vi:'🚀 Quản lý và sao lưu dữ liệu hệ thống' },
    '💾 ဒေတာများကို Backup ယူမည် (Download JSON)': { en:'💾 Backup Data (Download JSON)', th:'💾 สำรองข้อมูล (ดาวน์โหลด JSON)', vi:'💾 Sao lưu dữ liệu (Tải JSON)' },
    '📂 Backup ဖိုင်မှ ဒေတာပြန်သွင်းမည် (Restore)': { en:'📂 Restore from Backup File', th:'📂 กู้คืนจากไฟล์สำรอง', vi:'📂 Khôi phục từ tệp sao lưu' },
    '🏦 ဘဏ်အချက်အလက် ထည့်ရန် / ပြင်ရန်': { en:'🏦 Add / Edit Bank Information', th:'🏦 เพิ่ม / แก้ไขข้อมูลธนาคาร', vi:'🏦 Thêm / sửa thông tin ngân hàng' },
    '📋 ထည့်သွင်းထားသော ဘဏ်များ (ဆွဲရွှေ့ပါ)': { en:'📋 Banks (drag to reorder)', th:'📋 ธนาคาร (ลากเพื่อเรียงลำดับ)', vi:'📋 Ngân hàng (kéo để sắp xếp)' },
    '🔲 QR အသစ် ထည့်ရန် / ပြင်ရန်': { en:'🔲 Add / Edit QR', th:'🔲 เพิ่ม / แก้ไข QR', vi:'🔲 Thêm / sửa QR' },
    '📋 QR များ (ဆွဲရွှေ့ပါ)': { en:'📋 QRs (drag to reorder)', th:'📋 QR (ลากเพื่อเรียงลำดับ)', vi:'📋 QR (kéo để sắp xếp)' },
    '🏦 Agent ကိုယ်ပိုင် Bank / QR Settings': { en:'🏦 Agent Private Bank / QR Settings', th:'🏦 ตั้งค่าธนาคาร / QR ส่วนตัวของเอเจนต์', vi:'🏦 Cài đặt Ngân hàng / QR riêng của Agent' },
    'Bank အသစ် ထည့်ရန်': { en:'Add New Bank', th:'เพิ่มธนาคารใหม่', vi:'Thêm ngân hàng mới' },
    'Bank သိမ်းမည်': { en:'Save Bank', th:'บันทึกธนาคาร', vi:'Lưu ngân hàng' },
    'QR / PromptPay အသစ် ထည့်ရန်': { en:'Add New QR / PromptPay', th:'เพิ่ม QR / PromptPay ใหม่', vi:'Thêm QR / PromptPay mới' },
    'QR သိမ်းမည်': { en:'Save QR', th:'บันทึก QR', vi:'Lưu QR' },
    'Agent Bank များ': { en:'Agent Banks', th:'ธนาคารของเอเจนต์', vi:'Ngân hàng Agent' },
    'Agent QR များ': { en:'Agent QRs', th:'QR ของเอเจนต์', vi:'QR Agent' },
    '👥 Customer အသစ် ထည့်ရန် / ပြင်ရန်': { en:'👥 Add / Edit Customer', th:'👥 เพิ่ม / แก้ไขลูกค้า', vi:'👥 Thêm / sửa khách hàng' },
    'ရှင်းမည်': { en:'Clear', th:'ล้าง', vi:'Xóa' },
    '📋 Customer စာရင်းများ': { en:'📋 Customer List', th:'📋 รายชื่อลูกค้า', vi:'📋 Danh sách khách hàng' },
    '💰 Master Account လက်ကျန်ငွေများ': { en:'💰 Master Account Balances', th:'💰 ยอดคงเหลือบัญชีหลัก', vi:'💰 Số dư tài khoản chính' },
    '📥 Export Transfers': { en:'📥 Export Transfers', th:'📥 โอนออก', vi:'📥 Chuyển tiền xuất' },
    '➕ Master Account အသစ်ထည့်ရန်': { en:'➕ Add Master Account', th:'➕ เพิ่มบัญชีหลัก', vi:'➕ Thêm tài khoản chính' },
    '🔄 ဘဏ်အချင်းချင်း ငွေရွှေ့ရန် (Internal Transfer)': { en:'🔄 Internal Transfer', th:'🔄 โอนเงินภายใน', vi:'🔄 Chuyển tiền nội bộ' },
    'လွှဲမည်': { en:'Transfer', th:'โอน', vi:'Chuyển' },
    '💸 အထွေထွေ ကုန်ကျစရိတ် မှတ်တမ်း': { en:'💸 General Expense Records', th:'💸 รายการค่าใช้จ่ายทั่วไป', vi:'💸 Ghi chép chi phí chung' },
    '➕ အသုံးစရိတ် အသစ်ထည့်ရန်': { en:'➕ Add Expense', th:'➕ เพิ่มค่าใช้จ่าย', vi:'➕ Thêm chi phí' },
    'မှတ်တမ်းတင်မည်': { en:'Record', th:'บันทึก', vi:'Ghi lại' },
    '💳 Transaction Fee ထည့်/ပြင်မည်': { en:'💳 Add / Edit Transaction Fee', th:'💳 เพิ่ม / แก้ไขค่าธรรมเนียมธุรกรรม', vi:'💳 Thêm / sửa phí giao dịch' },
    'မလုပ်တော့ပါ': { en:'Cancel', th:'ยกเลิก', vi:'Hủy' },
    'Fee ဖျက်မည်': { en:'Delete Fee', th:'ลบค่าธรรมเนียม', vi:'Xóa phí' },
    '📝 စနစ်အတွင်း လုပ်ဆောင်ချက် မှတ်တမ်းများ': { en:'📝 System Activity Logs', th:'📝 บันทึกกิจกรรมระบบ', vi:'📝 Nhật ký hoạt động hệ thống' },
    '🔄 Refresh': { en:'🔄 Refresh', th:'🔄 รีเฟรช', vi:'🔄 Làm mới' }
  };

  const originalTextByNode = new WeakMap();
  function translateSettingsText(lang) {
    const rootNode = document.getElementById('adminModal');
    if (!rootNode) return;
    const walk = document.createTreeWalker(rootNode, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walk.nextNode())) {
      const raw = originalTextByNode.has(node) ? originalTextByNode.get(node) : node.nodeValue;
      if (!originalTextByNode.has(node)) originalTextByNode.set(node, raw);
      const key = String(raw).replace(/\s+/g, ' ').trim();
      const item = settingsText[key];
      if (!item) continue;
      const translated = lang === 'my' ? key : (item[lang] || item.en || key);
      const leading = String(raw).match(/^\s*/)?.[0] || '';
      const trailing = String(raw).match(/\s*$/)?.[0] || '';
      node.nodeValue = leading + translated + trailing;
    }
  }
  root.translateSettingsText = translateSettingsText;

  root.SYS_DICT = common;
  root.I18N = receipt;

  // Keep the live screen language selector reliable even when a page loads late.
  root.addEventListener('DOMContentLoaded', function () {
    const lang = localStorage.getItem('sys_lang_pref') || 'my';
    const select = document.getElementById('sysLangSelect');
    if (select && common[lang]) select.value = lang;
    if (typeof root.changeSystemLanguage === 'function') root.changeSystemLanguage(lang);
  });
})(window);
