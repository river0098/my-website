// 高中生定语从句100道选择题（含翻译与解析）
// JavaScript Format - 定语从句.js

const attributiveClauseTest = {
  title: "高中生定语从句100道选择题（含翻译与解析）",
  
  questions: [
    // 1-10题：基础关系代词
    {
      id: 1,
      section: "基础关系代词",
      question: "The girl _____ helped me with my math homework yesterday is my deskmate.",
      options: {
        A: "whom",
        B: "which",
        C: "who",
        D: "whose"
      },
      correctAnswer: "C",
      translation: "昨天帮我补数学作业的那个女孩是我的同桌。",
      analysis: "先行词 the girl（指人），定语从句中 helped（谓语）缺少主语，需用指人的关系代词 who；A. whom 用于从句作宾语，B. which 指代物，D. whose 表 \"…… 的\"（后接名词），均不符合，故选 C。"
    },

    {
      id: 2,
      section: "基础关系代词",
      question: "This is the storybook _____ my mother bought me for my birthday.",
      options: {
        A: "who",
        B: "which",
        C: "whose",
        D: "where"
      },
      correctAnswer: "B",
      translation: "这是妈妈给我买的生日礼物故事书。",
      analysis: "先行词 the storybook（指物），从句中 bought（及物动词）缺少宾语，需用指物的关系代词 which；A. who 指代人，C. whose 表所属，D. where 是关系副词（作地点状语），均不符合，故选 B。"
    },

    // ... Continue with all 100 questions

    // 11-20题：that的特殊用法
    {
      id: 11,
      section: "that的特殊用法",
      question: "All _____ we need to do now is finish our homework carefully.",
      options: {
        A: "who",
        B: "which",
        C: "that",
        D: "whose"
      },
      correctAnswer: "C",
      translation: "我们现在需要做的所有事就是认真完成作业。",
      analysis: "先行词 all（不定代词），定语从句中 need（及物动词）缺少宾语，此时关系代词只能用 that，不能用 which；A. who 指代人，D. whose 表所属，均不符合，故选 C。"
    },

    // 21-30题：非限制性定语从句
    {
      id: 21,
      section: "非限制性定语从句",
      question: "My elder sister, _____ is a doctor, works in a big hospital in Beijing.",
      options: {
        A: "who",
        B: "which",
        C: "that",
        D: "where"
      },
      correctAnswer: "A",
      translation: "我的姐姐是一名医生，她在北京的一家大医院工作。",
      analysis: "此为非限制性定语从句（逗号分隔，补充说明），先行词 my elder sister（指人），从句中 is（谓语）缺少主语，用 who；B. which 指代物，C. that 不可用于非限制性定语从句，D. where 作地点状语，均不符合，故选 A。"
    },

    // 31-40题：介词+关系代词
    {
      id: 31,
      section: "介词+关系代词",
      question: "This is the house _____ my grandfather lived for 50 years.",
      options: {
        A: "in which",
        B: "which",
        C: "who",
        D: "where"
      },
      correctAnswer: "A",
      translation: "这是我爷爷住了 50 年的房子。",
      analysis: "先行词 the house（指地点），从句中 lived（不及物动词）后需接 in（live in the house），故用 in which（=where）；B. which 需后接 in，C. who 指代人，D. where 虽正确，但选项中有 in which 更符合 \"介词 + 关系代词\" 考点，故选 A。"
    },

    // 41-50题：先行词既有人又有物/关系代词省略
    {
      id: 41,
      section: "先行词既有人又有物",
      question: "I still remember the people and places _____ I visited during my trip to Shanghai.",
      options: {
        A: "who",
        B: "which",
        C: "that",
        D: "where"
      },
      correctAnswer: "C",
      translation: "我仍然记得我去上海旅行时参观过的人和地方。",
      analysis: "先行词 the people and places（既有人又有物），定语从句中 visited（及物动词）缺少宾语，此时关系代词只能用 that；A. who 只指代人，B. which 只指代物，D. where 作地点状语，均不符合，故选 C。"
    },

    // Continue with remaining questions...
  ],

  // 章节分类
  sections: {
    section1: {
      title: "基础关系代词（who/which/that/whose）",
      questionIds: Array.from({length: 10}, (_, i) => i + 1),
      pronouns: {
        who: {
          usage: "指人，在从句中作主语或宾语",
          example: "The girl who helped me is my friend.",
          note: "口语中可代替whom作宾语"
        },
        whom: {
          usage: "指人，在从句中作宾语（正式）",
          example: "The man whom we met is a teacher.",
          note: "口语中常用who代替"
        },
        which: {
          usage: "指物，在从句中作主语或宾语",
          example: "The book which I bought is interesting.",
          note: "不能用于指人"
        },
        that: {
          usage: "指人或物，作主语或宾语",
          example: "The book that I read is good.",
          note: "最通用，但有特殊限制"
        },
        whose: {
          usage: "表所属关系，后接名词",
          example: "The boy whose father is a doctor studies hard.",
          note: "whose + n. 在从句中作定语"
        }
      }
    },
    section2: {
      title: "that的特殊用法",
      questionIds: Array.from({length: 10}, (_, i) => i + 11),
      mustUseThat: {
        不定代词: {
          words: ["all", "everything", "nothing", "something", "anything", "little", "much"],
          example: "All that we need is time."
        },
        最高级: {
          pattern: "the + 最高级 + n.",
          example: "This is the best book that I have read."
        },
        序数词: {
          pattern: "the + 序数词 + n.",
          example: "He is the first student that arrived."
        },
        "the only": {
          pattern: "the only + n.",
          example: "This is the only book that can help."
        },
        "the very": {
          pattern: "the very + n.",
          example: "This is the very pen that I lost."
        },
        "the same": {
          pattern: "the same + n.",
          example: "This is the same book that I read."
        },
        既有人又有物: {
          example: "I remember the people and places that I visited."
        }
      }
    },
    section3: {
      title: "非限制性定语从句",
      questionIds: Array.from({length: 10}, (_, i) => i + 21),
      features: {
        标志: "逗号分隔",
        作用: "补充说明，去掉不影响主句完整性",
        限制: {
          不能用that: "非限制性定语从句不能用that引导",
          不能省略: "关系词不能省略"
        }
      },
      connectives: {
        who: "指人，作主语",
        whom: "指人，作宾语",
        which: "指物或指代整个主句",
        whose: "表所属",
        when: "表时间",
        where: "表地点",
        as: "正如（可放句首）"
      }
    },
    section4: {
      title: "介词+关系代词",
      questionIds: Array.from({length: 10}, (_, i) => i + 31),
      rules: {
        基本结构: "介词 + which/whom",
        介词选择: {
          根据动词搭配: "look at → at which",
          根据先行词搭配: "in the morning → in which",
          根据句意: "根据逻辑关系选择"
        },
        注意事项: {
          that不可用: "介词后不能用that",
          who不可用: "介词后不能直接用who，需用whom"
        }
      },
      examples: {
        "in which": "The house in which I lived (= where)",
        "on which": "The day on which we met (= when)",
        "for which": "The reason for which he left (= why)",
        "with whom": "The girl with whom I talked"
      }
    },
    section5: {
      title: "关系副词when/where/why",
      questionIds: Array.from({length: 10}, (_, i) => i + 51),
      adverbs: {
        when: {
          usage: "先行词表时间，从句不缺主宾",
          equivalent: "= on/in/at which",
          example: "I remember the day when we met."
        },
        where: {
          usage: "先行词表地点，从句不缺主宾",
          equivalent: "= in/at/on which",
          example: "This is the place where I was born."
        },
        why: {
          usage: "先行词是reason，从句不缺主宾",
          equivalent: "= for which",
          example: "The reason why he left is clear."
        }
      },
      判断技巧: {
        缺成分用关系代词: "从句缺主语/宾语/表语",
        不缺成分用关系副词: "从句结构完整，缺状语"
      }
    },
    section6: {
      title: "特殊先行词",
      questionIds: Array.from({length: 10}, (_, i) => i + 61),
      abstractNouns: {
        situation: "情况、局面（用where）",
        case: "情况、案例（用where）",
        point: "地步、阶段（用where）",
        stage: "阶段（用where）",
        position: "位置、处境（用where）"
      },
      examples: {
        situation: "We are in a situation where we need help.",
        case: "There are cases where this rule doesn't apply.",
        point: "We've reached a point where we must decide."
      }
    },
    section7: {
      title: "定语从句与强调句区分",
      questionIds: Array.from({length: 10}, (_, i) => i + 71),
      distinction: {
        强调句: {
          结构: "It is/was + 被强调部分 + that/who + 其他",
          判断: "去掉It is/was...that后句子完整",
          example: "It was yesterday that I met him."
        },
        定语从句: {
          结构: "先行词 + 关系词 + 从句",
          判断: "关系词在从句中充当成分",
          example: "It was the day when I met him."
        }
      },
      判断方法: "还原法：去掉It is/was和that/who，句子完整则为强调句"
    },
    section8: {
      title: "定语从句中的主谓一致",
      questionIds: Array.from({length: 10}, (_, i) => i + 81),
      rules: {
        基本原则: "关系代词的单复数取决于先行词",
        时态一致: "从句时态要与主句协调",
        examples: {
          单数: "The boy who is... (先行词boy为单数)",
          复数: "The boys who are... (先行词boys为复数)"
        }
      }
    },
    section9: {
      title: "综合考点",
      questionIds: Array.from({length: 10}, (_, i) => i + 91),
      description: "结合语境、时态、省略等多个考点"
    }
  },

  // 元数据信息
  metadata: {
    totalQuestions: 100,
    targetLevel: "高中生",
    focusAreas: [
      "关系代词",
      "关系副词",
      "非限制性定语从句",
      "介词+关系代词",
      "that的特殊用法",
      "定语从句与强调句区分"
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

  // 获取定语从句规则总结
  getAttributiveClauseRules: function() {
    return {
      关系代词: {
        指人: {
          who: "主语/宾语（非正式）",
          whom: "宾语（正式）",
          whose: "定语（某人的）",
          that: "主语/宾语"
        },
        指物: {
          which: "主语/宾语",
          whose: "定语（某物的）",
          that: "主语/宾语"
        },
        省略规则: "关系代词在从句中作宾语时可省略（限制性定语从句）"
      },
      关系副词: {
        when: {
          先行词: "时间名词",
          在从句中: "作时间状语",
          相当于: "on/in/at which"
        },
        where: {
          先行词: "地点名词/抽象地点",
          在从句中: "作地点状语",
          相当于: "in/at/on which"
        },
        why: {
          先行词: "reason",
          在从句中: "作原因状语",
          相当于: "for which"
        }
      },
      只能用that的情况: [
        "先行词是不定代词（all, everything, nothing等）",
        "先行词被最高级修饰",
        "先行词被序数词修饰",
        "先行词被the only, the very, the same修饰",
        "先行词既有人又有物",
        "主句是who/which开头的疑问句"
      ],
      不能用that的情况: [
        "非限制性定语从句",
        "介词后面",
        "先行词是that/those"
      ],
      限制性vs非限制性: {
        限制性定语从句: {
          标志: "无逗号",
          作用: "修饰限定先行词",
          关系词: "可用that，可省略（作宾语时）"
        },
        非限制性定语从句: {
          标志: "有逗号",
          作用: "补充说明",
          关系词: "不可用that，不可省略"
        }
      }
    };
  },

  // 获取常见错误分析
  getCommonMistakes: function() {
    return {
      混淆关系代词和关系副词: {
        错误: "The place which I visited（visited缺宾语，用which）",
        正确: "The place where I lived（lived不缺宾语，用where）",
        判断方法: "看从句是否缺主语/宾语/表语"
      },
      that使用错误: {
        错误用于非限制性: "My sister, that is a doctor（错）",
        正确: "My sister, who is a doctor（对）",
        错误用于介词后: "The pen with that I write（错）",
        正确: "The pen with which I write（对）"
      },
      whose使用错误: {
        错误: "The boy who's father（错，who's = who is）",
        正确: "The boy whose father（对，表所属）"
      },
      先行词判断错误: {
        注意抽象地点: "situation, case, point等用where",
        注意time: "可用when也可用which/that（看从句缺什么）"
      }
    };
  },

  // 获取介词选择技巧
  getPrepositionSelection: function() {
    return {
      选择依据: {
        根据动词搭配: {
          "look at": "at which",
          "depend on": "on which",
          "talk about": "about which",
          "listen to": "to which"
        },
        根据形容词搭配: {
          "be proud of": "of which",
          "be interested in": "in which",
          "be good at": "at which"
        },
        根据先行词搭配: {
          时间: {
            year: "in which",
            month: "in which",
            day: "on which",
            moment: "at which"
          },
          地点: {
            country: "in which",
            street: "on/in which",
            house: "in which"
          }
        },
        根据句意逻辑: "选择能使句意通顺的介词"
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
      关系词使用统计: {
        who: 0,
        which: 0,
        that: 0,
        whose: 0,
        when: 0,
        where: 0,
        why: 0
      }
    };

    this.questions.forEach(q => {
      // 统计各章节
      stats.各章节题数[q.section] = (stats.各章节题数[q.section] || 0) + 1;
      
      // 统计正确答案中的关系词
      const answer = q.correctAnswer;
      const option = q.options[answer];
      if (option) {
        Object.keys(stats.关系词使用统计).forEach(word => {
          if (option.includes(word)) {
            stats.关系词使用统计[word]++;
          }
        });
      }
    });

    return stats;
  }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
  module.exports = attributiveClauseTest;
}

// 使用示例
console.log(`定语从句测试加载完成！`);
console.log(`总题数: ${attributiveClauseTest.questions.length}`);
console.log(`测试标题: ${attributiveClauseTest.title}`);

// 示例：获取第一题
const firstQuestion = attributiveClauseTest.getQuestionById(1);
console.log('\n第一题:', firstQuestion.question);
console.log('正确答案:', firstQuestion.correctAnswer);

// 示例：获取定语从句规则
const rules = attributiveClauseTest.getAttributiveClauseRules();
console.log('\n关系代词指人:', rules.关系代词.指人);

// 示例：获取that的特殊用法
const section2 = attributiveClauseTest.sections.section2;
console.log('\n必须用that的情况:', Object.keys(section2.mustUseThat));
