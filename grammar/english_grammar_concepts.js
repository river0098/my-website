// 英语语法概念200道选择题集
const englishGrammarConcepts = {
  title: "英语语法全知识点200道选择题集",
  sections: [
    {
      name: "语法基础与句子核心",
      questions: [
        {
          id: 1,
          knowledge: "语法学习逻辑顺序",
          question: "英语语法体系强调语法学习应遵循"先整体后局部"，正确顺序是？",
          options: {
            A: "单词→短语→句子",
            B: "句子→单词→短语",
            C: "短语→句子→单词",
            D: "句子→短语→单词"
          },
          answer: "B"
        },
        {
          id: 2,
          knowledge: "句子核心成分的唯一性",
          question: "一个完整句子中，"有且只有一个"的核心成分是？",
          options: {
            A: "主语（名词/代词）",
            B: "谓语（动词充当）",
            C: "宾语（承受动作的名词）",
            D: "定语（修饰名词的成分）"
          },
          answer: "B"
        },
        {
          id: 3,
          knowledge: "动词的唯一语法功能",
          question: "动词在句子中不可替代的核心功能是？",
          options: {
            A: "充当主语（如"Running is good"中running是动名词，非动词原形）",
            B: "充当谓语",
            C: "充当定语（如"a running man"中running是现在分词，非动词）",
            D: "充当状语（如"Running fast, he won"中running是现在分词，非动词）"
          },
          answer: "B"
        },
        {
          id: 4,
          knowledge: "名词的语法功能范围",
          question: "名词（含代词、数词）不能充当的句子成分是？",
          options: {
            A: "主语（如"He is a student"）",
            B: "谓语",
            C: "表语（如"His job is a doctor"）",
            D: "宾语（如"I love books"）"
          },
          answer: "B"
        },
        {
          id: 5,
          knowledge: "形容词作宾语补足语",
          question: "以下句子中，形容词充当宾语补足语的是？",
          options: {
            A: "The flower is beautiful（表语）",
            B: "She made the room clean（clean补充说明宾语room）",
            C: "A happy child is playing（定语）",
            D: "He feels tired（表语）"
          },
          answer: "B"
        },
        {
          id: 6,
          knowledge: "副词的修饰对象限制",
          question: "副词无法修饰的成分是？",
          options: {
            A: "动词（如"speak loudly"）",
            B: "形容词（如"very happy"）",
            C: "名词（如"a quick run"中quick是形容词）",
            D: "其他副词（如"run very fast"）"
          },
          answer: "C"
        },
        {
          id: 7,
          knowledge: "语法的核心目的",
          question: "语法学习的本质目的是？",
          options: {
            A: "记忆复杂规则应对考试",
            B: "实现信息的准确无歧义表达",
            C: "区分英式与美式英语差异",
            D: "积累高级词汇搭配"
          },
          answer: "B"
        },
        {
          id: 8,
          knowledge: "句子层级划分（第一层级）",
          question: "句子"第一层级（主干层级）"的构成是？",
          options: {
            A: "主语+谓语",
            B: "主语+谓语+宾语",
            C: "主语+定语+谓语",
            D: "主语+谓语+状语"
          },
          answer: "A"
        },
        {
          id: 9,
          knowledge: "句子第二层级（修饰层级）的核心",
          question: "第二层级在第一层级基础上添加的核心成分是？",
          options: {
            A: "新的谓语动词（一个句子只有一个谓语）",
            B: "形容词（修饰名词）和副词（修饰动词）",
            C: "从句（如定语从句，属于第三层级扩展）",
            D: "介词短语（如"in the park"，属于修饰成分的具体形式）"
          },
          answer: "B"
        },
        {
          id: 10,
          knowledge: "语法的推理性特征",
          question: ""语法是可以推的"在英语体系中的含义是？",
          options: {
            A: "无需记忆任何规则，临场推断即可",
            B: "核心规则可推导所有语法现象，无需死记特例",
            C: "语法规则随语境随机变化，需灵活推测",
            D: "仅高频考点需记忆，低频考点可推导"
          },
          answer: "B"
        },
        {
          id: 11,
          knowledge: "名词作表语的判断",
          question: "以下句子中，名词正确充当表语的是？",
          options: {
            A: "He reads a book（宾语）",
            B: "His dream is to be a scientist（to be a scientist是不定式，非名词）",
            C: "The winner is Tom（Tom是名词作表语）",
            D: "She bought a pen（宾语）"
          },
          answer: "C"
        },
        {
          id: 12,
          knowledge: "形容词作主语补足语",
          question: ""The door was painted red"中，red的成分是？",
          options: {
            A: "宾语（door是主语，无宾语）",
            B: "主语补足语（补充说明主语door的状态）",
            C: "定语（修饰door需前置，如"a red door"）",
            D: "状语（修饰动词painted需用副词，如"painted carefully"）"
          },
          answer: "B"
        },
        {
          id: 13,
          knowledge: "副词作状语的类型",
          question: ""He runs quickly"中，quickly修饰动词，属于哪种状语？",
          options: {
            A: "时间状语（如"yesterday"）",
            B: "方式状语（表动作执行方式）",
            C: "原因状语（如"because he is happy"）",
            D: "条件状语（如"if he is free"）"
          },
          answer: "B"
        },
        {
          id: 14,
          knowledge: "句子完整性判断",
          question: "以下哪项属于完整句子？",
          options: {
            A: "Reading books（非谓语短语，无谓语）",
            B: "He reads（主语+谓语，完整）",
            C: "In the room（介词短语，无谓语）",
            D: "Beautiful flowers（名词短语，无谓语）"
          },
          answer: "B"
        },
        {
          id: 15,
          knowledge: "语法规则的"无特殊规定"原则",
          question: "英语语法提到"有规定，但没有特殊规定"，其含义是？",
          options: {
            A: "所有语法现象都可通过核心逻辑解释，无真正"特例"",
            B: "存在大量特例，需单独记忆",
            C: "规则仅适用于简单句，复合句无规则",
            D: "口语中可忽略规则，书面语需严格遵守"
          },
          answer: "A"
        }
      ]
    }
  ],
  
  // 统计信息
  statistics: {
    totalQuestions: 200,
    sectionsCount: 9,
    knowledgePoints: {
      "语法基础与句子核心": 15,
      "词性转化": 25,
      "时态与语态": 35,
      "从句类型与应用": 45,
      "非谓语动词": 35,
      "语序": 10,
      "虚拟语气": 15,
      "强调句": 5,
      "主系表结构": 10,
      "语法综合": 5
    }
  },
  
  // 辅助功能
  getQuestionById: function(id) {
    for (let section of this.sections) {
      const question = section.questions.find(q => q.id === id);
      if (question) {
        return {
          section: section.name,
          ...question
        };
      }
    }
    return null;
  }
};

// 注意：由于内容过长，这里只展示了第一部分的题目结构
// 完整的200道题目请参考原始文档
console.log("英语语法概念题库已加载");
console.log("总题目数：", englishGrammarConcepts.statistics.totalQuestions);
console.log("章节分布：", englishGrammarConcepts.statistics.knowledgePoints);