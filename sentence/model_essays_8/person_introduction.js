// 人物信.js
// Person Description - My Respected Sister Li Hua

const personDescription = {
  title: {
    english: "The Person I Respect - My Sister Li Hua",
    chinese: "我尊敬的人 - 我的姐姐李华"
  },
  
  sentences: [
    {
      english: "There are many respectable people around us.",
      chinese: "我们周围有许多可敬的人。"
    },
    {
      english: "They, as my role models, inspire me and deserve my respect and admiration.",
      chinese: "他们作为我的榜样，激励着我，值得我的尊重和钦佩。"
    },
    {
      english: "My elder sister Li Hua is one of them.",
      chinese: "我的姐姐李华就是他们中的一个。"
    },
    {
      english: "Recognized as one of the most remarkable high school students, she has been admitted to Harvard University this year owing to her excellent academic performance and extraordinary contributions to society.",
      chinese: "她被公认为最杰出的高中生之一，由于优秀的学习成绩和对社会的卓越贡献，她今年被哈佛大学录取。"
    },
    {
      english: "Additionally, her proactive personality and charming smile always inspire everyone around her, including me.",
      chinese: "此外，她积极主动的个性和迷人的微笑总是激励着她周围的每个人，包括我。"
    },
    {
      english: "Not only do I respect her for the passion for learning she enjoys, but also admire her for those valuable qualities she possesses, such as initiative, selflessness, self-discipline and determination of the future.",
      chinese: "我不仅尊重她对学习的热情，也钦佩她所拥有的那些可贵的品质，比如主动、无私、自律和对未来的决心。"
    },
    {
      english: "Whenever I face challenges or get into trouble, she is always the one I trust, supporting me and providing insightful suggestions.",
      chinese: "每当我遇到挑战或麻烦时，她总是我信任的人，支持我，给我提供有见地的建议。"
    },
    {
      english: "This is my sister Li Hua, the person I respect and admire.",
      chinese: "这就是我的姐姐李华，我尊敬和钦佩的人。"
    }
  ],
  
  // Person details and characteristics
  personDetails: {
    basicInfo: {
      name: {
        english: "Li Hua",
        chinese: "李华"
      },
      relationship: {
        english: "Elder sister",
        chinese: "姐姐"
      },
      identity: {
        english: "High school student",
        chinese: "高中生"
      }
    },
    achievements: {
      academic: {
        english: [
          "Recognized as one of the most remarkable high school students",
          "Excellent academic performance",
          "Admitted to Harvard University"
        ],
        chinese: [
          "被公认为最杰出的高中生之一",
          "优秀的学习成绩",
          "被哈佛大学录取"
        ]
      },
      social: {
        english: "Extraordinary contributions to society",
        chinese: "对社会的卓越贡献"
      },
      university: {
        name: {
          english: "Harvard University",
          chinese: "哈佛大学"
        },
        year: {
          english: "This year",
          chinese: "今年"
        }
      }
    },
    personality: {
      traits: {
        english: [
          "Proactive personality",
          "Charming smile",
          "Passion for learning",
          "Initiative",
          "Selflessness",
          "Self-discipline",
          "Determination of the future"
        ],
        chinese: [
          "积极主动的个性",
          "迷人的微笑",
          "对学习的热情",
          "主动",
          "无私",
          "自律",
          "对未来的决心"
        ]
      },
      impact: {
        english: "Inspires everyone around her",
        chinese: "激励着她周围的每个人"
      }
    },
    roleInLife: {
      support: {
        english: [
          "The one I trust",
          "Supporting me",
          "Providing insightful suggestions"
        ],
        chinese: [
          "我信任的人",
          "支持我",
          "提供有见地的建议"
        ]
      },
      situations: {
        english: "When facing challenges or troubles",
        chinese: "遇到挑战或麻烦时"
      }
    },
    feelings: {
      english: ["Respect", "Admiration", "Trust"],
      chinese: ["尊敬", "钦佩", "信任"]
    }
  },
  
  // Essay structure metadata
  essayStructure: {
    introduction: {
      type: "General statement about respectable people",
      sentenceIndices: [0, 1, 2]
    },
    bodyParagraph1: {
      type: "Achievements and recognition",
      sentenceIndices: [3, 4]
    },
    bodyParagraph2: {
      type: "Personal qualities and impact",
      sentenceIndices: [5, 6]
    },
    conclusion: {
      type: "Summary statement",
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
  
  // Function to get person profile
  getPersonProfile: function(language = 'english') {
    const info = this.personDetails.basicInfo;
    const achievements = this.personDetails.achievements;
    
    if (language === 'chinese') {
      return {
        姓名: info.name.chinese,
        关系: info.relationship.chinese,
        身份: info.identity.chinese,
        学术成就: achievements.academic.chinese,
        社会贡献: achievements.social.chinese,
        录取大学: achievements.university.name.chinese
      };
    }
    return {
      name: info.name.english,
      relationship: info.relationship.english,
      identity: info.identity.english,
      academicAchievements: achievements.academic.english,
      socialContributions: achievements.social.english,
      university: achievements.university.name.english
    };
  },
  
  // Function to get personality traits
  getPersonalityTraits: function(language = 'english') {
    const traits = this.personDetails.personality.traits;
    return language === 'chinese' ? traits.chinese : traits.english;
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
  
  // Function to generate formatted essay
  generateFormattedEssay: function(language = 'english', format = 'standard') {
    let essay = '';
    
    if (format === 'standard') {
      const title = language === 'chinese' ? 
        '我尊敬的人 - 姐姐李华' : 
        'The Person I Respect - My Sister Li Hua';
      essay = `${title}\n${'='.repeat(40)}\n\n`;
      
      // Introduction paragraph
      essay += language === 'chinese' ?
        `    ${this.sentences[0].chinese}${this.sentences[1].chinese}${this.sentences[2].chinese}\n\n` :
        `    ${this.sentences[0].english} ${this.sentences[1].english} ${this.sentences[2].english}\n\n`;
      
      // Body paragraph 1 - Achievements
      essay += language === 'chinese' ?
        `    ${this.sentences[3].chinese}${this.sentences[4].chinese}\n\n` :
        `    ${this.sentences[3].english} ${this.sentences[4].english}\n\n`;
      
      // Body paragraph 2 - Qualities
      essay += language === 'chinese' ?
        `    ${this.sentences[5].chinese}${this.sentences[6].chinese}\n\n` :
        `    ${this.sentences[5].english} ${this.sentences[6].english}\n\n`;
      
      // Conclusion
      essay += language === 'chinese' ?
        `    ${this.sentences[7].chinese}` :
        `    ${this.sentences[7].english}`;
        
    } else if (format === 'profile') {
      // Profile format
      const header = language === 'chinese' ? '人物档案' : 'Person Profile';
      essay = `${header}\n${'*'.repeat(50)}\n\n`;
      
      // Basic Information
      const basicInfo = language === 'chinese' ? '【基本信息】' : '[Basic Information]';
      essay += `${basicInfo}\n`;
      const profile = this.getPersonProfile(language);
      Object.keys(profile).forEach(key => {
        const value = Array.isArray(profile[key]) ? profile[key].join('、') : profile[key];
        essay += `${key}: ${value}\n`;
      });
      essay += '\n';
      
      // Personality Traits
      const personality = language === 'chinese' ? '【性格特点】' : '[Personality Traits]';
      essay += `${personality}\n`;
      const traits = this.getPersonalityTraits(language);
      traits.forEach(trait => {
        essay += `• ${trait}\n`;
      });
      essay += '\n';
      
      // Role in My Life
      const role = language === 'chinese' ? '【在我生活中的角色】' : '[Role in My Life]';
      essay += `${role}\n`;
      const support = this.personDetails.roleInLife.support;
      const supportText = language === 'chinese' ? support.chinese : support.english;
      supportText.forEach(item => {
        essay += `• ${item}\n`;
      });
      essay += '\n';
      
      // My Feelings
      const feelings = language === 'chinese' ? '【我的感受】' : '[My Feelings]';
      essay += `${feelings}\n`;
      const feelingsList = this.personDetails.feelings;
      const feelingsText = language === 'chinese' ? feelingsList.chinese : feelingsList.english;
      essay += feelingsText.join('、');
    }
    
    return essay;
  },
  
  // Function to get key qualities
  getKeyQualities: function(language = 'english') {
    if (language === 'chinese') {
      return {
        学术方面: ['最杰出的高中生之一', '优秀的学习成绩', '被哈佛大学录取'],
        社会贡献: '对社会的卓越贡献',
        性格品质: ['积极主动', '无私', '自律', '有决心'],
        人际影响: '激励周围的每个人',
        个人支持: '提供支持和有见地的建议'
      };
    }
    return {
      academic: ['One of the most remarkable high school students', 'Excellent academic performance', 'Admitted to Harvard'],
      socialContribution: 'Extraordinary contributions to society',
      personalQualities: ['Proactive', 'Selfless', 'Self-disciplined', 'Determined'],
      interpersonalImpact: 'Inspires everyone around her',
      personalSupport: 'Provides support and insightful suggestions'
    };
  },
  
  // Function to generate summary
  generateSummary: function(language = 'english') {
    if (language === 'chinese') {
      return {
        人物: '姐姐李华',
        主要成就: '被哈佛大学录取',
        突出品质: ['积极主动', '无私', '自律', '有决心'],
        对我的影响: '榜样、激励、支持、信任',
        文章主题: '尊敬和钦佩',
        写作目的: '描述一个值得尊敬的人'
      };
    }
    return {
      person: 'Elder sister Li Hua',
      mainAchievement: 'Admitted to Harvard University',
      outstandingQualities: ['Proactive', 'Selfless', 'Self-disciplined', 'Determined'],
      impactOnMe: 'Role model, inspiration, support, trust',
      essayTheme: 'Respect and admiration',
      writingPurpose: 'Describe a respectable person'
    };
  }
};

// Export for use in Node.js environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = personDescription;
}

// Make available in browser environment
if (typeof window !== 'undefined') {
  window.personDescription = personDescription;
}

// Console log example usage
console.log('人物信.js loaded successfully!');
console.log('Example usage:');
console.log('- Get full text: personDescription.getFullText("english")');
console.log('- Get bilingual text: personDescription.getBilingualText()');
console.log('- Get person profile: personDescription.getPersonProfile()');
console.log('- Get personality traits: personDescription.getPersonalityTraits("chinese")');
console.log('- Generate formatted essay: personDescription.generateFormattedEssay("english", "profile")');
console.log('- Get key qualities: personDescription.getKeyQualities()');
console.log('- Generate summary: personDescription.generateSummary("chinese")');