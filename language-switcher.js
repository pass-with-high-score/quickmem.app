document.addEventListener("DOMContentLoaded", function () {
  // Dữ liệu dịch chỉ cho tiếng Việt
  const translations = {
    vi: {
      menuHome: "Trang chủ",
      menuAbout: "Dự án",
      menuTeam: "Đội",
      menuDownload: "Tải về",
      menuSourceCode: "Mã nguồn",
      homeTitle: "Bạn muốn học như thế nào?",
      homeDescription:
        "Nắm vững kiến thức đang học, ôn lại kiến thức đã học, bài kiểm tra thử và hoạt động học tập của QuickMem.",
      downloadButton: "Tải đề học",
      card1Title: "Học",
      card2Title: "Thẻ ghi nhớ",
      card3Title: "Kiểm tra",
      card4Title: "Ghép thẻ",
      aboutTitle1: "Nhiều lớp học, nhiều bài thi, một ứng dụng học tập tối ưu",
      aboutDescription1:
        "Ứng dụng học tập của chúng tôi được phát triển với mục tiêu giúp người học tiếp thu và ghi nhớ kiến thức một cách hiệu quả thông qua phương pháp học bằng thẻ ghi nhớ (flashcards) và trò chơi học tập.",
      aboutTitle2: "Chọn cách học mà bạn muốn",
      aboutDescription2:
        "Biến thẻ ghi nhớ thành câu hỏi trắc nghiệm và nhiều nội dung khác với chế độ học. Củng cố kiến thức của bạn bằng các trò chơi học tập như Ghép thẻ.",
      aboutTitle3: "Chuẩn bị ôn thi cho bất kỳ môn học nào",
      aboutDescription3:
        "Ghi nhớ mọi thứ với các bài kiểm tra thử và phiên học được cá nhân hóa. 98% học sinh cho biết QuickMem đã giúp họ hiểu bài hơn.",
      teamTitle: "Đội",
      member1: "Nguyễn Quang Minh",
      member2: "Hà Văn Đạo",
      member3: "Nguyễn Văn Hải",
      member4: "Nguyễn Đình Thi",
      member5: "Vũ Đức Huân",
      member6: "Vũ Hữu Nguyên",
      teamLeader: "Trưởng nhóm",
      memberRole: "Thành viên",
      downloadTitle: "Tải về",
      sourceCodeTitle: "Mã nguồn",
      sourceCodeDescription:
        "Bạn có thể tìm thấy mã nguồn đầy đủ dự án này trên GitHub.",
      viewOnGitHub: "Xem trên GitHub",
      footerText: "QuickMem - 2026",
    },
  };

  // Lấy nội dung mặc định (tiếng Anh) từ HTML
  const defaultTexts = {
    menuHome: document.getElementById("menu-home").textContent,
    menuAbout: document.getElementById("menu-about").textContent,
    menuTeam: document.getElementById("menu-team").textContent,
    menuDownload: document.getElementById("menu-download").textContent,
    menuSourceCode: document.getElementById("menu-source-code").textContent,
    homeTitle: document.getElementById("home-title").textContent,
    homeDescription: document.getElementById("home-description").textContent,
    downloadButton: document.getElementById("download-button").textContent,
    card1Title: document.getElementById("card1-title").textContent,
    card2Title: document.getElementById("card2-title").textContent,
    card3Title: document.getElementById("card3-title").textContent,
    card4Title: document.getElementById("card4-title").textContent,
    aboutTitle1: document.getElementById("about-title1").textContent,
    aboutDescription1:
      document.getElementById("about-description1").textContent,
    aboutTitle2: document.getElementById("about-title2").textContent,
    aboutDescription2:
      document.getElementById("about-description2").textContent,
    aboutTitle3: document.getElementById("about-title3").textContent,
    aboutDescription3:
      document.getElementById("about-description3").textContent,
    teamTitle: document.getElementById("team-title").textContent,
    member1: document.getElementById("member1").textContent,
    member2: document.getElementById("member2").textContent,
    member3: document.getElementById("member3").textContent,
    member4: document.getElementById("member4").textContent,
    member5: document.getElementById("member5").textContent,
    member6: document.getElementById("member6").textContent,
    teamLeader: document.querySelector(".team-member:nth-child(1) p")
      .textContent,
    memberRole: Array.from(document.querySelectorAll(".team-member p"))
      .slice(1)
      .map((el) => el.textContent),
    downloadTitle: document.getElementById("download-title").textContent,
    sourceCodeTitle: document.getElementById("source-code-title").textContent,
    sourceCodeDescription: document.getElementById("source-code-description")
      .textContent,
    footerText: document.getElementById("footer-text").textContent,
    viewOnGitHub: document.querySelector(".github-logo span").textContent,
  };

  // Hàm dịch nội dung trang
  function translatePage(lang) {
    const elementsToTranslate = {
      menuHome: document.getElementById("menu-home"),
      menuAbout: document.getElementById("menu-about"),
      menuTeam: document.getElementById("menu-team"),
      menuDownload: document.getElementById("menu-download"),
      menuSourceCode: document.getElementById("menu-source-code"),
      homeTitle: document.getElementById("home-title"),
      homeDescription: document.getElementById("home-description"),
      downloadButton: document.getElementById("download-button"),
      card1Title: document.getElementById("card1-title"),
      card2Title: document.getElementById("card2-title"),
      card3Title: document.getElementById("card3-title"),
      card4Title: document.getElementById("card4-title"),
      aboutTitle1: document.getElementById("about-title1"),
      aboutDescription1: document.getElementById("about-description1"),
      aboutTitle2: document.getElementById("about-title2"),
      aboutDescription2: document.getElementById("about-description2"),
      aboutTitle3: document.getElementById("about-title3"),
      aboutDescription3: document.getElementById("about-description3"),
      teamTitle: document.getElementById("team-title"),
      member1: document.getElementById("member1"),
      member2: document.getElementById("member2"),
      member3: document.getElementById("member3"),
      member4: document.getElementById("member4"),
      member5: document.getElementById("member5"),
      member6: document.getElementById("member6"),
      downloadTitle: document.getElementById("download-title"),
      sourceCodeTitle: document.getElementById("source-code-title"),
      sourceCodeDescription: document.getElementById("source-code-description"),
      footerText: document.getElementById("footer-text"),
      viewOnGitHub: document.querySelector(".github-logo span"),
      teamLeader: document.querySelector(".team-member:nth-child(1) p"),
      memberRole: document.querySelectorAll(".team-member p"),
    };

    // Cập nhật nội dung của các phần tử
    Object.keys(elementsToTranslate).forEach((key) => {
      if (lang === "vi" && translations.vi[key]) {
        if (key === "memberRole") {
          elementsToTranslate[key].forEach((element, index) => {
            if (index > 0) {
              element.textContent = translations.vi["memberRole"];
            }
          });
        } else {
          elementsToTranslate[key].textContent = translations.vi[key];
        }
      } else {
        if (key === "memberRole") {
          elementsToTranslate[key].forEach((element, index) => {
            if (index > 0) {
              element.textContent = defaultTexts["memberRole"][index - 1];
            }
          });
        } else {
          elementsToTranslate[key].textContent = defaultTexts[key];
        }
      }
    });

    // Cập nhật ngôn ngữ cho nút toggle và icon cờ
    const languageToggle = document.getElementById("language-toggle");
    if (lang === "vi") {
      languageToggle.innerHTML =
        '<img src="images/vietnam.png" alt="Vietnamese Flag" id="flag-icon" /> Vietnamese';
    } else {
      languageToggle.innerHTML =
        '<img src="images/english.png" alt="English Flag" id="flag-icon" /> English';
    }
  }

  // Ngôn ngữ mặc định là tiếng Anh (dữ liệu từ HTML)
  let currentLanguage = localStorage.getItem("language") || "en";

  // Cập nhật ngôn ngữ khi trang tải
  translatePage(currentLanguage);

  // Xử lý sự kiện nhấn nút chọn ngôn ngữ trong dropdown
  document.querySelectorAll(".language-option").forEach((option) => {
    option.addEventListener("click", function (event) {
      event.preventDefault();

      // Lấy ngôn ngữ từ lựa chọn
      const selectedLanguage = this.getAttribute("data-lang");
      currentLanguage = selectedLanguage;
      localStorage.setItem("language", currentLanguage);

      // Dịch lại trang
      translatePage(currentLanguage);
    });
  });
});
