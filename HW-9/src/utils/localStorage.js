const setName = (storageKey, obj) => {
  localStorage.setItem(storageKey, JSON.stringify(obj));
}

const getName = (storageKey) => {
  return JSON.parse(localStorage.getItem(storageKey));
}

export { setName, getName };