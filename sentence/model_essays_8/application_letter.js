// 申请信.js
// Chinese Art Exhibition Volunteer Application Letter

const applicationLetter = {
  title: {
    english: "Chinese Art Exhibition Volunteer Application",
    chinese: "中国画展志愿者申请信"
  },
  
  sentences: [
    {
      english: "Hearing that a remarkable Chinese art exhibition is scheduled to take place in your gallery, I am interested in opportunities that may be available to volunteer.",
      chinese: "听说贵美术馆将举办一场精彩的中国画展，我对可能的志愿者机会很感兴趣。"
    },
    {
      english: "As a dedicated volunteer, I have significant experience working in various exhibitions, including art shows, technology fairs and culture exhibitions.",
      chinese: "作为一名敬业的志愿者，我有丰富的展览工作经验，包括艺术展、科技展和文化展。"
    },
    {
      english: "Additionally, learning Chinese painting professionally for twelve years enables me to remember relevant information easily, which is essential for a brilliant guide.",
      chinese: "另外，十二年的国画专业学习使我能够很容易地记住相关的信息，这是一个优秀的向导所必需的。"
    },
    {
      english: "Not only can I work as a helpful assistant, but as a student from China, I will also be able to introduce the event and the extraordinary works in Chinese.",
      chinese: "我不仅可以作为一名得力的助手，而且作为一名来自中国的学生，我还可以用中文介绍这次活动和杰出作品。"
    },
    {
      english: "My schedule is flexible during the summer vacation and please find attached my resume for your consideration.",
      chinese: "我在暑假的时间安排很灵活，请查收附件里我的简历供您考虑。"
    },
    {
      english: "Looking forward to hearing from you.",
      chinese: "期待您的回信。"
    }
  ],
  
  // Application details and qualifications
  applicationDetails: {
    position: {
      english: "Volunteer for Chinese Art Exhibition",
      chinese: "中国画展志愿者"
    },
    event: {
      english: "Chinese Art Exhibition",
      chinese: "中国画展"
    },
    venue: {
      english: "Art Gallery",
      chinese: "美术馆"
    },
    qualifications: {
      experience: {
        english: [
          "Dedicated volunteer with significant experience",
          "Worked in art shows",
          "Worked in technology fairs",
          "Worked in culture exhibitions"
        ],
        chinese: [
          "敬业的志愿者，经验丰富",
          "艺术展工作经验",
          "科技展工作经验",
          "文化展工作经验"
        ]
      },
      skills: {
        english: [
          "Twelve years of professional Chinese painting study",
          "Ability to remember relevant information easily",
          "Can work as a helpful assistant",
          "Can introduce works in Chinese",
          "Native Chinese speaker"
        ],
        chinese: [
          "十二年国画专业学习",
          "轻松记忆相关信息的能力",
          "可担任得力助手",
          "可用中文介绍作品",
          "中文母语"
        ]
      },
      advantages: {
        english: [
          "Student from China",
          "Professional Chinese painting background",
          "Bilingual capabilities",
          "Exhibition experience",
          "Flexible summer schedule"
        ],
        chinese: [
          "来自中国的学生",
          "专业国画背景",
          "双语能力",
          "展览经验",
          "暑假时间灵活"
        ]
      }
    },
    availability: {
      english: "Flexible schedule during summer vacation",
      chinese: "暑假期间时间安排灵活"
    },
    attachments: {
      english: "Resume attached",
      chinese: "附件包含简历"
    }
  },
  
  // Letter structure metadata
  letterStructure: {
    opening: {
      type: "Interest Expression",
      sentenceIndex: 0
    },
    bodyParagraph1: {
      type: "Experience and Qualifications",
      sentenceIndices: [1, 2, 3]
    },
    bodyParagraph2: {
      type: "Availability and Documents",
      sentenceIndex: 4
    },
    closing: {
      type: "Polite Closing",
      sentenceIndex: 5
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
  
  // Function to get qualifications summary
  getQualifications: function(language = 'english') {
    const quals = this.applicationDetails.qualifications;
    if (language === 'chinese') {
      return {
        经验: quals.experience.chinese,
        技能: quals.skills.chinese,
        优势: quals.advantages.chinese
      };
    }
    return {
      experience: quals.experience.english,
      skills: quals.skills.english,
      advantages: quals.advantages.english
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
    const greeting = language === 'chinese' ? '尊敬的负责人：' : 'Dear Sir/Madam,';
    const signature = language === 'chinese' ? '此致\n敬礼' : 'Sincerely,';
    
    if (format === 'standard') {
      letter = `${greeting}\n\n`;
      
      // Opening paragraph
      letter += language === 'chinese' ? this.sentences[0].chinese : this.sentences[0].english;
      letter += '\n\n';
      
      // Body paragraph 1 - Qualifications
      for (let i = 1; i <= 3; i++) {
        letter += language === 'chinese' ? this.sentences[i].chinese : this.sentences[i].english;
        letter += ' ';
      }
      letter += '\n\n';
      
      // Body paragraph 2 - Availability
      letter += language === 'chinese' ? this.sentences[4].chinese : this.sentences[4].english;
      letter += '\n\n';
      
      // Closing
      letter += language === 'chinese' ? this.sentences[5].chinese : this.sentences[5].english;
      letter += `\n\n${signature}`;
      
    } else if (format === 'detailed') {
      const title = language === 'chinese' ? '中国画展志愿者申请' : 'Application for Chinese Art Exhibition Volunteer';
      letter = `${title}\n${'='.repeat(50)}\n\n`;
      letter += `${greeting}\n\n`;
      
      // Section 1: Introduction
      const intro = language === 'chinese' ? '申请目的' : 'Purpose of Application';
      letter += `【${intro}】\n`;
      letter += language === 'chinese' ? this.sentences[0].chinese : this.sentences[0].english;
      letter += '\n\n';
      
      // Section 2: Qualifications
      const quals = language === 'chinese' ? '个人资质' : 'Qualifications';
      letter += `【${quals}】\n`;
      for (let i = 1; i <= 3; i++) {
        letter += `• ${language === 'chinese' ? this.sentences[i].chinese : this.sentences[i].english}\n`;
      }
      letter += '\n';
      
      // Section 3: Availability
      const avail = language === 'chinese' ? '时间安排' : 'Availability';
      letter += `【${avail}】\n`;
      letter += language === 'chinese' ? this.sentences[4].chinese : this.sentences[4].english;
      letter += '\n\n';
      
      // Closing
      letter += language === 'chinese' ? this.sentences[5].chinese : this.sentences[5].english;
      letter += `\n\n${signature}`;
    }
    
    return letter;
  },
  
  // Function to get key points
  getKeyPoints: function(language = 'english') {
    if (language === 'chinese') {
      return {
        职位: '中国画展志愿者',
        核心优势: '十二年国画专业学习',
        语言能力: '可用中文介绍作品',
        经验: '多种展览工作经验',
        时间: '暑假时间灵活',
        附件: '已附简历'
      };
    }
    return {
      position: 'Chinese Art Exhibition Volunteer',
      coreStrength: 'Twelve years of Chinese painting study',
      languageAbility: 'Can introduce works in Chinese',
      experience: 'Various exhibition experience',
      availability: 'Flexible summer schedule',
      attachment: 'Resume attached'
    };
  },
  
  // Function to get application summary
  generateSummary: function(language = 'english') {
    const summary = {
      applicationType: language === 'chinese' ? '志愿者申请' : 'Volunteer Application',
      targetPosition: language === 'chinese' ? '中国画展志愿者' : 'Chinese Art Exhibition Volunteer',
      mainQualification: language === 'chinese' ? '十二年国画专业学习背景' : '12 years of Chinese painting background',
      keyAdvantages: language === 'chinese' ? 
        ['中国学生身份', '双语能力', '丰富展览经验', '时间灵活'] : 
        ['Chinese student', 'Bilingual abilities', 'Rich exhibition experience', 'Flexible schedule'],
      documentStatus: language === 'chinese' ? '简历已附' : 'Resume attached'
    };
    
    return summary;
  }
};

// Export for use in Node.js environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = applicationLetter;
}

// Make available in browser environment
if (typeof window !== 'undefined') {
  window.applicationLetter = applicationLetter;
}

// Console log example usage
console.log('申请信.js loaded successfully!');
console.log('Example usage:');
console.log('- Get full text: applicationLetter.getFullText("english")');
console.log('- Get bilingual text: applicationLetter.getBilingualText()');
console.log('- Get qualifications: applicationLetter.getQualifications()');
console.log('- Generate formatted letter: applicationLetter.generateFormattedLetter("chinese", "standard")');
console.log('- Get key points: applicationLetter.getKeyPoints()');
console.log('- Generate summary: applicationLetter.generateSummary()');
console.log('- Search sentences: applicationLetter.searchSentences("volunteer")');