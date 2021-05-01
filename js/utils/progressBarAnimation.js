const PROGRESS_BAR_CONTAINER = document.querySelector(
  ".progress-bar-container"
);
const PROGRESS_BAR = document.querySelector(".progress-bar");
const PROGRESS_SECTION_2 = PROGRESS_BAR.querySelector("div:nth-child(2)");
const PROGRESS_SECTION_3 = PROGRESS_BAR.querySelector("div:nth-child(3)");
const PROGRESS_SECTION_4 = PROGRESS_BAR.querySelector("div:nth-child(4)");
const PROGRESS_SECTION_5 = PROGRESS_BAR.querySelector("div:nth-child(5)");

export const progressBarAnimation = function (sectionNumber) {
  switch (sectionNumber) {
    case 1:
      PROGRESS_SECTION_2.classList.remove("active");
      PROGRESS_SECTION_3.classList.remove("active");
      PROGRESS_SECTION_4.classList.remove("active");
      PROGRESS_SECTION_5.classList.remove("active");
      break;
    case 2:
      PROGRESS_SECTION_2.classList.add("active");
      PROGRESS_SECTION_3.classList.remove("active");
      PROGRESS_SECTION_4.classList.remove("active");
      PROGRESS_SECTION_5.classList.remove("active");
      break;
    case 3:
      PROGRESS_SECTION_2.classList.add("active");
      PROGRESS_SECTION_3.classList.add("active");
      PROGRESS_SECTION_4.classList.remove("active");
      PROGRESS_SECTION_5.classList.remove("active");
      break;
    case 4:
      PROGRESS_SECTION_2.classList.add("active");
      PROGRESS_SECTION_3.classList.add("active");
      PROGRESS_SECTION_4.classList.add("active");
      PROGRESS_SECTION_5.classList.remove("active");
      break;
    case 5:
      PROGRESS_SECTION_2.classList.add("active");
      PROGRESS_SECTION_3.classList.add("active");
      PROGRESS_SECTION_4.classList.add("active");
      PROGRESS_SECTION_5.classList.add("active");
      break;
    case 6:
      PROGRESS_BAR_CONTAINER.hidden = true;
  }
};
