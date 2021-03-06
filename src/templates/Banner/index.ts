const Banner = (primaryColor: string): string => {
  const { language, className } = (window as any).TALP_SETTINGS;

  return `
    <style>
      .cookie-banner-button {
        color: ${primaryColor}
      }
    </style>
    <div id="banner-cookie" class="${className.banner}" style="color: ${primaryColor};">
      <p class="${className.text}">
        ${language.TEXT_BANNER}
      </p>
      <div class="cookie-banner-buttons-wrapper">
        <button class="${className.button} js-cookie-button-allow"><span>${language.BUTTON_AGREE}</span></button>
        <button class="${className.button} js-cookie-button-deny"><span>${language.BUTTON_DECLINE}</span></button>
        <button class="${className.button} js-cookie-button-customize" data-micromodal-trigger="js-cookie-modal"><span>${language.BUTTON_CUSTOM}</span></button>
      </div>
    </div>
  `;
};

export default Banner;
