(function ensureTextbookNamespace(){
  if(typeof window === "undefined") return;
  if(!window.textbookVocab) window.textbookVocab = {};
  window.registerTextbookBook = function registerTextbookBook(id, bookMap){
    if(!id || !bookMap || typeof bookMap !== "object") return;
    const entries = Object.entries(bookMap).filter(([, value]) => value && typeof value === "object");
    if(!entries.length) return;
    entries.forEach(([bookName, units], index) => {
      const key = entries.length === 1 ? id : `${id}-${index + 1}`;
      window.textbookVocab[key] = {
        name: bookName,
        units
      };
    });
  };
})();
