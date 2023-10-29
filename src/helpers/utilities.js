export const scrollToSection = (sectionId) => {
  const Section = document.getElementById(sectionId);

  if (Section) {
    const yOffset = Section.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: yOffset, behavior: "smooth" });
  }
};
