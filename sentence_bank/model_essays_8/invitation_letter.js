// 邀请信.js
// International Middle School Photography Exhibition Invitation Letter

const invitationContent = {
  title: {
    english: "A brilliant international middle school photography exhibition held by our school",
    chinese: "我校举办的精彩国际中学生摄影展"
  },
  
  sentences: [
    {
      english: "Our school photography club is scheduled to take place next month, from July 7th to 26th.",
      chinese: "我校摄影社将于下月，7月7日至26日，举办一场精彩的国际中学生摄影展。"
    },
    {
      english: "I'm writing to sincerely invite you to provide your remarkable photos.",
      chinese: "我写信真诚地邀请你提供杰出的照片。"
    },
    {
      english: "Based on the theme of environmental protection, the exhibition will be focusing on global climate change, environmental pollution and natural resources conservation.",
      chinese: "本届展会将以环境保护为主题，重点关注全球气候变化、环境污染和自然资源保护。"
    },
    {
      english: "What impress my classmates and me are those extraordinary photos you've taken and posted on your Facebook, as well as your unique perspective on the environment.",
      chinese: "让我和我的同学印象深刻的是你拍摄的发布在Facebook上的那些非凡的照片，以及你对环境的独特看法。"
    },
    {
      english: "Undoubtedly, not only will visitors be inspired by your works, but you can also make excellent friends with common interest.",
      chinese: "毫无疑问，游客不仅会受到你作品的启发，而且你也可以结交志同道合的好朋友。"
    },
    {
      english: "All photos to be on display should be sent to intlphotoshow@gmschool.com.",
      chinese: "所有参展照片请发送至intlphotoshow@gmschool.com。"
    },
    {
      english: "I'm looking forward to seeing your works in the exhibition.",
      chinese: "我期待着在展览中看到你的作品。"
    }
  ],
  
  // Additional metadata
  metadata: {
    eventName: "International Middle School Photography Exhibition",
    eventNameChinese: "国际中学生摄影展",
    organizer: "School Photography Club",
    organizerChinese: "学校摄影社",
    dates: {
      start: "July 7th",
      end: "July 26th",
      startChinese: "7月7日",
      endChinese: "7月26日"
    },
    theme: {
      english: "Environmental Protection",
      chinese: "环境保护"
    },
    focusAreas: {
      english: ["global climate change", "environmental pollution", "natural resources conservation"],
      chinese: ["全球气候变化", "环境污染", "自然资源保护"]
    },
    submissionEmail: "intlphotoshow@gmschool.com"
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
  
  // Function to get all important information
  getKeyInfo: function() {
    return {
      event: this.metadata.eventName,
      dates: `${this.metadata.dates.start} - ${this.metadata.dates.end}`,
      theme: this.metadata.theme.english,
      focusAreas: this.metadata.focusAreas.english.join(', '),
      submissionEmail: this.metadata.submissionEmail
    };
  }
};

// Export for use in Node.js environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = invitationContent;
}

// Make available in browser environment
if (typeof window !== 'undefined') {
  window.invitationContent = invitationContent;
}

// Console log example usage
console.log('邀请信.js loaded successfully!');
console.log('Example usage:');
console.log('- Get full English text: invitationContent.getFullText("english")');
console.log('- Get full Chinese text: invitationContent.getFullText("chinese")');
console.log('- Get bilingual text: invitationContent.getBilingualText()');
console.log('- Search sentences: invitationContent.searchSentences("photo")');
console.log('- Get key information: invitationContent.getKeyInfo()');