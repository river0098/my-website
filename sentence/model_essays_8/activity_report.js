// 活动报道.js
// Cross-Country Running Race Activity Report

const activityReport = {
  title: {
    english: "Cross-Country Running Race Report",
    chinese: "越野赛跑活动报道"
  },
  
  sentences: [
    {
      english: "Last Sunday, a remarkable cross-country running race took place as scheduled, totally attracting 656 sports-loving participants including 65 teachers as well as the headmaster and 590 students.",
      chinese: "上周日，一场精彩的越野赛跑如期举行，共吸引了656名热爱运动的参与者，其中包括65名老师和校长以及590名学生。"
    },
    {
      english: "The brilliant and exciting race, which covers five kilometers, started at the school gate and ended at the foot of Nanshan Mountain.",
      chinese: "这场精彩刺激的比赛，全长五公里，从学校门口开始，终点到南山脚下。"
    },
    {
      english: "Additionally, an ambulance with three medical professionals followed to ensure safety.",
      chinese: "另外，一辆配备三名专业医护人员的救护车紧随其后，以确保安全。"
    },
    {
      english: "It is worth mentioning that not only did all the participants successfully finish the whole race, but they have been inspired and made impressive comments on Weibo.",
      chinese: "值得一提的是，不仅所有参赛者都成功地完成了整个比赛，而且他们都受到了启发，并在微博上发表了令人印象深刻的评论。"
    }
  ],
  
  // Event details and statistics
  eventDetails: {
    eventName: {
      english: "Cross-Country Running Race",
      chinese: "越野赛跑"
    },
    date: {
      english: "Last Sunday",
      chinese: "上周日"
    },
    distance: {
      value: 5,
      unit: "kilometers",
      chinese: "五公里"
    },
    route: {
      start: {
        english: "school gate",
        chinese: "学校门口"
      },
      end: {
        english: "foot of Nanshan Mountain",
        chinese: "南山脚下"
      }
    },
    participants: {
      total: 656,
      breakdown: {
        students: 590,
        teachers: 65,
        headmaster: 1
      },
      chinese: {
        total: "656名",
        students: "590名学生",
        teachers: "65名老师",
        headmaster: "校长"
      }
    },
    safety: {
      ambulance: 1,
      medicalProfessionals: 3,
      chinese: {
        ambulance: "一辆救护车",
        medicalProfessionals: "三名专业医护人员"
      }
    },
    outcome: {
      completionRate: "100%",
      socialMediaPlatform: "Weibo",
      chinese: {
        completionRate: "所有参赛者都成功完成",
        socialMediaPlatform: "微博"
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
  
  // Function to get event statistics
  getStatistics: function() {
    const stats = this.eventDetails.participants;
    return {
      totalParticipants: stats.total,
      studentCount: stats.breakdown.students,
      teacherCount: stats.breakdown.teachers,
      headmasterIncluded: true,
      completionRate: this.eventDetails.outcome.completionRate,
      distance: `${this.eventDetails.distance.value} ${this.eventDetails.distance.unit}`,
      safetyPersonnel: this.eventDetails.safety.medicalProfessionals
    };
  },
  
  // Function to get event summary
  getEventSummary: function(language = 'english') {
    if (language === 'chinese') {
      return {
        活动: this.eventDetails.eventName.chinese,
        时间: this.eventDetails.date.chinese,
        距离: this.eventDetails.distance.chinese,
        参与人数: this.eventDetails.participants.chinese.total,
        起点: this.eventDetails.route.start.chinese,
        终点: this.eventDetails.route.end.chinese,
        完成情况: this.eventDetails.outcome.chinese.completionRate
      };
    }
    return {
      event: this.eventDetails.eventName.english,
      date: this.eventDetails.date.english,
      distance: `${this.eventDetails.distance.value} ${this.eventDetails.distance.unit}`,
      participants: this.eventDetails.participants.total,
      startPoint: this.eventDetails.route.start.english,
      endPoint: this.eventDetails.route.end.english,
      completion: this.eventDetails.outcome.completionRate
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
  
  // Function to generate formatted report
  generateReport: function(language = 'english') {
    const title = language === 'chinese' ? '越野赛跑活动报道' : 'Cross-Country Running Race Report';
    const separator = '='.repeat(50);
    let report = `${title}\n${separator}\n\n`;
    
    if (language === 'chinese') {
      report += `活动日期：${this.eventDetails.date.chinese}\n`;
      report += `活动名称：${this.eventDetails.eventName.chinese}\n`;
      report += `比赛距离：${this.eventDetails.distance.chinese}\n`;
      report += `参与人数：${this.eventDetails.participants.chinese.total}\n`;
      report += `  - 学生：${this.eventDetails.participants.chinese.students}\n`;
      report += `  - 教师：${this.eventDetails.participants.chinese.teachers}\n`;
      report += `  - 校长：${this.eventDetails.participants.chinese.headmaster}\n`;
      report += `\n活动详情：\n`;
      this.sentences.forEach(s => {
        report += `• ${s.chinese}\n`;
      });
    } else {
      report += `Event Date: ${this.eventDetails.date.english}\n`;
      report += `Event Name: ${this.eventDetails.eventName.english}\n`;
      report += `Distance: ${this.eventDetails.distance.value} ${this.eventDetails.distance.unit}\n`;
      report += `Participants: ${this.eventDetails.participants.total}\n`;
      report += `  - Students: ${this.eventDetails.participants.breakdown.students}\n`;
      report += `  - Teachers: ${this.eventDetails.participants.breakdown.teachers}\n`;
      report += `  - Headmaster: ${this.eventDetails.participants.breakdown.headmaster}\n`;
      report += `\nEvent Details:\n`;
      this.sentences.forEach(s => {
        report += `• ${s.english}\n`;
      });
    }
    
    return report;
  }
};

// Export for use in Node.js environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = activityReport;
}

// Make available in browser environment
if (typeof window !== 'undefined') {
  window.activityReport = activityReport;
}

// Console log example usage
console.log('活动报道.js loaded successfully!');
console.log('Example usage:');
console.log('- Get full English text: activityReport.getFullText("english")');
console.log('- Get full Chinese text: activityReport.getFullText("chinese")');
console.log('- Get bilingual text: activityReport.getBilingualText()');
console.log('- Get statistics: activityReport.getStatistics()');
console.log('- Get event summary: activityReport.getEventSummary()');
console.log('- Generate formatted report: activityReport.generateReport("chinese")');