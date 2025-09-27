(function ensureGrammarBankRegistry(){
  if(typeof window === 'undefined') return;
  if(!window.grammarQuestionBanks) window.grammarQuestionBanks = {};
  if(!window.grammarQuestionOrder) window.grammarQuestionOrder = [];
  window.registerGrammarBank = function registerGrammarBank(id, payload){
    if(!payload || typeof payload !== 'object') return;
    const bankId = id || `grammar-${window.grammarQuestionOrder.length + 1}`;
    const title = payload.title || bankId;
    const questions = Array.isArray(payload.questions) ? payload.questions.slice() : [];
    window.grammarQuestionBanks[bankId] = {
      id: bankId,
      title,
      questions
    };
    if(!window.grammarQuestionOrder.includes(bankId)){
      window.grammarQuestionOrder.push(bankId);
    }
  };
})();
