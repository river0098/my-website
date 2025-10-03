(function createLearningDataLoader(){
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const manifest = [
    {
      name: 'grammar-core',
      files: ['grammar/english_grammar_concepts.js']
    },
    {
      name: 'grammar-gap-fill',
      files: [
        'grammar/grammar_gap_fill/adverbial_clauses.js',
        'grammar/grammar_gap_fill/articles.js',
        'grammar/grammar_gap_fill/conjunctions.js',
        'grammar/grammar_gap_fill/nonfinite_verbs.js',
        'grammar/grammar_gap_fill/noun_clauses.js',
        'grammar/grammar_gap_fill/nouns.js',
        'grammar/grammar_gap_fill/prepositions.js',
        'grammar/grammar_gap_fill/pronouns.js',
        'grammar/grammar_gap_fill/relative_clauses.js',
        'grammar/grammar_gap_fill/verb_tenses.js',
        'grammar/grammar_gap_fill/verb_voice.js'
      ]
    },
    {
      name: 'grammar-multiple-choice',
      files: [
        'grammar/grammar_multiple_choice/register.js',
        'grammar/grammar_multiple_choice/01_subject_verb_agreement.js',
        'grammar/grammar_multiple_choice/02_articles_numbers.js',
        'grammar/grammar_multiple_choice/03_pronouns_prepositions.js',
        'grammar/grammar_multiple_choice/04_adjectives_adverbs.js',
        'grammar/grammar_multiple_choice/05_verbs_phrasal_verbs.js',
        'grammar/grammar_multiple_choice/06_verb_tense_voice.js',
        'grammar/grammar_multiple_choice/07_nonfinite_verbs.js',
        'grammar/grammar_multiple_choice/08_modals_subjunctive.js',
        'grammar/grammar_multiple_choice/09_sentence_components_types.js',
        'grammar/grammar_multiple_choice/10_noun_clauses.js',
        'grammar/grammar_multiple_choice/11_adverbial_clauses.js',
        'grammar/grammar_multiple_choice/12_relative_clauses.js'
      ]
    },
    {
      name: 'vocabulary-core',
      files: ['word_bank/vocabulary688.js']
    },
    {
      name: 'vocabulary-textbook',
      files: [
        'word_bank/gaokao_core_688/register.js',
        'word_bank/gaokao_core_688/bixiu1.js',
        'word_bank/gaokao_core_688/bixiu2.js',
        'word_bank/gaokao_core_688/bixiu3.js',
        'word_bank/gaokao_core_688/xuanxiu1.js',
        'word_bank/gaokao_core_688/xuanxiu2.js',
        'word_bank/gaokao_core_688/xuanxiu3.js',
        'word_bank/gaokao_core_688/xuanxiu4.js'
      ]
    },
    {
      name: 'vocabulary-3500',
      files: [
        'word_bank/3500/register.js',
        'word_bank/3500/a-vocab.js',
        'word_bank/3500/b-vocab-dictionary-b.js',
        'word_bank/3500/c-vocab-dictionary-c.js',
        'word_bank/3500/d-vocab-dictionary-d.js',
        'word_bank/3500/e-vocab-dictionary-e.js',
        'word_bank/3500/f-vocab-dictionary-f.js',
        'word_bank/3500/g-vocab-dictionary-g.js',
        'word_bank/3500/h-vocab-dictionary-h.js',
        'word_bank/3500/i-vocab-dictionary-i.js',
        'word_bank/3500/i-vocab-dictionary-l.js',
        'word_bank/3500/j-vocab-dictionary-j.js',
        'word_bank/3500/k-vocab-dictionary-k.js',
        'word_bank/3500/m-vocab-dictionary-m.js',
        'word_bank/3500/n-vocab-dictionary-n.js',
        'word_bank/3500/p-vocab-dictionary-p.js',
        'word_bank/3500/q-vocabulary-js.js',
        'word_bank/3500/r-vocabulary-js.js',
        'word_bank/3500/s-vocabulary1.js',
        'word_bank/3500/s-vocabulary2.js',
        'word_bank/3500/t-vocabulary-js.js',
        'word_bank/3500/u-vocabulary-js.js',
        'word_bank/3500/v-vocabulary-js.js',
        'word_bank/3500/y-vocabulary-js.js',
        'word_bank/3500/z-vocabulary-js.js'
      ]
    },
    {
      name: 'sentence-bank',
      files: ['sentence_bank/sentences_200.js']
    },
    {
      name: 'model-essays',
      files: [
        'sentence_bank/model_essays_8/activity_introduction.js',
        'sentence_bank/model_essays_8/activity_report.js',
        'sentence_bank/model_essays_8/apology_letter.js',
        'sentence_bank/model_essays_8/application_letter.js',
        'sentence_bank/model_essays_8/invitation_letter.js',
        'sentence_bank/model_essays_8/notice_letter.js',
        'sentence_bank/model_essays_8/person_introduction.js',
        'sentence_bank/model_essays_8/suggestion_letter.js'
      ]
    }
  ];

  const loaded = new Set();
  let preloadPromise = null;

  function loadScript(src) {
    if (loaded.has(src)) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[data-learning-src="${src}"]`);
      if (existing) {
        loaded.add(src);
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.dataset.learningSrc = src;
      script.onload = () => {
        loaded.add(src);
        resolve();
      };
      script.onerror = () => {
        reject(new Error(`资源加载失败: ${src}`));
      };
      document.head.appendChild(script);
    });
  }

  async function preloadGroup(group) {
    for (const file of group.files) {
      await loadScript(file);
    }
  }

  async function preloadAll() {
    for (const group of manifest) {
      await preloadGroup(group);
    }
    document.dispatchEvent(new CustomEvent('learning-assets-loaded'));
  }

  window.preloadLearningAssets = function preloadLearningAssets() {
    if (!preloadPromise) {
      preloadPromise = preloadAll().catch(error => {
        preloadPromise = null;
        throw error;
      });
    }
    return preloadPromise;
  };
})();
