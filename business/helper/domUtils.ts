import { setInSesstionStorage } from './storageUtils';

const htmlElement =
  typeof window === 'undefined'
    ? null
    : document.getElementsByTagName('html')[0];

const getHtmlStyle = (key: string) => {
  if (htmlElement) {
    const htmlStyle = getComputedStyle(htmlElement);

    return htmlStyle[key];
  }

  return '';
};

const freezeWindowScroll = () => {
  if (htmlElement) {
    const htmlHeight = getHtmlStyle('height');

    setInSesstionStorage('htmlHeight', htmlHeight);

    htmlElement.style.height = '100vh';
    htmlElement.style.overflow = 'hidden';
  }
};

const releaseWindowScroll = () => {
  //
};

export { freezeWindowScroll, releaseWindowScroll };
