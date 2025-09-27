// 高中生非谓语动词100道选择题（含翻译与解析）
// JavaScript Format - 非谓语动词.js

const nonFiniteVerbTest = {
  title: "高中生非谓语动词100道选择题（含翻译与解析）",
  
  questions: [
    // 一、不定式（to do）用法（20题）
    {
      id: 1,
      section: "不定式（to do）用法",
      question: "He wants _____ a new bike for his birthday.",
      options: {
        A: "buy",
        B: "to buy",
        C: "buying",
        D: "bought"
      },
      correctAnswer: "B",
      translation: "他生日想要一辆新自行车。",
      analysis: "want 后接不定式作宾语（want to do sth. 固定搭配），表 \"想要做某事\"；A. buy 为动词原形，C. buying 为动名词，D. bought 为过去式，均不符合搭配，故选 B。"
    },

    {
      id: 2,
      section: "不定式（to do）用法",
      question: "It is important _____ English well.",
      options: {
        A: "learn",
        B: "to learn",
        C: "learning",
        D: "learned"
      },
      correctAnswer: "B",
      translation: "学好英语很重要。",
      analysis: "it 作形式主语，真正主语是不定式（It is + adj. + to do sth. 固定结构）；A. learn 原形、C. learning 动名词、D. learned 过去式均无法作真正主语，故选 B。"
    },

    {
      id: 3,
      section: "不定式（to do）用法",
      question: "My mother told me _____ too much time playing games.",
      options: {
        A: "not to spend",
        B: "don't spend",
        C: "not spend",
        D: "to not spend"
      },
      correctAnswer: "A",
      translation: "妈妈告诉我不要花太多时间玩游戏。",
      analysis: "tell 后接不定式作宾补（tell sb. to do sth.），否定形式为 \"tell sb. not to do sth.\"；B. don't spend 为祈使句结构，C. not spend 缺少 to，D. to not spend 否定词位置错误，故选 A。"
    },

    // ... Continue with questions 4-20

    // 二、动名词（doing）用法（20题）
    {
      id: 21,
      section: "动名词（doing）用法",
      question: "_____ English is very important for us.",
      options: {
        A: "Learn",
        B: "To learn",
        C: "Learning",
        D: "Learned"
      },
      correctAnswer: "C",
      translation: "学习英语对我们很重要。",
      analysis: "动名词（Learning）作主语，表 \"抽象动作\"；A. Learn 原形不能作主语，B. To learn 不定式也可作主语，但此处强调 \"学习\" 这一常规行为，动名词更贴切；D. Learned 过去式不能作主语，故选 C。"
    },

    {
      id: 22,
      section: "动名词（doing）用法",
      question: "He enjoys _____ football after school.",
      options: {
        A: "play",
        B: "to play",
        C: "playing",
        D: "played"
      },
      correctAnswer: "C",
      translation: "他喜欢放学后踢足球。",
      analysis: "enjoy 后接动名词作宾语（enjoy doing sth. 固定搭配），表 \"喜欢做某事\"；A. play 原形、B. to play 不定式、D. played 过去式均不符合，故选 C。"
    },

    // ... Continue with questions 23-40

    // 三、现在分词（doing）与过去分词（done）区别（25题）
    {
      id: 41,
      section: "现在分词与过去分词区别",
      question: "The _____ boy is my little brother.",
      options: {
        A: "cry",
        B: "crying",
        C: "cried",
        D: "to cry"
      },
      correctAnswer: "B",
      translation: "正在哭的男孩是我的小弟弟。",
      analysis: "现在分词（crying）作定语，表 \"主动、进行\"（男孩正在哭，主动动作）；A. cry 原形不能作定语，C. cried 过去分词表 \"被动、完成\"（如 the cried boy 表 \"被弄哭的男孩\"，不符合句意），D. to cry 不定式表 \"将来\"，故选 B。"
    },

    {
      id: 42,
      section: "现在分词与过去分词区别",
      question: "I have a _____ book. I like it very much.",
      options: {
        A: "interest",
        B: "interesting",
        C: "interested",
        D: "to interest"
      },
      correctAnswer: "B",
      translation: "我有一本有趣的书。我非常喜欢它。",
      analysis: "现在分词（interesting）作定语，表 \"事物本身具有的性质\"（书 \"令人感兴趣\"）；A. interest 名词不能作定语，C. interested 过去分词表 \"人感到……\"（如 the interested boy 表 \"感兴趣的男孩\"），D. to interest 不定式表 \"将来\"，故选 B。"
    },

    // ... Continue with questions 43-65

    // 四、非谓语作定语/状语/补语（20题）
    {
      id: 66,
      section: "非谓语作定语状语补语",
      question: "I have a lot of homework _____ tonight.",
      options: {
        A: "do",
        B: "to do",
        C: "doing",
        D: "done"
      },
      correctAnswer: "B",
      translation: "我今晚有很多作业要做。",
      analysis: "不定式（to do）作定语，表 \"将来要做的动作\"（作业 \"要被做\"）；A. do 原形不能作定语，C. doing 现在分词表 \"正在做\"（如 homework doing 表 \"正在做的作业\"，不符合句意），D. done 过去分词表 \"已做完\"（如 homework done 表 \"做完的作业\"），故选 B。"
    },

    {
      id: 67,
      section: "非谓语作定语状语补语",
      question: "_____ along the street, I met an old friend.",
      options: {
        A: "Walk",
        B: "To walk",
        C: "Walking",
        D: "Walked"
      },
      correctAnswer: "C",
      translation: "沿着街走时，我遇到了一位老朋友。",
      analysis: "现在分词（Walking）作状语，表 \"主动、伴随\"（我 \"主动走路\"，与主句动作同时发生）；A. Walk 原形不能作状语，B. To walk 不定式表 \"目的\"（如 To walk along the street, I wore shoes 表 \"为了走路，我穿了鞋\"），D. Walked 过去分词表 \"被动\"（如 Walked by the street 表 \"被沿着街带\"），故选 C。"
    },

    // ... Continue with questions 68-85

    // 五、固定搭配与特殊结构（15题）
    {
      id: 86,
      section: "固定搭配与特殊结构",
      question: "I heard him _____ in the next room.",
      options: {
        A: "sing",
        B: "to sing",
        C: "singing",
        D: "sung"
      },
      correctAnswer: "A",
      translation: "我听到他在隔壁房间唱歌。",
      analysis: "感官动词 hear 后接不带 to 的不定式（hear sb. do sth.）表 \"听到完整动作\"，接现在分词（hear sb. doing sth.）表 \"听到进行动作\"；此处无 \"正在\" 提示，表 \"听到唱歌这件事\"，用 sing；B. to sing 带 to 错误，C. singing 表进行，D. sung 表被动，故选 A。"
    },

    {
      id: 87,
      section: "固定搭配与特殊结构",
      question: "The teacher made him _____ the homework again.",
      options: {
        A: "do",
        B: "to do",
        C: "doing",
        D: "done"
      },
      correctAnswer: "A",
      translation: "老师让他把作业再做一遍。",
      analysis: "使役动词 make 后接不带 to 的不定式（make sb. do sth.）作宾补；B. to do 带 to 错误（被动语态 make sb. to do sth. 才正确，此处主动），C. doing 表进行，D. done 表被动，故选 A。"
    },

    // ... Continue with questions 88-100

    // 六、综合应用（10题）
    {
      id: 91,
      section: "综合应用",
      question: "_____ the English exam, she studies hard every day.",
      options: {
        A: "Pass",
        B: "To pass",
        C: "Passing",
        D: "Passed"
      },
      correctAnswer: "B",
      translation: "为了通过英语考试，她每天努力学习。",
      analysis: "不定式（To pass）作目的状语，表 \"为了通过\"；A. Pass 原形不能作状语，C. Passing 现在分词表 \"主动、伴随\"，D. Passed 过去分词表 \"被动\"，故选 B。"
    }
  ],

  // 章节分类
  sections: {
    section1: {
      title: "一、不定式（to do）用法（20题）",
      description: "聚焦 \"作成分\" \"不带to\" \"固定搭配\"",
      questionIds: Array.from({length: 20}, (_, i) => i + 1),
      patterns: {
        作宾语: ["want to do", "hope to do", "decide to do", "plan to do", "agree to do"],
        作宾补: ["ask sb. to do", "tell sb. to do", "advise sb. to do", "allow sb. to do"],
        作主语: ["It is + adj. + to do", "It takes sb. time to do"],
        作定语: ["something to do", "a way to do", "time to do"],
        作状语: ["to do表目的", "enough to do", "too...to do"]
      }
    },
    section2: {
      title: "二、动名词（doing）用法（20题）",
      description: "聚焦 \"作主语/宾语\" \"固定搭配\"",
      questionIds: Array.from({length: 20}, (_, i) => i + 21),
      patterns: {
        作主语: ["Doing sth. is...", "It's no use doing", "It's no good doing"],
        作宾语: ["enjoy doing", "finish doing", "practice doing", "suggest doing", "avoid doing"],
        固定搭配: ["be good at doing", "be interested in doing", "be used to doing", "keep doing", "give up doing"]
      }
    },
    section3: {
      title: "三、现在分词与过去分词区别（25题）",
      description: "聚焦 \"主动/被动\" \"进行/完成\"",
      questionIds: Array.from({length: 25}, (_, i) => i + 41),
      keyPoints: {
        现在分词: {
          表主动: "the crying boy (正在哭的男孩)",
          表进行: "boiling water (正在沸腾的水)",
          表令人: "interesting book (令人感兴趣的书)"
        },
        过去分词: {
          表被动: "the broken window (被打破的窗户)",
          表完成: "fallen leaves (落叶)",
          表感到: "interested student (感兴趣的学生)"
        }
      }
    },
    section4: {
      title: "四、非谓语作定语/状语/补语（20题）",
      description: "聚焦 \"成分判断\" \"逻辑关系\"",
      questionIds: Array.from({length: 20}, (_, i) => i + 66),
      functions: {
        作定语: {
          不定式: "表将来、用途 (a book to read)",
          现在分词: "表主动、进行 (a running dog)",
          过去分词: "表被动、完成 (a written letter)"
        },
        作状语: {
          不定式: "表目的、结果 (To pass the exam, ...)",
          现在分词: "表主动、伴随、时间、原因 (Walking along, ...)",
          过去分词: "表被动、原因、时间、条件 (Seen from the hill, ...)"
        }
      }
    },
    section5: {
      title: "五、固定搭配与特殊结构（15题）",
      description: "聚焦 \"感官动词\" \"使役动词\" \"特殊短语\"",
      questionIds: Array.from({length: 15}, (_, i) => i + 86),
      specialStructures: {
        感官动词: {
          不带to: "see/hear/watch/notice/feel sb. do sth.",
          现在分词: "see/hear/watch/notice/feel sb. doing sth.",
          被动加to: "be seen/heard to do sth."
        },
        使役动词: {
          不带to: "make/let/have sb. do sth.",
          被动加to: "be made/let to do sth."
        },
        特殊搭配: {
          "can't help doing": "忍不住做某事",
          "can't help to do": "不能帮忙做某事",
          "be used to doing": "习惯做某事",
          "used to do": "过去常常做某事",
          "prefer doing to doing": "宁愿...也不愿..."
        }
      }
    },
    section6: {
      title: "六、综合应用（10题）",
      description: "结合多考点与语境",
      questionIds: Array.from({length: 10}, (_, i) => i + 91)
    }
  },

  // 元数据信息
  metadata: {
    totalQuestions: 100,
    targetLevel: "高中生",
    focusAreas: [
      "不定式用法",
      "动名词用法",
      "现在分词与过去分词",
      "非谓语作成分",
      "固定搭配",
      "综合应用"
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

  // 获取非谓语动词规则总结
  getNonFiniteVerbRules: function() {
    return {
      不定式: {
        基本形式: "to + 动词原形",
        否定形式: "not to do",
        省略to的情况: [
          "感官动词后: see/hear/watch/notice/feel sb. do",
          "使役动词后: make/let/have sb. do",
          "why not do, had better do, would rather do"
        ],
        用法: {
          作主语: "To learn English is important. / It is important to learn English.",
          作宾语: "want/hope/decide/plan/agree to do",
          作宾补: "ask/tell/advise/allow sb. to do",
          作定语: "I have something to do. (主动表被动)",
          作状语: "目的: To pass the exam, he studied hard.",
          作表语: "My dream is to be a teacher."
        }
      },
      动名词: {
        基本形式: "动词-ing",
        用法: {
          作主语: "Learning English is important.",
          作宾语: "enjoy/finish/practice/suggest/avoid doing",
          作表语: "My hobby is reading.",
          作定语: "a swimming pool (表用途)"
        },
        常见搭配: [
          "be good at doing",
          "be interested in doing",
          "be used to doing (习惯)",
          "look forward to doing",
          "can't help doing (忍不住)"
        ]
      },
      分词: {
        现在分词: {
          形式: "动词-ing",
          特点: "表主动、进行",
          作定语: "a crying baby (正在哭的婴儿)",
          作状语: "Walking in the street, I met him. (伴随)",
          作宾补: "I heard him singing. (正在唱)",
          形容词化: "interesting (令人...的), exciting, moving"
        },
        过去分词: {
          形式: "动词-ed/不规则变化",
          特点: "表被动、完成",
          作定语: "a broken window (被打破的窗户)",
          作状语: "Seen from the hill, the city is beautiful. (被动)",
          作宾补: "I had my hair cut. (被剪)",
          形容词化: "interested (感到...的), excited, moved"
        }
      }
    };
  },

  // 获取易错点分析
  getCommonMistakes: function() {
    return {
      不定式vs动名词: {
        "remember to do": "记得要做(未做)",
        "remember doing": "记得做过(已做)",
        "forget to do": "忘记要做(未做)",
        "forget doing": "忘记做过(已做)",
        "stop to do": "停下来去做另一件事",
        "stop doing": "停止正在做的事",
        "try to do": "尽力做",
        "try doing": "尝试做"
      },
      现在分词vs过去分词: {
        主动vs被动: "the teacher explaining (老师正在解释) vs the problem explained (被解释的问题)",
        令人vs感到: "interesting news (令人感兴趣的) vs interested students (感兴趣的学生)",
        进行vs完成: "boiling water (正在沸腾的水) vs boiled water (开水)"
      },
      逻辑主语判断: {
        状语从句省略: "While (I was) walking, I met him.",
        独立主格: "Weather permitting, we'll go.",
        with复合结构: "With the work done, he went home."
      }
    };
  },

  // 获取固定搭配列表
  getFixedCollocations: function() {
    return {
      接不定式的动词: [
        "want", "hope", "wish", "decide", "plan",
        "promise", "refuse", "agree", "manage", "fail",
        "afford", "offer", "pretend", "prepare", "learn"
      ],
      接动名词的动词: [
        "enjoy", "finish", "practice", "suggest", "avoid",
        "mind", "keep", "delay", "consider", "miss",
        "admit", "deny", "imagine", "escape", "risk"
      ],
      两者皆可但意义不同: {
        "remember": "to do (记得要做) / doing (记得做过)",
        "forget": "to do (忘记要做) / doing (忘记做过)",
        "regret": "to do (遗憾要做) / doing (后悔做过)",
        "mean": "to do (打算做) / doing (意味着)",
        "go on": "to do (继续做另一件事) / doing (继续做同一件事)"
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
      if (q.section.includes("不定式")) stats.各类型题数["不定式"] = (stats.各类型题数["不定式"] || 0) + 1;
      if (q.section.includes("动名词")) stats.各类型题数["动名词"] = (stats.各类型题数["动名词"] || 0) + 1;
      if (q.section.includes("分词")) stats.各类型题数["分词"] = (stats.各类型题数["分词"] || 0) + 1;
    });

    return stats;
  }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
  module.exports = nonFiniteVerbTest;
}

// 使用示例
console.log(`非谓语动词测试加载完成！`);
console.log(`总题数: ${nonFiniteVerbTest.questions.length}`);
console.log(`测试标题: ${nonFiniteVerbTest.title}`);

// 示例：获取第一题
const firstQuestion = nonFiniteVerbTest.getQuestionById(1);
console.log('\n第一题:', firstQuestion.question);
console.log('正确答案:', firstQuestion.correctAnswer);

// 示例：获取非谓语动词规则
const rules = nonFiniteVerbTest.getNonFiniteVerbRules();
console.log('\n不定式基本规则:', rules.不定式.基本形式);

// 示例：获取固定搭配
const collocations = nonFiniteVerbTest.getFixedCollocations();
console.log('\n接动名词的动词:', collocations.接动名词的动词.slice(0, 5));
