// 高中生连词100道选择题（含翻译与解析）
const conjunctions = [
  {
    id: 1,
    question: "Lily likes reading, ___ she often goes to the library on weekends.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "莉莉喜欢读书，所以她经常在周末去图书馆。",
    answer: "D",
    explanation: "前句 \"喜欢读书\" 是后句 \"去图书馆\" 的原因，两句为因果关系，so 表 \"因此、所以\"；and 表并列（无因果），but 表转折（无对立），or 表选择（无选择关系），排除 A、B、C。"
  },
  {
    id: 2,
    question: "We will go for a picnic tomorrow ___ it doesn't rain.",
    options: ["A. if", "B. though", "C. because", "D. so"],
    translation: "如果明天不下雨，我们就去野餐。",
    answer: "A",
    explanation: "后句 \"不下雨\" 是前句 \"去野餐\" 的前提条件，if 表 \"如果\"（引导条件状语从句）；though 表让步（\"尽管\"，无让步逻辑），because 表原因（后句非原因），so 表结果（后句非结果），排除 B、C、D。"
  },
  {
    id: 3,
    question: "My brother is good at math, ___ he is not good at English.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "我哥哥擅长数学，但他不擅长英语。",
    answer: "B",
    explanation: "前句 \"擅长数学\" 与后句 \"不擅长英语\" 是转折关系，but 表 \"但是\"；and 表并列（无并列），or 表选择（无选择），so 表因果（无因果），排除 A、C、D。"
  },
  {
    id: 4,
    question: "You can take the bus to school, ___ you can walk there.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "你可以坐公交车去学校，或者步行去那里。",
    answer: "C",
    explanation: "\"坐公交\" 和 \"步行\" 是两种选择，or 表 \"或者\"（引导选择关系）；and 表并列（无并列），but 表转折（无对立），so 表因果（无因果），排除 A、B、D。"
  },
  {
    id: 5,
    question: "I didn't go to the party last night ___ I was too tired.",
    options: ["A. if", "B. because", "C. though", "D. so"],
    translation: "我昨晚没去派对，因为我太累了。",
    answer: "B",
    explanation: "后句 \"太累\" 是前句 \"没去派对\" 的原因，because 表 \"因为\"（引导原因状语从句）；if 表条件（非条件），though 表让步（非让步），so 表结果（后句非结果），排除 A、C、D。"
  },
  {
    id: 6,
    question: "He was watching TV ___ his mother came back home.",
    options: ["A. when", "B. while", "C. until", "D. since"],
    translation: "当他妈妈回家时，他正在看电视。",
    answer: "A",
    explanation: "when 引导时间状语从句，可接 \"短暂性动作\"（came back 是瞬间动作）；while 接 \"持续性动作\"（需与进行时搭配，此处后句非进行时），until 表 \"直到\"（无 \"直到\" 逻辑），since 表 \"自从\"（非 \"自从\" 含义），排除 B、C、D。"
  },
  {
    id: 7,
    question: "___ it is raining heavily, we still need to go to school.",
    options: ["A. Because", "B. Though", "C. If", "D. So"],
    translation: "尽管雨下得很大，我们还是要去上学。",
    answer: "B",
    explanation: "\"雨大\" 与 \"去上学\" 是让步关系，though 表 \"尽管\"（引导让步状语从句）；because 表原因（非原因），if 表条件（非条件），so 表结果（非结果），排除 A、C、D。"
  },
  {
    id: 8,
    question: "She not only sings well, ___ dances beautifully too.",
    options: ["A. but", "B. and", "C. or", "D. so"],
    translation: "她不仅唱歌好，而且跳舞也很美。",
    answer: "A",
    explanation: "\"not only...but (also)...\" 是固定搭配，表 \"不仅……而且……\"，but 不可替换为其他连词；and/or/so 均不与 not only 搭配，排除 B、C、D。"
  },
  {
    id: 9,
    question: "We will finish the work on time ___ we work hard together.",
    options: ["A. if", "B. though", "C. because", "D. so"],
    translation: "如果我们一起努力，就能按时完成工作。",
    answer: "A",
    explanation: "\"一起努力\" 是 \"按时完成工作\" 的条件，if 表 \"如果\"；though 表让步（非让步），because 表原因（后句非原因），so 表结果（后句非结果），排除 B、C、D。"
  },
  {
    id: 10,
    question: "Tom is very busy, ___ he still helps his classmates with their homework.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "汤姆很忙，但他仍然帮同学做作业。",
    answer: "B",
    explanation: "\"忙\" 与 \"帮同学\" 是转折关系，but 表 \"但是\"；and 表并列（无并列），or 表选择（无选择），so 表因果（无因果），排除 A、C、D。"
  },
  {
    id: 11,
    question: "You must hurry up, ___ you will miss the early bus.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "你必须快点，否则会错过早班车。",
    answer: "C",
    explanation: "\"快点\" 与 \"错过班车\" 是选择关系（不快点就会错过），or 表 \"否则\"；and 表并列（无并列），but 表转折（无对立），so 表因果（无因果），排除 A、B、D。"
  },
  {
    id: 12,
    question: "I like playing basketball, ___ my best friend likes playing football.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "我喜欢打篮球，而我最好的朋友喜欢踢足球。",
    answer: "A",
    explanation: "两句描述 \"我\" 和 \"朋友\" 的不同爱好，是并列对比关系，and 表 \"而、并且\"（可连接对比的并列句）；but 表转折（无对立，仅不同），or 表选择（无选择），so 表因果（无因果），排除 B、C、D。"
  },
  {
    id: 13,
    question: "He didn't pass the exam ___ he didn't study hard.",
    options: ["A. if", "B. because", "C. though", "D. so"],
    translation: "他没通过考试，因为他没努力学习。",
    answer: "B",
    explanation: "\"没努力\" 是 \"没通过考试\" 的原因，because 表 \"因为\"；if 表条件（非条件），though 表让步（非让步），so 表结果（后句非结果），排除 A、C、D。"
  },
  {
    id: 14,
    question: "___ you don't understand the question, you can ask the teacher for help.",
    options: ["A. If", "B. Though", "C. Because", "D. So"],
    translation: "如果你不懂这个问题，可以向老师求助。",
    answer: "A",
    explanation: "\"不懂问题\" 是 \"问老师\" 的条件，if 表 \"如果\"；though 表让步（非让步），because 表原因（非原因），so 表结果（非结果），排除 B、C、D。"
  },
  {
    id: 15,
    question: "They were talking happily ___ the teacher came into the classroom.",
    options: ["A. when", "B. while", "C. until", "D. since"],
    translation: "当老师走进教室时，他们正开心地聊天。",
    answer: "A",
    explanation: "when 接 \"短暂性动作\"（came into 是瞬间动作），符合 \"主句进行时 + when + 从句一般时\" 结构；while 接 \"持续性动作\"（后句非持续），until 表 \"直到\"（非 \"直到\" 逻辑），since 表 \"自从\"（非 \"自从\" 含义），排除 B、C、D。"
  },
  {
    id: 16,
    question: "She likes not only reading ___ writing stories.",
    options: ["A. but also", "B. and", "C. or", "D. so"],
    translation: "她不仅喜欢读书，还喜欢写故事。",
    answer: "A",
    explanation: "\"not only...but also...\" 是固定搭配，表 \"不仅……还……\"，不可拆分或替换；and/or/so 均不与 not only 搭配，排除 B、C、D。"
  },
  {
    id: 17,
    question: "___ it is cold outside, she wears a thin coat.",
    options: ["A. Because", "B. Though", "C. If", "D. So"],
    translation: "尽管外面很冷，她还是穿了件薄外套。",
    answer: "B",
    explanation: "\"冷\" 与 \"穿薄外套\" 是让步关系，though 表 \"尽管\"；because 表原因（非原因），if 表条件（非条件），so 表结果（非结果），排除 A、C、D。"
  },
  {
    id: 18,
    question: "We will go to the zoo ___ the weather is fine tomorrow.",
    options: ["A. if", "B. though", "C. because", "D. so"],
    translation: "如果明天天气好，我们就去动物园。",
    answer: "A",
    explanation: "\"天气好\" 是 \"去动物园\" 的条件，if 表 \"如果\"；though 表让步（非让步），because 表原因（后句非原因），so 表结果（后句非结果），排除 B、C、D。"
  },
  {
    id: 19,
    question: "He is good at playing the piano, ___ he often gives concerts.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "他擅长弹钢琴，所以经常举办音乐会。",
    answer: "D",
    explanation: "\"擅长钢琴\" 是 \"举办音乐会\" 的原因，so 表 \"所以\"；and 表并列（无因果），but 表转折（无对立），or 表选择（无选择），排除 A、B、C。"
  },
  {
    id: 20,
    question: "You can choose to stay at home, ___ you can go out with me.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "你可以选择待在家里，或者和我出去。",
    answer: "C",
    explanation: "\"待在家\" 和 \"出去\" 是两种选择，or 表 \"或者\"；and 表并列（无并列），but 表转折（无对立），so 表因果（无因果），排除 A、B、D。"
  },
  {
    id: 21,
    question: "I didn't see the movie ___ I had no time last night.",
    options: ["A. if", "B. because", "C. though", "D. so"],
    translation: "我昨晚没看那部电影，因为我没时间。",
    answer: "B",
    explanation: "\"没时间\" 是 \"没看电影\" 的原因，because 表 \"因为\"；if 表条件（非条件），though 表让步（非让步），so 表结果（后句非结果），排除 A、C、D。"
  },
  {
    id: 22,
    question: "They were playing football ___ it started to rain.",
    options: ["A. when", "B. while", "C. until", "D. since"],
    translation: "当开始下雨时，他们正在踢足球。",
    answer: "A",
    explanation: "when 接 \"短暂性动作\"（started to rain 是瞬间动作），符合 \"主句进行时 + when + 从句一般时\"；while 接 \"持续性动作\"（后句非持续），until 表 \"直到\"（非 \"直到\" 逻辑），since 表 \"自从\"（非 \"自从\" 含义），排除 B、C、D。"
  },
  {
    id: 23,
    question: "___ he is young, he knows a lot about history.",
    options: ["A. Because", "B. Though", "C. If", "D. So"],
    translation: "尽管他很年轻，但他懂很多历史知识。",
    answer: "B",
    explanation: "\"年轻\" 与 \"懂历史多\" 是让步关系，though 表 \"尽管\"；because 表原因（非原因），if 表条件（非条件），so 表结果（非结果），排除 A、C、D。"
  },
  {
    id: 24,
    question: "She not only speaks English well, ___ can also speak French.",
    options: ["A. but", "B. and", "C. or", "D. so"],
    translation: "她不仅英语说得好，还会说法语。",
    answer: "A",
    explanation: "\"not only...but (also)...\" 中，but 可接情态动词/助动词（此处 can 提前），固定搭配不可替换；and/or/so 均不与 not only 搭配，排除 B、C、D。"
  },
  {
    id: 25,
    question: "We must study hard ___ we can get good grades.",
    options: ["A. if", "B. so that", "C. though", "D. because"],
    translation: "我们必须努力学习，以便能取得好成绩。",
    answer: "B",
    explanation: "后句 \"取得好成绩\" 是前句 \"努力学习\" 的目的，so that 表 \"以便、为了\"（引导目的状语从句）；if 表条件（非条件），though 表让步（非让步），because 表原因（后句非原因），排除 A、C、D。"
  },
  {
    id: 26,
    question: "He likes playing basketball, ___ he doesn't like playing volleyball.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "他喜欢打篮球，但不喜欢打排球。",
    answer: "B",
    explanation: "\"喜欢篮球\" 与 \"不喜欢排球\" 是转折关系，but 表 \"但是\"；and 表并列（无并列），or 表选择（无选择），so 表因果（无因果），排除 A、C、D。"
  },
  {
    id: 27,
    question: "___ you finish your homework, you can't watch TV.",
    options: ["A. If", "B. Though", "C. Until", "D. Since"],
    translation: "直到你完成作业，才能看电视。",
    answer: "C",
    explanation: "\"not...until...\" 是固定结构，表 \"直到……才……\"，until 表 \"直到\"；if 表条件（非条件），though 表让步（非让步），since 表 \"自从\"（非 \"自从\" 含义），排除 A、B、D。"
  },
  {
    id: 28,
    question: "She bought some apples, ___ she bought some oranges too.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "她买了一些苹果，也买了一些橙子。",
    answer: "A",
    explanation: "\"买苹果\" 和 \"买橙子\" 是并列关系，and 表 \"并且\"；but 表转折（无对立），or 表选择（无选择），so 表因果（无因果），排除 B、C、D。"
  },
  {
    id: 29,
    question: "I will call you ___ I arrive in Beijing.",
    options: ["A. as soon as", "B. though", "C. because", "D. so"],
    translation: "我一到北京就给你打电话。",
    answer: "A",
    explanation: "\"一……就……\" 用 as soon as（引导时间状语从句）；though 表让步（非让步），because 表原因（非原因），so 表结果（非结果），排除 B、C、D。"
  },
  {
    id: 30,
    question: "You can eat the cake ___ you can give it to your sister.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "你可以吃这块蛋糕，或者把它给你妹妹。",
    answer: "C",
    explanation: "\"吃蛋糕\" 和 \"给妹妹\" 是选择关系，or 表 \"或者\"；and 表并列（无并列），but 表转折（无对立），so 表因果（无因果），排除 A、B、D。"
  },
  {
    id: 31,
    question: "He didn't go to school ___ he was ill.",
    options: ["A. if", "B. because", "C. though", "D. so"],
    translation: "他没去上学，因为他生病了。",
    answer: "B",
    explanation: "\"生病\" 是 \"没上学\" 的原因，because 表 \"因为\"；if 表条件（非条件），though 表让步（非让步），so 表结果（后句非结果），排除 A、C、D。"
  },
  {
    id: 32,
    question: "They were listening to music ___ their father came back.",
    options: ["A. when", "B. while", "C. until", "D. since"],
    translation: "当他们的爸爸回来时，他们正在听音乐。",
    answer: "A",
    explanation: "when 接 \"短暂性动作\"（came back 是瞬间动作），符合 \"主句进行时 + when + 从句一般时\"；while 接 \"持续性动作\"（后句非持续），until 表 \"直到\"（非 \"直到\" 逻辑），since 表 \"自从\"（非 \"自从\" 含义），排除 B、C、D。"
  },
  {
    id: 33,
    question: "___ it rained, we still had a good time at the party.",
    options: ["A. Because", "B. Though", "C. If", "D. So"],
    translation: "尽管下雨了，我们在派对上还是玩得很开心。",
    answer: "B",
    explanation: "\"下雨\" 与 \"玩得开心\" 是让步关系，though 表 \"尽管\"；because 表原因（非原因），if 表条件（非条件），so 表结果（非结果），排除 A、C、D。"
  },
  {
    id: 34,
    question: "Not only my mother ___ my father likes cooking.",
    options: ["A. but also", "B. and", "C. or", "D. so"],
    translation: "不仅我妈妈，我爸爸也喜欢做饭。",
    answer: "A",
    explanation: "\"not only...but also...\" 连接并列主语，表 \"不仅……而且……\"，固定搭配不可替换；and/or/so 均不与 not only 搭配，排除 B、C、D。"
  },
  {
    id: 35,
    question: "We will have a picnic ___ the rain stops.",
    options: ["A. if", "B. as soon as", "C. though", "D. because"],
    translation: "雨一停我们就去野餐。",
    answer: "B",
    explanation: "\"雨停\" 是 \"去野餐\" 的即时条件，as soon as 表 \"一……就……\"；if 表 \"如果\"（无即时性），though 表让步（非让步），because 表原因（非原因），排除 A、C、D。"
  },
  {
    id: 36,
    question: "She is very kind, ___ everyone likes her.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "她很善良，所以每个人都喜欢她。",
    answer: "D",
    explanation: "\"善良\" 是 \"被喜欢\" 的原因，so 表 \"所以\"；and 表并列（无因果），but 表转折（无对立），or 表选择（无选择），排除 A、B、C。"
  },
  {
    id: 37,
    question: "You can take a taxi, ___ you can take the subway to the station.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "你可以坐出租车，或者坐地铁去车站。",
    answer: "C",
    explanation: "\"坐出租车\" 和 \"坐地铁\" 是选择关系，or 表 \"或者\"；and 表并列（无并列），but 表转折（无对立），so 表因果（无因果），排除 A、B、D。"
  },
  {
    id: 38,
    question: "I didn't buy the book ___ it was too expensive.",
    options: ["A. if", "B. because", "C. though", "D. so"],
    translation: "我没买那本书，因为它太贵了。",
    answer: "B",
    explanation: "\"太贵\" 是 \"没买\" 的原因，because 表 \"因为\"；if 表条件（非条件），though 表让步（非让步），so 表结果（后句非结果），排除 A、C、D。"
  },
  {
    id: 39,
    question: "___ he is very tall, he can't play basketball well.",
    options: ["A. Because", "B. Though", "C. If", "D. So"],
    translation: "尽管他很高，但他篮球打得不好。",
    answer: "B",
    explanation: "\"高\" 与 \"篮球打得不好\" 是让步关系，though 表 \"尽管\"；because 表原因（非原因），if 表条件（非条件），so 表结果（非结果），排除 A、C、D。"
  },
  {
    id: 40,
    question: "They will go hiking ___ the weather is bad tomorrow.",
    options: ["A. if", "B. though", "C. unless", "D. so"],
    translation: "除非明天天气不好，否则他们会去徒步。",
    answer: "C",
    explanation: "unless 表 \"除非\"（相当于 \"if not\"），后句 \"天气不好\" 是 \"不去徒步\" 的条件，符合逻辑；if 表 \"如果\"（逻辑相反），though 表让步（非让步），so 表结果（非结果），排除 A、B、D。"
  },
  {
    id: 41,
    question: "She not only dances well, ___ sings beautifully.",
    options: ["A. but also", "B. and", "C. or", "D. so"],
    translation: "她不仅跳舞好，唱歌也很美。",
    answer: "A",
    explanation: "\"not only...but also...\" 表 \"不仅……而且……\"，此处 also 可省略，固定搭配不可替换；and/or/so 均不与 not only 搭配，排除 B、C、D。"
  },
  {
    id: 42,
    question: "I was doing my homework ___ my brother was watching TV.",
    options: ["A. when", "B. while", "C. until", "D. since"],
    translation: "我在做作业的时候，我哥哥在看电视。",
    answer: "B",
    explanation: "while 引导时间状语从句，可接 \"持续性动作\"（主句和从句均为进行时，表 \"同时进行\"）；when 接 \"短暂性动作\"（此处非瞬间动作），until 表 \"直到\"（非 \"直到\" 逻辑），since 表 \"自从\"（非 \"自从\" 含义），排除 A、C、D。"
  },
  {
    id: 43,
    question: "We must hurry up, ___ we will be late for class.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "我们必须快点，否则上课会迟到。",
    answer: "C",
    explanation: "\"快点\" 与 \"迟到\" 是选择关系（不快点就迟到），or 表 \"否则\"；and 表并列（无并列），but 表转折（无对立），so 表因果（无因果），排除 A、B、D。"
  },
  {
    id: 44,
    question: "___ you help me, I can finish the work on time.",
    options: ["A. If", "B. Though", "C. Because", "D. So"],
    translation: "如果你帮我，我就能按时完成工作。",
    answer: "A",
    explanation: "\"帮我\" 是 \"按时完成工作\" 的条件，if 表 \"如果\"；though 表让步（非让步），because 表原因（后句非原因），so 表结果（后句非结果），排除 B、C、D。"
  },
  {
    id: 45,
    question: "He likes playing computer games, ___ he doesn't play them too often.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "他喜欢玩电脑游戏，但不经常玩。",
    answer: "B",
    explanation: "\"喜欢玩\" 与 \"不经常玩\" 是转折关系，but 表 \"但是\"；and 表并列（无并列），or 表选择（无选择），so 表因果（无因果），排除 A、C、D。"
  },
  {
    id: 46,
    question: "She bought a pen, ___ she bought a notebook for her brother.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "她买了一支钢笔，还为她弟弟买了一个笔记本。",
    answer: "A",
    explanation: "\"买钢笔\" 和 \"买笔记本\" 是并列关系，and 表 \"并且\"；but 表转折（无对立），or 表选择（无选择），so 表因果（无因果），排除 B、C、D。"
  },
  {
    id: 47,
    question: "I didn't go swimming ___ the water was too cold.",
    options: ["A. if", "B. because", "C. though", "D. so"],
    translation: "我没去游泳，因为水太冷了。",
    answer: "B",
    explanation: "\"水凉\" 是 \"没游泳\" 的原因，because 表 \"因为\"；if 表条件（非条件），though 表让步（非让步），so 表结果（后句非结果），排除 A、C、D。"
  },
  {
    id: 48,
    question: "___ it is late, we have to go home now.",
    options: ["A. Because", "B. Though", "C. If", "D. So"],
    translation: "因为太晚了，我们现在得回家了。",
    answer: "A",
    explanation: "\"太晚\" 是 \"回家\" 的原因，because 表 \"因为\"；though 表让步（非让步），if 表条件（非条件），so 表结果（前句非结果），排除 B、C、D。"
  },
  {
    id: 49,
    question: "They will not go to the park ___ it rains tomorrow.",
    options: ["A. if", "B. though", "C. because", "D. so"],
    translation: "如果明天下雨，他们就不去公园了。",
    answer: "A",
    explanation: "\"下雨\" 是 \"不去公园\" 的条件，if 表 \"如果\"；though 表让步（非让步），because 表原因（后句非原因），so 表结果（后句非结果），排除 B、C、D。"
  },
  {
    id: 50,
    question: "You can read the book here, ___ you can take it home.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "你可以在这里看书，或者把它带回家。",
    answer: "C",
    explanation: "\"在这里看\" 和 \"带回家\" 是选择关系，or 表 \"或者\"；and 表并列（无并列），but 表转折（无对立），so 表因果（无因果），排除 A、B、D。"
  },
  {
    id: 51,
    question: "He is very clever, ___ he works very hard too.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "他很聪明，而且学习也很努力。",
    answer: "A",
    explanation: "\"聪明\" 和 \"努力\" 是并列关系，and 表 \"而且\"；but 表转折（无对立），or 表选择（无选择），so 表因果（无因果），排除 B、C、D。"
  },
  {
    id: 52,
    question: "I will go to see you ___ I have time this weekend.",
    options: ["A. if", "B. though", "C. because", "D. so"],
    translation: "如果这个周末我有时间，就去看你。",
    answer: "A",
    explanation: "\"有时间\" 是 \"去看你\" 的条件，if 表 \"如果\"；though 表让步（非让步），because 表原因（后句非原因），so 表结果（后句非结果），排除 B、C、D。"
  },
  {
    id: 53,
    question: "___ she is very young, she can play the piano very well.",
    options: ["A. Because", "B. Though", "C. If", "D. So"],
    translation: "尽管她很小，但钢琴弹得很好。",
    answer: "B",
    explanation: "\"年轻\" 与 \"钢琴弹得好\" 是让步关系，though 表 \"尽管\"；because 表原因（非原因），if 表条件（非条件），so 表结果（非结果），排除 A、C、D。"
  },
  {
    id: 54,
    question: "Not only you ___ also he needs to finish the work today.",
    options: ["A. but", "B. and", "C. or", "D. so"],
    translation: "不仅你，他今天也需要完成这项工作。",
    answer: "A",
    explanation: "\"not only...but also...\" 连接并列主语，表 \"不仅……而且……\"，but 不可省略；and/or/so 均不与 not only 搭配，排除 B、C、D。"
  },
  {
    id: 55,
    question: "They were walking in the park ___ they met their old friend.",
    options: ["A. when", "B. while", "C. until", "D. since"],
    translation: "他们在公园散步时，遇到了他们的老朋友。",
    answer: "A",
    explanation: "when 接 \"短暂性动作\"（met 是瞬间动作），符合 \"主句进行时 + when + 从句一般时\"；while 接 \"持续性动作\"（后句非持续），until 表 \"直到\"（非 \"直到\" 逻辑），since 表 \"自从\"（非 \"自从\" 含义），排除 B、C、D。"
  },
  {
    id: 56,
    question: "She didn't eat breakfast, ___ she is very hungry now.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "她没吃早饭，所以现在很饿。",
    answer: "D",
    explanation: "\"没吃早饭\" 是 \"饿\" 的原因，so 表 \"所以\"；and 表并列（无因果），but 表转折（无对立），or 表选择（无选择），排除 A、B、C。"
  },
  {
    id: 57,
    question: "You can drink tea, ___ you can drink coffee.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "你可以喝茶，或者喝咖啡。",
    answer: "C",
    explanation: "\"喝茶\" 和 \"喝咖啡\" 是选择关系，or 表 \"或者\"；and 表并列（无并列），but 表转折（无对立），so 表因果（无因果），排除 A、B、D。"
  },
  {
    id: 58,
    question: "I didn't go to the park ___ I had to look after my little sister.",
    options: ["A. if", "B. because", "C. though", "D. so"],
    translation: "我没去公园，因为我得照顾我的小妹妹。",
    answer: "B",
    explanation: "\"照顾妹妹\" 是 \"没去公园\" 的原因，because 表 \"因为\"；if 表条件（非条件），though 表让步（非让步），so 表结果（后句非结果），排除 A、C、D。"
  },
  {
    id: 59,
    question: "___ it is hot, we still need to wear uniforms.",
    options: ["A. Because", "B. Though", "C. If", "D. So"],
    translation: "尽管天很热，我们还是要穿校服。",
    answer: "B",
    explanation: "\"热\" 与 \"穿校服\" 是让步关系，though 表 \"尽管\"；because 表原因（非原因），if 表条件（非条件），so 表结果（非结果），排除 A、C、D。"
  },
  {
    id: 60,
    question: "We will start the meeting ___ everyone arrives.",
    options: ["A. as soon as", "B. though", "C. because", "D. so"],
    translation: "大家一到，我们就开始开会。",
    answer: "A",
    explanation: "\"大家到\" 是 \"开会\" 的即时条件，as soon as 表 \"一……就……\"；though 表让步（非让步），because 表原因（非原因），so 表结果（非结果），排除 B、C、D。"
  },
  {
    id: 61,
    question: "He likes not only playing football ___ watching football matches.",
    options: ["A. but also", "B. and", "C. or", "D. so"],
    translation: "他不仅喜欢踢足球，还喜欢看足球比赛。",
    answer: "A",
    explanation: "\"not only...but also...\" 表 \"不仅……还……\"，固定搭配不可替换；and/or/so 均不与 not only 搭配，排除 B、C、D。"
  },
  {
    id: 62,
    question: "She was cooking dinner ___ her husband was reading newspapers.",
    options: ["A. when", "B. while", "C. until", "D. since"],
    translation: "她在做晚饭时，她丈夫在看报纸。",
    answer: "B",
    explanation: "while 接 \"持续性动作\"（主句和从句均为进行时，表 \"同时进行\"）；when 接 \"短暂性动作\"（此处非瞬间动作），until 表 \"直到\"（非 \"直到\" 逻辑），since 表 \"自从\"（非 \"自从\" 含义），排除 A、C、D。"
  },
  {
    id: 63,
    question: "You must study hard ___ you want to pass the exam.",
    options: ["A. if", "B. though", "C. because", "D. so"],
    translation: "如果你想通过考试，就必须努力学习。",
    answer: "A",
    explanation: "\"想通过考试\" 是 \"努力学习\" 的条件，if 表 \"如果\"；though 表让步（非让步），because 表原因（后句非原因），so 表结果（后句非结果），排除 B、C、D。"
  },
  {
    id: 64,
    question: "He is very busy, ___ he always finds time to exercise.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "他很忙，但总是能抽出时间锻炼。",
    answer: "B",
    explanation: "\"忙\" 与 \"抽时间锻炼\" 是转折关系，but 表 \"但是\"；and 表并列（无并列），or 表选择（无选择），so 表因果（无因果），排除 A、C、D。"
  },
  {
    id: 65,
    question: "We will go to the beach ___ the weather is good tomorrow.",
    options: ["A. if", "B. though", "C. because", "D. so"],
    translation: "如果明天天气好，我们就去海滩。",
    answer: "A",
    explanation: "\"天气好\" 是 \"去海滩\" 的条件，if 表 \"如果\"；though 表让步（非让步），because 表原因（后句非原因），so 表结果（后句非结果），排除 B、C、D。"
  },
  {
    id: 66,
    question: "She didn't buy the dress ___ it didn't fit her.",
    options: ["A. if", "B. because", "C. though", "D. so"],
    translation: "她没买那条裙子，因为它不合身。",
    answer: "B",
    explanation: "\"不合身\" 是 \"没买\" 的原因，because 表 \"因为\"；if 表条件（非条件），though 表让步（非让步），so 表结果（后句非结果），排除 A、C、D。"
  },
  {
    id: 67,
    question: "___ he is not good at English, he tries his best to learn it.",
    options: ["A. Because", "B. Though", "C. If", "D. So"],
    translation: "尽管他英语不好，但他尽全力去学。",
    answer: "B",
    explanation: "\"英语不好\" 与 \"尽全力学\" 是让步关系，though 表 \"尽管\"；because 表原因（非原因），if 表条件（非条件），so 表结果（非结果），排除 A、C、D。"
  },
  {
    id: 68,
    question: "You can choose this book, ___ you can choose that one.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "你可以选这本书，或者选那本。",
    answer: "C",
    explanation: "\"选这本\" 和 \"选那本\" 是选择关系，or 表 \"或者\"；and 表并列（无并列），but 表转折（无对立），so 表因果（无因果），排除 A、B、D。"
  },
  {
    id: 69,
    question: "I will call you ___ I get home.",
    options: ["A. as soon as", "B. though", "C. because", "D. so"],
    translation: "我一到家就给你打电话。",
    answer: "A",
    explanation: "\"到家\" 是 \"打电话\" 的即时条件，as soon as 表 \"一……就……\"；though 表让步（非让步），because 表原因（非原因），so 表结果（非结果），排除 B、C、D。"
  },
  {
    id: 70,
    question: "She is good at singing, ___ she often sings in the school choir.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "她擅长唱歌，所以经常在学校合唱团唱歌。",
    answer: "D",
    explanation: "\"擅长唱歌\" 是 \"在合唱团唱歌\" 的原因，so 表 \"所以\"；and 表并列（无因果），but 表转折（无对立），or 表选择（无选择），排除 A、B、C。"
  },
  {
    id: 71,
    question: "We didn't go out ___ it was raining heavily.",
    options: ["A. if", "B. because", "C. though", "D. so"],
    translation: "我们没出去，因为雨下得很大。",
    answer: "B",
    explanation: "\"雨大\" 是 \"没出去\" 的原因，because 表 \"因为\"；if 表条件（非条件），though 表让步（非让步），so 表结果（后句非结果），排除 A、C、D。"
  },
  {
    id: 72,
    question: "___ you don't study hard, you will fail the exam.",
    options: ["A. If", "B. Though", "C. Because", "D. So"],
    translation: "如果你不努力学习，考试就会不及格。",
    answer: "A",
    explanation: "\"不努力\" 是 \"不及格\" 的条件，if 表 \"如果\"；though 表让步（非让步），because 表原因（后句非原因），so 表结果（后句非结果），排除 B、C、D。"
  },
  {
    id: 73,
    question: "He likes playing basketball, ___ his brother likes playing tennis.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "他喜欢打篮球，而他弟弟喜欢打网球。",
    answer: "A",
    explanation: "两句描述不同爱好，是并列对比关系，and 表 \"而\"；but 表转折（无对立），or 表选择（无选择），so 表因果（无因果），排除 B、C、D。"
  },
  {
    id: 74,
    question: "Not only my father ___ my mother can drive a car.",
    options: ["A. but also", "B. and", "C. or", "D. so"],
    translation: "不仅我爸爸，我妈妈也会开车。",
    answer: "A",
    explanation: "\"not only...but also...\" 连接并列主语，表 \"不仅……而且……\"，固定搭配不可替换；and/or/so 均不与 not only 搭配，排除 B、C、D。"
  },
  {
    id: 75,
    question: "They were playing cards ___ the lights went out.",
    options: ["A. when", "B. while", "C. until", "D. since"],
    translation: "灯灭的时候，他们正在打牌。",
    answer: "A",
    explanation: "when 接 \"短暂性动作\"（went out 是瞬间动作），符合 \"主句进行时 + when + 从句一般时\"；while 接 \"持续性动作\"（后句非持续），until 表 \"直到\"（非 \"直到\" 逻辑），since 表 \"自从\"（非 \"自从\" 含义），排除 B、C、D。"
  },
  {
    id: 76,
    question: "She is very shy, ___ she can speak in front of many people.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "她很害羞，但能在很多人面前讲话。",
    answer: "B",
    explanation: "\"害羞\" 与 \"在众人前讲话\" 是转折关系，but 表 \"但是\"；and 表并列（无并列），or 表选择（无选择），so 表因果（无因果），排除 A、C、D。"
  },
  {
    id: 77,
    question: "We will have a party ___ our team wins the match.",
    options: ["A. if", "B. though", "C. because", "D. so"],
    translation: "如果我们队赢了比赛，就举办派对。",
    answer: "A",
    explanation: "\"赢比赛\" 是 \"办派对\" 的条件，if 表 \"如果\"；though 表让步（非让步），because 表原因（后句非原因），so 表结果（后句非结果），排除 B、C、D。"
  },
  {
    id: 78,
    question: "I didn't watch TV last night ___ I had to finish my homework.",
    options: ["A. if", "B. because", "C. though", "D. so"],
    translation: "我昨晚没看电视，因为我得完成作业。",
    answer: "B",
    explanation: "\"完成作业\" 是 \"没看电视\" 的原因，because 表 \"因为\"；if 表条件（非条件），though 表让步（非让步），so 表结果（后句非结果），排除 A、C、D。"
  },
  {
    id: 79,
    question: "___ it is snowing, we will still go to school.",
    options: ["A. Because", "B. Though", "C. If", "D. So"],
    translation: "尽管下雪了，我们还是要去上学。",
    answer: "B",
    explanation: "\"下雪\" 与 \"去上学\" 是让步关系，though 表 \"尽管\"；because 表原因（非原因），if 表条件（非条件），so 表结果（非结果），排除 A、C、D。"
  },
  {
    id: 80,
    question: "You can eat the apple now, ___ you can eat it later.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "你可以现在吃这个苹果，或者稍后再吃。",
    answer: "C",
    explanation: "\"现在吃\" 和 \"稍后吃\" 是选择关系，or 表 \"或者\"；and 表并列（无并列），but 表转折（无对立），so 表因果（无因果），排除 A、B、D。"
  },
  {
    id: 81,
    question: "She not only plays the piano well, ___ writes music.",
    options: ["A. but also", "B. and", "C. or", "D. so"],
    translation: "她不仅钢琴弹得好，还会作曲。",
    answer: "A",
    explanation: "\"not only...but also...\" 表 \"不仅……还……\"，固定搭配不可替换；and/or/so 均不与 not only 搭配，排除 B、C、D。"
  },
  {
    id: 82,
    question: "I was reading a book ___ my friend called me.",
    options: ["A. when", "B. while", "C. until", "D. since"],
    translation: "我正在看书时，朋友给我打电话了。",
    answer: "A",
    explanation: "when 接 \"短暂性动作\"（called 是瞬间动作），符合 \"主句进行时 + when + 从句一般时\"；while 接 \"持续性动作\"（后句非持续），until 表 \"直到\"（非 \"直到\" 逻辑），since 表 \"自从\"（非 \"自从\" 含义），排除 B、C、D。"
  },
  {
    id: 83,
    question: "He is very rich, ___ he lives a simple life.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "他很富有，但过着简单的生活。",
    answer: "B",
    explanation: "\"富有\" 与 \"简单生活\" 是转折关系，but 表 \"但是\"；and 表并列（无并列），or 表选择（无选择），so 表因果（无因果），排除 A、C、D。"
  },
  {
    id: 84,
    question: "We will go to the museum ___ the rain stops.",
    options: ["A. as soon as", "B. though", "C. because", "D. so"],
    translation: "雨一停我们就去博物馆。",
    answer: "A",
    explanation: "\"雨停\" 是 \"去博物馆\" 的即时条件，as soon as 表 \"一……就……\"；though 表让步（非让步），because 表原因（非原因），so 表结果（非结果），排除 B、C、D。"
  },
  {
    id: 85,
    question: "You must be quiet in the library, ___ you will disturb others.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "在图书馆里必须安静，否则会打扰别人。",
    answer: "C",
    explanation: "\"安静\" 与 \"打扰别人\" 是选择关系（不安静就打扰），or 表 \"否则\"；and 表并列（无并列），but 表转折（无对立），so 表因果（无因果），排除 A、B、D。"
  },
  {
    id: 86,
    question: "She didn't go to the concert ___ she didn't like the singer.",
    options: ["A. if", "B. because", "C. though", "D. so"],
    translation: "她没去听音乐会，因为她不喜欢那个歌手。",
    answer: "B",
    explanation: "\"不喜欢歌手\" 是 \"没去音乐会\" 的原因，because 表 \"因为\"；if 表条件（非条件），though 表让步（非让步），so 表结果（后句非结果），排除 A、C、D。"
  },
  {
    id: 87,
    question: "___ he is very old, he still works every day.",
    options: ["A. Because", "B. Though", "C. If", "D. So"],
    translation: "尽管他年纪很大，但仍然每天工作。",
    answer: "B",
    explanation: "\"年老\" 与 \"工作\" 是让步关系，though 表 \"尽管\"；because 表原因（非原因），if 表条件（非条件），so 表结果（非结果），排除 A、C、D。"
  },
  {
    id: 88,
    question: "Not only you ___ your sister needs to clean the room.",
    options: ["A. but also", "B. and", "C. or", "D. so"],
    translation: "不仅你，你妹妹也需要打扫房间。",
    answer: "A",
    explanation: "\"not only...but also...\" 连接并列主语，表 \"不仅……而且……\"，固定搭配不可替换；and/or/so 均不与 not only 搭配，排除 B、C、D。"
  },
  {
    id: 89,
    question: "They were playing football ___ the sun went down.",
    options: ["A. when", "B. while", "C. until", "D. since"],
    translation: "太阳下山时，他们正在踢足球。",
    answer: "A",
    explanation: "when 接 \"短暂性动作\"（went down 是瞬间动作），符合 \"主句进行时 + when + 从句一般时\"；while 接 \"持续性动作\"（后句非持续），until 表 \"直到\"（非 \"直到\" 逻辑），since 表 \"自从\"（非 \"自从\" 含义），排除 B、C、D。"
  },
  {
    id: 90,
    question: "She is good at English, ___ she often helps her classmates with it.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "她英语很好，所以经常帮同学学英语。",
    answer: "D",
    explanation: "\"英语好\" 是 \"帮同学\" 的原因，so 表 \"所以\"；and 表并列（无因果），but 表转折（无对立），or 表选择（无选择），排除 A、B、C。"
  },
  {
    id: 91,
    question: "We will have a picnic ___ the weather is not bad tomorrow.",
    options: ["A. if", "B. though", "C. because", "D. so"],
    translation: "如果明天天气不差，我们就去野餐。",
    answer: "A",
    explanation: "\"天气不差\" 是 \"去野餐\" 的条件，if 表 \"如果\"；though 表让步（非让步），because 表原因（后句非原因），so 表结果（后句非结果），排除 B、C、D。"
  },
  {
    id: 92,
    question: "I didn't buy the toy ___ it was too expensive.",
    options: ["A. if", "B. because", "C. though", "D. so"],
    translation: "我没买那个玩具，因为它太贵了。",
    answer: "B",
    explanation: "\"太贵\" 是 \"没买\" 的原因，because 表 \"因为\"；if 表条件（非条件），though 表让步（非让步），so 表结果（后句非结果），排除 A、C、D。"
  },
  {
    id: 93,
    question: "___ it is hot today, we will go swimming.",
    options: ["A. Because", "B. Though", "C. If", "D. So"],
    translation: "因为今天很热，我们要去游泳。",
    answer: "A",
    explanation: "\"热\" 是 \"去游泳\" 的原因，because 表 \"因为\"；though 表让步（非让步），if 表条件（非条件），so 表结果（前句非结果），排除 B、C、D。"
  },
  {
    id: 94,
    question: "She not only dances well, ___ plays the guitar well too.",
    options: ["A. but also", "B. and", "C. or", "D. so"],
    translation: "她不仅跳舞好，吉他也弹得好。",
    answer: "A",
    explanation: "\"not only...but also...\" 表 \"不仅……而且……\"，固定搭配不可替换；and/or/so 均不与 not only 搭配，排除 B、C、D。"
  },
  {
    id: 95,
    question: "They were talking ___ the teacher came into the classroom.",
    options: ["A. when", "B. while", "C. until", "D. since"],
    translation: "老师走进教室时，他们正在说话。",
    answer: "A",
    explanation: "when 接 \"短暂性动作\"（came into 是瞬间动作），符合 \"主句进行时 + when + 从句一般时\"；while 接 \"持续性动作\"（后句非持续），until 表 \"直到\"（非 \"直到\" 逻辑），since 表 \"自从\"（非 \"自从\" 含义），排除 B、C、D。"
  },
  {
    id: 96,
    question: "He is very tired, ___ he still finishes his work.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "他很累，但仍然完成了工作。",
    answer: "B",
    explanation: "\"累\" 与 \"完成工作\" 是转折关系，but 表 \"但是\"；and 表并列（无并列），or 表选择（无选择），so 表因果（无因果），排除 A、C、D。"
  },
  {
    id: 97,
    question: "We will go to the zoo ___ we have free time this Sunday.",
    options: ["A. if", "B. though", "C. because", "D. so"],
    translation: "如果这个周日我们有空，就去动物园。",
    answer: "A",
    explanation: "\"有空\" 是 \"去动物园\" 的条件，if 表 \"如果\"；though 表让步（非让步），because 表原因（后句非原因），so 表结果（后句非结果），排除 B、C、D。"
  },
  {
    id: 98,
    question: "She didn't go to bed early ___ she wanted to finish the book.",
    options: ["A. if", "B. because", "C. though", "D. so"],
    translation: "她没早睡，因为她想把书看完。",
    answer: "B",
    explanation: "\"想看完书\" 是 \"没早睡\" 的原因，because 表 \"因为\"；if 表条件（非条件），though 表让步（非让步），so 表结果（后句非结果），排除 A、C、D。"
  },
  {
    id: 99,
    question: "___ it is raining, we will stay at home.",
    options: ["A. Because", "B. Though", "C. If", "D. So"],
    translation: "因为下雨了，我们要待在家里。",
    answer: "A",
    explanation: "\"下雨\" 是 \"待在家\" 的原因，because 表 \"因为\"；though 表让步（非让步），if 表条件（非条件），so 表结果（前句非结果），排除 B、C、D。"
  },
  {
    id: 100,
    question: "You can take the bus, ___ you can walk to the station.",
    options: ["A. and", "B. but", "C. or", "D. so"],
    translation: "你可以坐公交车，或者步行去车站。",
    answer: "C",
    explanation: "\"坐公交\" 和 \"步行\" 是选择关系，or 表 \"或者\"；and 表并列（无并列），but 表转折（无对立），so 表因果（无因果），排除 A、B、D。"
  }
];

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = conjunctions;
}