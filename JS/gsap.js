let rule = CSSRulePlugin.getRule(".header__menu a::before");

// let tl = gsap.timeline();

export const navAnimation = () => {
  gsap.to(".line div", {
    y: "2.5%",
    duration: 0.75,
    stagger: 0.25,
    delay: 0.65,
    ease: "power2.out"
  });
};

export const beforeLinkAnimation = () => {
  gsap.to(rule, {
    duration: 0.5,
    delay: 1.75,
    cssRule: {
      width: "1rem"
    }
  });
};
