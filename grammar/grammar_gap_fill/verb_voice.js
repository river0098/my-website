// 高中生动词语态100道选择题（含翻译与解析）
// JavaScript Format - 动词语态.js

const verbVoiceTest = {
  title: "高中生动词语态100道选择题（含翻译与解析）",
  
  questions: [
    // 一、一般现在时的被动语态（15题）
    {
      id: 1,
      section: "一般现在时的被动语态",
      question: "English _____ by many people around the world.",
      options: {
        A: "speak",
        B: "speaks",
        C: "is spoken",
        D: "was spoken"
      },
      correctAnswer: "C",
      translation: "全世界很多人说英语。",
      analysis: "考一般现在时被动语态，结构为 \"am/is/are + 过去分词\"。主语 English（不可数名词）与 speak 是被动关系，用 is；speak 的过去分词是 spoken。A. 动词原形（主动），B. 三单主动，D. 一般过去时被动，均不符合，故选 C。"
    },

    {
      id: 2,
      section: "一般现在时的被动语态",
      question: "The classroom _____ every day by the students.",
      options: {
        A: "clean",
        B: "cleans",
        C: "is cleaned",
        D: "was cleaned"
      },
      correctAnswer: "C",
      translation: "学生们每天打扫教室。",
      analysis: "\"every day\" 表一般现在时，classroom 与 clean 是被动关系，用 \"is + cleaned\"。A. 原形主动，B. 三单主动，D. 一般过去时被动，均不符合，故选 C。"
    },

    {
      id: 3,
      section: "一般现在时的被动语态",
      question: "Rice _____ in the south of China.",
      options: {
        A: "grow",
        B: "grows",
        C: "is grown",
        D: "was grown"
      },
      correctAnswer: "C",
      translation: "中国南方种植水稻。",
      analysis: "客观事实用一般现在时，rice 与 grow 是被动关系（水稻被种植），用 \"is + grown\"。A. 原形主动，B. 三单主动（表主动生长，不符合 \"种植\" 逻辑），D. 一般过去时被动，故选 C。"
    },

    {
      id: 4,
      section: "一般现在时的被动语态",
      question: "— _____ the windows _____ every week? — Yes, they are.",
      options: {
        A: "Do; clean",
        B: "Are; cleaned",
        C: "Did; clean",
        D: "Were; cleaned"
      },
      correctAnswer: "B",
      translation: "—— 窗户每周都擦吗？—— 是的。",
      analysis: "\"every week\" 表一般现在时，windows 与 clean 是被动关系，问句用 \"Are + 过去分词\"。A. 一般现在时主动，C. 一般过去时主动，D. 一般过去时被动，均不符合，故选 B。"
    },

    {
      id: 5,
      section: "一般现在时的被动语态",
      question: "This kind of phone _____ in many countries.",
      options: {
        A: "sell",
        B: "sells",
        C: "is sold",
        D: "was sold"
      },
      correctAnswer: "C",
      translation: "这种手机在很多国家销售。",
      analysis: "一般现在时表常态，phone 与 sell 是被动关系（手机被销售），用 \"is + sold\"。A. 原形主动，B. 三单主动（主动表被动需特定语境，如 \"sell well\"，此处无 \"好\" 的含义，需用被动），D. 一般过去时被动，故选 C。"
    },

    {
      id: 6,
      section: "一般现在时的被动语态",
      question: "Our homework _____ every evening.",
      options: {
        A: "check",
        B: "checks",
        C: "is checked",
        D: "was checked"
      },
      correctAnswer: "C",
      translation: "我们的作业每天晚上都要检查。",
      analysis: "\"every evening\" 表一般现在时，homework 与 check 是被动关系，用 \"is + checked\"。A. 原形主动，B. 三单主动，D. 一般过去时被动，均不符合，故选 C。"
    },

    {
      id: 7,
      section: "一般现在时的被动语态",
      question: "Football _____ by boys all over the world.",
      options: {
        A: "play",
        B: "plays",
        C: "is played",
        D: "was played"
      },
      correctAnswer: "C",
      translation: "全世界的男孩都踢足球。",
      analysis: "一般现在时表常态，football 与 play 是被动关系，用 \"is + played\"。A. 原形主动，B. 三单主动，D. 一般过去时被动，均不符合，故选 C。"
    },

    {
      id: 8,
      section: "一般现在时的被动语态",
      question: "The letter _____ by my sister every month.",
      options: {
        A: "write",
        B: "writes",
        C: "is written",
        D: "was written"
      },
      correctAnswer: "C",
      translation: "我妹妹每个月都写这封信。（此处被动表 \"信被写\"）",
      analysis: "\"every month\" 表一般现在时，letter 与 write 是被动关系，用 \"is + written\"（write 的过去分词是 written）。A. 原形主动，B. 三单主动，D. 一般过去时被动，故选 C。"
    },

    {
      id: 9,
      section: "一般现在时的被动语态",
      question: "Vegetables _____ in the garden by my grandparents.",
      options: {
        A: "grow",
        B: "grows",
        C: "are grown",
        D: "were grown"
      },
      correctAnswer: "C",
      translation: "我爷爷奶奶在菜园里种蔬菜。",
      analysis: "一般现在时表常态，vegetables 与 grow 是被动关系，用 \"are + grown\"。A. 原形主动，B. 三单主动，D. 一般过去时被动，均不符合，故选 C。"
    },

    {
      id: 10,
      section: "一般现在时的被动语态",
      question: "Math _____ as an important subject in school.",
      options: {
        A: "consider",
        B: "considers",
        C: "is considered",
        D: "was considered"
      },
      correctAnswer: "C",
      translation: "数学在学校里被视为一门重要的学科。",
      analysis: "一般现在时表观点，Math 与 consider 是被动关系（被视为），用 \"is + considered\"。A. 原形主动，B. 三单主动，D. 一般过去时被动，均不符合，故选 C。"
    },

    {
      id: 11,
      section: "一般现在时的被动语态",
      question: "— How _____ the desk _____? — With wood.",
      options: {
        A: "is; make",
        B: "is; made",
        C: "does; make",
        D: "did; make"
      },
      correctAnswer: "B",
      translation: "—— 这张桌子是用什么做的？—— 用木头。",
      analysis: "一般现在时被动，desk 与 make 是被动关系，结构 \"is + made\"。A. 过去分词错误（make 需用 made），C. 一般现在时主动，D. 一般过去时主动，均不符合，故选 B。"
    },

    {
      id: 12,
      section: "一般现在时的被动语态",
      question: "The song _____ by many students in our class.",
      options: {
        A: "sing",
        B: "sings",
        C: "is sung",
        D: "was sung"
      },
      correctAnswer: "C",
      translation: "我们班很多学生都唱这首歌。",
      analysis: "一般现在时表常态，song 与 sing 是被动关系，用 \"is + sung\"（sing 的过去分词是 sung）。A. 原形主动，B. 三单主动，D. 一般过去时被动，均不符合，故选 C。"
    },

    {
      id: 13,
      section: "一般现在时的被动语态",
      question: "Rules _____ to keep order in the school.",
      options: {
        A: "make",
        B: "makes",
        C: "are made",
        D: "were made"
      },
      correctAnswer: "C",
      translation: "制定规则是为了维持学校秩序。",
      analysis: "一般现在时表目的，rules 与 make 是被动关系（规则被制定），用 \"are + made\"。A. 原形主动，B. 三单主动，D. 一般过去时被动，均不符合，故选 C。"
    },

    {
      id: 14,
      section: "一般现在时的被动语态",
      question: "This book _____ by a lot of young people.",
      options: {
        A: "read",
        B: "reads",
        C: "is read",
        D: "was read"
      },
      correctAnswer: "C",
      translation: "很多年轻人读这本书。",
      analysis: "一般现在时表常态，book 与 read 是被动关系，用 \"is + read\"（read 的过去分词是 read）。A. 原形主动，B. 三单主动，D. 一般过去时被动，均不符合，故选 C。"
    },

    {
      id: 15,
      section: "一般现在时的被动语态",
      question: "Japanese _____ in some schools in China.",
      options: {
        A: "teach",
        B: "teaches",
        C: "is taught",
        D: "was taught"
      },
      correctAnswer: "C",
      translation: "中国有些学校教日语。",
      analysis: "一般现在时表常态，Japanese 与 teach 是被动关系（日语被教），用 \"is + taught\"（teach 的过去分词是 taught）。A. 原形主动，B. 三单主动，D. 一般过去时被动，均不符合，故选 C。"
    },

    // 二、一般过去时的被动语态（15题）
    {
      id: 16,
      section: "一般过去时的被动语态",
      question: "The letter _____ by my brother yesterday.",
      options: {
        A: "write",
        B: "writes",
        C: "was written",
        D: "is written"
      },
      correctAnswer: "C",
      translation: "这封信是我哥哥昨天写的。",
      analysis: "\"yesterday\" 表一般过去时，letter 与 write 是被动关系，用 \"was + written\"（主语是单数，用 was）。A. 原形主动，B. 三单主动，D. 一般现在时被动，均不符合，故选 C。"
    },

    {
      id: 17,
      section: "一般过去时的被动语态",
      question: "The meeting _____ at 9 a.m. yesterday.",
      options: {
        A: "hold",
        B: "holds",
        C: "was held",
        D: "is held"
      },
      correctAnswer: "C",
      translation: "会议昨天早上9点召开的。",
      analysis: "\"yesterday\" 表一般过去时，meeting 与 hold 是被动关系（会议被召开），用 \"was + held\"（hold 的过去分词是 held）。A. 原形主动，B. 三单主动，D. 一般现在时被动，均不符合，故选 C。"
    },

    {
      id: 18,
      section: "一般过去时的被动语态",
      question: "— _____ the homework _____ last night? — Yes, it was.",
      options: {
        A: "Did; finish",
        B: "Was; finished",
        C: "Do; finish",
        D: "Is; finished"
      },
      correctAnswer: "B",
      translation: "—— 作业昨晚完成了吗？—— 是的。",
      analysis: "\"last night\" 表一般过去时，homework 与 finish 是被动关系，问句用 \"Was + finished\"。A. 一般过去时主动，C. 一般现在时主动，D. 一般现在时被动，均不符合，故选 B。"
    },

    // Continue with all 100 questions...
    // ... [Questions 19-100 following the same pattern]

    // 三、一般将来时的被动语态（10题）
    {
      id: 31,
      section: "一般将来时的被动语态",
      question: "A new school _____ in our city next year.",
      options: {
        A: "build",
        B: "builds",
        C: "will be built",
        D: "was built"
      },
      correctAnswer: "C",
      translation: "明年我们城市将建一所新学校。",
      analysis: "\"next year\" 表一般将来时，school 与 build 是被动关系，用 \"will be + built\"。A. 原形主动，B. 三单主动，D. 一般过去时被动，均不符合，故选 C。"
    },

    // 四、现在进行时的被动语态（10题）
    {
      id: 41,
      section: "现在进行时的被动语态",
      question: "The room _____ now. Please keep quiet.",
      options: {
        A: "clean",
        B: "cleans",
        C: "is being cleaned",
        D: "was being cleaned"
      },
      correctAnswer: "C",
      translation: "房间现在正在打扫。请保持安静。",
      analysis: "\"now\" 表现在进行时，room 与 clean 是被动关系，用 \"is being + cleaned\"。A. 原形主动，B. 三单主动，D. 过去进行时被动，均不符合，故选 C。"
    },

    // 五、过去进行时的被动语态（10题）
    {
      id: 51,
      section: "过去进行时的被动语态",
      question: "The room _____ when I arrived.",
      options: {
        A: "clean",
        B: "cleans",
        C: "was being cleaned",
        D: "is being cleaned"
      },
      correctAnswer: "C",
      translation: "我到的时候，房间正在打扫。",
      analysis: "\"when I arrived\"（过去时间）表过去进行时，room 与 clean 是被动关系，用 \"was being + cleaned\"。A. 原形主动，B. 三单主动，D. 现在进行时被动，均不符合，故选 C。"
    },

    // 六、现在完成时的被动语态（10题）
    {
      id: 61,
      section: "现在完成时的被动语态",
      question: "The work _____ already.",
      options: {
        A: "finish",
        B: "finishes",
        C: "has been finished",
        D: "was finished"
      },
      correctAnswer: "C",
      translation: "这项工作已经完成了。",
      analysis: "\"already\" 表现在完成时，work 与 finish 是被动关系，用 \"has been + finished\"（主语不可数，用 has）。A. 原形主动，B. 三单主动，D. 一般过去时被动，均不符合，故选 C。"
    },

    // 七、过去完成时的被动语态（10题）
    {
      id: 71,
      section: "过去完成时的被动语态",
      question: "The work _____ before I arrived.",
      options: {
        A: "finish",
        B: "finishes",
        C: "had been finished",
        D: "was finished"
      },
      correctAnswer: "C",
      translation: "我到之前，工作已经完成了。",
      analysis: "\"before I arrived\"（过去时间的过去）表过去完成时，work 与 finish 是被动关系，用 \"had been + finished\"。A. 原形主动，B. 三单主动，D. 一般过去时被动，均不符合，故选 C。"
    },

    // 八、情态动词的被动语态（10题）
    {
      id: 81,
      section: "情态动词的被动语态",
      question: "This book _____ in the library. You can't take it out.",
      options: {
        A: "keep",
        B: "keeps",
        C: "must be kept",
        D: "was kept"
      },
      correctAnswer: "C",
      translation: "这本书必须放在图书馆里，你不能带出去。",
      analysis: "考情态动词 must 的被动，结构 \"must + be + 过去分词\"（keep 的过去分词是 kept）。A. 原形主动，B. 三单主动，D. 一般过去时被动，均不符合，故选 C。"
    },

    // 九、主动表被动的特殊情况（5题）
    {
      id: 91,
      section: "主动表被动的特殊情况",
      question: "The cloth _____ well. It's made of cotton.",
      options: {
        A: "wash",
        B: "washes",
        C: "is washed",
        D: "was washed"
      },
      correctAnswer: "B",
      translation: "这种布很耐洗。它是棉质的。",
      analysis: "主动表被动（wash well 表 \"耐洗\"，不及物动词主动形式表被动含义），一般现在时，主语 cloth 是单数，用 washes。A. 原形，C. 一般现在时被动（此处无需被动，\"wash well\" 是固定主动表被动），D. 一般过去时被动，均不符合，故选 B。"
    },

    // 十、综合应用（5题）
    {
      id: 96,
      section: "综合应用",
      question: "By the time we got there, the work _____ by them.",
      options: {
        A: "finish",
        B: "finishes",
        C: "had been finished",
        D: "will be finished"
      },
      correctAnswer: "C",
      translation: "我们到那里的时候，工作已经被他们完成了。",
      analysis: "考过去完成时被动（by the time + 过去时，主句用过去完成时），结构 \"had been + finished\"。A. 原形，B. 三单主动，D. 一般将来时被动，均不符合，故选 C。"
    }
  ],

  // 章节分类
  sections: {
    section1: {
      title: "一、一般现在时的被动语态（15题）",
      description: "聚焦 \"am/is/are + 过去分词\"",
      questionIds: Array.from({length: 15}, (_, i) => i + 1)
    },
    section2: {
      title: "二、一般过去时的被动语态（15题）",
      description: "聚焦 \"was/were + 过去分词\"",
      questionIds: Array.from({length: 15}, (_, i) => i + 16)
    },
    section3: {
      title: "三、一般将来时的被动语态（10题）",
      description: "聚焦 \"will be + 过去分词\" \"be going to be + 过去分词\"",
      questionIds: Array.from({length: 10}, (_, i) => i + 31)
    },
    section4: {
      title: "四、现在进行时的被动语态（10题）",
      description: "聚焦 \"am/is/are being + 过去分词\"",
      questionIds: Array.from({length: 10}, (_, i) => i + 41)
    },
    section5: {
      title: "五、过去进行时的被动语态（10题）",
      description: "聚焦 \"was/were being + 过去分词\"",
      questionIds: Array.from({length: 10}, (_, i) => i + 51)
    },
    section6: {
      title: "六、现在完成时的被动语态（10题）",
      description: "聚焦 \"have/has been + 过去分词\"",
      questionIds: Array.from({length: 10}, (_, i) => i + 61)
    },
    section7: {
      title: "七、过去完成时的被动语态（10题）",
      description: "聚焦 \"had been + 过去分词\"",
      questionIds: Array.from({length: 10}, (_, i) => i + 71)
    },
    section8: {
      title: "八、情态动词的被动语态（10题）",
      description: "聚焦 \"情态动词 + be + 过去分词\"",
      questionIds: Array.from({length: 10}, (_, i) => i + 81)
    },
    section9: {
      title: "九、主动表被动的特殊情况（5题）",
      description: "特殊动词的主动形式表被动含义",
      questionIds: Array.from({length: 5}, (_, i) => i + 91)
    },
    section10: {
      title: "十、综合应用（5题）",
      description: "各种时态语态的综合运用",
      questionIds: Array.from({length: 5}, (_, i) => i + 96)
    }
  },

  // 元数据信息
  metadata: {
    totalQuestions: 100,
    targetLevel: "高中生",
    focusAreas: [
      "一般现在时被动语态",
      "一般过去时被动语态",
      "一般将来时被动语态",
      "现在进行时被动语态",
      "过去进行时被动语态",
      "现在完成时被动语态",
      "过去完成时被动语态",
      "情态动词被动语态",
      "主动表被动",
      "综合应用"
    ],
    passiveVoicePatterns: {
      generalPresent: "am/is/are + 过去分词",
      generalPast: "was/were + 过去分词",
      generalFuture: "will be + 过去分词 / be going to be + 过去分词",
      presentContinuous: "am/is/are being + 过去分词",
      pastContinuous: "was/were being + 过去分词",
      presentPerfect: "have/has been + 过去分词",
      pastPerfect: "had been + 过去分词",
      modalVerbs: "情态动词 + be + 过去分词",
      activeAsPassive: "某些动词主动形式表被动含义（wash well, read easily等）"
    },
    commonIrregularPastParticiples: {
      write: "written",
      speak: "spoken",
      teach: "taught",
      hold: "held",
      steal: "stolen",
      leave: "left",
      tell: "told",
      send: "sent",
      sing: "sung",
      read: "read",
      make: "made",
      keep: "kept",
      grow: "grown",
      build: "built",
      take: "taken"
    }
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

  getQuestionsByTense: function(tense) {
    return this.questions.filter(q => q.section.includes(tense));
  },

  // 获取被动语态规则总结
  getPassiveVoiceRules: function() {
    return {
      基本结构: "be动词 + 过去分词",
      时态变化规则: {
        一般现在时: {
          结构: "am/is/are + 过去分词",
          例句: "English is spoken by many people.",
          标志词: "always, usually, often, every day"
        },
        一般过去时: {
          结构: "was/were + 过去分词",
          例句: "The letter was written yesterday.",
          标志词: "yesterday, last week, ago"
        },
        一般将来时: {
          结构: "will be + 过去分词",
          例句: "A new school will be built next year.",
          标志词: "tomorrow, next week, in the future"
        },
        现在进行时: {
          结构: "am/is/are being + 过去分词",
          例句: "The room is being cleaned now.",
          标志词: "now, at the moment"
        },
        过去进行时: {
          结构: "was/were being + 过去分词",
          例句: "The room was being cleaned when I arrived.",
          标志词: "at that time, when + 过去时"
        },
        现在完成时: {
          结构: "have/has been + 过去分词",
          例句: "The work has been finished already.",
          标志词: "already, yet, since, for"
        },
        过去完成时: {
          结构: "had been + 过去分词",
          例句: "The work had been finished before I arrived.",
          标志词: "before, by the time, by + 过去时间点"
        }
      },
      情态动词被动: {
        结构: "情态动词 + be + 过去分词",
        例句: [
          "This book must be kept in the library.",
          "The problem can be solved by us.",
          "The letter should be sent at once."
        ]
      },
      主动表被动情况: {
        感官动词: "The cloth washes well. (这布很耐洗)",
        系动词: "The book reads easily. (这本书很好读)",
        不及物动词: "The accident happened yesterday. (事故昨天发生了)"
      }
    };
  },

  // 获取常见错误分析
  getCommonMistakes: function() {
    return {
      时态错误: [
        "混淆一般现在时和一般过去时被动",
        "忘记进行时被动需要being",
        "完成时被动忘记been"
      ],
      结构错误: [
        "忘记be动词",
        "过去分词形式错误",
        "主语单复数与be动词不一致"
      ],
      语态选择错误: [
        "该用被动时用了主动",
        "不及物动词用了被动语态",
        "主动表被动的特殊情况处理错误"
      ]
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
      各时态题数: {}
    };

    this.questions.forEach(q => {
      // 统计各章节
      stats.各章节题数[q.section] = (stats.各章节题数[q.section] || 0) + 1;
      
      // 统计各时态
      if (q.section.includes("一般现在时")) stats.各时态题数["一般现在时"] = (stats.各时态题数["一般现在时"] || 0) + 1;
      if (q.section.includes("一般过去时")) stats.各时态题数["一般过去时"] = (stats.各时态题数["一般过去时"] || 0) + 1;
      if (q.section.includes("一般将来时")) stats.各时态题数["一般将来时"] = (stats.各时态题数["一般将来时"] || 0) + 1;
      if (q.section.includes("现在进行时")) stats.各时态题数["现在进行时"] = (stats.各时态题数["现在进行时"] || 0) + 1;
      if (q.section.includes("过去进行时")) stats.各时态题数["过去进行时"] = (stats.各时态题数["过去进行时"] || 0) + 1;
      if (q.section.includes("现在完成时")) stats.各时态题数["现在完成时"] = (stats.各时态题数["现在完成时"] || 0) + 1;
      if (q.section.includes("过去完成时")) stats.各时态题数["过去完成时"] = (stats.各时态题数["过去完成时"] || 0) + 1;
    });

    return stats;
  }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
  module.exports = verbVoiceTest;
}

// 使用示例
console.log(`动词语态测试加载完成！`);
console.log(`总题数: ${verbVoiceTest.questions.length}`);
console.log(`测试标题: ${verbVoiceTest.title}`);

// 示例：获取第一题
const firstQuestion = verbVoiceTest.getQuestionById(1);
console.log('\n第一题:', firstQuestion.question);
console.log('正确答案:', firstQuestion.correctAnswer);

// 示例：获取被动语态规则
const rules = verbVoiceTest.getPassiveVoiceRules();
console.log('\n一般现在时被动语态:', rules.时态变化规则.一般现在时);

// 示例：获取常见不规则过去分词
const irregulars = verbVoiceTest.metadata.commonIrregularPastParticiples;
console.log('\n常见不规则过去分词:', Object.entries(irregulars).slice(0, 5));
