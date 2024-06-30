const htmlElement =
  typeof window === 'undefined'
    ? null
    : document.getElementsByTagName('html')[0];

const freezeWindowScroll = () => {
  htmlElement?.classList.add('freezed');
};

const releaseWindowScroll = () => {
  htmlElement?.classList.remove('freezed');
};

export { freezeWindowScroll, releaseWindowScroll };
