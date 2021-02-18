import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Sebastien?", "Arthur?", "Alexandre?", "Allison?", "WHEEL OF DEATH!!!"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
