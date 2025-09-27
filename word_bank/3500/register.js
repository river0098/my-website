(function(){
  window.registerVocab3500 = function(letter, entries){
    if(!letter || !Array.isArray(entries)) return;
    const key = String(letter).toUpperCase();
    if(!window.vocab3500) window.vocab3500 = {};
    if(!window.vocab3500[key]) window.vocab3500[key] = [];
    window.vocab3500[key] = window.vocab3500[key].concat(entries);
  };
})();
