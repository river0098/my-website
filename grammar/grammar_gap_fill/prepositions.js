// 高中生介词100道选择题（含翻译与解析）
const prepositions = [
  {
    id: 1,
    question: "We usually have a picnic ___ Sunday afternoon.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "我们通常在周日下午去野餐。",
    answer: "B",
    explanation: "介词 on 用于 \"具体某天的上午/下午/晚上\"；in 用于泛指的上午/下午（如 in the afternoon）、年/月/季节；at 用于具体时间点（如 at 3 p.m.）；for 表持续时间。"
  },
  {
    id: 2,
    question: "They arrived ___ Beijing at 10 p.m. last night.",
    options: ["A. in", "B. at", "C. to", "D. for"],
    translation: "他们昨晚 10 点到达了北京。",
    answer: "A",
    explanation: ""arrive in + 大地点"（如城市、国家）；"arrive at + 小地点"（如车站、公园）；arrive 不与 to/for 搭配（reach 直接接地点，get to 接地点）。北京是城市，用 in。"
  },
  {
    id: 3,
    question: "She goes to school ___ bus every day.",
    options: ["A. by", "B. on", "C. in", "D. with"],
    translation: "她每天坐公交车去上学。",
    answer: "A",
    explanation: ""by + 交通工具" 表 "乘坐某种交通工具"（如 by bus/by bike）；on 用于 "有具体修饰的交通工具"（如 on a red bus）；in 用于 "封闭交通工具"（如 in a car）；with 表 "用…… 工具"（如 with a pen）。"
  },
  {
    id: 4,
    question: "We have math ___ 9:00 a.m. every Monday.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "我们每周一上午 9 点有数学课。",
    answer: "C",
    explanation: "at 用于 "具体时间点"（如 9:00 a.m.）；in 用于年/月（如 in October）；on 用于具体日期（如 on Monday）；for 表 "持续多久"（如 for two hours）。"
  },
  {
    id: 5,
    question: "There are many birds ___ the sky.",
    options: ["A. in", "B. on", "C. at", "D. above"],
    translation: "天空中有很多鸟。",
    answer: "A",
    explanation: ""in the sky" 是固定搭配，表 "在天空中"；on 强调 "在…… 表面"（如 on the wall）；at 表小地点（如 at the park）；above 表 "在…… 上方（不接触）"，但不与 sky 搭配。"
  },
  {
    id: 6,
    question: "We will have a party ___ Christmas Eve.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "我们将在平安夜举办派对。",
    answer: "B",
    explanation: ""Christmas Eve"（平安夜，12 月 24 日晚）是 "具体某天的晚上"，用 on；in 用于泛指的晚上（如 in the evening）；at 用于节日期间（如 at Christmas）；for 表持续时间。"
  },
  {
    id: 7,
    question: "The library is ___ the left of the classroom building.",
    options: ["A. in", "B. on", "C. at", "D. to"],
    translation: "图书馆在教学楼的左边。",
    answer: "B",
    explanation: "固定搭配 "on the left/right of" 表示 "在…… 的左边/右边"；in 表 "在…… 内部"；at 表小地点；to 表 "在…… 外部（不相邻）"，不与 left/right 搭配。"
  },
  {
    id: 8,
    question: "He often helps his mom ___ housework on weekends.",
    options: ["A. in", "B. at", "C. with", "D. for"],
    translation: "他周末经常帮妈妈做家务。",
    answer: "C",
    explanation: "固定搭配 "help sb. with sth." 表示 "帮某人做某事"；in/at 无此搭配；for 表 "为了"，不与 help 搭配。"
  },
  {
    id: 9,
    question: "She was born ___ 2008.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "她出生于 2008 年。",
    answer: "A",
    explanation: "in 用于 "年份/月份/季节"；on 用于具体日期（如 on May 1st）；at 用于具体时间点（如 at 8 a.m.）；for 表持续时间。"
  },
  {
    id: 10,
    question: "We should listen to the teacher carefully ___ class.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "我们在课堂上应该认真听老师讲课。",
    answer: "A",
    explanation: "固定搭配 "in class" 表示 "在课堂上"；on 表 "在…… 表面"；at 表 "在…… 地点"（如 at school）；for 表 "为了"。"
  },
  {
    id: 11,
    question: "He usually gets up ___ 6:30 a.m.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "他通常早上 6 点半起床。",
    answer: "C",
    explanation: "at 用于 "具体时间点"（6:30 a.m.）；in 用于年/月；on 用于具体日期；for 表持续时间。"
  },
  {
    id: 12,
    question: "There are some apples ___ the basket.",
    options: ["A. in", "B. on", "C. at", "D. above"],
    translation: "篮子里有一些苹果。",
    answer: "A",
    explanation: "in 表 "在…… 内部"（苹果在篮子里）；on 表 "在…… 表面"（如苹果在桌子上）；at 表小地点；above 表 "在…… 上方"，不表内部。"
  },
  {
    id: 13,
    question: "We will have a trip ___ the summer holiday.",
    options: ["A. during", "B. in", "C. on", "D. at"],
    translation: "我们将在暑假期间去旅行。",
    answer: "A",
    explanation: "during 表 "在…… 期间"（覆盖整个假期）；in 用于 "在暑假里"（in the summer holiday），但此处强调 "期间" 的动作；on 用于具体日期；at 用于时间点。结合语境，during 更准确。"
  },
  {
    id: 14,
    question: "She is afraid ___ dogs.",
    options: ["A. in", "B. of", "C. with", "D. for"],
    translation: "她害怕狗。",
    answer: "B",
    explanation: "固定搭配 "be afraid of sth./doing sth." 表示 "害怕某物/做某事"；in 表 "在…… 里"；with 表 "和…… 一起"；for 表 "为了"，均无此搭配。"
  },
  {
    id: 15,
    question: "They finished the work ___ two hours.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "他们用了两个小时完成了这项工作。",
    answer: "A",
    explanation: "in + 时间段表 "在……（时间）内完成"；on 用于具体日期；at 用于时间点；for + 时间段表 "持续了…… 时间"（强调过程，如 worked for two hours）。此处表 "两小时内完成"，用 in。"
  },
  {
    id: 16,
    question: "I go to bed ___ 10 p.m. every day.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "我每天晚上 10 点睡觉。",
    answer: "C",
    explanation: "at 用于具体时间点（10 p.m.）；in 用于年/月；on 用于具体日期；for 表持续时间。"
  },
  {
    id: 17,
    question: "We often play basketball ___ the afternoon.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "我们经常在下午打篮球。",
    answer: "A",
    explanation: "in 用于 "泛指的上午/下午/晚上"（in the afternoon）；on 用于 "具体某天的下午"（如 on a rainy afternoon）；at 用于时间点；for 表持续时间。"
  },
  {
    id: 18,
    question: "He is good ___ children. He wants to be a teacher.",
    options: ["A. in", "B. at", "C. with", "D. for"],
    translation: "他善于和孩子相处。他想成为一名老师。",
    answer: "C",
    explanation: "be good with 表示 "善于应付/和…… 相处"；be good at 表 "擅长做某事"；be good in 表 "在某领域表现好"；be good for 表 "对…… 有益"。"
  },
  {
    id: 19,
    question: "She usually walks ___ home after school.",
    options: ["A. to", "B. /", "C. at", "D. in"],
    translation: "她放学后通常步行回家。",
    answer: "B",
    explanation: "home 是副词，前面不加介词（如 go home/walk home）；to 后接名词（如 go to school）；at 表 "在……（地点）"；in 表 "在…… 里"。"
  },
  {
    id: 20,
    question: "We will have a test ___ next week.",
    options: ["A. in", "B. on", "C. at", "D. /"],
    translation: "我们下周将有一场考试。",
    answer: "D",
    explanation: "next/last/this/that + 时间名词（如 next week/last month）前不加介词；in 用于 "in + 时间段"（如 in a week，表 "一周后"）；on 用于具体日期；at 用于时间点。"
  },
  {
    id: 21,
    question: "There is a bridge ___ the river.",
    options: ["A. in", "B. on", "C. over", "D. above"],
    translation: "河上有一座桥。",
    answer: "C",
    explanation: "over 表 "在…… 正上方（不接触，且有覆盖/跨越含义）"，桥跨越河流，用 over；in 表 "在…… 里"；on 表 "在…… 表面（接触）"；above 表 "在…… 上方（不接触，但无跨越含义）"。"
  },
  {
    id: 22,
    question: "I bought a new pen ___ 5 yuan.",
    options: ["A. in", "B. on", "C. for", "D. with"],
    translation: "我花 5 元买了一支新钢笔。",
    answer: "C",
    explanation: ""buy sth. for + 钱数" 表示 "花…… 钱买某物"；in 表 "用……（货币）"（如 pay in RMB）；on 表 "在…… 上花钱"（如 spend money on sth.）；with 表 "用…… 工具"。"
  },
  {
    id: 23,
    question: "They will meet ___ the school gate at 8 a.m. tomorrow.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "他们明天早上 8 点将在校门口见面。",
    answer: "C",
    explanation: "at 用于 "小地点"（如 school gate/bus stop）；in 用于 "大地点"（如 school/classroom）；on 表 "在…… 表面"；for 表 "为了"。"
  },
  {
    id: 24,
    question: "She is interested ___ English.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "她对英语感兴趣。",
    answer: "A",
    explanation: "固定搭配 "be interested in sth./doing sth." 表示 "对某物/做某事感兴趣"；on/at/for 均无此搭配。"
  },
  {
    id: 25,
    question: "We have a break ___ class.",
    options: ["A. in", "B. between", "C. at", "D. for"],
    translation: "我们在两节课之间休息。",
    answer: "B",
    explanation: "between 表 "在两者之间"（between class 强调 "两节课之间"）；in 表 "在…… 里"（in class 表 "在课堂上"）；at 表 "在……（时间/地点）"；for 表 "持续时间"。"
  },
  {
    id: 26,
    question: "He went to Shanghai ___ train last week.",
    options: ["A. by", "B. on", "C. in", "D. with"],
    translation: "他上周坐火车去了上海。",
    answer: "A",
    explanation: ""by + 交通工具" 表 "乘坐"（by train）；on 用于 "有修饰的交通工具"（如 on a fast train）；in 用于 "封闭交通工具"（如 in a car）；with 表 "用…… 工具"。"
  },
  {
    id: 27,
    question: "We will have a party ___ New Year's Day.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "我们将在元旦举办派对。",
    answer: "B",
    explanation: "New Year's Day（元旦，1 月 1 日）是具体日期，用 on；in 用于年/月；at 用于 "节日期间"（如 at New Year）；for 表 "为了"。"
  },
  {
    id: 28,
    question: "She lives ___ the second floor of this building.",
    options: ["A. in", "B. on", "C. at", "D. to"],
    translation: "她住在这栋楼的二楼。",
    answer: "B",
    explanation: ""on+the + 序数词 + floor" 是固定搭配，表 "在第…… 层楼"；in 表 "在…… 内部"（如 in the building）；at 表 "在……（小地点）"；to 表 "向……"。"
  },
  {
    id: 29,
    question: "I often help my mom ___ cooking.",
    options: ["A. in", "B. on", "C. with", "D. for"],
    translation: "我经常帮妈妈做饭。",
    answer: "C",
    explanation: "固定搭配 "help sb. with sth." 表 "帮某人做某事"；in/on/for 均无此搭配（help sb. (to) cook 表 "帮妈妈做饭"，cooking 是名词，需用 with）。"
  },
  {
    id: 30,
    question: "They arrived ___ the station five minutes ago.",
    options: ["A. in", "B. at", "C. to", "D. for"],
    translation: "他们五分钟前到达了车站。",
    answer: "B",
    explanation: ""arrive at + 小地点"（station 是小地点）；"arrive in + 大地点"（如 city）；arrive 不与 to/for 搭配。"
  },
  {
    id: 31,
    question: "I will finish my homework ___ an hour.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "我将在一小时内完成作业。",
    answer: "A",
    explanation: "in + 时间段表 "在……（时间）内"（用于将来时）；on 用于具体日期；at 用于时间点；for + 时间段表 "持续了…… 时间"（用于过去时/现在完成时）。"
  },
  {
    id: 32,
    question: "We usually have dinner ___ 7 p.m.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "我们通常晚上 7 点吃晚饭。",
    answer: "C",
    explanation: "at 用于具体时间点（7 p.m.）；in 用于年/月；on 用于具体日期；for 表持续时间。"
  },
  {
    id: 33,
    question: "She is good ___ singing. She can sing many songs.",
    options: ["A. in", "B. at", "C. with", "D. for"],
    translation: "她擅长唱歌。她会唱很多歌。",
    answer: "B",
    explanation: "be good at doing sth. 表 "擅长做某事"；be good with 表 "善于相处"；be good in 表 "在某领域表现好"；be good for 表 "对…… 有益"。"
  },
  {
    id: 34,
    question: "We went to the park ___ foot last Sunday.",
    options: ["A. by", "B. on", "C. in", "D. with"],
    translation: "我们上周日步行去了公园。",
    answer: "B",
    explanation: "固定搭配 "on foot" 表 "步行"；by 后接交通工具（如 by bike）；in/with 无此搭配。"
  },
  {
    id: 35,
    question: "There are many flowers ___ the garden.",
    options: ["A. in", "B. on", "C. at", "D. above"],
    translation: "花园里有很多花。",
    answer: "A",
    explanation: "in 表 "在…… 内部"（花在花园里）；on 表 "在…… 表面"（如花在桌子上）；at 表小地点；above 表 "在…… 上方"。"
  },
  {
    id: 36,
    question: "I bought a present ___ my father on Father's Day.",
    options: ["A. to", "B. for", "C. with", "D. on"],
    translation: "我在父亲节给爸爸买了一份礼物。",
    answer: "B",
    explanation: "固定搭配 "buy sth. for sb." 表 "给某人买某物"；to 表 "向……"；with 表 "和…… 一起"；on 表 "在…… 上"。"
  },
  {
    id: 37,
    question: "They will have a trip ___ October.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "他们将在十月份去旅行。",
    answer: "A",
    explanation: "in 用于 "月份/年份/季节"；on 用于具体日期（如 on October 1st）；at 用于时间点；for 表持续时间。"
  },
  {
    id: 38,
    question: "She is afraid ___ staying at home alone.",
    options: ["A. in", "B. of", "C. with", "D. for"],
    translation: "她害怕独自待在家里。",
    answer: "B",
    explanation: "固定搭配 "be afraid of doing sth." 表 "害怕做某事"；in/with/for 均无此搭配。"
  },
  {
    id: 39,
    question: "We usually have a meeting ___ Monday morning.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "我们通常在周一上午开会。",
    answer: "B",
    explanation: "on 用于 "具体某天的上午/下午/晚上"（Monday morning）；in 用于泛指的上午（in the morning）；at 用于时间点；for 表持续时间。"
  },
  {
    id: 40,
    question: "He finished the work ___ himself.",
    options: ["A. in", "B. by", "C. with", "D. for"],
    translation: "他独自完成了这项工作。",
    answer: "B",
    explanation: "固定搭配 "by oneself" 表 "独自/亲自"；in 表 "在…… 里"；with 表 "和…… 一起"；for 表 "为了"。"
  },
  {
    id: 41,
    question: "I usually go to school ___ 7:30 a.m.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "我通常早上 7 点半去上学。",
    answer: "C",
    explanation: "at 用于具体时间点（7:30 a.m.）；in 用于年/月；on 用于具体日期；for 表持续时间。"
  },
  {
    id: 42,
    question: "There is a cat ___ the chair.",
    options: ["A. in", "B. on", "C. at", "D. under"],
    translation: "椅子下面有一只猫。",
    answer: "D",
    explanation: "under 表 "在…… 下面"；in 表 "在…… 里"（如猫在盒子里）；on 表 "在…… 上"（如猫在椅子上，此处选项需区分方位，under 为正确考点）；at 表小地点。"
  },
  {
    id: 43,
    question: "She is interested ___ drawing pictures.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "她对画画感兴趣。",
    answer: "A",
    explanation: "固定搭配 "be interested in doing sth." 表 "对做某事感兴趣"；on/at/for 均无此搭配。"
  },
  {
    id: 44,
    question: "We will have a test ___ the end of this month.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "我们将在这个月末有一场考试。",
    answer: "C",
    explanation: "固定搭配 "at the end of" 表 "在…… 末尾"；in the end 表 "最后"（不接 of）；on 用于具体日期；for 表持续时间。"
  },
  {
    id: 45,
    question: "He went to London ___ plane.",
    options: ["A. by", "B. on", "C. in", "D. with"],
    translation: "他坐飞机去了伦敦。",
    answer: "A",
    explanation: ""by + 交通工具" 表 "乘坐"（by plane）；on 用于 "有修饰的交通工具"（如 on a big plane）；in 用于 "封闭交通工具"（如 in a car）；with 表 "用…… 工具"。"
  },
  {
    id: 46,
    question: "We usually have lunch ___ 12:00 p.m.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "我们通常中午 12 点吃午饭。",
    answer: "C",
    explanation: "at 用于具体时间点（12:00 p.m.）；in 用于年/月；on 用于具体日期；for 表持续时间。"
  },
  {
    id: 47,
    question: "She helps her mom ___ the housework every weekend.",
    options: ["A. in", "B. on", "C. with", "D. for"],
    translation: "她每周都帮妈妈做家务。",
    answer: "C",
    explanation: "固定搭配 "help sb. with sth." 表 "帮某人做某事"；in/on/for 均无此搭配。"
  },
  {
    id: 48,
    question: "They arrived ___ Shanghai yesterday.",
    options: ["A. in", "B. at", "C. to", "D. for"],
    translation: "他们昨天到达了上海。",
    answer: "A",
    explanation: ""arrive in + 大地点"（上海是城市，大地点）；"arrive at + 小地点"（如车站）；arrive 不与 to/for 搭配。"
  },
  {
    id: 49,
    question: "I will go to the park ___ Sunday.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "我将在周日去公园。",
    answer: "B",
    explanation: "on 用于 "星期几"（on Sunday）；in 用于年/月；at 用于时间点；for 表持续时间。"
  },
  {
    id: 50,
    question: "There is a book ___ the desk.",
    options: ["A. in", "B. on", "C. at", "D. under"],
    translation: "桌子上有一本书。",
    answer: "B",
    explanation: "on 表 "在…… 表面"（书在桌子上）；in 表 "在…… 里"（如书在抽屉里）；at 表小地点；under 表 "在…… 下面"。"
  },
  {
    id: 51,
    question: "She is good ___ playing volleyball.",
    options: ["A. in", "B. at", "C. with", "D. for"],
    translation: "她擅长打排球。",
    answer: "B",
    explanation: "be good at doing sth. 表 "擅长做某事"；be good with 表 "善于相处"；be good in 表 "在某领域表现好"；be good for 表 "对…… 有益"。"
  },
  {
    id: 52,
    question: "We will have a party ___ the evening of December 25th.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "我们将在 12 月 25 日晚上举办派对。",
    answer: "B",
    explanation: "on 用于 "具体某天的晚上"（the evening of December 25th）；in 用于泛指的晚上（in the evening）；at 用于时间点；for 表持续时间。"
  },
  {
    id: 53,
    question: "He bought a new bike ___ 300 yuan.",
    options: ["A. in", "B. on", "C. for", "D. with"],
    translation: "他花 300 元买了一辆新自行车。",
    answer: "C",
    explanation: ""buy sth. for + 钱数" 表 "花…… 钱买某物"；in 表 "用…… 货币"（如 pay in RMB）；on 表 "在…… 上花钱"（如 spend money on sth.）；with 表 "用…… 工具"。"
  },
  {
    id: 54,
    question: "She lives ___ 10 Downing Street.",
    options: ["A. in", "B. on", "C. at", "D. to"],
    translation: "她住在唐宁街 10 号。",
    answer: "C",
    explanation: "at 用于 "具体门牌号"（10 Downing Street）；in 用于 "街道名称"（如 in Downing Street）；on 用于 "街道"（如 on this street）；to 表 "向……"。"
  },
  {
    id: 55,
    question: "We usually play football ___ the afternoon.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "我们通常在下午踢足球。",
    answer: "A",
    explanation: "in 用于 "泛指的下午"（in the afternoon）；on 用于 "具体某天的下午"；at 用于时间点；for 表持续时间。"
  },
  {
    id: 56,
    question: "They finished the project ___ three days.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "他们用了三天完成了这个项目。",
    answer: "A",
    explanation: "in + 时间段表 "在……（时间）内完成"（用于过去时/将来时）；on 用于具体日期；at 用于时间点；for + 时间段表 "持续了…… 时间"（强调过程）。此处表 "三天内完成"，用 in。"
  },
  {
    id: 57,
    question: "She is afraid ___ the dark.",
    options: ["A. in", "B. of", "C. with", "D. for"],
    translation: "她害怕黑暗。",
    answer: "B",
    explanation: "固定搭配 "be afraid of sth." 表 "害怕某物"；in/with/for 均无此搭配。"
  },
  {
    id: 58,
    question: "We went to the zoo ___ bus.",
    options: ["A. by", "B. on", "C. in", "D. with"],
    translation: "我们坐公交车去了动物园。",
    answer: "A",
    explanation: ""by + 交通工具" 表 "乘坐"（by bus）；on 用于 "有修饰的交通工具"（如 on a yellow bus）；in 用于 "封闭交通工具"（如 in a car）；with 表 "用…… 工具"。"
  },
  {
    id: 59,
    question: "I usually have dinner at 6 p.m. ___ weekdays.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "我工作日通常晚上 6 点吃晚饭。",
    answer: "B",
    explanation: "on 用于 "weekdays/weekends"（工作日/周末）；in 用于年/月；at 用于时间点；for 表持续时间。"
  },
  {
    id: 60,
    question: "She is interested ___ reading novels.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "她对读小说感兴趣。",
    answer: "A",
    explanation: "固定搭配 "be interested in doing sth." 表 "对做某事感兴趣"；on/at/for 均无此搭配。"
  },
  {
    id: 61,
    question: "We will have a test ___ next Monday.",
    options: ["A. in", "B. on", "C. at", "D. /"],
    translation: "我们下周一将有一场考试。",
    answer: "D",
    explanation: "next + 星期几（next Monday）前不加介词；in 用于 "in + 时间段"（如 in a week）；on 用于具体日期（如 on Monday）；at 用于时间点。"
  },
  {
    id: 62,
    question: "They arrived ___ the airport at 9 a.m.",
    options: ["A. in", "B. at", "C. to", "D. for"],
    translation: "他们早上 9 点到达了机场。",
    answer: "B",
    explanation: ""arrive at + 小地点"（airport 是小地点）；"arrive in + 大地点"（如 city）；arrive 不与 to/for 搭配。"
  },
  {
    id: 63,
    question: "There is a bridge ___ the road.",
    options: ["A. in", "B. on", "C. over", "D. above"],
    translation: "马路上方有一座桥。",
    answer: "C",
    explanation: "over 表 "在…… 正上方（跨越）"，桥跨越马路，用 over；in 表 "在…… 里"；on 表 "在…… 表面（接触）"；above 表 "在…… 上方（无跨越）"。"
  },
  {
    id: 64,
    question: "He bought a present ___ his sister.",
    options: ["A. to", "B. for", "C. with", "D. on"],
    translation: "他给他妹妹买了一份礼物。",
    answer: "B",
    explanation: "固定搭配 "buy sth. for sb." 表 "给某人买某物"；to 表 "向……"；with 表 "和…… 一起"；on 表 "在…… 上"。"
  },
  {
    id: 65,
    question: "We usually have a meeting ___ Friday afternoon.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "我们通常在周五下午开会。",
    answer: "B",
    explanation: "on 用于 "具体某天的下午"（Friday afternoon）；in 用于泛指的下午（in the afternoon）；at 用于时间点；for 表持续时间。"
  },
  {
    id: 66,
    question: "She lives ___ the third floor.",
    options: ["A. in", "B. on", "C. at", "D. to"],
    translation: "她住在三楼。",
    answer: "B",
    explanation: "固定搭配 "on the + 序数词 + floor" 表 "在第…… 层楼"；in 表 "在…… 内部"；at 表小地点；to 表 "向……"。"
  },
  {
    id: 67,
    question: "We usually go to school ___ Monday to Friday.",
    options: ["A. in", "B. on", "C. from", "D. for"],
    translation: "我们通常从周一到周五去上学。",
    answer: "C",
    explanation: "固定搭配 "from...to..." 表 "从…… 到……"；in 用于年/月；on 用于具体日期；for 表持续时间。"
  },
  {
    id: 68,
    question: "The meeting will start ___ 30 minutes.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "会议将在 30 分钟后开始。",
    answer: "A",
    explanation: "in + 时间段表 "在…… 之后"（用于将来时）；on 用于具体日期；at 用于时间点；for 表持续时间。"
  },
  {
    id: 69,
    question: "She writes ___ a pen.",
    options: ["A. in", "B. on", "C. with", "D. by"],
    translation: "她用钢笔写字。",
    answer: "C",
    explanation: "with 表 "用…… 工具"（具体工具，如 a pen）；in 表 "用…… 材料/语言"（如 in English）；on 表 "在…… 上"；by 表 "用…… 方式"（如 by hand）。"
  },
  {
    id: 70,
    question: "They stayed ___ Beijing for three days.",
    options: ["A. in", "B. at", "C. to", "D. for"],
    translation: "他们在北京待了三天。",
    answer: "A",
    explanation: ""stay in + 大地点"（北京是城市）；"stay at + 小地点"（如 stay at a hotel）；to 表 "向……"；for 表持续时间（此处已有 for three days，不重复）。"
  },
  {
    id: 71,
    question: "The book is ___ the shelf.",
    options: ["A. in", "B. on", "C. at", "D. under"],
    translation: "书在书架上。",
    answer: "B",
    explanation: "on 表 "在…… 表面"（书在书架的层板上）；in 表 "在…… 内部"（如书在抽屉里）；at 表小地点；under 表 "在…… 下面"。"
  },
  {
    id: 72,
    question: "We have classes ___ 8 a.m. to 5 p.m.",
    options: ["A. in", "B. on", "C. from", "D. for"],
    translation: "我们从早上 8 点到下午 5 点有课。",
    answer: "C",
    explanation: "固定搭配 "from...to..." 表 "从…… 到……"；in 用于年/月；on 用于具体日期；for 表持续时间。"
  },
  {
    id: 73,
    question: "She is late ___ school today.",
    options: ["A. in", "B. on", "C. for", "D. at"],
    translation: "她今天上学迟到了。",
    answer: "C",
    explanation: "固定搭配 "be late for sth." 表 "做某事迟到"；in/on/at 均无此搭配。"
  },
  {
    id: 74,
    question: "It's cold ___ winter in Harbin.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "哈尔滨的冬天很冷。",
    answer: "A",
    explanation: "in 用于 "季节"（winter）；on 用于具体日期；at 用于时间点；for 表 "为了"。"
  },
  {
    id: 75,
    question: "He succeeded ___ hard work.",
    options: ["A. in", "B. on", "C. with", "D. by"],
    translation: "他通过努力工作取得了成功。",
    answer: "D",
    explanation: "by 表 "通过…… 方式/手段"（hard work 是方式）；in 表 "在…… 方面"（如 succeed in doing sth.）；on 表 "在…… 上"；with 表 "用…… 工具"。"
  },
  {
    id: 76,
    question: "The cat is sitting ___ the sofa.",
    options: ["A. in", "B. on", "C. at", "D. under"],
    translation: "猫正坐在沙发上。",
    answer: "B",
    explanation: "on 表 "在…… 表面"（沙发是平面，猫在上面）；in 表 "在…… 内部"（如在沙发缝隙里）；at 表小地点；under 表 "在…… 下面"。"
  },
  {
    id: 77,
    question: "We will leave ___ Shanghai tomorrow.",
    options: ["A. in", "B. for", "C. to", "D. at"],
    translation: "我们明天将动身去上海。",
    answer: "B",
    explanation: "固定搭配 "leave for + 目的地" 表 "动身去某地"；in 表 "在…… 里"；to 表 "向……"（leave to 表 "留给"，非 "去某地"）；at 表小地点。"
  },
  {
    id: 78,
    question: "She learned English ___ watching movies.",
    options: ["A. in", "B. on", "C. by", "D. with"],
    translation: "她通过看电影学习英语。",
    answer: "C",
    explanation: "by 表 "通过…… 方式"（watching movies 是学习方式）；in 表 "在…… 里"；on 表 "在…… 上"；with 表 "用…… 工具"。"
  },
  {
    id: 79,
    question: "The party will be held ___ 7 p.m. ___ Saturday.",
    options: ["A. in; on", "B. at; on", "C. at; in", "D. in; at"],
    translation: "派对将在周六晚上 7 点举行。",
    answer: "B",
    explanation: "at 用于具体时间点（7 p.m.）；on 用于星期几（Saturday）；in 用于年/月/泛指时间，均不适用此处。"
  },
  {
    id: 80,
    question: "He is famous ___ his paintings.",
    options: ["A. in", "B. on", "C. for", "D. with"],
    translation: "他因他的画作而出名。",
    answer: "C",
    explanation: "固定搭配 "be famous for + 原因" 表 "因…… 而出名"；be famous in 表 "在…… 地方出名"；on/with 无此搭配。"
  },
  {
    id: 81,
    question: "The bank is ___ the post office and the supermarket.",
    options: ["A. in", "B. on", "C. between", "D. among"],
    translation: "银行在邮局和超市之间。",
    answer: "C",
    explanation: "between 表 "在两者之间"（post office 和 supermarket 是两者）；among 表 "在三者及以上之间"；in 表 "在…… 里"；on 表 "在…… 上"。"
  },
  {
    id: 82,
    question: "We walked ___ the park yesterday.",
    options: ["A. in", "B. on", "C. through", "D. across"],
    translation: "我们昨天步行穿过了公园。",
    answer: "C",
    explanation: "through 表 "从内部穿过"（公园是空间，从里面穿过）；across 表 "从表面穿过"（如穿过马路）；in 表 "在…… 里"（不表 "穿过"）；on 表 "在…… 上"。"
  },
  {
    id: 83,
    question: "She depends ___ her parents for money.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "她依靠父母给钱。",
    answer: "B",
    explanation: "固定搭配 "depend on sb./sth." 表 "依靠某人/某物"；in/at/for 均无此搭配。"
  },
  {
    id: 84,
    question: "The temperature is ___ 20℃ today.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "今天的气温是 20 摄氏度。",
    answer: "C",
    explanation: "at 用于 "温度、速度"（如 at 20℃/at 60km/h）；in 用于年/月；on 用于具体日期；for 表 "为了"。"
  },
  {
    id: 85,
    question: "We will have a holiday ___ National Day.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "我们国庆节会放假。",
    answer: "B",
    explanation: "National Day（国庆节，10 月 1 日）是具体日期，用 on；in 用于年/月；at 用于节日期间（如 at Spring Festival）；for 表 "为了"。"
  },
  {
    id: 86,
    question: "He cut the cake ___ a knife.",
    options: ["A. in", "B. on", "C. with", "D. by"],
    translation: "他用刀切开了蛋糕。",
    answer: "C",
    explanation: "with 表 "用…… 工具"（a knife 是具体工具）；in 表 "用…… 材料"；on 表 "在…… 上"；by 表 "通过…… 方式"（如 by cutting）。"
  },
  {
    id: 87,
    question: "The library is open ___ 9 a.m. to 5 p.m.",
    options: ["A. in", "B. on", "C. from", "D. for"],
    translation: "图书馆从早上 9 点到下午 5 点开放。",
    answer: "C",
    explanation: "固定搭配 "from...to..." 表 "从…… 到……"；in 用于年/月；on 用于具体日期；for 表持续时间。"
  },
  {
    id: 88,
    question: "She is worried ___ her exam results.",
    options: ["A. in", "B. on", "C. about", "D. for"],
    translation: "她担心她的考试成绩。",
    answer: "C",
    explanation: "固定搭配 "be worried about sth." 表 "担心某物"；in/on/for 均无此搭配。"
  },
  {
    id: 89,
    question: "They traveled ___ train across the country.",
    options: ["A. in", "B. on", "C. by", "D. with"],
    translation: "他们坐火车环游了全国。",
    answer: "C",
    explanation: ""by + 交通工具" 表 "乘坐"（by train）；on 用于 "有修饰的交通工具"（如 on a fast train）；in 用于 "封闭交通工具"（如 in a car）；with 表 "用…… 工具"。"
  },
  {
    id: 90,
    question: "The book is written ___ Mark Twain.",
    options: ["A. in", "B. on", "C. by", "D. with"],
    translation: "这本书是马克·吐温写的。",
    answer: "C",
    explanation: "by 表 "由……（人）"（动作的执行者）；in 表 "用…… 语言"；on 表 "在…… 上"；with 表 "用…… 工具"。"
  },
  {
    id: 91,
    question: "We celebrated Christmas ___ our friends.",
    options: ["A. in", "B. on", "C. with", "D. by"],
    translation: "我们和朋友们一起庆祝了圣诞节。",
    answer: "C",
    explanation: "with 表 "和…… 一起"；in 表 "在…… 里"；on 表 "在…… 上"；by 表 "通过…… 方式"。"
  },
  {
    id: 92,
    question: "The meeting lasted ___ two hours.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "会议持续了两个小时。",
    answer: "D",
    explanation: "for + 时间段表 "持续了…… 时间"；in 用于 "在…… 内"；on 用于具体日期；at 用于时间点。"
  },
  {
    id: 93,
    question: "She is responsible ___ the project.",
    options: ["A. in", "B. on", "C. for", "D. with"],
    translation: "她负责这个项目。",
    answer: "C",
    explanation: "固定搭配 "be responsible for sth." 表 "对某事负责"；in/on/with 均无此搭配。"
  },
  {
    id: 94,
    question: "We went swimming ___ the lake.",
    options: ["A. in", "B. on", "C. at", "D. under"],
    translation: "我们去湖里游泳了。",
    answer: "A",
    explanation: "in 表 "在…… 内部（液体）"（在湖里）；on 表 "在…… 表面"（如在湖面上划船）；at 表 "在…… 地点"（如 at the lake 边）；under 表 "在…… 下面"。"
  },
  {
    id: 95,
    question: "He arrived ___ the hotel late at night.",
    options: ["A. in", "B. at", "C. to", "D. for"],
    translation: "他深夜到达了酒店。",
    answer: "B",
    explanation: ""arrive at + 小地点"（hotel 是小地点）；"arrive in + 大地点"（如 city）；arrive 不与 to/for 搭配。"
  },
  {
    id: 96,
    question: "The tree is ___ the front of the house.",
    options: ["A. in", "B. on", "C. at", "D. to"],
    translation: "树在房子的前面。",
    answer: "C",
    explanation: "in the front of 表 "在…… 内部的前面"；at the front of 表 "在……（外部）的前面"（树在房子外部前方，at 更准确）；on 表 "在…… 上"；to 表 "向……"。"
  },
  {
    id: 97,
    question: "She paid ___ the book with cash.",
    options: ["A. in", "B. on", "C. for", "D. with"],
    translation: "她用现金付了书钱。",
    answer: "C",
    explanation: "固定搭配 "pay for sth." 表 "为某物付款"；in 表 "用…… 货币"；on 表 "在…… 上"；with 表 "用…… 工具"（此处 cash 是支付方式，pay for 是固定搭配）。"
  },
  {
    id: 98,
    question: "We waited ___ the bus stop for 20 minutes.",
    options: ["A. in", "B. on", "C. at", "D. for"],
    translation: "我们在公交车站等了 20 分钟。",
    answer: "C",
    explanation: "at 用于 "小地点"（bus stop）；in 用于 "大地点"（如 bus station）；on 表 "在…… 上"；for 表 "为了"。"
  },
  {
    id: 99,
    question: "The movie starts ___ 7:30 p.m. ___ Friday.",
    options: ["A. at; on", "B. in; on", "C. at; in", "D. on; at"],
    translation: "电影周五晚上 7 点半开始。",
    answer: "A",
    explanation: "at 用于具体时间点（7:30 p.m.）；on 用于星期几（Friday）；in 用于年/月，不适用此处。"
  },
  {
    id: 100,
    question: "She agreed ___ my plan.",
    options: ["A. in", "B. on", "C. to", "D. with"],
    translation: "她同意了我的计划。",
    answer: "C",
    explanation: "固定搭配 "agree to sth." 表 "同意（计划、建议等）"；agree with 表 "同意某人的观点"；in/on 无此搭配。"
  }
];

if (typeof window !== 'undefined') {
  window.prepositions = prepositions;
}

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = prepositions;
}