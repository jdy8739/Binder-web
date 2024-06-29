const setInLocalStorage = (key: string, value: string) => {
  window.localStorage.setItem(key, value);
};

const setInSesstionStorage = (key: string, value: string) => {
  window.sessionStorage.setItem(key, value);
};

const getInSesstionStorage = (key: string) => {
  return window.sessionStorage.getItem(key);
};

export { setInLocalStorage, setInSesstionStorage, getInSesstionStorage };
