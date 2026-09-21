  const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');
const icon = sidebarToggle.querySelector('i'); // گرفتن آیکون داخل دکمه

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  sidebarToggle.classList.toggle('open'); // برای تغییر رنگ دکمه

  if (sidebar.classList.contains('open')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times'); // تغییر آیکون به ضربدر
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars'); // برگشت آیکون به همبرگر
  }
});


    const accordionButtons = document.querySelectorAll(".accordion button");
    accordionButtons.forEach(button => {
      button.addEventListener("click", function () {
        const panel = this.nextElementSibling;
        
        if (panel.classList.contains("open")) {
          panel.classList.remove("open");
        } else {
          document.querySelectorAll(".panel").forEach(p => p.classList.remove("open"));
          panel.classList.add("open");
        }
      });
    });


// تابع برای باز و بسته کردن پنل‌های آکاردئونی
function toggleAccordion(event) {
    const content = event.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}


function loadSite() {
    var fixedText1 = "https://srswebsite.github.io/eurasia_repository/"; // متن ثابت اول
    var fixedText2 = "/index.html"; // متن ثابت دوم
    var variableText = document.getElementById("variableInput").value; // متن متغیر

    // ترکیب متن ثابت اول، متن متغیر و متن ثابت دوم
    var finalText = fixedText1 + variableText + fixedText2;

    // قرار دادن لینک کامل در فیلد مخفی
    document.getElementById("combinedText").value = finalText;

    // نمایش لینک کامل در آیفریم
    var siteFrame = document.getElementById("unique-siteFrame");
    siteFrame.src = finalText;
}
 function loadFixedLink() {
            var fixedLink = "1/logo/index.html"; // لینک ثابت

            // نمایش لینک ثابت در آیفریم
            var siteFrame = document.getElementById("unique-siteFrame");
            siteFrame.src = fixedLink;
        }
		function loadInIframe(url) {
  const siteFrame = document.getElementById("unique-siteFrame");
  siteFrame.src = url;
}
