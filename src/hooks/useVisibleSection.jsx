// hooks/useVisibleSection.js
import { useEffect, useState } from "react";

export const useVisibleSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let found = false;

        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.9) {
            setActiveSection(entry.target.id);
            setIsInView(true);
            found = true;
            break;
          }
        }

        if (!found) {
          setIsInView(false);
        }
      },
      {
        threshold: [0.5, 0.9, 1],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return { activeSection, isInView };
};
