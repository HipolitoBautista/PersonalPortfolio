export const scrollToSection = (sectionId) => {
    const Section = document.getElementById(sectionId);
    Section.scrollIntoView({ behavior: "smooth", block: "start" });
  };