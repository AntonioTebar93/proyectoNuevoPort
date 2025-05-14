import { useEffect } from "react";

export const useScrollToHero = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#hero") {
      const hero = document.getElementById("hero");
      if (hero) {
        setTimeout(() => hero.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, []);
};
