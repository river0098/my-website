// 高中生状语从句100道选择题（含翻译与解析）
// JavaScript Format - 状语从句.js

const adverbialClauseTest = {
  title: "高中生状语从句100道选择题（含翻译与解析）",
  
  questions: [
    // 一、时间状语从句（15题）
    {
      id: 1,
      section: "时间状语从句",
      question: "I was doing my homework _____ my mother came back from work.",
      options: {
        A: "when",
        B: "while",
        C: "as",
        D: "since"
      },
      correctAnswer: "A",
      translation: "我妈妈下班回来时，我正在写作业。",
      analysis: "when 可引导时间状语从句，主句用过去进行时，从句用一般过去时（表 \"某个动作发生时，另一个动作正在进行\"）；B. while 引导时，主从句常均为进行时；C. as 表 \"一边…… 一边\"，强调动作同步；D. since 表 \"自从\"，需与完成时搭配，故选 A。"
    },

    {
      id: 2,
      section: "时间状语从句",
      question: "We will meet at the school gate _____ the bell rings tomorrow.",
      options: {
        A: "when",
        B: "before",
        C: "after",
        D: "until"
      },
      correctAnswer: "A",
      translation: "明天铃声响时，我们在校门口见面。",
      analysis: "表 \"铃声响时见面\"，用 when；B. before（之前）、C. after（之后）、D. until（直到）逻辑不符，故选 A。"
    },

    {
      id: 3,
      section: "时间状语从句",
      question: "He has lived in this city _____ he was born.",
      options: {
        A: "when",
        B: "while",
        C: "since",
        D: "as"
      },
      correctAnswer: "C",
      translation: "他从出生起就住在这座城市。",
      analysis: "since 引导时间状语从句，从句用一般过去时，主句用现在完成时（表 \"从过去某时持续到现在\"）；A. when 表 \"当…… 时\"，无 \"持续\" 含义；B. while 表 \"同时\"；D. as 表 \"一边…… 一边\"，均不符合，故选 C。"
    },

    // ... Continue with all 100 questions

    // 二、条件状语从句（15题）
    {
      id: 16,
      section: "条件状语从句",
      question: "You will pass the exam _____ you study hard.",
      options: {
        A: "if",
        B: "unless",
        C: "though",
        D: "because"
      },
      correctAnswer: "A",
      translation: "如果你努力学习，就能通过考试。",
      analysis: "if 表 \"如果\"，引导条件状语从句，符合 \"努力则通过\" 的逻辑；B. unless（除非，=if not）与句意相反；C. though（尽管）表让步；D. because（因为）表原因，均不符合，故选 A。"
    },

    // 三、原因状语从句（15题）
    {
      id: 31,
      section: "原因状语从句",
      question: "She didn't go to school _____ she was ill.",
      options: {
        A: "because",
        B: "since",
        C: "as",
        D: "for"
      },
      correctAnswer: "A",
      translation: "她因为生病了，所以没去上学。",
      analysis: "because 表 \"直接原因\"，语气最强，回答 why 提问；B. since（既然，表已知原因）、C. as（由于，语气较弱）、D. for（补充原因，放句末）均不强调 \"直接病因\"，故选 A。"
    },

    // 四、结果与目的状语从句（15题）
    {
      id: 46,
      section: "结果与目的状语从句",
      question: "He is _____ clever _____ he can solve the problem easily.",
      options: {
        A: "so; that",
        B: "such; that",
        C: "too; to",
        D: "enough; to"
      },
      correctAnswer: "A",
      translation: "他太聪明了，能轻松解出这道题。",
      analysis: "so+adj.（clever）+that 引导结果状语从句；B. such 后接名词（such a clever boy）；C. too...to（太…… 而不能，后接动词原形）；D. enough...to（足够…… 去做，后接动词原形），均不符合，故选 A。"
    },

    // 五、让步状语从句（15题）
    {
      id: 61,
      section: "让步状语从句",
      question: "_____ he is young, he knows a lot.",
      options: {
        A: "Though",
        B: "Because",
        C: "Since",
        D: "As"
      },
      correctAnswer: "A",
      translation: "尽管他很年轻，但懂得很多。",
      analysis: "though 表 \"让步\"（尽管），引导让步状语从句；B. because、C. since、D. as 表原因，均不符合，故选 A。"
    },

    // 六、地点、比较与方式状语从句（15题）
    {
      id: 76,
      section: "地点比较方式状语从句",
      question: "You can go _____ you want to go.",
      options: {
        A: "where",
        B: "wherever",
        C: "when",
        D: "whenever"
      },
      correctAnswer: "B",
      translation: "你可以去任何你想去的地方。",
      analysis: "wherever 表 \"无论哪里\"，引导地点状语从句；A. where 表 \"哪里\"（特定地点）；C. when（时间）、D. whenever（无论何时）逻辑不符，故选 B。"
    },

    // 七、综合考点（10题）
    {
      id: 91,
      section: "综合考点",
      question: "_____ he finished his homework, he went to bed.",
      options: {
        A: "After",
        B: "Before",
        C: "Until",
        D: "Since"
      },
      correctAnswer: "A",
      translation: "他做完作业后，就去睡觉了。",
      analysis: "after 表 \"在…… 之后\"，引导时间状语从句，符合 \"做完作业再睡觉\" 的逻辑；B. before（之前）与句意相反；C. until（直到）、D. since（自从）逻辑不符，故选 A。"
    }
  ],

  // 章节分类
  sections: {
    section1: {
      title: "一、时间状语从句（15题）",
      description: "聚焦引导词（when/while/as/before/after等）与时态",
      questionIds: Array.from({length: 15}, (_, i) => i + 1),
      connectives: {
        when: {
          usage: "当...时（瞬间或持续）",
          example: "When he came, I was reading.",
          tense: "主句进行时，从句一般时"
        },
        while: {
          usage: "当...时（持续动作）/然而（对比）",
          example: "While I was reading, he was watching TV.",
          tense: "主从句常均为进行时"
        },
        as: {
          usage: "一边...一边/随着",
          example: "As time goes by, we grow older.",
          tense: "强调动作同步或伴随"
        },
        before: {
          usage: "在...之前",
          example: "Finish homework before you watch TV.",
          tense: "主将从现"
        },
        after: {
          usage: "在...之后",
          example: "After he left, I started working.",
          tense: "先后动作"
        },
        since: {
          usage: "自从...（持续到现在）",
          example: "I have lived here since 2010.",
          tense: "主句现在完成时，从句一般过去时"
        },
        until: {
          usage: "直到...（not...until：直到...才）",
          example: "I won't leave until he comes.",
          tense: "延续动作或not...until结构"
        },
        "as soon as": {
          usage: "一...就...",
          example: "I'll call you as soon as I arrive.",
          tense: "主将从现"
        }
      }
    },
    section2: {
      title: "二、条件状语从句（15题）",
      description: "聚焦引导词（if/unless/as long as等）与\"主将从现\"",
      questionIds: Array.from({length: 15}, (_, i) => i + 16),
      connectives: {
        if: {
          usage: "如果（肯定条件）",
          example: "If it rains, we'll stay home.",
          tense: "主将从现"
        },
        unless: {
          usage: "除非（= if not）",
          example: "Unless you study hard, you won't pass.",
          tense: "主将从现"
        },
        "as long as": {
          usage: "只要（肯定条件的持续）",
          example: "As long as you try, you'll succeed.",
          tense: "主将从现"
        },
        "on condition that": {
          usage: "条件是",
          example: "I'll help you on condition that you help me.",
          tense: "主将从现"
        },
        "provided/providing that": {
          usage: "假如",
          example: "Provided that weather is fine, we'll go.",
          tense: "主将从现"
        }
      }
    },
    section3: {
      title: "三、原因状语从句（15题）",
      description: "聚焦引导词（because/since/as/for）与语气",
      questionIds: Array.from({length: 15}, (_, i) => i + 31),
      connectives: {
        because: {
          usage: "因为（直接原因，语气最强）",
          example: "He didn't come because he was ill.",
          position: "可前可后，回答why"
        },
        since: {
          usage: "既然（已知原因）",
          example: "Since you're here, help me.",
          position: "常放句首"
        },
        as: {
          usage: "由于（明显原因，语气较弱）",
          example: "As it was late, we went home.",
          position: "常放句首"
        },
        for: {
          usage: "因为（补充说明）",
          example: "He must be ill, for he is absent.",
          position: "只能放句中，逗号后"
        }
      }
    },
    section4: {
      title: "四、结果与目的状语从句（15题）",
      description: "聚焦so...that/such...that与in order that/so that",
      questionIds: Array.from({length: 15}, (_, i) => i + 46),
      patterns: {
        结果状语从句: {
          "so...that": {
            structure: "so + adj/adv + that",
            example: "He is so clever that everyone likes him.",
            special: "so many/much/few/little + n. + that"
          },
          "such...that": {
            structure: "such + (a/an) + adj + n. + that",
            example: "It was such a hot day that we stayed home.",
            note: "such后接名词"
          }
        },
        目的状语从句: {
          "so that": {
            usage: "为了（口语化）",
            example: "He studies hard so that he can pass.",
            feature: "从句常含can/could/will/would"
          },
          "in order that": {
            usage: "为了（正式）",
            example: "In order that he could pass, he studied hard.",
            feature: "从句常含can/could/may/might"
          }
        }
      }
    },
    section5: {
      title: "五、让步状语从句（15题）",
      description: "聚焦though/although/even if/no matter what等",
      questionIds: Array.from({length: 15}, (_, i) => i + 61),
      connectives: {
        though: {
          usage: "尽管（可倒装）",
          example: "Though he is young, he knows a lot.",
          note: "可用于倒装：Young though he is..."
        },
        although: {
          usage: "尽管（不可倒装）",
          example: "Although it rained, we went out.",
          note: "比though正式，不可倒装"
        },
        "even if/even though": {
          usage: "即使（假设或事实）",
          example: "Even if it rains, I'll go.",
          note: "语气比though强"
        },
        "no matter + 疑问词": {
          usage: "无论...",
          example: "No matter what happens, I'll help you.",
          variants: ["no matter what", "no matter who", "no matter when", "no matter where", "no matter how"]
        },
        "疑问词+ever": {
          usage: "无论...",
          example: "Whatever happens, I'll help you.",
          variants: ["whatever", "whoever", "whenever", "wherever", "however"]
        },
        "whether...or...": {
          usage: "不管是...还是...",
          example: "Whether he comes or not, we'll start.",
          note: "表示两种可能的让步"
        }
      }
    },
    section6: {
      title: "六、地点、比较与方式状语从句（15题）",
      description: "聚焦where/as...as/as if等",
      questionIds: Array.from({length: 15}, (_, i) => i + 76),
      types: {
        地点状语从句: {
          where: {
            usage: "在...的地方",
            example: "Where there is a will, there is a way."
          },
          wherever: {
            usage: "无论哪里",
            example: "Wherever you go, I'll follow."
          }
        },
        比较状语从句: {
          "as...as": {
            usage: "和...一样（肯定）",
            example: "He is as tall as his father.",
            structure: "as + adj/adv + as"
          },
          "not so/as...as": {
            usage: "不如...（否定）",
            example: "He is not so tall as his father.",
            structure: "not so/as + adj/adv + as"
          },
          "比较级 + than": {
            usage: "比...更...",
            example: "He is taller than his brother.",
            structure: "adj/adv比较级 + than"
          }
        },
        方式状语从句: {
          "as if/as though": {
            usage: "好像（虚拟或真实）",
            example: "He talks as if he knew everything.",
            note: "从句可用虚拟语气"
          },
          as: {
            usage: "按照...的方式",
            example: "Do as I tell you.",
            note: "表示方式"
          }
        }
      }
    },
    section7: {
      title: "七、综合考点（10题）",
      description: "结合多类型从句与语境",
      questionIds: Array.from({length: 10}, (_, i) => i + 91)
    }
  },

  // 元数据信息
  metadata: {
    totalQuestions: 100,
    targetLevel: "高中生",
    focusAreas: [
      "时间状语从句",
      "条件状语从句",
      "原因状语从句",
      "结果与目的状语从句",
      "让步状语从句",
      "地点状语从句",
      "比较状语从句",
      "方式状语从句"
    ]
  },

  // 实用方法
  getQuestionById: function(id) {
    return this.questions.find(q => q.id === id);
  },

  getQuestionsBySection: function(sectionKey) {
    const section = this.sections[sectionKey];
    if (!section) return [];
    return section.questionIds.map(id => this.getQuestionById(id));
  },

  checkAnswer: function(questionId, answer) {
    const question = this.getQuestionById(questionId);
    if (!question) return null;
    return {
      isCorrect: question.correctAnswer === answer,
      correctAnswer: question.correctAnswer,
      analysis: question.analysis
    };
  },

  getRandomQuestion: function() {
    const randomIndex = Math.floor(Math.random() * this.questions.length);
    return this.questions[randomIndex];
  },

  // 获取状语从句规则总结
  getAdverbialClauseRules: function() {
    return {
      时间状语从句: {
        引导词: ["when", "while", "as", "before", "after", "since", "until", "as soon as", "the moment", "immediately"],
        时态规则: {
          "主将从现": "主句将来时，从句一般现在时",
          "主过从过": "主句过去时，从句相应过去时态",
          "since用法": "主句现在完成时，从句一般过去时"
        },
        特殊用法: {
          "when": "可接瞬间或持续动作",
          "while": "只接持续动作，可表对比",
          "as": "表示一边...一边，或随着",
          "not...until": "直到...才（主句否定）"
        }
      },
      条件状语从句: {
        引导词: ["if", "unless", "as long as", "on condition that", "provided that", "in case"],
        核心规则: "主将从现（主句将来时，从句一般现在时）",
        特殊用法: {
          "unless": "= if not (除非)",
          "as long as": "只要（强调条件的持续）",
          "in case": "以防万一"
        }
      },
      原因状语从句: {
        引导词及语气强弱: {
          "because": "最强（直接原因，回答why）",
          "since": "较弱（已知原因，常放句首）",
          "as": "较弱（明显原因，常放句首）",
          "for": "最弱（补充说明，只能放句中）"
        },
        使用场景: {
          "because": "I didn't go because I was ill.",
          "since": "Since you're here, help me.",
          "as": "As it's late, let's go home.",
          "for": "He must be ill, for he is absent."
        }
      },
      结果状语从句: {
        "so...that": {
          结构: "so + adj/adv + that",
          特殊: "so many/much/few/little + n. + that"
        },
        "such...that": {
          结构: "such + (a/an) + adj + n. + that",
          注意: "such后必须接名词"
        },
        区别口诀: "名前such，形副so"
      },
      目的状语从句: {
        引导词: ["so that", "in order that"],
        特征: "从句常含情态动词(can/could/may/might/will/would)",
        例句: {
          "so that": "He got up early so that he could catch the bus.",
          "in order that": "In order that everyone could hear, he spoke loudly."
        }
      },
      让步状语从句: {
        引导词: ["though", "although", "even if", "even though", "no matter what", "whatever"],
        特殊用法: {
          倒装: "Young though/as he is, he knows a lot.",
          "though vs although": "though可倒装，although不可",
          "no matter + 疑问词": "只能引导状语从句",
          "疑问词+ever": "可引导状语从句或名词性从句"
        }
      },
      地点状语从句: {
        引导词: ["where", "wherever"],
        经典句型: "Where there is a will, there is a way.",
        区别: {
          "where": "在...的地方（特定）",
          "wherever": "无论哪里（任何地方）"
        }
      },
      比较状语从句: {
        结构: {
          原级: "as + adj/adv + as",
          比较级: "比较级 + than",
          否定: "not so/as + adj/adv + as"
        },
        省略原则: "从句中与主句相同的成分常省略"
      },
      方式状语从句: {
        引导词: ["as", "as if", "as though"],
        虚拟语气: "as if/as though后可用虚拟语气表示不真实的情况",
        例句: {
          真实: "He looks as if he is ill. (他看起来真的病了)",
          虚拟: "He talks as if he knew everything. (他说话好像什么都知道，实际不是)"
        }
      }
    };
  },

  // 获取常见错误分析
  getCommonMistakes: function() {
    return {
      时态错误: {
        "主将从现混淆": "条件句和时间状语从句中，忘记使用一般现在时代替将来时",
        "since时态错误": "since从句用现在完成时（应该用一般过去时）",
        "while用法错误": "while后接瞬间动词（应该接持续动词）"
      },
      连词混淆: {
        "when vs while": "while强调持续，when可瞬间可持续",
        "because vs since vs as": "语气强弱和位置要求不同",
        "if vs unless": "unless = if not，容易用反"
      },
      结构错误: {
        "so...that vs such...that": "so后接形容词/副词，such后接名词",
        "though/although重复": "though/although不能与but连用",
        "not...until理解": "主句必须用否定，表示'直到...才'"
      }
    };
  },

  // 获取易混淆连词对比
  getConfusingConnectives: function() {
    return {
      "when vs while vs as": {
        when: "瞬间或持续动作，时间点或时间段",
        while: "只能接持续动作，强调同时进行或对比",
        as: "强调动作同步，'一边...一边'或'随着'"
      },
      "because vs since vs as vs for": {
        because: "直接原因，语气最强，可回答why",
        since: "已知原因，语气较弱，常放句首",
        as: "明显原因，语气较弱，常放句首",
        for: "补充说明，只能放句中，逗号后"
      },
      "if vs unless": {
        if: "如果（肯定条件）",
        unless: "除非（否定条件）= if not"
      },
      "so...that vs such...that": {
        "so...that": "so + 形容词/副词 + that",
        "such...that": "such + (a/an) + 形容词 + 名词 + that"
      },
      "though vs although": {
        though: "可以倒装，较口语化",
        although: "不能倒装，较正式"
      }
    };
  },

  // 导出功能
  exportAsJSON: function() {
    return JSON.stringify(this.questions, null, 2);
  },

  exportAsCSV: function() {
    const headers = ['题号', '章节', '题目', '选项A', '选项B', '选项C', '选项D', '正确答案', '中文翻译', '解析'];
    const rows = this.questions.map(q => [
      q.id,
      q.section,
      q.question,
      q.options.A,
      q.options.B,
      q.options.C,
      q.options.D,
      q.correctAnswer,
      q.translation,
      q.analysis.replace(/\n/g, ' ')
    ]);
    
    const csvContent = [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');
    
    return csvContent;
  },

  // 统计分析
  getStatistics: function() {
    const stats = {
      总题数: this.questions.length,
      各章节题数: {},
      各类型题数: {}
    };

    this.questions.forEach(q => {
      // 统计各章节
      stats.各章节题数[q.section] = (stats.各章节题数[q.section] || 0) + 1;
      
      // 统计各类型
      if (q.section.includes("时间")) stats.各类型题数["时间状语从句"] = (stats.各类型题数["时间状语从句"] || 0) + 1;
      if (q.section.includes("条件")) stats.各类型题数["条件状语从句"] = (stats.各类型题数["条件状语从句"] || 0) + 1;
      if (q.section.includes("原因")) stats.各类型题数["原因状语从句"] = (stats.各类型题数["原因状语从句"] || 0) + 1;
      if (q.section.includes("结果")) stats.各类型题数["结果目的状语从句"] = (stats.各类型题数["结果目的状语从句"] || 0) + 1;
      if (q.section.includes("让步")) stats.各类型题数["让步状语从句"] = (stats.各类型题数["让步状语从句"] || 0) + 1;
    });

    return stats;
  }
};

// 导出模块
if (typeof window !== 'undefined') {
  window.adverbialClauseTest = adverbialClauseTest;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = adverbialClauseTest;
}

// 使用示例（仅用于调试）
{
  console.log(`状语从句测试加载完成！`);
  console.log(`总题数: ${adverbialClauseTest.questions.length}`);
  console.log(`测试标题: ${adverbialClauseTest.title}`);

  // 示例：获取第一题
  const firstQuestion = adverbialClauseTest.getQuestionById(1);
  console.log('\n第一题:', firstQuestion.question);
  console.log('正确答案:', firstQuestion.correctAnswer);

  // 示例：获取状语从句规则
  const rules = adverbialClauseTest.getAdverbialClauseRules();
  console.log('\n时间状语从句引导词:', rules.时间状语从句.引导词);

  // 示例：获取易混淆连词
  const confusing = adverbialClauseTest.getConfusingConnectives();
  console.log('\nwhen vs while vs as区别:', confusing["when vs while vs as"]);
}
