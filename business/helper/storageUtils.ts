const setInLocalStorage = (obejct: Record<string, string>) => {
  Object.keys(obejct).forEach((key) => {
    window.localStorage.setItem(key, obejct[key]);
  });
};

const setInSesstionStorage = (obejct: Record<string, string>) => {
  Object.keys(obejct).forEach((key) => {
    window.sessionStorage.setItem(key, obejct[key]);
  });
};

const getInSesstionStorage = (...key: string[]) => {
  return Object.fromEntries(
    key.map((el) => [el, window.sessionStorage.getItem(el)]),
  );
};

const deleteInSessionStorage = (...key: string[]) => {
  key.forEach((el) => window.sessionStorage.removeItem(el));
};

export {
  setInLocalStorage,
  setInSesstionStorage,
  getInSesstionStorage,
  deleteInSessionStorage,
};
