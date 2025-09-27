// 道歉信.js
// Apology Letter for Appointment Cancellation

const apologyLetter = {
  title: {
    english: "Apology Letter for Appointment Cancellation",
    chinese: "约会取消道歉信"
  },
  
  sentences: [
    {
      english: "I am writing to cancel my appointment to visit the bookstore with you, which was originally scheduled for this Sunday.",
      chinese: "我来信是想取消原定于本周日和你一起去书店的约会。"
    },
    {
      english: "With deep regret about being unable to keep the appointment, I sincerely apologize for any inconvenience caused by this cancellation.",
      chinese: "对于无法赴约，我深表遗憾，对于此次取消给你带来的不便，我深表歉意。"
    },
    {
      english: "I have just been informed by my teacher that for the next two weeks I will be traveling to New York for an international mathematics competition.",
      chinese: "我的老师刚刚通知我，在接下来的两个星期里，我将去纽约参加一个国际数学竞赛。"
    },
    {
      english: "Due to this urgent matter, the current appointment date become unavailable for me.",
      chinese: "由于这件紧急的事情，目前的约会日期对我来说不可用了。"
    },
    {
      english: "In addition, probably we can reschedule our appointment for the next day after my return on July 24th, if that would be convenient for you.",
      chinese: "另外，如果你方便的话，我们可以重新安排在7月24日，我回来后的第二天。"
    },
    {
      english: "Once again, I express apologies for this sudden cancellation and for any inconvenience caused.",
      chinese: "对于这次突然取消，以及由此造成的任何不便，我再次表示歉意。"
    },
    {
      english: "Thank you for your understanding in this matter.",
      chinese: "谢谢你对这件事的理解。"
    }
  ],
  
  // Letter details and components
  letterDetails: {
    appointment: {
      original: {
        activity: {
          english: "Visit the bookstore",
          chinese: "去书店"
        },
        date: {
          english: "This Sunday",
          chinese: "本周日"
        },
        status: {
          english: "Cancelled",
          chinese: "已取消"
        }
      },
      proposed: {
        date: {
          english: "July 24th (the next day after return)",
          chinese: "7月24日（回来后的第二天）"
        },
        status: {
          english: "To be confirmed",
          chinese: "待确认"
        }
      }
    },
    reason: {
      event: {
        english: "International mathematics competition",
        chinese: "国际数学竞赛"
      },
      location: {
        english: "New York",
        chinese: "纽约"
      },
      duration: {
        english: "Two weeks",
        chinese: "两个星期"
      },
      notifiedBy: {
        english: "Teacher",
        chinese: "老师"
      },
      urgency: {
        english: "Urgent matter",
        chinese: "紧急事情"
      }
    },
    apologyElements: {
      expressions: {
        english: [
          "Deep regret",
          "Sincerely apologize",
          "Express apologies",
          "Thank you for understanding"
        ],
        chinese: [
          "深表遗憾",
          "深表歉意",
          "再次表示歉意",
          "谢谢理解"
        ]
      },
      tone: {
        english: "Sincere and apologetic",
        chinese: "真诚和歉意"
      }
    }
  },
  
  // Letter structure metadata
  letterStructure: {
    opening: {
      type: "State the cancellation",
      sentenceIndex: 0
    },
    apology1: {
      type: "Initial apology",
      sentenceIndex: 1
    },
    explanation: {
      type: "Reason for cancellation",
      sentenceIndices: [2, 3]
    },
    solution: {
      type: "Propose alternative",
      sentenceIndex: 4
    },
    apology2: {
      type: "Reiterate apology",
      sentenceIndex: 5
    },
    closing: {
      type: "Thank for understanding",
      sentenceIndex: 6
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
  
  // Function to get appointment details
  getAppointmentDetails: function(language = 'english') {
    const appt = this.letterDetails.appointment;
    if (language === 'chinese') {
      return {
        原定计划: {
          活动: appt.original.activity.chinese,
          日期: appt.original.date.chinese,
          状态: appt.original.status.chinese
        },
        建议改期: {
          日期: appt.proposed.date.chinese,
          状态: appt.proposed.status.chinese
        }
      };
    }
    return {
      originalPlan: {
        activity: appt.original.activity.english,
        date: appt.original.date.english,
        status: appt.original.status.english
      },
      proposedReschedule: {
        date: appt.proposed.date.english,
        status: appt.proposed.status.english
      }
    };
  },
  
  // Function to get cancellation reason
  getCancellationReason: function(language = 'english') {
    const reason = this.letterDetails.reason;
    if (language === 'chinese') {
      return {
        事件: reason.event.chinese,
        地点: reason.location.chinese,
        时长: reason.duration.chinese,
        通知人: reason.notifiedBy.chinese,
        紧急程度: reason.urgency.chinese
      };
    }
    return {
      event: reason.event.english,
      location: reason.location.english,
      duration: reason.duration.english,
      notifiedBy: reason.notifiedBy.english,
      urgency: reason.urgency.english
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
    const greeting = language === 'chinese' ? '亲爱的朋友：' : 'Dear Friend,';
    const signature = language === 'chinese' ? '此致\n敬礼' : 'Sincerely yours,';
    
    if (format === 'standard') {
      letter = `${greeting}\n\n`;
      
      // Opening - State the cancellation and initial apology
      letter += language === 'chinese' ? 
        `${this.sentences[0].chinese}${this.sentences[1].chinese}\n\n` :
        `${this.sentences[0].english} ${this.sentences[1].english}\n\n`;
      
      // Explanation - Reason for cancellation
      letter += language === 'chinese' ?
        `${this.sentences[2].chinese}${this.sentences[3].chinese}\n\n` :
        `${this.sentences[2].english} ${this.sentences[3].english}\n\n`;
      
      // Solution - Propose alternative
      letter += language === 'chinese' ?
        `${this.sentences[4].chinese}\n\n` :
        `${this.sentences[4].english}\n\n`;
      
      // Closing - Final apology and thanks
      letter += language === 'chinese' ?
        `${this.sentences[5].chinese}${this.sentences[6].chinese}\n\n` :
        `${this.sentences[5].english} ${this.sentences[6].english}\n\n`;
      
      letter += signature;
      
    } else if (format === 'formal') {
      const title = language === 'chinese' ? '道歉信' : 'Letter of Apology';
      const date = new Date().toLocaleDateString(language === 'chinese' ? 'zh-CN' : 'en-US');
      
      letter = `${title}\n${'='.repeat(50)}\n`;
      letter += `${language === 'chinese' ? '日期：' : 'Date: '}${date}\n\n`;
      letter += `${greeting}\n\n`;
      
      // Section 1: Purpose
      const purpose = language === 'chinese' ? '【来信目的】' : '[Purpose]';
      letter += `${purpose}\n`;
      letter += language === 'chinese' ? this.sentences[0].chinese : this.sentences[0].english;
      letter += '\n\n';
      
      // Section 2: Apology
      const apology = language === 'chinese' ? '【致歉】' : '[Apology]';
      letter += `${apology}\n`;
      letter += language === 'chinese' ? this.sentences[1].chinese : this.sentences[1].english;
      letter += '\n\n';
      
      // Section 3: Explanation
      const explanation = language === 'chinese' ? '【原因说明】' : '[Explanation]';
      letter += `${explanation}\n`;
      letter += language === 'chinese' ?
        `${this.sentences[2].chinese}${this.sentences[3].chinese}` :
        `${this.sentences[2].english} ${this.sentences[3].english}`;
      letter += '\n\n';
      
      // Section 4: Alternative Proposal
      const alternative = language === 'chinese' ? '【替代方案】' : '[Alternative Proposal]';
      letter += `${alternative}\n`;
      letter += language === 'chinese' ? this.sentences[4].chinese : this.sentences[4].english;
      letter += '\n\n';
      
      // Section 5: Final Words
      const finalWords = language === 'chinese' ? '【结语】' : '[Closing]';
      letter += `${finalWords}\n`;
      letter += language === 'chinese' ?
        `${this.sentences[5].chinese}${this.sentences[6].chinese}` :
        `${this.sentences[5].english} ${this.sentences[6].english}`;
      letter += '\n\n';
      
      letter += signature;
    }
    
    return letter;
  },
  
  // Function to get key points
  getKeyPoints: function(language = 'english') {
    if (language === 'chinese') {
      return {
        取消内容: '周日书店之约',
        取消原因: '参加纽约国际数学竞赛',
        竞赛时长: '两周',
        改期建议: '7月24日',
        道歉次数: '3次',
        态度: '真诚、歉疚'
      };
    }
    return {
      cancelledEvent: 'Sunday bookstore visit',
      reason: 'International mathematics competition in New York',
      duration: 'Two weeks',
      proposedDate: 'July 24th',
      apologyCount: '3 times',
      attitude: 'Sincere and apologetic'
    };
  },
  
  // Function to generate summary
  generateSummary: function(language = 'english') {
    if (language === 'chinese') {
      return {
        信件类型: '道歉信',
        主要目的: '取消约会并道歉',
        原定计划: '本周日去书店',
        取消原因: '参加纽约国际数学竞赛（两周）',
        替代方案: '7月24日重新安排',
        道歉表达: ['深表遗憾', '深表歉意', '再次道歉'],
        整体基调: '真诚、礼貌、提供解决方案'
      };
    }
    return {
      letterType: 'Apology Letter',
      mainPurpose: 'Cancel appointment and apologize',
      originalPlan: 'Visit bookstore this Sunday',
      cancellationReason: 'International mathematics competition in New York (2 weeks)',
      alternativeSolution: 'Reschedule for July 24th',
      apologyExpressions: ['Deep regret', 'Sincerely apologize', 'Express apologies again'],
      overallTone: 'Sincere, polite, solution-oriented'
    };
  }
};

// Export for use in Node.js environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = apologyLetter;
}

// Make available in browser environment
if (typeof window !== 'undefined') {
  window.apologyLetter = apologyLetter;
}

// Console log example usage
console.log('道歉信.js loaded successfully!');
console.log('Example usage:');
console.log('- Get full text: apologyLetter.getFullText("english")');
console.log('- Get bilingual text: apologyLetter.getBilingualText()');
console.log('- Get appointment details: apologyLetter.getAppointmentDetails()');
console.log('- Get cancellation reason: apologyLetter.getCancellationReason("chinese")');
console.log('- Generate formatted letter: apologyLetter.generateFormattedLetter("english", "formal")');
console.log('- Get key points: apologyLetter.getKeyPoints()');
console.log('- Generate summary: apologyLetter.generateSummary("chinese")');