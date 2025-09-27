// 高中生代词100道选择题（含翻译与解析）
const pronouns = [
  {
    id: 1,
    question: "___ is my best friend. I often play basketball with ___.",
    options: ["A. He; he", "B. He; him", "C. Him; he", "D. Him; him"],
    translation: "他是我最好的朋友。我经常和他一起打篮球。",
    answer: "B",
    explanation: "第一空作主语，需用人称代词主格 He；第二空作介词 with 的宾语，需用宾格 him。主格用于主语位置，宾格用于宾语位置，排除 A、C、D。"
  },
  {
    id: 2,
    question: "Is this pencil ___? No, it's not ___. It's Lily's.",
    options: ["A. your; my", "B. yours; mine", "C. your; mine", "D. yours; my"],
    translation: "这支铅笔是你的吗？不，它不是我的。它是莉莉的。",
    answer: "B",
    explanation: "形容词性物主代词（your/my）后需接名词，名词性物主代词（yours/mine）可单独使用（相当于 "形容词性物主代词 + 名词"）。两空后均无名词，需用名词性物主代词，排除 A、C、D。"
  },
  {
    id: 3,
    question: "She can dress ___ now. She doesn't need her mom's help.",
    options: ["A. herself", "B. her", "C. she", "D. hers"],
    translation: "她现在能自己穿衣服了。她不需要妈妈帮忙。",
    answer: "A",
    explanation: "反身代词 \"oneself\" 表示 \"某人自己\"，固定搭配 \"dress oneself\" 意为 \"自己穿衣服\"；her 是宾格/形容词性物主代词，she 是主格，hers 是名词性物主代词，均无 \"自己\" 含义，排除 B、C、D。"
  },
  {
    id: 4,
    question: "___ books are about history. ___ are about science.",
    options: ["A. This; That", "B. These; Those", "C. This; Those", "D. These; That"],
    translation: "这些书是关于历史的。那些书是关于科学的。",
    answer: "B",
    explanation: "指示代词中，this/that 修饰单数名词，these/those 修饰复数名词。两空后均为复数名词 books，需用 these/those，排除 A、C、D。"
  },
  {
    id: 5,
    question: "There are ___ eggs in the fridge. Would you like one?",
    options: ["A. some", "B. any", "C. little", "D. few"],
    translation: "冰箱里有一些鸡蛋。你想来一个吗？",
    answer: "A",
    explanation: "some 用于肯定句表 \"一些\"（修饰可数/不可数名词）；any 用于否定句/疑问句；little 修饰不可数名词表 \"几乎没有\"；few 修饰可数名词表 \"几乎没有\"。此处为肯定句，eggs 是可数名词，排除 B、C、D。"
  },
  {
    id: 6,
    question: "My parents are both teachers. ___ love their students very much.",
    options: ["A. Them", "B. They", "C. Their", "D. Theirs"],
    translation: "我的父母都是老师。他们非常爱他们的学生。",
    answer: "B",
    explanation: "空处作主语，需用人称代词主格 They；Them 是宾格，Their 是形容词性物主代词，Theirs 是名词性物主代词，均不能作主语，排除 A、C、D。"
  },
  {
    id: 7,
    question: "—Whose bag is this? —It's ___. I bought it yesterday.",
    options: ["A. me", "B. my", "C. mine", "D. I"],
    translation: "—这是谁的包？—是我的。我昨天买的。",
    answer: "C",
    explanation: "空处需表示 \"我的包\"，且后无名词，用名词性物主代词 mine（相当于 my bag）；me 是宾格，my 是形容词性物主代词（后需接名词），I 是主格，排除 A、B、D。"
  },
  {
    id: 8,
    question: "The little boy can wash his face by ___.",
    options: ["A. himself", "B. him", "C. he", "D. his"],
    translation: "这个小男孩能自己洗脸。",
    answer: "A",
    explanation: "固定搭配 \"by oneself\" 意为 \"独自\"，主语是 the little boy，对应的反身代词是 himself；him 是宾格，he 是主格，his 是形容词性/名词性物主代词，排除 B、C、D。"
  },
  {
    id: 9,
    question: "___ is a beautiful park. We often go for a walk in ___.",
    options: ["A. This; that", "B. That; this", "C. This; this", "D. That; that"],
    translation: "那是一个美丽的公园。我们经常去那里散步。",
    answer: "D",
    explanation: "第一空指代远处的公园，用 that；第二空指代前文提到的 park，为避免重复，用 that（指代单数可数名词）；this 指代近处事物，不符合 \"去远处公园散步\" 的语境，排除 A、B、C。"
  },
  {
    id: 10,
    question: "We have ___ time left. Hurry up, or we'll be late.",
    options: ["A. few", "B. a few", "C. little", "D. a little"],
    translation: "我们没多少时间了。快点，否则我们会迟到的。",
    answer: "C",
    explanation: "time 是不可数名词，few/a few 修饰可数名词，排除 A、B；little 表 \"几乎没有\"（否定含义），a little 表 \"有一点\"（肯定含义）。由 \"Hurry up\" 可知 \"时间几乎没有\"，排除 D。"
  },
  {
    id: 11,
    question: "—Who taught ___ English last year? —Nobody. I learned it by ___.",
    options: ["A. you; myself", "B. your; me", "C. you; me", "D. your; myself"],
    translation: "—去年谁教你英语的？—没人。我自学的。",
    answer: "A",
    explanation: "第一空作 taught 的宾语，用宾格 you；第二空 \"by oneself\" 表 \"独自\"，主语是 I，反身代词用 myself；your 是形容词性物主代词，me 是宾格（无 \"自己\" 含义），排除 B、C、D。"
  },
  {
    id: 12,
    question: "These are ___ desks. ___ are over there.",
    options: ["A. our; Their", "B. ours; Theirs", "C. our; Theirs", "D. ours; Their"],
    translation: "这些是我们的桌子。他们的在那边。",
    answer: "C",
    explanation: "第一空后有名词 desks，用形容词性物主代词 our；第二空后无名词，用名词性物主代词 theirs（相当于 their desks）；ours 是名词性物主代词（后不接名词），their 是形容词性物主代词（后需接名词），排除 A、B、D。"
  },
  {
    id: 13,
    question: "The girl enjoyed ___ at the party last night.",
    options: ["A. her", "B. herself", "C. she", "D. hers"],
    translation: "这个女孩昨晚在派对上玩得很开心。",
    answer: "B",
    explanation: "固定搭配 \"enjoy oneself\" 意为 \"玩得开心\"，主语是 the girl，反身代词用 herself；her 是宾格/形容词性物主代词，she 是主格，hers 是名词性物主代词，排除 A、C、D。"
  },
  {
    id: 14,
    question: "___ is a new pen. Do you like ___?",
    options: ["A. This; it", "B. This; one", "C. It; this", "D. One; this"],
    translation: "这是一支新钢笔。你喜欢它吗？",
    answer: "A",
    explanation: "第一空指代 \"这支新钢笔\"（近处单数事物），用 this；第二空指代前文提到的具体钢笔，用 it（特指）；one 指代 \"同类不同物\"，不符合 \"指代同一支笔\" 的语境，排除 B、C、D。"
  },
  {
    id: 15,
    question: "Are there ___ oranges in the basket? I want to make juice.",
    options: ["A. some", "B. any", "C. little", "D. a little"],
    translation: "篮子里有橙子吗？我想榨果汁。",
    answer: "B",
    explanation: "any 用于疑问句表 \"一些\"（修饰可数/不可数名词）；some 用于肯定句；little/a little 修饰不可数名词，oranges 是可数名词，排除 A、C、D。"
  },
  {
    id: 16,
    question: "My brother and I are students. ___ go to the same school.",
    options: ["A. We", "B. Us", "C. Our", "D. Ours"],
    translation: "我和我哥哥都是学生。我们上同一所学校。",
    answer: "A",
    explanation: "空处作主语，需用人称代词主格 We；Us 是宾格，Our 是形容词性物主代词，Ours 是名词性物主代词，均不能作主语，排除 B、C、D。"
  },
  {
    id: 17,
    question: "—Is this ruler ___? —No, it's not ___. It's Tom's.",
    options: ["A. your; mine", "B. yours; my", "C. yours; mine", "D. your; my"],
    translation: "—这把尺子是你的吗？—不，它不是我的。它是汤姆的。",
    answer: "C",
    explanation: "两空后均无名词，需用名词性物主代词 yours（你的）和 mine（我的）；your 和 my 是形容词性物主代词（后需接名词），排除 A、B、D。"
  },
  {
    id: 18,
    question: "He hurt ___ when he played basketball yesterday.",
    options: ["A. him", "B. himself", "C. his", "D. he"],
    translation: "他昨天打篮球时伤到了自己。",
    answer: "B",
    explanation: "主语 he 和宾语指同一人，需用反身代词 himself；him 是宾格，his 是形容词性/名词性物主代词，he 是主格，排除 A、C、D。"
  },
  {
    id: 19,
    question: "___ are my favorite fruits. ___ are not sweet enough.",
    options: ["A. These apples; Those pears", "B. This apple; That pear", "C. These apples; That pear", "D. This apple; Those pears"],
    translation: "这些苹果是我最喜欢的水果。那些梨不够甜。",
    answer: "A",
    explanation: "第一空后 be 动词是 are，主语需为复数，用 These apples；第二空后 be 动词是 are，主语也需为复数，用 Those pears；this/that 修饰单数名词，排除 B、C、D。"
  },
  {
    id: 20,
    question: "There is ___ water in the bottle. Let's buy some.",
    options: ["A. few", "B. a few", "C. little", "D. a little"],
    translation: "瓶子里几乎没有水了。我们买一些吧。",
    answer: "C",
    explanation: "water 是不可数名词，few/a few 修饰可数名词，排除 A、B；little 表 \"几乎没有\"（否定，需买水），a little 表 \"有一点\"（肯定，无需买水），排除 D。"
  },
  {
    id: 21,
    question: "—Who helped ___ with the homework? —My sister did.",
    options: ["A. you", "B. your", "C. yours", "D. yourself"],
    translation: "—谁帮你做的作业？—我姐姐帮的。",
    answer: "A",
    explanation: "空处作 helped 的宾语，用宾格 you；your 是形容词性物主代词（后需接名词），yours 是名词性物主代词（后不接名词），yourself 是反身代词（表 \"自己\"，此处需 \"他人帮忙\"），排除 B、C、D。"
  },
  {
    id: 22,
    question: "This is ___ room. ___ is next to ours.",
    options: ["A. they; Their", "B. their; Theirs", "C. theirs; They", "D. them; Theirs"],
    translation: "这是他们的房间。他们的（房间）在我们隔壁。",
    answer: "B",
    explanation: "第一空后有名词 room，用形容词性物主代词 their；第二空后无名词，用名词性物主代词 theirs（相当于 their room）；they 是主格，them 是宾格，theirs 是名词性物主代词（后不接名词），排除 A、C、D。"
  },
  {
    id: 23,
    question: "The children can take care of ___ now.",
    options: ["A. them", "B. themselves", "C. their", "D. theirs"],
    translation: "孩子们现在能照顾自己了。",
    answer: "B",
    explanation: "固定搭配 \"take care of oneself\" 意为 \"照顾自己\"，主语是 the children（复数），反身代词用 themselves；them 是宾格，their 是形容词性物主代词，theirs 是名词性物主代词，排除 A、C、D。"
  },
  {
    id: 24,
    question: "___ is too heavy. Can you help me carry ___?",
    options: ["A. This box; it", "B. This box; one", "C. One box; this", "D. One box; it"],
    translation: "这个箱子太重了。你能帮我搬它吗？",
    answer: "A",
    explanation: "第一空指代 \"这个具体的箱子\"（近处），用 This box；第二空指代前文提到的箱子，用 it（特指）；one 指代 \"同类不同箱\"，不符合语境，排除 B、C、D。"
  },
  {
    id: 25,
    question: "I have ___ good friends. We often meet on weekends.",
    options: ["A. some", "B. any", "C. little", "D. a little"],
    translation: "我有一些好朋友。我们经常在周末见面。",
    answer: "A",
    explanation: "friends 是可数名词复数，little/a little 修饰不可数名词，排除 C、D；some 用于肯定句表 \"一些\"，any 用于否定句/疑问句，排除 B。"
  },
  {
    id: 26,
    question: "___ and ___ are both from China.",
    options: ["A. He; I", "B. Him; me", "C. He; me", "D. Him; I"],
    translation: "他和我都来自中国。",
    answer: "A",
    explanation: "空处作主语，需用人称代词主格 He 和 I（主格并列，I 放后面表礼貌）；Him 和 me 是宾格，不能作主语，排除 B、C、D。"
  },
  {
    id: 27,
    question: "—Is this book ___? —Yes, it's ___. Thank you for returning it.",
    options: ["A. your; mine", "B. yours; my", "C. yours; mine", "D. your; my"],
    translation: "—这本书是你的吗？—是的，是我的。谢谢你还给我。",
    answer: "C",
    explanation: "两空后均无名词，需用名词性物主代词 yours 和 mine；your 和 my 是形容词性物主代词（后需接名词），排除 A、B、D。"
  },
  {
    id: 28,
    question: "She bought ___ a new dress for her birthday.",
    options: ["A. her", "B. herself", "C. she", "D. hers"],
    translation: "她为自己买了一条新裙子作为生日礼物。",
    answer: "B",
    explanation: "主语 she 和宾语指同一人，需用反身代词 herself（表 \"为自己\"）；her 是宾格/形容词性物主代词，she 是主格，hers 是名词性物主代词，排除 A、C、D。"
  },
  {
    id: 29,
    question: "___ flowers are more beautiful than ___ in the garden.",
    options: ["A. These; those", "B. This; that", "C. These; that", "D. This; those"],
    translation: "这些花比花园里的那些花更漂亮。",
    answer: "A",
    explanation: "flowers 是复数名词，用 these/those 修饰；this/that 修饰单数名词，排除 B、C、D。"
  },
  {
    id: 30,
    question: "We have ___ milk. Let's make tea.",
    options: ["A. few", "B. a few", "C. little", "D. a little"],
    translation: "我们有一点牛奶。我们泡茶吧。",
    answer: "D",
    explanation: "milk 是不可数名词，few/a few 修饰可数名词，排除 A、B；a little 表 \"有一点\"（肯定，可泡茶），little 表 \"几乎没有\"（否定，无法泡茶），排除 C。"
  },
  {
    id: 31,
    question: "My parents often tell ___ stories before bed.",
    options: ["A. I", "B. me", "C. my", "D. mine"],
    translation: "我父母经常在睡前给我讲故事。",
    answer: "B",
    explanation: "空处作 tell 的宾语，用宾格 me；I 是主格，my 是形容词性物主代词，mine 是名词性物主代词，排除 A、C、D。"
  },
  {
    id: 32,
    question: "___ classroom is bigger than ___.",
    options: ["A. Our; their", "B. Ours; theirs", "C. Our; theirs", "D. Ours; their"],
    translation: "我们的教室比他们的（教室）大。",
    answer: "C",
    explanation: "第一空后有名词 classroom，用形容词性物主代词 Our；第二空后无名词，用名词性物主代词 theirs（相当于 their classroom）；ours 是名词性物主代词（后不接名词），their 是形容词性物主代词（后需接名词），排除 A、B、D。"
  },
  {
    id: 33,
    question: "He can cook by ___. He doesn't need anyone's help.",
    options: ["A. him", "B. himself", "C. his", "D. he"],
    translation: "他能自己做饭。他不需要任何人帮忙。",
    answer: "B",
    explanation: "固定搭配 \"by oneself\" 意为 \"独自\"，主语是 he，反身代词用 himself；him 是宾格，his 是形容词性/名词性物主代词，he 是主格，排除 A、C、D。"
  },
  {
    id: 34,
    question: "___ is a nice day. Let's go out and enjoy ___.",
    options: ["A. It; it", "B. This; this", "C. It; this", "D. This; it"],
    translation: "今天天气很好。我们出去享受这好天气吧。",
    answer: "A",
    explanation: "指代 \"天气\" 用 it（固定用法）；第二空指代前文的 \"nice day\"，用 it（特指）；this 指代 \"近处事物\"，不用于指代天气，排除 B、C、D。"
  },
  {
    id: 35,
    question: "Are there ___ students in the classroom? I need to talk to someone.",
    options: ["A. some", "B. any", "C. little", "D. a little"],
    translation: "教室里有学生吗？我需要和某人说话。",
    answer: "B",
    explanation: "students 是可数名词复数，little/a little 修饰不可数名词，排除 C、D；any 用于疑问句表 \"一些\"，some 用于肯定句，排除 A。"
  },
  {
    id: 36,
    question: "___ are my classmates. I often play games with ___.",
    options: ["A. They; them", "B. Them; they", "C. Their; theirs", "D. Theirs; their"],
    translation: "他们是我的同学。我经常和他们一起玩游戏。",
    answer: "A",
    explanation: "第一空作主语，用主格 They；第二空作 with 的宾语，用宾格 them；Their 是形容词性物主代词，Theirs 是名词性物主代词，排除 B、C、D。"
  },
  {
    id: 37,
    question: "This pen is ___. ___ is lost.",
    options: ["A. my; Your", "B. mine; Yours", "C. my; Yours", "D. mine; Your"],
    translation: "这支钢笔是我的。你的（钢笔）丢了。",
    answer: "B",
    explanation: "两空后均无名词，需用名词性物主代词 mine（我的）和 Yours（你的）；my 和 Your 是形容词性物主代词（后需接名词），排除 A、C、D。"
  },
  {
    id: 38,
    question: "The cat washed ___ after eating the fish.",
    options: ["A. it", "B. itself", "C. its", "D. it's"],
    translation: "这只猫吃鱼后给自己洗了澡。",
    answer: "B",
    explanation: "主语 the cat 和宾语指同一动物，用反身代词 itself；it 是宾格，its 是形容词性物主代词，it's 是 \"it is\" 的缩写，排除 A、C、D。"
  },
  {
    id: 39,
    question: "___ books are on the shelf. ___ are in the desk.",
    options: ["A. Those; These", "B. That; This", "C. Those; This", "D. That; These"],
    translation: "那些书在书架上。这些书在书桌里。",
    answer: "A",
    explanation: "books 是复数名词，用 those/these 修饰；that/this 修饰单数名词，排除 B、C、D。"
  },
  {
    id: 40,
    question: "There are ___ people in the park today. It's very crowded.",
    options: ["A. few", "B. a few", "C. little", "D. a little"],
    translation: "今天公园里有一些人。非常拥挤。",
    answer: "B",
    explanation: "people 是可数名词复数，little/a little 修饰不可数名词，排除 C、D；a few 表 \"有一些\"（肯定，拥挤），few 表 \"几乎没有\"（否定，不拥挤），排除 A。"
  },
  {
    id: 41,
    question: "My teacher often helps ___ with my English.",
    options: ["A. I", "B. me", "C. my", "D. mine"],
    translation: "我的老师经常帮我学英语。",
    answer: "B",
    explanation: "空处作 helps 的宾语，用宾格 me；I 是主格，my 是形容词性物主代词，mine 是名词性物主代词，排除 A、C、D。"
  },
  {
    id: 42,
    question: "___ is a red car. Is ___ yours?",
    options: ["A. This; it", "B. This; one", "C. It; this", "D. One; this"],
    translation: "这是一辆红色的车。它是你的吗？",
    answer: "A",
    explanation: "第一空指代 \"这辆红色的车\"（近处），用 this；第二空指代前文提到的车，用 it（特指）；one 指代 \"同类不同车\"，不符合语境，排除 B、C、D。"
  },
  {
    id: 43,
    question: "We enjoyed ___ at the beach last weekend.",
    options: ["A. us", "B. ourselves", "C. our", "D. ours"],
    translation: "我们上周末在海滩玩得很开心。",
    answer: "B",
    explanation: "固定搭配 \"enjoy oneself\" 意为 \"玩得开心\"，主语是 we，反身代词用 ourselves；us 是宾格，our 是形容词性物主代词，ours 是名词性物主代词，排除 A、C、D。"
  },
  {
    id: 44,
    question: "___ is too hot. Can you open the window?",
    options: ["A. It", "B. This", "C. That", "D. One"],
    translation: "天气太热了。你能打开窗户吗？",
    answer: "A",
    explanation: "指代 \"天气\" 用 it（固定用法）；this/that 指代 \"具体事物\"，one 指代 \"同类事物\"，均不用于指代天气，排除 B、C、D。"
  },
  {
    id: 45,
    question: "I don't have ___ money. Can you lend me some?",
    options: ["A. some", "B. any", "C. little", "D. a little"],
    translation: "我没有钱了。你能借我一些吗？",
    answer: "B",
    explanation: "any 用于否定句表 \"一些\"；some 用于肯定句；little/a little 表 \"数量少\"，此处强调 \"没有\"（需借钱），排除 A、C、D。"
  },
  {
    id: 46,
    question: "___ and ___ will go to the cinema together.",
    options: ["A. She; me", "B. Her; I", "C. She; I", "D. Her; me"],
    translation: "她和我将一起去看电影。",
    answer: "C",
    explanation: "空处作主语，需用人称代词主格 She 和 I（主格并列，I 放后面）；Her 和 me 是宾格，不能作主语，排除 A、B、D。"
  },
  {
    id: 47,
    question: "—Whose pencil case is this? —It's ___.",
    options: ["A. her", "B. hers", "C. she", "D. herself"],
    translation: "—这是谁的铅笔盒？—是她的。",
    answer: "B",
    explanation: "空处需表示 \"她的铅笔盒\"，后无名词，用名词性物主代词 hers；her 是宾格/形容词性物主代词，she 是主格，herself 是反身代词，排除 A、C、D。"
  },
  {
    id: 48,
    question: "He made ___ a model plane last week.",
    options: ["A. him", "B. himself", "C. his", "D. he"],
    translation: "他上周给自己做了一个飞机模型。",
    answer: "B",
    explanation: "主语 he 和宾语指同一人，用反身代词 himself（表 \"为自己\"）；him 是宾格，his 是形容词性/名词性物主代词，he 是主格，排除 A、C、D。"
  },
  {
    id: 49,
    question: "___ apples are fresh. ___ are not.",
    options: ["A. These; Those", "B. This; That", "C. These; That", "D. This; Those"],
    translation: "这些苹果很新鲜。那些（苹果）不新鲜。",
    answer: "A",
    explanation: "apples 是复数名词，用 these/those 修饰；this/that 修饰单数名词，排除 B、C、D。"
  },
  {
    id: 50,
    question: "There is ___ bread on the plate. Let's have breakfast.",
    options: ["A. few", "B. a few", "C. little", "D. a little"],
    translation: "盘子里有一点面包。我们吃早餐吧。",
    answer: "D",
    explanation: "bread 是不可数名词，few/a few 修饰可数名词，排除 A、B；a little 表 \"有一点\"（肯定，可吃早餐），little 表 \"几乎没有\"（否定，无法吃早餐），排除 C。"
  },
  {
    id: 51,
    question: "The teacher asked ___ to answer the question.",
    options: ["A. I", "B. me", "C. my", "D. mine"],
    translation: "老师让我回答问题。",
    answer: "B",
    explanation: "空处作 asked 的宾语，用宾格 me；I 是主格，my 是形容词性物主代词，mine 是名词性物主代词，排除 A、C、D。"
  },
  {
    id: 52,
    question: "___ room is clean. ___ is dirty.",
    options: ["A. Our; Their", "B. Ours; Theirs", "C. Our; Theirs", "D. Ours; Their"],
    translation: "我们的房间很干净。他们的（房间）很脏。",
    answer: "C",
    explanation: "第一空后有名词 room，用形容词性物主代词 Our；第二空后无名词，用名词性物主代词 Theirs；Ours 是名词性物主代词（后不接名词），Their 是形容词性物主代词（后需接名词），排除 A、B、D。"
  },
  {
    id: 53,
    question: "She can solve the problem by ___.",
    options: ["A. her", "B. herself", "C. she", "D. hers"],
    translation: "她能自己解决这个问题。",
    answer: "B",
    explanation: "固定搭配 \"by oneself\" 意为 \"独自\"，主语是 she，反身代词用 herself；her 是宾格/形容词性物主代词，she 是主格，hers 是名词性物主代词，排除 A、C、D。"
  },
  {
    id: 54,
    question: "___ is a big tree in front of the house. ___ is very old.",
    options: ["A. It; This", "B. This; It", "C. It; That", "D. That; It"],
    translation: "房子前面有一棵大树。它很老了。",
    answer: "B",
    explanation: "第一空指代 \"这棵大树\"（近处），用 This；第二空指代前文提到的树，用 it（特指）；it 不用于指代近处具体事物，that 指代远处事物，排除 A、C、D。"
  },
  {
    id: 55,
    question: "Are there ___ tomatoes in the fridge? I need to make salad.",
    options: ["A. some", "B. any", "C. little", "D. a little"],
    translation: "冰箱里有西红柿吗？我需要做沙拉。",
    answer: "B",
    explanation: "tomatoes 是可数名词复数，little/a little 修饰不可数名词，排除 C、D；any 用于疑问句表 \"一些\"，some 用于肯定句，排除 A。"
  },
  {
    id: 56,
    question: "___ are good friends. ___ often help each other.",
    options: ["A. They; We", "B. We; They", "C. We; We", "D. They; They"],
    translation: "我们是好朋友。我们经常互相帮助。",
    answer: "C",
    explanation: "由 \"help each other\"（互相帮助）可知，两空指代同一群体，用 We（我们）；They 指代 \"他们\"，不符合 \"互相帮助的同一群体\" 语境，排除 A、B、D。"
  },
  {
    id: 57,
    question: "This bag is ___. ___ is blue.",
    options: ["A. my; Yours", "B. mine; Your", "C. mine; Yours", "D. my; Your"],
    translation: "这个包是我的。你的（包）是蓝色的。",
    answer: "C",
    explanation: "两空后均无名词，需用名词性物主代词 mine 和 Yours；my 和 Your 是形容词性物主代词（后需接名词），排除 A、B、D。"
  },
  {
    id: 58,
    question: "The boy cut ___ when he peeled the apple.",
    options: ["A. him", "B. himself", "C. his", "D. he"],
    translation: "这个男孩削苹果时割到了自己。",
    answer: "B",
    explanation: "主语 the boy 和宾语指同一人，用反身代词 himself；him 是宾格，his 是形容词性/名词性物主代词，he 是主格，排除 A、C、D。"
  },
  {
    id: 59,
    question: "___ are my shoes. ___ are my sister's.",
    options: ["A. These; Those", "B. This; That", "C. These; That", "D. This; Those"],
    translation: "这些是我的鞋子。那些是我姐姐的（鞋子）。",
    answer: "A",
    explanation: "shoes 是复数名词，用 these/those 修饰；this/that 修饰单数名词，排除 B、C、D。"
  },
  {
    id: 60,
    question: "We have ___ time. We can take our time.",
    options: ["A. few", "B. a few", "C. little", "D. a little"],
    translation: "我们有一点时间。我们可以慢慢来。",
    answer: "D",
    explanation: "time 是不可数名词，few/a few 修饰可数名词，排除 A、B；a little 表 \"有一点\"（肯定，可慢慢来），little 表 \"几乎没有\"（否定，需 hurry），排除 C。"
  },
  {
    id: 61,
    question: "My mother told ___ a interesting story last night.",
    options: ["A. I", "B. me", "C. my", "D. mine"],
    translation: "我妈妈昨晚给我讲了一个有趣的故事。",
    answer: "B",
    explanation: "空处作 told 的宾语，用宾格 me；I 是主格，my 是形容词性物主代词，mine 是名词性物主代词，排除 A、C、D。"
  },
  {
    id: 62,
    question: "___ is a new schoolbag. Is ___ yours?",
    options: ["A. This; it", "B. This; one", "C. It; this", "D. One; this"],
    translation: "这是一个新书包。它是你的吗？",
    answer: "A",
    explanation: "第一空指代 \"这个新书包\"（近处），用 this；第二空指代前文提到的书包，用 it（特指）；one 指代 \"同类不同包\"，不符合语境，排除 B、C、D。"
  },
  {
    id: 63,
    question: "They hurt ___ when they played football.",
    options: ["A. them", "B. themselves", "C. their", "D. theirs"],
    translation: "他们踢足球时伤到了自己。",
    answer: "B",
    explanation: "主语 they 和宾语指同一群体，用反身代词 themselves；them 是宾格，their 是形容词性物主代词，theirs 是名词性物主代词，排除 A、C、D。"
  },
  {
    id: 64,
    question: "___ is cold today. You'd better wear warm clothes.",
    options: ["A. It", "B. This", "C. That", "D. One"],
    translation: "今天很冷。你最好穿暖和点的衣服。",
    answer: "A",
    explanation: "指代 \"天气\" 用 it（固定用法）；this/that 指代 \"具体事物\"，one 指代 \"同类事物\"，均不用于指代天气，排除 B、C、D。"
  },
  {
    id: 65,
    question: "I don't have ___ pens. Can you give me one?",
    options: ["A. some", "B. any", "C. little", "D. a little"],
    translation: "我没有钢笔了。你能给我一支吗？",
    answer: "B",
    explanation: "pens 是可数名词复数，little/a little 修饰不可数名词，排除 C、D；any 用于否定句表 \"一些\"，some 用于肯定句，排除 A。"
  },
  {
    id: 66,
    question: "___ and ___ are in the same class.",
    options: ["A. She; him", "B. Her; he", "C. She; he", "D. Her; him"],
    translation: "她和他在同一个班。",
    answer: "C",
    explanation: "空处作主语，需用人称代词主格 She 和 he；Her 和 him 是宾格，不能作主语，排除 A、B、D。"
  },
  {
    id: 67,
    question: "—Whose eraser is this? —It's ___.",
    options: ["A. her", "B. hers", "C. she", "D. herself"],
    translation: "—这是谁的橡皮？—是她的。",
    answer: "B",
    explanation: "空处需表示 \"她的橡皮\"，后无名词，用名词性物主代词 hers；her 是宾格/形容词性物主代词，she 是主格，herself 是反身代词，排除 A、C、D。"
  },
  {
    id: 68,
    question: "She bought ___ a new pair of shoes.",
    options: ["A. her", "B. herself", "C. she", "D. hers"],
    translation: "她给自己买了一双新鞋。",
    answer: "B",
    explanation: "主语 she 和宾语指同一人，用反身代词 herself（表 \"为自己\"）；her 是宾格/形容词性物主代词，she 是主格，hers 是名词性物主代词，排除 A、C、D。"
  },
  {
    id: 69,
    question: "___ books are on the desk. ___ are in the bag.",
    options: ["A. Those; These", "B. That; This", "C. Those; This", "D. That; These"],
    translation: "那些书在书桌上。这些书在书包里。",
    answer: "A",
    explanation: "books 是复数名词，用 those/these 修饰；this/that 修饰单数名词，排除 B、C、D。"
  },
  {
    id: 70,
    question: "There is ___ juice in the glass. Let's drink it.",
    options: ["A. few", "B. a few", "C. little", "D. a little"],
    translation: "杯子里有一点果汁。我们喝了吧。",
    answer: "D",
    explanation: "juice 是不可数名词，few/a few 修饰可数名词，排除 A、B；a little 表 \"有一点\"（肯定，可喝），little 表 \"几乎没有\"（否定，无法喝），排除 C。"
  },
  {
    id: 71,
    question: "The doctor advised ___ to eat more vegetables.",
    options: ["A. I", "B. me", "C. my", "D. mine"],
    translation: "医生建议我多吃蔬菜。",
    answer: "B",
    explanation: "空处作 advised 的宾语，用宾格 me；I 是主格，my 是形容词性物主代词，mine 是名词性物主代词，排除 A、C、D。"
  },
  {
    id: 72,
    question: "___ room is small but clean. ___ is big but messy.",
    options: ["A. Our; Their", "B. Ours; Theirs", "C. Our; Theirs", "D. Ours; Their"],
    translation: "我们的房间小但干净。他们的（房间）大但乱。",
    answer: "C",
    explanation: "第一空后有名词 room，用形容词性物主代词 Our；第二空后无名词，用名词性物主代词 Theirs；Ours 是名词性物主代词（后不接名词），Their 是形容词性物主代词（后需接名词），排除 A、B、D。"
  },
  {
    id: 73,
    question: "He can finish the work by ___.",
    options: ["A. him", "B. himself", "C. his", "D. he"],
    translation: "他能自己完成这项工作。",
    answer: "B",
    explanation: "固定搭配 \"by oneself\" 意为 \"独自\"，主语是 he，反身代词用 himself；him 是宾格，his 是形容词性/名词性物主代词，he 是主格，排除 A、C、D。"
  },
  {
    id: 74,
    question: "___ is a beautiful park. We often go there.",
    options: ["A. This", "B. It", "C. That", "D. One"],
    translation: "那是一个美丽的公园。我们经常去那里。",
    answer: "C",
    explanation: "由 \"go there\"（去那里）可知，公园在远处，用 that；this 指代近处，it 指代 \"天气/时间\"，one 指代 \"同类不同公园\"，排除 A、B、D。"
  },
  {
    id: 75,
    question: "Are there ___ eggs in the basket? I want to make a cake.",
    options: ["A. some", "B. any", "C. little", "D. a little"],
    translation: "篮子里有鸡蛋吗？我想做蛋糕。",
    answer: "B",
    explanation: "eggs 是可数名词复数，little/a little 修饰不可数名词，排除 C、D；any 用于疑问句表 \"一些\"，some 用于肯定句，排除 A。"
  },
  {
    id: 76,
    question: "___ are from America. ___ speak English.",
    options: ["A. They; We", "B. We; They", "C. They; They", "D. We; We"],
    translation: "他们来自美国。他们说英语。",
    answer: "C",
    explanation: "两空指代同一群体（来自美国的人），用 They（他们）；We 指代 \"我们\"，不符合 \"来自美国\" 的语境，排除 A、B、D。"
  },
  {
    id: 77,
    question: "This pen is ___. ___ is black.",
    options: ["A. my; Yours", "B. mine; Your", "C. mine; Yours", "D. my; Your"],
    translation: "这支钢笔是我的。你的（钢笔）是黑色的。",
    answer: "C",
    explanation: "两空后均无名词，需用名词性物主代词 mine 和 Yours；my 和 Your 是形容词性物主代词（后需接名词），排除 A、B、D。"
  },
  {
    id: 78,
    question: "The girl hurt ___ when she fell off the bike.",
    options: ["A. her", "B. herself", "C. she", "D. hers"],
    translation: "这个女孩从自行车上摔下来时伤到了自己。",
    answer: "B",
    explanation: "主语 the girl 和宾语指同一人，用反身代词 herself；her 是宾格/形容词性物主代词，she 是主格，hers 是名词性物主代词，排除 A、C、D。"
  },
  {
    id: 79,
    question: "___ are my toys. ___ are my brother's.",
    options: ["A. These; Those", "B. This; That", "C. These; That", "D. This; Those"],
    translation: "这些是我的玩具。那些是我哥哥的（玩具）。",
    answer: "A",
    explanation: "toys 是复数名词，用 these/those 修饰；this/that 修饰单数名词，排除 B、C、D。"
  },
  {
    id: 80,
    question: "We have ___ sugar. Let's buy some more.",
    options: ["A. few", "B. a few", "C. little", "D. a little"],
    translation: "我们几乎没有糖了。我们再买一些吧。",
    answer: "C",
    explanation: "sugar 是不可数名词，few/a few 修饰可数名词，排除 A、B；little 表 \"几乎没有\"（否定，需买糖），a little 表 \"有一点\"（肯定，无需买糖），排除 D。"
  },
  {
    id: 81,
    question: "My friend gave ___ a nice gift on my birthday.",
    options: ["A. I", "B. me", "C. my", "D. mine"],
    translation: "我朋友在我生日时给了我一份漂亮的礼物。",
    answer: "B",
    explanation: "空处作 gave 的宾语，用宾格 me；I 是主格，my 是形容词性物主代词，mine 是名词性物主代词，排除 A、C、D。"
  },
  {
    id: 82,
    question: "___ is a new bike. Is ___ yours?",
    options: ["A. This; it", "B. This; one", "C. It; this", "D. One; this"],
    translation: "这是一辆新自行车。它是你的吗？",
    answer: "A",
    explanation: "第一空指代 \"这辆新自行车\"（近处），用 this；第二空指代前文提到的自行车，用 it（特指）；one 指代 \"同类不同车\"，不符合语境，排除 B、C、D。"
  },
  {
    id: 83,
    question: "They can look after ___ now.",
    options: ["A. them", "B. themselves", "C. their", "D. theirs"],
    translation: "他们现在能照顾自己了。",
    answer: "B",
    explanation: "固定搭配 \"look after oneself\" 意为 \"照顾自己\"，主语是 they，反身代词用 themselves；them 是宾格，their 是形容词性物主代词，theirs 是名词性物主代词，排除 A、C、D。"
  },
  {
    id: 84,
    question: "___ is late. We need to hurry.",
    options: ["A. It", "B. This", "C. That", "D. One"],
    translation: "时间不早了。我们需要快点。",
    answer: "A",
    explanation: "指代 \"时间\" 用 it（固定用法）；this/that 指代 \"具体事物\"，one 指代 \"同类事物\"，均不用于指代时间，排除 B、C、D。"
  },
  {
    id: 85,
    question: "I don't have ___ books about space. Can you lend me one?",
    options: ["A. some", "B. any", "C. little", "D. a little"],
    translation: "我没有关于太空的书。你能借我一本吗？",
    answer: "B",
    explanation: "books 是可数名词复数，little/a little 修饰不可数名词，排除 C、D；any 用于否定句表 \"一些\"，some 用于肯定句，排除 A。"
  },
  {
    id: 86,
    question: "___ and ___ are good at math.",
    options: ["A. She; me", "B. Her; he", "C. She; he", "D. Her; him"],
    translation: "她和他数学都很好。",
    answer: "C",
    explanation: "空处作主语，需用人称代词主格 She 和 he；Her 和 him 是宾格，不能作主语，排除 A、B、D。"
  },
  {
    id: 87,
    question: "—Whose notebook is this? —It's ___.",
    options: ["A. her", "B. hers", "C. she", "D. herself"],
    translation: "—这是谁的笔记本？—是她的。",
    answer: "B",
    explanation: "空处需表示 \"她的笔记本\"，后无名词，用名词性物主代词 hers；her 是宾格/形容词性物主代词，she 是主格，herself 是反身代词，排除 A、C、D。"
  },
  {
    id: 88,
    question: "He made ___ a kite last Sunday.",
    options: ["A. him", "B. himself", "C. his", "D. he"],
    translation: "他上周日给自己做了一个风筝。",
    answer: "B",
    explanation: "主语 he 和宾语指同一人，用反身代词 himself（表 \"为自己\"）；him 是宾格，his 是形容词性/名词性物主代词，he 是主格，排除 A、C、D。"
  },
  {
    id: 89,
    question: "___ books are on the shelf. ___ are in the drawer.",
    options: ["A. Those; These", "B. That; This", "C. Those; This", "D. That; These"],
    translation: "那些书在书架上。这些书在抽屉里。",
    answer: "A",
    explanation: "books 是复数名词，用 those/these 修饰；this/that 修饰单数名词，排除 B、C、D。"
  },
  {
    id: 90,
    question: "There is ___ water in the bottle. Let's drink it.",
    options: ["A. few", "B. a few", "C. little", "D. a little"],
    translation: "瓶子里有一点水。我们喝了吧。",
    answer: "D",
    explanation: "water 是不可数名词，few/a few 修饰可数名词，排除 A、B；a little 表 \"有一点\"（肯定，可喝），little 表 \"几乎没有\"（否定，无法喝），排除 C。"
  },
  {
    id: 91,
    question: "The teacher praised ___ for my good grades.",
    options: ["A. I", "B. me", "C. my", "D. mine"],
    translation: "老师因为我的好成绩表扬了我。",
    answer: "B",
    explanation: "空处作 praised 的宾语，用宾格 me；I 是主格，my 是形容词性物主代词，mine 是名词性物主代词，排除 A、C、D。"
  },
  {
    id: 92,
    question: "___ room is bright. ___ is dark.",
    options: ["A. Our; Their", "B. Ours; Theirs", "C. Our; Theirs", "D. Ours; Their"],
    translation: "我们的房间很明亮。他们的（房间）很暗。",
    answer: "C",
    explanation: "第一空后有名词 room，用形容词性物主代词 Our；第二空后无名词，用名词性物主代词 Theirs；Ours 是名词性物主代词（后不接名词），Their 是形容词性物主代词（后需接名词），排除 A、B、D。"
  },
  {
    id: 93,
    question: "She can sing songs by ___.",
    options: ["A. her", "B. herself", "C. she", "D. hers"],
    translation: "她能自己唱歌。",
    answer: "B",
    explanation: "固定搭配 \"by oneself\" 意为 \"独自\"，主语是 she，反身代词用 herself；her 是宾格/形容词性物主代词，she 是主格，hers 是名词性物主代词，排除 A、C、D。"
  },
  {
    id: 94,
    question: "___ is a tall building over there. ___ is our school.",
    options: ["A. This; It", "B. That; It", "C. It; That", "D. This; That"],
    translation: "那边有一栋高楼。它是我们的学校。",
    answer: "B",
    explanation: "第一空指代 \"远处的高楼\"，用 That；第二空指代前文提到的高楼，用 it（特指）；this 指代近处，排除 A、C、D。"
  },
  {
    id: 95,
    question: "Are there ___ bananas in the basket? I want to eat one.",
    options: ["A. some", "B. any", "C. little", "D. a little"],
    translation: "篮子里有香蕉吗？我想吃一根。",
    answer: "B",
    explanation: "bananas 是可数名词复数，little/a little 修饰不可数名词，排除 C、D；any 用于疑问句表 \"一些\"，some 用于肯定句，排除 A。"
  },
  {
    id: 96,
    question: "___ are my parents. ___ love me very much.",
    options: ["A. They; We", "B. We; They", "C. They; They", "D. We; We"],
    translation: "他们是我的父母。他们非常爱我。",
    answer: "C",
    explanation: "两空指代同一群体（父母），用 They（他们）；We 指代 \"我们\"，不符合 \"父母爱我\" 的语境，排除 A、B、D。"
  },
  {
    id: 97,
    question: "This bag is ___. ___ is brown.",
    options: ["A. my; Yours", "B. mine; Your", "C. mine; Yours", "D. my; Your"],
    translation: "这个包是我的。你的（包）是棕色的。",
    answer: "C",
    explanation: "两空后均无名词，需用名词性物主代词 mine 和 Yours；my 和 Your 是形容词性物主代词（后需接名词），排除 A、B、D。"
  },
  {
    id: 98,
    question: "The boy washed ___ after playing basketball.",
    options: ["A. him", "B. himself", "C. his", "D. he"],
    translation: "这个男孩打完篮球后给自己洗了澡。",
    answer: "B",
    explanation: "主语 the boy 和宾语指同一人，用反身代词 himself；him 是宾格，his 是形容词性/名词性物主代词，he 是主格，排除 A、C、D。"
  },
  {
    id: 99,
    question: "___ are my glasses. ___ are my father's.",
    options: ["A. These; Those", "B. This; That", "C. These; That", "D. This; Those"],
    translation: "这些是我的眼镜。那些是我爸爸的（眼镜）。",
    answer: "A",
    explanation: "glasses 是复数名词，用 these/those 修饰；this/that 修饰单数名词，排除 B、C、D。"
  },
  {
    id: 100,
    question: "We have ___ rice. Let's cook it for lunch.",
    options: ["A. few", "B. a few", "C. little", "D. a little"],
    translation: "我们有一点米饭。我们煮了当午饭吧。",
    answer: "D",
    explanation: "rice 是不可数名词，few/a few 修饰可数名词，排除 A、B；a little 表 \"有一点\"（肯定，可做饭），little 表 \"几乎没有\"（否定，无法做饭），排除 C。"
  }
];

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = pronouns;
}