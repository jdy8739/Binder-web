const htmlElement =
  typeof window === 'undefined'
    ? null
    : document.getElementsByTagName('html')[0];

const freezeWindowScroll = () => {
  if (htmlElement) {
    htmlElement.style.height = '100vh';
    htmlElement.style.overflow = 'hidden';
  }
};

const releaseWindowScroll = () => {
  //
};

export { freezeWindowScroll, releaseWindowScroll };
