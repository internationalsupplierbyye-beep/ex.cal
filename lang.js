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
