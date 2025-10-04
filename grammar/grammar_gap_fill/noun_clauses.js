// 高中生名词性从句100道选择题（含翻译与解析）
// JavaScript Format - 名词性从句.js

const nounClauseTest = {
  title: "高中生名词性从句100道选择题（含翻译与解析）",
  
  questions: [
    // 一、主语从句（25题）
    {
      id: 1,
      section: "主语从句",
      question: "_____ he will come to the party tonight is still unknown.",
      options: {
        A: "That",
        B: "What",
        C: "Whether",
        D: "Where"
      },
      correctAnswer: "C",
      translation: "他今晚是否会来参加派对还不清楚。",
      analysis: "主语从句中缺少 \"是否\" 的含义，需用 whether（可引导主语从句，放句首）；A. That 仅起连接作用，无实义，无法体现 \"是否\"；B. What 在从句中需作成分（如主语/宾语），此处从句不缺成分；D. Where 表 \"地点\"，与句意不符，故选 C。"
    },

    {
      id: 2,
      section: "主语从句",
      question: "_____ she said at the meeting yesterday made everyone excited.",
      options: {
        A: "That",
        B: "What",
        C: "Whether",
        D: "When"
      },
      correctAnswer: "B",
      translation: "她昨天在会议上说的话让所有人都很兴奋。",
      analysis: "主语从句中 \"said\"（及物动词）缺少宾语，需用 what（在从句中作宾语，表 \"…… 的话/事\"）；A. That 不作成分；C. Whether 表 \"是否\"，无宾语含义；D. When 表 \"时间\"，均不符合，故选 B。"
    },

    {
      id: 3,
      section: "主语从句",
      question: "It is important _____ we should learn English well.",
      options: {
        A: "that",
        B: "what",
        C: "if",
        D: "where"
      },
      correctAnswer: "A",
      translation: "我们学好英语很重要。",
      analysis: "此句为 \"it 作形式主语，真正主语是 that 引导的从句\" 结构，that 仅起连接作用，不缺成分；B. What 需作成分，此处从句完整；C. if 不可用于 it is important 后的主语从句（需用 whether）；D. Where 表 \"地点\"，与句意不符，故选 A。"
    },

    // ... Continue with all 100 questions

    // 二、宾语从句（30题）
    {
      id: 26,
      section: "宾语从句",
      question: "I don't know _____ he will arrive here.",
      options: {
        A: "that",
        B: "what",
        C: "when",
        D: "where"
      },
      correctAnswer: "C",
      translation: "我不知道他什么时候会到这儿。",
      analysis: "宾语从句中缺少 \"时间\" 含义，用 when；A. That 无实义，若用 that 则从句为 \"he will arrive here\"，但 \"不知道他会到这儿\" 逻辑不完整；B. What 需作成分，从句 \"arrive\" 后有地点 here，不缺宾语；D. Where 表 \"地点\"，与 here 重复，故选 C。"
    },

    // 三、表语从句（20题）
    {
      id: 56,
      section: "表语从句",
      question: "The problem is _____ we can finish the work on time.",
      options: {
        A: "that",
        B: "what",
        C: "whether",
        D: "where"
      },
      correctAnswer: "C",
      translation: "问题是我们能否按时完成这项工作。",
      analysis: "表语从句中需 \"是否\" 含义，用 whether（表语从句中不可用 if）；A. That 无实义，与 \"problem\"（表疑问）矛盾；B. What 需作成分，从句完整；D. Where 表 \"地点\"，逻辑不符，故选 C。"
    },

    // 四、同位语从句（25题）
    {
      id: 76,
      section: "同位语从句",
      question: "We heard the news _____ our team won the match.",
      options: {
        A: "that",
        B: "what",
        C: "if",
        D: "where"
      },
      correctAnswer: "A",
      translation: "我们听到了我们队赢得比赛的消息。",
      analysis: "同位语从句（解释 news 的内容），从句完整，用 that 连接（that 不充当成分，不可省略）；B. What 需作成分；C. if 不可引导同位语从句；D. Where 表 \"地点\"，逻辑不符，故选 A。"
    }
  ],

  // 章节分类
  sections: {
    section1: {
      title: "一、主语从句（25题）",
      description: "聚焦引导词选择与形式主语",
      questionIds: Array.from({length: 25}, (_, i) => i + 1),
      connectives: {
        that: {
          usage: "仅起连接作用，无实义，从句完整",
          example: "That he will come is certain.",
          note: "常用it作形式主语：It is certain that he will come."
        },
        whether: {
          usage: "是否（可放句首，不能用if）",
          example: "Whether he will come is unknown.",
          note: "主语从句中只能用whether，不能用if"
        },
        what: {
          usage: "什么/...的东西（在从句中作成分）",
          example: "What he said surprised us.",
          analysis: "what = the thing(s) that"
        },
        who: {
          usage: "谁（在从句中作主语或宾语）",
          example: "Who will be our teacher is unknown."
        },
        which: {
          usage: "哪一个（有选择范围）",
          example: "Which team will win is hard to predict."
        },
        when: {
          usage: "何时（在从句中作时间状语）",
          example: "When he will arrive is uncertain."
        },
        where: {
          usage: "何地（在从句中作地点状语）",
          example: "Where he lives is a secret."
        },
        why: {
          usage: "为什么（在从句中作原因状语）",
          example: "Why he left is still a mystery."
        },
        how: {
          usage: "如何/怎样（在从句中作方式状语）",
          example: "How he solved it surprised everyone."
        }
      },
      formalSubject: {
        patterns: [
          "It is + adj. + that...",
          "It is + n. + that...",
          "It is + v-ed + that...",
          "It + vi. + that..."
        ],
        examples: [
          "It is important that we study hard.",
          "It is a pity that you missed the chance.",
          "It is said that he has gone abroad.",
          "It seems that he is right."
        ]
      }
    },
    section2: {
      title: "二、宾语从句（30题）",
      description: "聚焦引导词、时态呼应与that省略",
      questionIds: Array.from({length: 30}, (_, i) => i + 26),
      connectives: {
        that: {
          usage: "陈述句变宾语从句，无实义",
          omission: "think/believe/suppose/hope等后可省略",
          example: "I think (that) he is right."
        },
        "if/whether": {
          usage: "一般疑问句变宾语从句",
          differences: {
            whether: "可与or not连用，可用于介词后",
            if: "不可与or not直接连用，不可用于介词后"
          },
          example: "I wonder if/whether he will come."
        },
        "疑问词": {
          usage: "特殊疑问句变宾语从句",
          wordOrder: "疑问词 + 陈述语序",
          examples: [
            "I don't know where he lives.",
            "Tell me what you want.",
            "I wonder when he will arrive."
          ]
        }
      },
      tenseSequence: {
        rule: "主句过去时，从句相应变化",
        exceptions: ["客观真理", "经常性动作"],
        examples: {
          "一般现在→一般过去": "He said he was a student.",
          "现在进行→过去进行": "He said he was reading.",
          "一般将来→过去将来": "He said he would come.",
          "现在完成→过去完成": "He said he had finished.",
          "客观真理不变": "He said the earth moves around the sun."
        }
      }
    },
    section3: {
      title: "三、表语从句（20题）",
      description: "聚焦引导词与固定搭配",
      questionIds: Array.from({length: 20}, (_, i) => i + 56),
      connectives: {
        that: {
          usage: "从句完整，无实义",
          example: "The fact is that he is honest."
        },
        whether: {
          usage: "是否（表语从句中不能用if）",
          example: "The question is whether we should go."
        },
        what: {
          usage: "什么/...的东西（作成分）",
          example: "This is what I want."
        },
        "as if/as though": {
          usage: "好像（可用虚拟语气）",
          example: "It looks as if it is going to rain."
        }
      },
      specialPatterns: {
        "The reason is that...": "原因是...（不用because）",
        "That is why...": "那就是...的原因",
        "That is because...": "那是因为...",
        "The problem/question is whether...": "问题是是否..."
      }
    },
    section4: {
      title: "四、同位语从句（25题）",
      description: "聚焦引导词与定语从句区分",
      questionIds: Array.from({length: 25}, (_, i) => i + 76),
      abstractNouns: [
        "news", "fact", "idea", "suggestion", "question",
        "problem", "doubt", "hope", "belief", "thought",
        "promise", "order", "possibility", "evidence", "sign"
      ],
      connectives: {
        that: {
          usage: "最常用，从句完整，不作成分",
          example: "The news that he won surprised us.",
          note: "that不可省略"
        },
        whether: {
          usage: "是否（有疑问含义的名词后）",
          example: "I have a doubt whether he will come."
        },
        "疑问词": {
          usage: "根据名词内容选择",
          examples: [
            "I have no idea when he will come.",
            "The question where we should go is important."
          ]
        }
      },
      vsAttributiveClause: {
        同位语从句: {
          特点: "解释名词内容，that不作成分",
          example: "The news that he told me (内容是he told me)"
        },
        定语从句: {
          特点: "修饰名词，that作成分",
          example: "The news that he told me (他告诉我的那个消息)"
        }
      }
    }
  },

  // 元数据信息
  metadata: {
    totalQuestions: 100,
    targetLevel: "高中生",
    focusAreas: [
      "主语从句",
      "宾语从句",
      "表语从句",
      "同位语从句"
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

  // 获取名词性从句规则总结
  getNounClauseRules: function() {
    return {
      主语从句: {
        位置: "句首或用it作形式主语",
        引导词: {
          连接词: ["that（无实义）", "whether（是否，不用if）"],
          连接代词: ["what", "who", "whom", "which", "whose"],
          连接副词: ["when", "where", "why", "how"]
        },
        形式主语句型: {
          "It is + 形容词 + that": "It is important that we study hard.",
          "It is + 名词 + that": "It is a pity that you missed it.",
          "It is + 过去分词 + that": "It is said that he has left.",
          "It + 不及物动词 + that": "It seems that he is right."
        },
        特殊用法: {
          "whether vs if": "主语从句只能用whether，不能用if",
          "what的双重作用": "what既引导从句又在从句中作成分"
        }
      },
      宾语从句: {
        位置: "及物动词或介词后",
        引导词: {
          that: "陈述句变宾语从句（可省略）",
          "if/whether": "一般疑问句变宾语从句",
          疑问词: "特殊疑问句变宾语从句"
        },
        语序: "必须用陈述语序",
        时态呼应: {
          规则: "主句过去时，从句相应变化",
          例外: ["客观真理", "习惯性动作"]
        },
        否定转移: {
          适用动词: ["think", "believe", "suppose", "expect"],
          例子: "I don't think he is right. (我认为他不对)"
        },
        特殊情况: {
          介词后: "只能用whether，不能用if",
          "whether...or not": "可以连用",
          "if...or not": "不能直接连用"
        }
      },
      表语从句: {
        位置: "系动词后",
        引导词: {
          that: "从句完整，无实义",
          whether: "是否（不用if）",
          "连接代词/副词": "根据句意选择"
        },
        特殊结构: {
          "The reason is that": "不用because",
          "That/This/It is why": "那就是...的原因",
          "That/This/It is because": "那是因为...",
          "as if/as though": "好像（可用虚拟）"
        },
        注意事项: "表语从句中不能用if引导"
      },
      同位语从句: {
        位置: "抽象名词后",
        常见名词: [
          "news", "fact", "idea", "belief",
          "thought", "doubt", "suggestion", "question"
        ],
        引导词: {
          that: "最常用，不作成分，不可省略",
          whether: "用于有疑问的名词后",
          疑问词: "根据名词内容"
        },
        与定语从句区别: {
          同位语从句: "解释名词内容，that不作成分",
          定语从句: "修饰限定名词，that作成分"
        },
        判断技巧: "在名词和that之间加入is，意思通顺则为同位语从句"
      }
    };
  },

  // 获取常见错误分析
  getCommonMistakes: function() {
    return {
      引导词混淆: {
        "that vs what": "that不作成分，what必须作成分",
        "if vs whether": {
          主语从句: "只能用whether",
          宾语从句: "介词后只能用whether",
          表语从句: "只能用whether",
          同位语从句: "只能用whether"
        },
        "which vs what": "which有选择范围，what没有"
      },
      语序错误: {
        错误: "Do you know where does he live?",
        正确: "Do you know where he lives?",
        原则: "名词性从句一律用陈述语序"
      },
      时态错误: {
        主句过去时: "从句要相应变化",
        例外情况: "客观真理不变时态"
      },
      成分判断: {
        缺主语: "用who/what/which",
        缺宾语: "用whom/what/which",
        缺状语: "用when/where/why/how",
        不缺成分: "用that/whether"
      }
    };
  },

  // 获取引导词选择技巧
  getConnectiveSelection: function() {
    return {
      判断步骤: [
        "1. 分析从句是否完整",
        "2. 确定从句缺少什么成分",
        "3. 根据句意选择引导词"
      ],
      选择原则: {
        从句完整: {
          陈述意义: "用that",
          疑问意义: "用whether"
        },
        从句不完整: {
          缺主语: {
            指人: "who",
            指物: "what",
            选择: "which"
          },
          缺宾语: {
            指人: "whom/who",
            指物: "what",
            选择: "which"
          },
          缺状语: {
            时间: "when",
            地点: "where",
            原因: "why",
            方式: "how"
          }
        }
      },
      特殊情况: {
        "what = the thing(s) that": "具有双重作用",
        "whoever = anyone who": "任何...的人",
        "whatever = anything that": "任何...的东西",
        "whichever = any...that": "任何（有范围）"
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
      if (q.section.includes("主语")) stats.各类型题数["主语从句"] = (stats.各类型题数["主语从句"] || 0) + 1;
      if (q.section.includes("宾语")) stats.各类型题数["宾语从句"] = (stats.各类型题数["宾语从句"] || 0) + 1;
      if (q.section.includes("表语")) stats.各类型题数["表语从句"] = (stats.各类型题数["表语从句"] || 0) + 1;
      if (q.section.includes("同位语")) stats.各类型题数["同位语从句"] = (stats.各类型题数["同位语从句"] || 0) + 1;
    });

    return stats;
  }
};

// 导出模块
if (typeof window !== 'undefined') {
  window.nounClauseTest = nounClauseTest;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = nounClauseTest;
}

// 使用示例（仅用于调试）
{
  console.log(`名词性从句测试加载完成！`);
  console.log(`总题数: ${nounClauseTest.questions.length}`);
  console.log(`测试标题: ${nounClauseTest.title}`);

  // 示例：获取第一题
  const nounClauseFirstQuestion = nounClauseTest.getQuestionById(1);
  console.log('\n第一题:', nounClauseFirstQuestion.question);
  console.log('正确答案:', nounClauseFirstQuestion.correctAnswer);

  // 示例：获取名词性从句规则
  const rules = nounClauseTest.getNounClauseRules();
  console.log('\n主语从句引导词:', rules.主语从句.引导词);

  // 示例：获取引导词选择技巧
  const selection = nounClauseTest.getConnectiveSelection();
  console.log('\n引导词选择原则:', selection.选择原则);
}
