// تغییر حالت تاریک و روشن
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('light-mode');
  body.classList.toggle('dark-mode');
}

// باز کردن صفحه جدید برای پشتیبانی (می‌تونی لینک چت واتساپ بذاری)
function openSupportChat() {
  const phone = '+989962462337';
  const url = `https://wa.me/${phone.replace(/\D/g, '')}?text=سلام، من به پشتیبانی سایت Do It Easily نیاز دارم.`;
  window.open(url, '_blank');
}

// باز کردن صفحات جدید برای دکمه‌های پایین
function openPage(page) {
  let url = '';
  switch (page) {
    case 'about':
      url = 'about.html';
      break;
    case 'faq':
      url = 'faq.html';
      break;
    case 'contact':
      url = 'contact.html';
      break;
    default:
      url = '/';
  }
  window.open(url, '_blank');
}

// ارسال پیام واتساپ برای خرید
function redirectToWhatsApp(product) {
  const phone = '+989962462337';
  const message = encodeURIComponent(`سلام، من می‌خواهم فایل "${product}" را خریداری کنم.`);
  const url = `https://wa.me/${phone.replace(/\D/g, '')}?text=${message}`;
  window.open(url, '_blank');
}
