// 通知信.js
// Notice for English Film "Growing Together" Screening

const noticeLetter = {
  title: {
    english: "Notice for Film Screening - Growing Together",
    chinese: "英文短片《一起成长》放映通知"
  },
  
  sentences: [
    {
      english: "Notice is hereby given that a brilliant short English film named Growing Together is coming soon, which is based on the theme of our school's development.",
      chinese: "特此通知：以我校发展为主题的精彩英文短片《一起成长》即将上映。"
    },
    {
      english: "All the teachers, students and staff members are sincerely welcome.",
      chinese: "竭诚欢迎全体师生和工作人员。"
    },
    {
      english: "The premiere is scheduled at 20:00 this Saturday in the Central Theatre, which is equipped with a fabulous screen and can totally accommodate an audience of six hundred.",
      chinese: "首演将于本周六晚上8点在中央剧院举行，中央剧院配备了精美的屏幕，可容纳600名观众。"
    },
    {
      english: "Additionally, the film is available at the same time every day from June 10th (this Friday) to July 10th.",
      chinese: "另外，从6月10日（本周五）到7月10日，每天同一时间上映。"
    },
    {
      english: "Not only will you enjoy a brief view of the school's remarkable history, but also the impressive development of its unique culture.",
      chinese: "你不仅可以欣赏到学校辉煌的历史，还可以欣赏到令人印象深刻的学校独特文化的发展。"
    },
    {
      english: "We are looking forward to your insightful suggestions about the short film.",
      chinese: "我们期待您对短片的真知灼见。"
    },
    {
      english: "Please feel free to comment on Weibo or email us: suggestion@studentunion.com.",
      chinese: "请随时在微博上发表评论或发邮件给我们：suggestion@studentunion.com。"
    }
  ],
  
  // Film and screening details
  filmDetails: {
    filmInfo: {
      title: {
        english: "Growing Together",
        chinese: "一起成长"
      },
      type: {
        english: "Short English Film",
        chinese: "英文短片"
      },
      theme: {
        english: "Our school's development",
        chinese: "我校发展"
      },
      content: {
        english: [
          "School's remarkable history",
          "Impressive development of unique culture"
        ],
        chinese: [
          "学校辉煌的历史",
          "学校独特文化的发展"
        ]
      }
    },
    screeningInfo: {
      premiere: {
        date: {
          english: "This Saturday",
          chinese: "本周六"
        },
        time: {
          english: "20:00",
          chinese: "晚上8点"
        },
        venue: {
          english: "Central Theatre",
          chinese: "中央剧院"
        },
        facilities: {
          english: [
            "Fabulous screen",
            "Capacity for 600 audience members"
          ],
          chinese: [
            "精美的屏幕",
            "可容纳600名观众"
          ]
        }
      },
      regularScreening: {
        startDate: {
          english: "June 10th (this Friday)",
          chinese: "6月10日（本周五）"
        },
        endDate: {
          english: "July 10th",
          chinese: "7月10日"
        },
        frequency: {
          english: "Same time every day",
          chinese: "每天同一时间"
        },
        duration: {
          days: 31,
          description: {
            english: "One month screening period",
            chinese: "为期一个月的放映期"
          }
        }
      }
    },
    audience: {
      target: {
        english: ["Teachers", "Students", "Staff members"],
        chinese: ["教师", "学生", "工作人员"]
      },
      welcome: {
        english: "All are sincerely welcome",
        chinese: "竭诚欢迎全体"
      }
    },
    feedback: {
      channels: {
        english: ["Weibo comments", "Email"],
        chinese: ["微博评论", "电子邮件"]
      },
      email: "suggestion@studentunion.com",
      purpose: {
        english: "Collecting insightful suggestions",
        chinese: "收集真知灼见"
      }
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
  
  // Function to get screening schedule
  getSchedule: function(language = 'english') {
    const screening = this.filmDetails.screeningInfo;
    if (language === 'chinese') {
      return {
        首映: {
          日期: screening.premiere.date.chinese,
          时间: screening.premiere.time.chinese,
          地点: screening.premiere.venue.chinese
        },
        常规放映: {
          开始日期: screening.regularScreening.startDate.chinese,
          结束日期: screening.regularScreening.endDate.chinese,
          频率: screening.regularScreening.frequency.chinese
        }
      };
    }
    return {
      premiere: {
        date: screening.premiere.date.english,
        time: screening.premiere.time.english,
        venue: screening.premiere.venue.english
      },
      regularScreening: {
        startDate: screening.regularScreening.startDate.english,
        endDate: screening.regularScreening.endDate.english,
        frequency: screening.regularScreening.frequency.english
      }
    };
  },
  
  // Function to get film information
  getFilmInfo: function(language = 'english') {
    const film = this.filmDetails.filmInfo;
    return {
      title: language === 'chinese' ? film.title.chinese : film.title.english,
      type: language === 'chinese' ? film.type.chinese : film.type.english,
      theme: language === 'chinese' ? film.theme.chinese : film.theme.english,
      content: language === 'chinese' ? film.content.chinese : film.content.english
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
  
  // Function to generate formatted notice
  generateFormattedNotice: function(language = 'english', format = 'standard') {
    let notice = '';
    
    if (format === 'standard') {
      const header = language === 'chinese' ? '通知' : 'NOTICE';
      notice = `${'='.repeat(50)}\n${header}\n${'='.repeat(50)}\n\n`;
      
      this.sentences.forEach(s => {
        notice += language === 'chinese' ? s.chinese : s.english;
        notice += '\n\n';
      });
      
      const footer = language === 'chinese' ? '学生会' : 'Student Union';
      notice += `\n${footer}\n`;
      const date = language === 'chinese' ? `发布日期：${new Date().toLocaleDateString('zh-CN')}` : 
                   `Date: ${new Date().toLocaleDateString('en-US')}`;
      notice += date;
      
    } else if (format === 'bulletin') {
      // Bulletin board format
      const title = language === 'chinese' ? 
        '【放映通知】英文短片《一起成长》' : 
        '[SCREENING NOTICE] Growing Together';
      notice = `${title}\n${'*'.repeat(50)}\n\n`;
      
      // What
      const what = language === 'chinese' ? '活动内容：' : 'WHAT:';
      notice += `${what}\n`;
      notice += language === 'chinese' ? 
        `  ${this.sentences[0].chinese}\n\n` : 
        `  ${this.sentences[0].english}\n\n`;
      
      // When
      const when = language === 'chinese' ? '时间安排：' : 'WHEN:';
      notice += `${when}\n`;
      notice += language === 'chinese' ?
        `  首映：${this.filmDetails.screeningInfo.premiere.date.chinese} ${this.filmDetails.screeningInfo.premiere.time.chinese}\n` :
        `  Premiere: ${this.filmDetails.screeningInfo.premiere.date.english} at ${this.filmDetails.screeningInfo.premiere.time.english}\n`;
      notice += language === 'chinese' ?
        `  常规放映：${this.filmDetails.screeningInfo.regularScreening.startDate.chinese} - ${this.filmDetails.screeningInfo.regularScreening.endDate.chinese}\n\n` :
        `  Regular: ${this.filmDetails.screeningInfo.regularScreening.startDate.english} - ${this.filmDetails.screeningInfo.regularScreening.endDate.english}\n\n`;
      
      // Where
      const where = language === 'chinese' ? '地点：' : 'WHERE:';
      notice += `${where}\n`;
      notice += language === 'chinese' ?
        `  ${this.filmDetails.screeningInfo.premiere.venue.chinese}\n\n` :
        `  ${this.filmDetails.screeningInfo.premiere.venue.english}\n\n`;
      
      // Who
      const who = language === 'chinese' ? '欢迎对象：' : 'WHO:';
      notice += `${who}\n`;
      notice += language === 'chinese' ?
        `  ${this.sentences[1].chinese}\n\n` :
        `  ${this.sentences[1].english}\n\n`;
      
      // Contact
      const contact = language === 'chinese' ? '联系方式：' : 'CONTACT:';
      notice += `${contact}\n`;
      notice += `  Email: ${this.filmDetails.feedback.email}\n`;
      notice += language === 'chinese' ?
        `  微博：请在微博上发表评论\n` :
        `  Weibo: Please comment on Weibo\n`;
    }
    
    return notice;
  },
  
  // Function to get key information
  getKeyInfo: function(language = 'english') {
    if (language === 'chinese') {
      return {
        片名: '《一起成长》',
        类型: '英文短片',
        主题: '学校发展',
        首映时间: `${this.filmDetails.screeningInfo.premiere.date.chinese} ${this.filmDetails.screeningInfo.premiere.time.chinese}`,
        地点: this.filmDetails.screeningInfo.premiere.venue.chinese,
        放映周期: `${this.filmDetails.screeningInfo.regularScreening.startDate.chinese} 至 ${this.filmDetails.screeningInfo.regularScreening.endDate.chinese}`,
        观众容量: '600人',
        反馈邮箱: this.filmDetails.feedback.email
      };
    }
    return {
      filmTitle: 'Growing Together',
      type: 'Short English Film',
      theme: "School's development",
      premiereTime: `${this.filmDetails.screeningInfo.premiere.date.english} at ${this.filmDetails.screeningInfo.premiere.time.english}`,
      venue: this.filmDetails.screeningInfo.premiere.venue.english,
      screeningPeriod: `${this.filmDetails.screeningInfo.regularScreening.startDate.english} to ${this.filmDetails.screeningInfo.regularScreening.endDate.english}`,
      capacity: '600 people',
      feedbackEmail: this.filmDetails.feedback.email
    };
  },
  
  // Function to generate summary
  generateSummary: function(language = 'english') {
    const info = this.getKeyInfo(language);
    let summary = language === 'chinese' ? '放映通知摘要：\n' : 'Screening Notice Summary:\n';
    summary += '-'.repeat(30) + '\n';
    
    Object.keys(info).forEach(key => {
      summary += `${key}: ${info[key]}\n`;
    });
    
    return summary;
  }
};

// Export for use in Node.js environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = noticeLetter;
}

// Make available in browser environment
if (typeof window !== 'undefined') {
  window.noticeLetter = noticeLetter;
}

// Console log example usage
console.log('通知信.js loaded successfully!');
console.log('Example usage:');
console.log('- Get full text: noticeLetter.getFullText("english")');
console.log('- Get bilingual text: noticeLetter.getBilingualText()');
console.log('- Get schedule: noticeLetter.getSchedule()');
console.log('- Get film info: noticeLetter.getFilmInfo("chinese")');
console.log('- Generate formatted notice: noticeLetter.generateFormattedNotice("english", "bulletin")');
console.log('- Get key info: noticeLetter.getKeyInfo()');
console.log('- Generate summary: noticeLetter.generateSummary("chinese")');