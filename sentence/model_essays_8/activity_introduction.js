// 活动介绍.js
// Green Grow Modern Farm Visit Activity Introduction

const activityIntroduction = {
  title: {
    english: "Green Grow Modern Farm Visit",
    chinese: "Green Grow现代农场参观活动介绍"
  },
  
  sentences: [
    {
      english: "Last weekend, as scheduled, I went to a remarkable modern farm named Green Grow with several classmates, which has impressed and inspired all of us.",
      chinese: "上个周末，我和几个同学按计划去了一个名为Green Grow的非凡的现代农场，这给我们所有人留下了深刻的印象和启发。"
    },
    {
      english: "Featuring green pollution-free vegetables and fruits, Green Grow boasts a brilliant high-tech farm covering an area of 2,000 acres, where advanced technology and equipment are used for efficient farming.",
      chinese: "以绿色无公害蔬菜和水果为特色，Green Grow拥有一个占地面积2000亩的超棒的高科技农场，采用先进的技术和设备进行高效种植。"
    },
    {
      english: "Additionally, there is a fascinating experience garden particularly intended for individuals to pick green food by themselves.",
      chinese: "此外，还有一个迷人的体验园，专为个人采摘绿色食品而设计。"
    },
    {
      english: "After the instruction of the staff, we started our adventure.",
      chinese: "在工作人员的指导下，我们开始了我们的冒险。"
    },
    {
      english: "Not only did we collect vegetables and fruits directly from plants, but also some fresh strawberries were eaten on the spot.",
      chinese: "我们不仅直接从植物上采集蔬菜和水果，还在现场吃了一些新鲜的草莓。"
    },
    {
      english: "What this activity has given me is a kind of unique pleasure, as well as a great opportunity to get close to nature.",
      chinese: "这次活动带给我的是一种独特的快乐，还有一次亲近自然的好机会。"
    },
    {
      english: "I love it!",
      chinese: "我喜欢这次活动！"
    }
  ],
  
  // Farm and activity details
  farmDetails: {
    farmName: "Green Grow",
    type: {
      english: "Modern High-tech Farm",
      chinese: "现代高科技农场"
    },
    visitDate: {
      english: "Last weekend",
      chinese: "上个周末"
    },
    features: {
      english: [
        "Green pollution-free vegetables",
        "Green pollution-free fruits",
        "Advanced technology",
        "Efficient farming equipment",
        "Experience garden for picking"
      ],
      chinese: [
        "绿色无公害蔬菜",
        "绿色无公害水果",
        "先进的技术",
        "高效种植设备",
        "体验采摘园"
      ]
    },
    specifications: {
      area: {
        value: 2000,
        unit: "acres",
        chinese: "2000亩"
      },
      technology: {
        english: "Advanced technology and equipment",
        chinese: "先进的技术和设备"
      }
    },
    activities: {
      english: [
        "Guided tour by staff",
        "Picking vegetables directly from plants",
        "Picking fruits directly from plants",
        "Eating fresh strawberries on site"
      ],
      chinese: [
        "工作人员指导参观",
        "直接从植物上采摘蔬菜",
        "直接从植物上采摘水果",
        "现场品尝新鲜草莓"
      ]
    },
    participants: {
      english: "Several classmates and myself",
      chinese: "我和几个同学"
    },
    impressions: {
      english: [
        "Impressed and inspired",
        "Unique pleasure",
        "Great opportunity to get close to nature"
      ],
      chinese: [
        "深刻的印象和启发",
        "独特的快乐",
        "亲近自然的好机会"
      ]
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
  
  // Function to get farm information
  getFarmInfo: function(language = 'english') {
    const info = {
      name: this.farmDetails.farmName,
      type: language === 'chinese' ? this.farmDetails.type.chinese : this.farmDetails.type.english,
      area: language === 'chinese' ? this.farmDetails.specifications.area.chinese : 
            `${this.farmDetails.specifications.area.value} ${this.farmDetails.specifications.area.unit}`,
      features: language === 'chinese' ? this.farmDetails.features.chinese : this.farmDetails.features.english
    };
    return info;
  },
  
  // Function to get activity details
  getActivityDetails: function(language = 'english') {
    return {
      date: language === 'chinese' ? this.farmDetails.visitDate.chinese : this.farmDetails.visitDate.english,
      participants: language === 'chinese' ? this.farmDetails.participants.chinese : this.farmDetails.participants.english,
      activities: language === 'chinese' ? this.farmDetails.activities.chinese : this.farmDetails.activities.english,
      impressions: language === 'chinese' ? this.farmDetails.impressions.chinese : this.farmDetails.impressions.english
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
  
  // Function to generate activity summary
  generateSummary: function(language = 'english') {
    if (language === 'chinese') {
      return {
        标题: '农场参观活动',
        地点: this.farmDetails.farmName,
        时间: this.farmDetails.visitDate.chinese,
        参与者: this.farmDetails.participants.chinese,
        农场规模: this.farmDetails.specifications.area.chinese,
        主要特色: this.farmDetails.features.chinese.join('、'),
        活动内容: this.farmDetails.activities.chinese.join('、'),
        个人感受: this.farmDetails.impressions.chinese.join('、')
      };
    }
    return {
      title: 'Farm Visit Activity',
      location: this.farmDetails.farmName,
      date: this.farmDetails.visitDate.english,
      participants: this.farmDetails.participants.english,
      farmSize: `${this.farmDetails.specifications.area.value} ${this.farmDetails.specifications.area.unit}`,
      mainFeatures: this.farmDetails.features.english.join(', '),
      activities: this.farmDetails.activities.english.join(', '),
      personalImpressions: this.farmDetails.impressions.english.join(', ')
    };
  },
  
  // Function to generate formatted introduction
  generateIntroduction: function(language = 'english', format = 'paragraph') {
    let intro = '';
    
    if (format === 'paragraph') {
      if (language === 'chinese') {
        intro = this.sentences.map(s => s.chinese).join('');
      } else {
        intro = this.sentences.map(s => s.english).join(' ');
      }
    } else if (format === 'list') {
      const title = language === 'chinese' ? 'Green Grow农场参观活动' : 'Green Grow Farm Visit';
      intro = `${title}\n${'='.repeat(40)}\n\n`;
      
      this.sentences.forEach((s, index) => {
        const text = language === 'chinese' ? s.chinese : s.english;
        intro += `${index + 1}. ${text}\n`;
      });
    } else if (format === 'detailed') {
      const summary = this.generateSummary(language);
      const keys = Object.keys(summary);
      
      intro = language === 'chinese' ? 'Green Grow农场参观活动详细介绍\n' : 'Green Grow Farm Visit Detailed Introduction\n';
      intro += '='.repeat(50) + '\n\n';
      
      keys.forEach(key => {
        intro += `${key}: ${typeof summary[key] === 'object' ? summary[key].join(', ') : summary[key]}\n`;
      });
      
      intro += `\n${language === 'chinese' ? '活动描述' : 'Activity Description'}:\n`;
      intro += '-'.repeat(30) + '\n';
      intro += this.getFullText(language);
    }
    
    return intro;
  },
  
  // Function to get highlights
  getHighlights: function(language = 'english') {
    if (language === 'chinese') {
      return [
        'Green Grow现代农场',
        '2000亩高科技农场',
        '绿色无公害蔬菜水果',
        '亲手采摘体验',
        '现场品尝新鲜草莓',
        '亲近自然的机会'
      ];
    }
    return [
      'Green Grow Modern Farm',
      '2,000 acres high-tech farm',
      'Pollution-free vegetables and fruits',
      'Hands-on picking experience',
      'Fresh strawberries on site',
      'Opportunity to get close to nature'
    ];
  }
};

// Export for use in Node.js environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = activityIntroduction;
}

// Make available in browser environment
if (typeof window !== 'undefined') {
  window.activityIntroduction = activityIntroduction;
}

// Console log example usage
console.log('活动介绍.js loaded successfully!');
console.log('Example usage:');
console.log('- Get full text: activityIntroduction.getFullText("english")');
console.log('- Get bilingual text: activityIntroduction.getBilingualText()');
console.log('- Get farm info: activityIntroduction.getFarmInfo()');
console.log('- Get activity details: activityIntroduction.getActivityDetails()');
console.log('- Generate summary: activityIntroduction.generateSummary("chinese")');
console.log('- Get highlights: activityIntroduction.getHighlights()');
console.log('- Generate introduction: activityIntroduction.generateIntroduction("english", "detailed")');