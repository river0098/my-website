// 建议信.js
// Suggestion Letter for Oral Practice Grouping Methods

const suggestionLetter = {
  title: {
    english: "Suggestions for Oral Practice Grouping Methods",
    chinese: "口语练习分组方法建议信"
  },
  
  sentences: [
    {
      english: "I'm Li Hua from Class 3.",
      chinese: "我是3班的李华。"
    },
    {
      english: "I hope this email finds you well.",
      chinese: "展信佳。"
    },
    {
      english: "I'm writing to share some thoughts and suggestions regarding the grouping method for our oral practice.",
      chinese: "我写信是为了分享一些关于口语练习分组方法的想法和建议。"
    },
    {
      english: "Often resulting in inappropriate pairs, random grouping might be a less effective approach, especially when two students' speaking abilities differ significantly.",
      chinese: "随机分组往往会导致不合适的配对，这可能是一种不太有效的方法，尤其是当两个学生的口语能力差异很大的时候。"
    },
    {
      english: "Therefore, I suggest grouping students according to language proficiency or shared interest, which contributes to productive communication.",
      chinese: "因此，我建议根据语言熟练度或共同兴趣对学生进行分组，这有助于有效的交流。"
    },
    {
      english: "Not only could we conduct a survey or assessment to learn students' language level, but also encourage students to work with different classmates after a fixed period.",
      chinese: "我们不仅可以做个调查或评估来了解学生的语言水平，还可以鼓励学生在固定的时间后与不同的同学一起协作。"
    },
    {
      english: "Additionally, providing students with the opportunity to choose their partners can also make them feel motivated to actively participate and improve their oral skills.",
      chinese: "此外，为学生提供选择合作伙伴的机会也可以使他们有动力积极参与，提高他们的口语技能。"
    },
    {
      english: "Thank you for considering these recommendations.",
      chinese: "感谢您考虑这些建议。"
    }
  ],
  
  // Suggestion details and components
  suggestionDetails: {
    sender: {
      name: {
        english: "Li Hua",
        chinese: "李华"
      },
      class: {
        english: "Class 3",
        chinese: "3班"
      }
    },
    topic: {
      main: {
        english: "Grouping method for oral practice",
        chinese: "口语练习分组方法"
      },
      context: {
        english: "English oral practice class",
        chinese: "英语口语练习课"
      }
    },
    currentProblem: {
      method: {
        english: "Random grouping",
        chinese: "随机分组"
      },
      issues: {
        english: [
          "Often results in inappropriate pairs",
          "Less effective approach",
          "Problems when students' speaking abilities differ significantly"
        ],
        chinese: [
          "往往导致不合适的配对",
          "不太有效的方法",
          "学生口语能力差异很大时存在问题"
        ]
      }
    },
    proposedSolutions: {
      mainSuggestion: {
        english: "Group students according to language proficiency or shared interest",
        chinese: "根据语言熟练度或共同兴趣对学生进行分组"
      },
      benefits: {
        english: "Contributes to productive communication",
        chinese: "有助于有效的交流"
      },
      implementationMethods: {
        english: [
          "Conduct a survey or assessment to learn students' language level",
          "Encourage students to work with different classmates after a fixed period",
          "Provide students with the opportunity to choose their partners"
        ],
        chinese: [
          "做调查或评估来了解学生的语言水平",
          "鼓励学生在固定时间后与不同的同学协作",
          "为学生提供选择合作伙伴的机会"
        ]
      },
      expectedOutcomes: {
        english: [
          "Students feel motivated",
          "Active participation",
          "Improved oral skills"
        ],
        chinese: [
          "学生有动力",
          "积极参与",
          "提高口语技能"
        ]
      }
    },
    groupingCriteria: {
      primary: {
        english: ["Language proficiency", "Shared interest"],
        chinese: ["语言熟练度", "共同兴趣"]
      },
      additional: {
        english: ["Student choice", "Rotation system"],
        chinese: ["学生选择", "轮换制度"]
      }
    }
  },
  
  // Letter structure metadata
  letterStructure: {
    greeting: {
      type: "Introduction and greeting",
      sentenceIndices: [0, 1]
    },
    purpose: {
      type: "State the purpose",
      sentenceIndex: 2
    },
    problem: {
      type: "Identify the problem",
      sentenceIndex: 3
    },
    suggestions: {
      type: "Provide solutions",
      sentenceIndices: [4, 5, 6]
    },
    closing: {
      type: "Thank and close",
      sentenceIndex: 7
    }
  },
  
  // Function to get full text in a specific language
  getFullText: function(language = 'english') {
    if (language === 'chinese') {
      return this.sentences.map(s => s.chinese).join('');
    }
    return this.sentences.map(s => s.english).join(' ');
  },
  
  // Function to get formatted bilingual text
  getBilingualText: function() {
    return this.sentences.map(s => `${s.english}\n${s.chinese}`).join('\n\n');
  },
  
  // Function to get sentence by index
  getSentence: function(index, language = 'both') {
    if (index < 0 || index >= this.sentences.length) {
      return null;
    }
    const sentence = this.sentences[index];
    if (language === 'chinese') {
      return sentence.chinese;
    } else if (language === 'english') {
      return sentence.english;
    }
    return sentence;
  },
  
  // Function to get problem analysis
  getProblemAnalysis: function(language = 'english') {
    const problem = this.suggestionDetails.currentProblem;
    if (language === 'chinese') {
      return {
        当前方法: problem.method.chinese,
        存在问题: problem.issues.chinese
      };
    }
    return {
      currentMethod: problem.method.english,
      existingIssues: problem.issues.english
    };
  },
  
  // Function to get suggestions summary
  getSuggestionsSummary: function(language = 'english') {
    const solutions = this.suggestionDetails.proposedSolutions;
    if (language === 'chinese') {
      return {
        主要建议: solutions.mainSuggestion.chinese,
        好处: solutions.benefits.chinese,
        实施方法: solutions.implementationMethods.chinese,
        预期效果: solutions.expectedOutcomes.chinese
      };
    }
    return {
      mainSuggestion: solutions.mainSuggestion.english,
      benefits: solutions.benefits.english,
      implementationMethods: solutions.implementationMethods.english,
      expectedOutcomes: solutions.expectedOutcomes.english
    };
  },
  
  // Function to search sentences by keyword
  searchSentences: function(keyword, language = 'both') {
    const results = [];
    this.sentences.forEach((sentence, index) => {
      const searchIn = language === 'chinese' ? sentence.chinese : 
                       language === 'english' ? sentence.english : 
                       sentence.english + ' ' + sentence.chinese;
      if (searchIn.toLowerCase().includes(keyword.toLowerCase())) {
        results.push({
          index: index,
          sentence: sentence
        });
      }
    });
    return results;
  },
  
  // Function to generate formatted letter
  generateFormattedLetter: function(language = 'english', format = 'standard') {
    let letter = '';
    const greeting = language === 'chinese' ? '尊敬的老师：' : 'Dear Teacher,';
    const signature = language === 'chinese' ? '此致\n敬礼\n\n李华\n3班' : 'Best regards,\n\nLi Hua\nClass 3';
    
    if (format === 'standard') {
      letter = `${greeting}\n\n`;
      
      // Introduction
      letter += language === 'chinese' ?
        `    ${this.sentences[0].chinese}${this.sentences[1].chinese}${this.sentences[2].chinese}\n\n` :
        `    ${this.sentences[0].english} ${this.sentences[1].english} ${this.sentences[2].english}\n\n`;
      
      // Problem identification
      letter += language === 'chinese' ?
        `    ${this.sentences[3].chinese}\n\n` :
        `    ${this.sentences[3].english}\n\n`;
      
      // Suggestions
      letter += language === 'chinese' ?
        `    ${this.sentences[4].chinese}${this.sentences[5].chinese}${this.sentences[6].chinese}\n\n` :
        `    ${this.sentences[4].english} ${this.sentences[5].english} ${this.sentences[6].english}\n\n`;
      
      // Closing
      letter += language === 'chinese' ?
        `    ${this.sentences[7].chinese}\n\n` :
        `    ${this.sentences[7].english}\n\n`;
      
      letter += signature;
      
    } else if (format === 'structured') {
      const title = language === 'chinese' ? '关于口语练习分组方法的建议' : 'Suggestions for Oral Practice Grouping Methods';
      letter = `${title}\n${'='.repeat(50)}\n\n`;
      
      // From section
      const from = language === 'chinese' ? '发件人：' : 'From: ';
      letter += `${from}${language === 'chinese' ? '李华（3班）' : 'Li Hua (Class 3)'}\n`;
      const date = new Date().toLocaleDateString(language === 'chinese' ? 'zh-CN' : 'en-US');
      letter += `${language === 'chinese' ? '日期：' : 'Date: '}${date}\n\n`;
      
      letter += `${greeting}\n\n`;
      
      // Purpose section
      const purpose = language === 'chinese' ? '【写信目的】' : '[Purpose]';
      letter += `${purpose}\n`;
      letter += language === 'chinese' ? this.sentences[2].chinese : this.sentences[2].english;
      letter += '\n\n';
      
      // Current problem section
      const problem = language === 'chinese' ? '【当前问题】' : '[Current Problem]';
      letter += `${problem}\n`;
      letter += language === 'chinese' ? this.sentences[3].chinese : this.sentences[3].english;
      letter += '\n\n';
      
      // Suggestions section
      const suggestions = language === 'chinese' ? '【建议方案】' : '[Suggestions]';
      letter += `${suggestions}\n`;
      const solutions = this.suggestionDetails.proposedSolutions;
      
      letter += language === 'chinese' ? '1. 主要建议：\n' : '1. Main Suggestion:\n';
      letter += `   ${language === 'chinese' ? solutions.mainSuggestion.chinese : solutions.mainSuggestion.english}\n\n`;
      
      letter += language === 'chinese' ? '2. 实施方法：\n' : '2. Implementation Methods:\n';
      const methods = language === 'chinese' ? solutions.implementationMethods.chinese : solutions.implementationMethods.english;
      methods.forEach(method => {
        letter += `   • ${method}\n`;
      });
      letter += '\n';
      
      letter += language === 'chinese' ? '3. 预期效果：\n' : '3. Expected Outcomes:\n';
      const outcomes = language === 'chinese' ? solutions.expectedOutcomes.chinese : solutions.expectedOutcomes.english;
      outcomes.forEach(outcome => {
        letter += `   • ${outcome}\n`;
      });
      letter += '\n';
      
      // Closing section
      letter += language === 'chinese' ? this.sentences[7].chinese : this.sentences[7].english;
      letter += '\n\n';
      letter += signature;
    }
    
    return letter;
  },
  
  // Function to get key points
  getKeyPoints: function(language = 'english') {
    if (language === 'chinese') {
      return {
        问题: '随机分组效果不佳',
        核心建议: '按语言水平或兴趣分组',
        实施工具: '调查或评估',
        创新点: '学生选择合作伙伴',
        轮换机制: '固定时间后更换',
        最终目标: '提高口语技能'
      };
    }
    return {
      problem: 'Random grouping is ineffective',
      coreSuggestion: 'Group by language level or interest',
      implementationTool: 'Survey or assessment',
      innovation: 'Student partner choice',
      rotationSystem: 'Change after fixed period',
      ultimateGoal: 'Improve oral skills'
    };
  },
  
  // Function to generate summary
  generateSummary: function(language = 'english') {
    if (language === 'chinese') {
      return {
        信件类型: '建议信',
        发件人: '李华（3班学生）',
        主题: '口语练习分组方法改进',
        问题分析: '随机分组导致配对不当，影响练习效果',
        建议方案: ['按语言水平分组', '按兴趣分组', '学生自选伙伴'],
        实施措施: ['调查评估', '定期轮换', '提供选择权'],
        预期成果: '提高学生积极性和口语水平'
      };
    }
    return {
      letterType: 'Suggestion Letter',
      sender: 'Li Hua (Class 3 Student)',
      topic: 'Improvement of Oral Practice Grouping Methods',
      problemAnalysis: 'Random grouping leads to inappropriate pairs, affecting practice effectiveness',
      proposedSolutions: ['Group by language level', 'Group by interest', 'Student partner choice'],
      implementationMeasures: ['Survey assessment', 'Regular rotation', 'Provide choice options'],
      expectedResults: 'Increase student motivation and oral skills'
    };
  }
};

// Export for use in Node.js environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = suggestionLetter;
}

// Make available in browser environment
if (typeof window !== 'undefined') {
  window.suggestionLetter = suggestionLetter;
}

// Console log example usage
console.log('建议信.js loaded successfully!');
console.log('Example usage:');
console.log('- Get full text: suggestionLetter.getFullText("english")');
console.log('- Get bilingual text: suggestionLetter.getBilingualText()');
console.log('- Get problem analysis: suggestionLetter.getProblemAnalysis()');
console.log('- Get suggestions summary: suggestionLetter.getSuggestionsSummary("chinese")');
console.log('- Generate formatted letter: suggestionLetter.generateFormattedLetter("english", "structured")');
console.log('- Get key points: suggestionLetter.getKeyPoints()');
console.log('- Generate summary: suggestionLetter.generateSummary("chinese")');