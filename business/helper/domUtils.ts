import {
  deleteInSessionStorage,
  getInSesstionStorage,
  setInSesstionStorage,
} from './storageUtils';

const htmlElement =
  typeof window === 'undefined'
    ? null
    : document.getElementsByTagName('html')[0];

const getHtmlStyle = (...key: string[]) => {
  if (htmlElement) {
    const htmlStyle = getComputedStyle(htmlElement);

    return Object.fromEntries(key.map((el) => [el, htmlStyle[el]]));
  }

  return {};
};

const setHtmlStyle = (styles: Record<string, string>) => {
  if (htmlElement) {
    const htmlStyle = htmlElement.style;

    Object.keys(styles).forEach((key) => {
      htmlStyle[key] = styles[key];
    });
  }
};

const freezeWindowScroll = () => {
  if (htmlElement) {
    const { htmlWidth: storagedWidth, htmlHeight: storagedHeight } =
      getInSesstionStorage('htmlWidth', 'htmlHeight');

    if (!storagedWidth && !storagedHeight) {
      const { width: htmlWidth, height: htmlHeight } = getHtmlStyle(
        'width',
        'height',
      );

      setInSesstionStorage({ htmlWidth, htmlHeight });
    }

    setHtmlStyle({ width: '100vw', height: '100vh', overflow: 'hidden' });
  }
};

const releaseWindowScroll = () => {
  if (htmlElement) {
    const { htmlWidth, htmlHeight } = getInSesstionStorage(
      'htmlWidth',
      'htmlHeight',
    );

    if (htmlWidth && htmlHeight) {
      setHtmlStyle({
        width: htmlWidth,
        height: htmlHeight,
        overflow: 'scroll',
      });

      deleteInSessionStorage('htmlWidth', 'htmlHeight');
    }
  }
};

export { freezeWindowScroll, releaseWindowScroll };
