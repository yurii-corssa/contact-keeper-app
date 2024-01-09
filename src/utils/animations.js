const defaultAnimation = {
  opacity: 1,
  transition: { duration: 0.5, ease: [0.05, 0.08, 0.24, 0.96] },
};

export const createTextAnimationRight = delay => ({
  initial: { opacity: 0, x: 40 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { duration: 0.5, ease: [0.05, 0.08, 0.24, 0.96], delay },
      opacity: { duration: 0.3, ease: 'easeIn', delay },
    },
  },
});

export const createTextAnimationTop = delay => ({
  initial: { opacity: 0, y: -20 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      y: { duration: 0.5, ease: [0.05, 0.08, 0.24, 0.96], delay },
      opacity: { duration: 0.3, ease: 'easeIn', delay },
    },
  },
});

export const createFormAnimation = delay => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      opacity: { duration: 0.3, ease: 'easeIn', delay },
    },
  },
});

export const createContactAnimation = delay => ({
  initial: { opacity: 0, x: 50 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { duration: 0.5, ease: [0.05, 0.08, 0.24, 0.96], delay },
      opacity: { duration: 0.3, ease: 'easeIn', delay },
    },
  },
});

export const createHomePageAnimation = controls => {
  return controls.start({
    ...defaultAnimation,
    left: '0',
    width: '100%',
    height: '100vh',
  });
};

export const createAuthPageAnimation = (controls, isDesktop) => {
  return controls.start({
    ...defaultAnimation,
    left: !isDesktop ? '0' : '50%',
    width: !isDesktop ? '100%' : '50%',
    height: !isDesktop ? '50vh' : '100vh',
  });
};

export const createContactsPageAnimation = (controls, isDesktop) => {
  return controls.start({
    ...defaultAnimation,
    left: '0',
    width: !isDesktop ? '100%' : '50%',
    height: !isDesktop ? '80vh' : '100vh',
  });
};

export const createConfirmationPageAnimation = controls => {
  return controls.start({
    ...defaultAnimation,
    left: '100%',
    width: '0',
  });
};

export const createBgAnimation = (controls, currentPage, isDesktop) => {
  return {
    initial: {
      left: currentPage.isAuthPage ? (!isDesktop ? '0%' : '50%') : '0%',
      width: !currentPage.isHomePage ? (!isDesktop ? '100%' : '50%') : '100%',
      height: !currentPage.isHomePage
        ? !isDesktop
          ? '50vh'
          : '100vh'
        : '100vh',
      opacity: 0,
    },
    animate: controls,
  };
};
