// 英语冠词专项练习题库
// 包含115道题目：100道基础练习题 + 15道高考真题

const articleExercises = {
  title: "高中英语冠词专项练习",
  totalQuestions: 115,
  questions: [
    // 基础练习题 1-100
    {
      id: 1,
      question: "I saw ___ elephant at the zoo yesterday.",
      options: ["a", "an", "the", "/"],
      answer: "B",
      translation: "我昨天在动物园看到了一头大象。",
      explanation: "elephant以元音音素/e/开头，使用不定冠词an表示'一头'。"
    },
    {
      id: 2,
      question: "___ sun rises in the east.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "太阳从东方升起。",
      explanation: "sun是世界上独一无二的事物，必须用定冠词the。"
    },
    {
      id: 3,
      question: "My father is ___ engineer.",
      options: ["a", "an", "the", "/"],
      answer: "B",
      translation: "我父亲是一名工程师。",
      explanation: "engineer以元音音素开头，表示职业时用不定冠词an。"
    },
    {
      id: 4,
      question: "I like playing ___ basketball after school.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "我喜欢放学后打篮球。",
      explanation: "球类运动前不加冠词。"
    },
    {
      id: 5,
      question: "She plays ___ piano very well.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "她钢琴弹得很好。",
      explanation: "乐器前必须加定冠词the。"
    },
    {
      id: 6,
      question: "___ United States is a large country.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "美国是一个大国。",
      explanation: "国家名称含有普通名词(States)时，需要加the。"
    },
    {
      id: 7,
      question: "He goes to ___ school by bus every day.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "他每天乘公交车上学。",
      explanation: "go to school是固定短语，表示'上学'这一行为，不加冠词。"
    },
    {
      id: 8,
      question: "There is ___ university near my home.",
      options: ["a", "an", "the", "/"],
      answer: "A",
      translation: "我家附近有一所大学。",
      explanation: "university虽以u开头，但发音是/ju:/，以辅音音素开头，用a。"
    },
    {
      id: 9,
      question: "___ honesty is the best policy.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "诚实是上策。",
      explanation: "抽象名词表示一般概念时不加冠词。"
    },
    {
      id: 10,
      question: "I had ___ lunch at 12 o'clock.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "我12点吃的午饭。",
      explanation: "三餐名词前一般不加冠词。"
    },
    {
      id: 11,
      question: "This is ___ most interesting book I've ever read.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "这是我读过的最有趣的书。",
      explanation: "最高级前要加定冠词the。"
    },
    {
      id: 12,
      question: "___ Chinese people are hardworking.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "中国人很勤劳。",
      explanation: "表示国籍的形容词作主语时不加冠词。"
    },
    {
      id: 13,
      question: "He is ___ tallest boy in our class.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "他是我们班最高的男孩。",
      explanation: "形容词最高级前用定冠词the。"
    },
    {
      id: 14,
      question: "___ hour ago, I met your brother.",
      options: ["a", "an", "the", "/"],
      answer: "B",
      translation: "一小时前，我遇到了你哥哥。",
      explanation: "hour以元音音素/aʊ/开头，用an。"
    },
    {
      id: 15,
      question: "She wants to be ___ doctor when she grows up.",
      options: ["a", "an", "the", "/"],
      answer: "A",
      translation: "她长大后想当医生。",
      explanation: "表示职业的可数名词单数前用不定冠词a。"
    },
    {
      id: 16,
      question: "___ Mount Everest is the highest mountain.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "珠穆朗玛峰是最高的山。",
      explanation: "山峰名称前一般不加冠词。"
    },
    {
      id: 17,
      question: "We had ___ wonderful time at the party.",
      options: ["a", "an", "the", "/"],
      answer: "A",
      translation: "我们在聚会上玩得很开心。",
      explanation: "have a wonderful time是固定搭配。"
    },
    {
      id: 18,
      question: "___ Pacific Ocean is the largest ocean.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "太平洋是最大的海洋。",
      explanation: "海洋名称前用定冠词the。"
    },
    {
      id: 19,
      question: "He is ___ honest man.",
      options: ["a", "an", "the", "/"],
      answer: "B",
      translation: "他是个诚实的人。",
      explanation: "honest以元音音素开头，h不发音，用an。"
    },
    {
      id: 20,
      question: "They arrived at ___ noon.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "他们中午到达。",
      explanation: "at noon是固定短语，不加冠词。"
    },
    {
      id: 21,
      question: "___ knowledge is power.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "知识就是力量。",
      explanation: "抽象名词表示一般概念时不加冠词。"
    },
    {
      id: 22,
      question: "She bought ___ new dress yesterday.",
      options: ["a", "an", "the", "/"],
      answer: "A",
      translation: "她昨天买了一件新衣服。",
      explanation: "第一次提到的可数名词单数用不定冠词a。"
    },
    {
      id: 23,
      question: "___ moon goes around the earth.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "月亮绕着地球转。",
      explanation: "moon是独一无二的天体，用the。"
    },
    {
      id: 24,
      question: "He went to ___ bed early last night.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "他昨晚很早就睡了。",
      explanation: "go to bed是固定短语，表示'睡觉'这一行为。"
    },
    {
      id: 25,
      question: "This is ___ useful book.",
      options: ["a", "an", "the", "/"],
      answer: "A",
      translation: "这是一本有用的书。",
      explanation: "useful虽以u开头，但发音/ju:/是辅音音素，用a。"
    },
    {
      id: 26,
      question: "___ Great Wall is in China.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "长城在中国。",
      explanation: "由普通名词构成的专有名词前用the。"
    },
    {
      id: 27,
      question: "I have ___ headache.",
      options: ["a", "an", "the", "/"],
      answer: "A",
      translation: "我头痛。",
      explanation: "have a headache是固定搭配。"
    },
    {
      id: 28,
      question: "___ English is widely spoken.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "英语被广泛使用。",
      explanation: "语言名称前不加冠词。"
    },
    {
      id: 29,
      question: "She is ___ first student to arrive.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "她是第一个到达的学生。",
      explanation: "序数词前用定冠词the。"
    },
    {
      id: 30,
      question: "We usually have ___ breakfast at 7:00.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "我们通常7点吃早餐。",
      explanation: "三餐名词前一般不加冠词。"
    },
    {
      id: 31,
      question: "___ European country has joined the organization.",
      options: ["a", "an", "the", "/"],
      answer: "A",
      translation: "一个欧洲国家加入了这个组织。",
      explanation: "European虽以元音字母开头，但发音/jʊ/是辅音音素，用a。"
    },
    {
      id: 32,
      question: "He is in ___ hospital because of his illness.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "他因病住院。",
      explanation: "in hospital表示'住院'，强调目的。"
    },
    {
      id: 33,
      question: "___ Smiths are having dinner.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "史密斯一家正在吃晚饭。",
      explanation: "the+姓氏复数表示'一家人'。"
    },
    {
      id: 34,
      question: "What ___ wonderful weather!",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "多好的天气啊！",
      explanation: "weather是不可数名词，感叹句中不加冠词。"
    },
    {
      id: 35,
      question: "She is learning to play ___ violin.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "她在学拉小提琴。",
      explanation: "乐器前加定冠词the。"
    },
    {
      id: 36,
      question: "___ umbrella is useful on rainy days.",
      options: ["a", "an", "the", "/"],
      answer: "B",
      translation: "雨天雨伞很有用。",
      explanation: "umbrella以元音音素开头，用an。"
    },
    {
      id: 37,
      question: "They go to ___ church every Sunday.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "他们每周日去教堂。",
      explanation: "go to church表示'做礼拜'，强调目的。"
    },
    {
      id: 38,
      question: "___ Spring Festival is important in China.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "春节在中国很重要。",
      explanation: "节日名称前用the。"
    },
    {
      id: 39,
      question: "He has ___ X-ray examination.",
      options: ["a", "an", "the", "/"],
      answer: "B",
      translation: "他做了X光检查。",
      explanation: "X-ray的X发音/eks/，以元音音素开头，用an。"
    },
    {
      id: 40,
      question: "___ love is beautiful.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "爱是美好的。",
      explanation: "抽象名词表示一般概念不加冠词。"
    },
    {
      id: 41,
      question: "There is ___ 'm' in the word 'mother'.",
      options: ["a", "an", "the", "/"],
      answer: "B",
      translation: "'mother'这个词里有一个字母'm'。",
      explanation: "字母m的发音/em/以元音音素开头，用an。"
    },
    {
      id: 42,
      question: "___ Yellow River is in China.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "黄河在中国。",
      explanation: "河流名称前用the。"
    },
    {
      id: 43,
      question: "She went to ___ USA last year.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "她去年去了美国。",
      explanation: "USA前需要加the。"
    },
    {
      id: 44,
      question: "___ history of China is very long.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "中国的历史很悠久。",
      explanation: "特指中国的历史，用the。"
    },
    {
      id: 45,
      question: "He is ___ one-eyed man.",
      options: ["a", "an", "the", "/"],
      answer: "A",
      translation: "他是个独眼人。",
      explanation: "one虽以元音字母开头，但发音/wʌn/是辅音音素，用a。"
    },
    {
      id: 46,
      question: "We study ___ physics at school.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "我们在学校学物理。",
      explanation: "学科名称前不加冠词。"
    },
    {
      id: 47,
      question: "___ rich should help the poor.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "富人应该帮助穷人。",
      explanation: "the+形容词表示一类人。"
    },
    {
      id: 48,
      question: "This is ___ second time I've been here.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "这是我第二次来这里。",
      explanation: "序数词前用the。"
    },
    {
      id: 49,
      question: "___ life is full of surprises.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "生活充满惊喜。",
      explanation: "life表示抽象概念时不加冠词。"
    },
    {
      id: 50,
      question: "He wants to join ___ army.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "他想参军。",
      explanation: "join the army是固定搭配。"
    },
    {
      id: 51,
      question: "___ UNESCO is an international organization.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "联合国教科文组织是一个国际组织。",
      explanation: "缩略词组织名称前不加冠词。"
    },
    {
      id: 52,
      question: "She has ___ uncle in America.",
      options: ["a", "an", "the", "/"],
      answer: "B",
      translation: "她在美国有个叔叔。",
      explanation: "uncle以元音音素开头，用an。"
    },
    {
      id: 53,
      question: "___ more you practice, the better you become.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "你练习得越多，就变得越好。",
      explanation: "the+比较级...the+比较级是固定结构。"
    },
    {
      id: 54,
      question: "He is playing ___ chess with his father.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "他在和父亲下棋。",
      explanation: "棋类游戏前不加冠词。"
    },
    {
      id: 55,
      question: "___ Mount Fuji is in Japan.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "富士山在日本。",
      explanation: "山峰名称前不加冠词。"
    },
    {
      id: 56,
      question: "There was ___ heavy rain yesterday.",
      options: ["a", "an", "the", "/"],
      answer: "A",
      translation: "昨天下了一场大雨。",
      explanation: "a heavy rain表示'一场大雨'。"
    },
    {
      id: 57,
      question: "___ Christmas is on December 25th.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "圣诞节在12月25日。",
      explanation: "西方节日Christmas前通常不加冠词。"
    },
    {
      id: 58,
      question: "She is ___ only child in her family.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "她是家里的独生女。",
      explanation: "only表示'唯一的'时前面用the。"
    },
    {
      id: 59,
      question: "We had ___ dinner at a restaurant.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "我们在餐厅吃了晚饭。",
      explanation: "三餐名词前不加冠词。"
    },
    {
      id: 60,
      question: "___ young man over there is my brother.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "那边的年轻人是我哥哥。",
      explanation: "特指那边的年轻人，用the。"
    },
    {
      id: 61,
      question: "He works as ___ teacher.",
      options: ["a", "an", "the", "/"],
      answer: "A",
      translation: "他当老师。",
      explanation: "work as a teacher表示职业。"
    },
    {
      id: 62,
      question: "___ Thames flows through London.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "泰晤士河流经伦敦。",
      explanation: "河流名称前用the。"
    },
    {
      id: 63,
      question: "This is ___ MP3 player.",
      options: ["a", "an", "the", "/"],
      answer: "B",
      translation: "这是一个MP3播放器。",
      explanation: "MP3的M发音/em/，以元音音素开头，用an。"
    },
    {
      id: 64,
      question: "___ patience is important.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "耐心很重要。",
      explanation: "抽象名词不加冠词。"
    },
    {
      id: 65,
      question: "She can speak ___ French fluently.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "她能流利地说法语。",
      explanation: "语言名称前不加冠词。"
    },
    {
      id: 66,
      question: "___ Alps are in Europe.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "阿尔卑斯山在欧洲。",
      explanation: "山脉名称前用the。"
    },
    {
      id: 67,
      question: "He made ___ mistake in the exam.",
      options: ["a", "an", "the", "/"],
      answer: "A",
      translation: "他在考试中犯了个错误。",
      explanation: "make a mistake是固定搭配。"
    },
    {
      id: 68,
      question: "___ information is very useful.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "这个信息很有用。",
      explanation: "特指某个信息，用the。"
    },
    {
      id: 69,
      question: "We go to school by ___ bus.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "我们乘公交车上学。",
      explanation: "by bus是固定搭配，不加冠词。"
    },
    {
      id: 70,
      question: "___ BBC is a famous broadcasting company.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "BBC是著名的广播公司。",
      explanation: "缩略词组织前通常加the。"
    },
    {
      id: 71,
      question: "He has ___ cold.",
      options: ["a", "an", "the", "/"],
      answer: "A",
      translation: "他感冒了。",
      explanation: "have a cold是固定搭配。"
    },
    {
      id: 72,
      question: "___ honesty of the boy impressed us.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "这个男孩的诚实给我们留下了深刻印象。",
      explanation: "特指这个男孩的诚实，用the。"
    },
    {
      id: 73,
      question: "She wants to travel around ___ world.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "她想环游世界。",
      explanation: "world表示'世界'时用the。"
    },
    {
      id: 74,
      question: "___ iron is a useful metal.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "铁是一种有用的金属。",
      explanation: "物质名词表示泛指时不加冠词。"
    },
    {
      id: 75,
      question: "He became ___ engineer after graduation.",
      options: ["a", "an", "the", "/"],
      answer: "B",
      translation: "他毕业后成了工程师。",
      explanation: "engineer以元音音素开头，用an。"
    },
    {
      id: 76,
      question: "___ disabled need our help.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "残疾人需要我们的帮助。",
      explanation: "the+形容词表示一类人。"
    },
    {
      id: 77,
      question: "This is ___ 8-year-old boy.",
      options: ["a", "an", "the", "/"],
      answer: "B",
      translation: "这是一个8岁的男孩。",
      explanation: "8(eight)的发音以元音音素开头，用an。"
    },
    {
      id: 78,
      question: "___ milk is good for children.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "牛奶对孩子有好处。",
      explanation: "物质名词泛指时不加冠词。"
    },
    {
      id: 79,
      question: "He went to ___ prison to visit his friend.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "他去监狱看望朋友。",
      explanation: "go to the prison表示去监狱这个地方，不是服刑。"
    },
    {
      id: 80,
      question: "___ Nile is the longest river.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "尼罗河是最长的河流。",
      explanation: "河流名称前用the。"
    },
    {
      id: 81,
      question: "She has ___ good knowledge of English.",
      options: ["a", "an", "the", "/"],
      answer: "A",
      translation: "她英语知识掌握得很好。",
      explanation: "have a good knowledge of是固定搭配。"
    },
    {
      id: 82,
      question: "___ Germany is in Europe.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "德国在欧洲。",
      explanation: "单独的国家名称不加冠词。"
    },
    {
      id: 83,
      question: "He is ___ honest boy.",
      options: ["a", "an", "the", "/"],
      answer: "B",
      translation: "他是个诚实的男孩。",
      explanation: "honest的h不发音，以元音音素开头，用an。"
    },
    {
      id: 84,
      question: "We watched ___ TV last night.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "我们昨晚看电视了。",
      explanation: "watch TV是固定搭配，不加冠词。"
    },
    {
      id: 85,
      question: "___ earth moves around the sun.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "地球绕着太阳转。",
      explanation: "earth表示地球时用the。"
    },
    {
      id: 86,
      question: "She is in ___ seventh grade.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "她在七年级。",
      explanation: "序数词前用the。"
    },
    {
      id: 87,
      question: "___ water in this bottle is clean.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "这个瓶子里的水很干净。",
      explanation: "特指瓶子里的水，用the。"
    },
    {
      id: 88,
      question: "He has been to ___ Japan twice.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "他去过日本两次。",
      explanation: "国家名称前不加冠词。"
    },
    {
      id: 89,
      question: "___ UFO appeared in the sky.",
      options: ["a", "an", "the", "/"],
      answer: "A",
      translation: "天空中出现了一个不明飞行物。",
      explanation: "UFO的U发音/ju:/，以辅音音素开头，用a。"
    },
    {
      id: 90,
      question: "They are having ___ meeting now.",
      options: ["a", "an", "the", "/"],
      answer: "A",
      translation: "他们现在在开会。",
      explanation: "have a meeting是固定搭配。"
    },
    {
      id: 91,
      question: "___ Mississippi River is very long.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "密西西比河很长。",
      explanation: "河流名称前用the。"
    },
    {
      id: 92,
      question: "She bought ___ uniform yesterday.",
      options: ["a", "an", "the", "/"],
      answer: "A",
      translation: "她昨天买了一套制服。",
      explanation: "uniform的u发音/ju:/，以辅音音素开头，用a。"
    },
    {
      id: 93,
      question: "___ harder you work, the more you learn.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "你越努力，学到的越多。",
      explanation: "the+比较级...the+比较级结构。"
    },
    {
      id: 94,
      question: "He plays ___ guitar in a band.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "他在乐队里弹吉他。",
      explanation: "乐器前加the。"
    },
    {
      id: 95,
      question: "___ health is more important than wealth.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "健康比财富更重要。",
      explanation: "health表示抽象概念不加冠词。"
    },
    {
      id: 96,
      question: "This is ___ best movie I've seen.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "这是我看过的最好的电影。",
      explanation: "最高级前用the。"
    },
    {
      id: 97,
      question: "___ Sahara Desert is in Africa.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "撒哈拉沙漠在非洲。",
      explanation: "沙漠名称前用the。"
    },
    {
      id: 98,
      question: "He is ___ university student.",
      options: ["a", "an", "the", "/"],
      answer: "A",
      translation: "他是一名大学生。",
      explanation: "university的u发音/ju:/，用a。"
    },
    {
      id: 99,
      question: "___ breakfast is ready.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "早餐准备好了。",
      explanation: "三餐名词前不加冠词。"
    },
    {
      id: 100,
      question: "She plays ___ tennis every weekend.",
      options: ["a", "an", "the", "/"],
      answer: "D",
      translation: "她每周末打网球。",
      explanation: "球类运动前不加冠词。"
    },
    
    // 高考真题 101-115
    {
      id: 101,
      question: "(2023·全国II卷) Not the pandas, even though ___ language used for the medical training instructions is actually English.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "不是熊猫，即使医疗培训说明书上使用的语言实际上是英语。",
      explanation: "这里特指在医疗培训说明书上使用的语言，故用the。",
      source: "2023年全国II卷"
    },
    {
      id: 102,
      question: "(2022·全国II卷) ___ Brown family live in an apartment building outside Toronto.",
      options: ["a", "an", "The", "/"],
      answer: "C",
      translation: "布朗一家住在多伦多郊外的一栋公寓楼里。",
      explanation: "the+姓氏表示特指某一家人，句首首字母大写。",
      source: "2022年全国II卷"
    },
    {
      id: 103,
      question: "(2022·新高考全国I卷) Covering an area about three times ___ size of Yellowstone National Park, the GPNP will be one of the first national parks in the country.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "该公园占地面积约为黄石国家公园的三倍，将成为中国首批国家公园之一。",
      explanation: "倍数表达法：倍数+ the size of +比较成份，因此填the。",
      source: "2022年新高考全国I卷"
    },
    {
      id: 104,
      question: "(2022·新高考全国甲卷) ___ friend of his, Wu Fan, volunteered to be his companion during the trip.",
      options: ["A", "An", "The", "/"],
      answer: "A",
      translation: "他的一个朋友吴凡，自愿在旅途中陪伴他。",
      explanation: "a friend of his表示'他的一个朋友'，friend以辅音音素开头，句首首字母大写。",
      source: "2022年新高考全国甲卷"
    },
    {
      id: 105,
      question: "(2022·新高考全国乙卷) To celebrate ___ festival, a number of events took place at the Chinese Businessman Museum in Beijing on Thursday.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "为了庆祝这个节日，周四在北京的中国商人博物馆举办了一系列活动。",
      explanation: "特指上文提到的首届'国际茶日'，故用定冠词the。",
      source: "2022年新高考全国乙卷"
    },
    {
      id: 106,
      question: "(2021·新高考全国I卷) While you're in China, Mount Huangshan is ___ must to visit!",
      options: ["a", "an", "the", "/"],
      answer: "A",
      translation: "当你在中国的时候，黄山是一个你一定要去的地方。",
      explanation: "must作名词时意为'绝对必要的事物'，泛指'一个必须去的地方'，must以辅音音素开头，用a。",
      source: "2021年新高考全国I卷"
    },
    {
      id: 107,
      question: "(2021·新高考全国II卷) A company representative wrote back and told me the airline was switching over ___ plastic to paper cups on all of its 1,200 daily flights.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "一位公司代表回信告诉我，该航空公司正在将其1200个每日航班的塑料杯换成纸杯。",
      explanation: "特指'1200个航班的塑料杯'，所以用定冠词the。",
      source: "2021年新高考全国II卷"
    },
    {
      id: 108,
      question: "(2021·新高考全国甲卷) It took us about 3 hours to go all ___ way around the Xi'an City Wall.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "沿着西安古城墙走一圈花费了我们大约三个小时的时间。",
      explanation: "all the way是固定短语，意为'一路、自始至终'。",
      source: "2021年新高考全国甲卷"
    },
    {
      id: 109,
      question: "(2021·新高考全国乙卷) Due to ___ growing popularity of environmentally-related and adventure travel...",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "由于与环保相关的冒险旅游日益流行...",
      explanation: "growing popularity是特指的概念，the growing popularity是固定搭配，常见于正式表达中。",
      source: "2021年新高考全国乙卷"
    },
    {
      id: 110,
      question: "(2020·新高考全国II卷) Each volume in the set explores ___ wide range of material, explains the basic concepts of major applications of digital systems.",
      options: ["a", "an", "the", "/"],
      answer: "A",
      translation: "该套书中的每一卷都探索了广泛的材料，解释了数字系统主要应用的基本概念。",
      explanation: "a wide range of...是固定搭配，意为'广泛的……'。",
      source: "2020年新高考全国II卷"
    },
    {
      id: 111,
      question: "(2019·全国I卷) Of ___ nineteen recognized polar bear subpopulations, three are declining, six are stable, one is increasing, and nine lack enough data.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "在已知的19个北极熊亚种群中，3个在减少，6个保持稳定，1个在增加，9个缺乏足够的数据。",
      explanation: "特指'已知的19个北极熊亚种群'，故填the。",
      source: "2019年高考全国I卷"
    },
    {
      id: 112,
      question: "(2019·全国II卷) When we got a call saying she was short-listed, we thought it was ___ joke.",
      options: ["a", "an", "the", "/"],
      answer: "A",
      translation: "当我们接到电话说她入围了，我们还以为这是一个玩笑。",
      explanation: "joke为泛指，表示'一个玩笑'，故填a。",
      source: "2019年高考全国II卷"
    },
    {
      id: 113,
      question: "(2018·全国II卷) Corn production has jumped nearly 125 percent over ___ past 25 years, while rice has increased only 7 percent.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "玉米产量在过去25年里增长了近125%，而大米只增长了7%。",
      explanation: "特指'过去的25年'，the past...是固定用法。",
      source: "2018年高考全国II卷"
    },
    {
      id: 114,
      question: "(2017·全国II卷) This included digging up the road, laying the track and then building a strong roof over ___ top.",
      options: ["a", "an", "the", "/"],
      answer: "C",
      translation: "这包括挖掘道路，铺设轨道，然后在顶部建造坚固的屋顶。",
      explanation: "特指'地铁的顶部'，故用定冠词the。",
      source: "2017年高考全国II卷"
    },
    {
      id: 115,
      question: "(2017·全国III卷) Instead, she is earning £6,500 a day as ___ model in New York.",
      options: ["a", "an", "the", "/"],
      answer: "A",
      translation: "相反，她在纽约作为一名模特每天收入6500英镑。",
      explanation: "用不定冠词a表泛指，表示'作为一名模特'。",
      source: "2017年高考全国III卷"
    }
  ],
  
  // 辅助功能
  getQuestionById(id) {
    return this.questions.find(q => q.id === id);
  },
  
  getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * this.questions.length);
    return this.questions[randomIndex];
  },
  
  getQuestionsByRange(start, end) {
    return this.questions.slice(start - 1, end);
  },
  
  checkAnswer(questionId, userAnswer) {
    const question = this.getQuestionById(questionId);
    if (!question) return null;
    return userAnswer.toUpperCase() === question.answer;
  },
  
  getStatistics() {
    const total = this.questions.length;
    const basicQuestions = this.questions.filter(q => q.id <= 100).length;
    const examQuestions = this.questions.filter(q => q.id > 100).length;
    
    return {
      total,
      basicQuestions,
      examQuestions,
      categories: {
        indefiniteA: this.questions.filter(q => q.answer === 'A').length,
        indefiniteAn: this.questions.filter(q => q.answer === 'B').length,
        definiteThe: this.questions.filter(q => q.answer === 'C').length,
        zeroArticle: this.questions.filter(q => q.answer === 'D').length
      }
    };
  }
};

// 导出模块（Node.js环境）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = articleExercises;
}

// 浏览器环境
if (typeof window !== 'undefined') {
  window.articleExercises = articleExercises;
}

// 使用示例
console.log('英语冠词练习题库已加载');
console.log('总题目数：', articleExercises.totalQuestions);
console.log('统计信息：', articleExercises.getStatistics());