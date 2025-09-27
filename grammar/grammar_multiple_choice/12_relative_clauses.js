const relativeClauses = {
  title: "12.定语从句",
  questions: [
    {
      id: 1,
      question: "This is the website ________ I intend to add to my favorites to help me learn how to write poems.",
      options: {
        A: "where",
        B: "what",
        C: "which",
        D: "why"
      },
      answer: "C",
      explanation: "【解析】考查定语从句。句意：这就是为了帮助我学习如何写诗我想加到我最喜欢的网址里的那个网站。本句定语从句的先行词是the website，关系代词which指代先行词在定语从句中做动词add的宾语。AD项是关系副词，不能在定语从句中做宾语，what不是定语从句的关系词。故C项正确。"
    },
    {
      id: 2,
      question: "You can't wake a person ________ is pretending to be asleep.",
      options: {
        A: "who",
        B: "which",
        C: "he",
        D: "不填"
      },
      answer: "A",
      explanation: "【解析】考查定语从句。句意：你不可能叫醒一个假装睡着的人。a person是先行词，在定语从句中作主语，指代人，用who引导定语从句，做主语不可省略。故选A。"
    },
    {
      id: 3,
      question: "He led us to the farm ________ he spent his childhood.",
      options: {
        A: "which",
        B: "where",
        C: "when",
        D: "how"
      },
      answer: "B",
      explanation: "【解析】考查定语从句。句意：他把我们带到他度过童年的农场。分析句子可知，句子为限制性定语从句，先行词为\'farm\'，在从句中作地点状语，故应用副词\'where\'引导从句。故选B项。"
    },
    {
      id: 4,
      question: "The man ________ you borrowed the camera has left for New York.",
      options: {
        A: "who",
        B: "from whom",
        C: "to who",
        D: "that"
      },
      answer: "B",
      explanation: "【解析】考查定语从句。句意：你向他借相机的那个人已经去纽约了。分析句子可知，句子为限制性定语从句，先行词为\'man\'，句中涉及固定短语\'borrow sth. from sb.\'，意为\'向某人借某物\'，先行词\'man\'在从句中作\'from\'的宾语，指人，故应用\'介词from+关系代词whom\'引导从句，空格处应填\'from whom\'。故选B项。"
    },
    {
      id: 5,
      question: "I can think of many cases ______ students obviously knew a lot of English words and expressions but couldn't write a good essay.",
      options: {
        A: "why",
        B: "which",
        C: "as",
        D: "where"
      },
      answer: "D",
      explanation: "【解析】考查定语从句。句意：我能够想起很多例子，在这些例子里，学生明显知道很多的英语词汇，但是就是不能写出很好的文章。空格处引导定语从句，先行词是many cases，在后面的定语从句中作抽象地点状语，句子结构很完整，要使用关系副词，why的先行词只能是reason, BC是关系代词。故D正确。"
    },
    {
      id: 6,
      question: "This is the benchmark ___________ students ultimately model their own passion to learn.",
      options: {
        A: "on which",
        B: "by which",
        C: "on that",
        D: "by that"
      },
      answer: "B",
      explanation: "【解析】考查定语从句。句意：这是一个基准，通过它学生最终塑造自己的学习热情。句中包含定语从句，先行词是benchmark，意为\'通过这个基准\'，先行词在从句中做介词by (通过)的宾语，用关系代词which，该空用by which引导，故选B。"
    },
    {
      id: 7,
      question: "He has two sons, ______ work as chemists.",
      options: {
        A: "both of which",
        B: "both of whom",
        C: "both of who",
        D: "both of them"
      },
      answer: "B",
      explanation: "【解析】考查定语从句。句意：他有两个儿子，都是化学家。逗号前后是两个句子，逗号不能充当连词，所以空处为从句，根据句意和选项可知，空处引导非限制性定语从句，修饰先行词two sons，指人，\'两者都\'应用both of...，关系词在从句中作介词of的宾语，应用whom来引导，故选B。"
    },
    {
      id: 8,
      question: "Mary was a doctor in this hospital from 2016 to 2018, ________ she worked very hard and received the title of Excellent Doctor of the Country.",
      options: {
        A: "during whose time",
        B: "by that time",
        C: "during which time",
        D: "for which time"
      },
      answer: "C",
      explanation: "【解析】考查定语从句。句意：2016年至2018年，Mary在这家医院当医生，在这期间，她工作非常努力，获得了国家优秀医生的称号。分析句子结构，________ she worked very hard and received the title of Excellent Doctor of the Country.是一个定语从句，修饰先行词2016 to 2018，指物，在......期间，用介词during，介词+ 关系代词引导的定语从句，指物，只能用which。故选C。"
    },
    {
      id: 9,
      question: "Examination compositions, together with most business letters and government reports, are the main situations _______formal language is used.",
      options: {
        A: "in which",
        B: "on which",
        C: "of which",
        D: "for which"
      },
      answer: "A",
      explanation: "【解析】本题解析略。"
    },
    {
      id: 10,
      question: "The news spread quickly through the campus _________ we would have a longer holiday, ________ made all the students wild with joy.",
      options: {
        A: "which; that",
        B: "that; what",
        C: "that; which",
        D: "what; which"
      },
      answer: "C",
      explanation: "【解析】考查同位语从句和定语从句。句意：我们将放更长假期的消息很快在校园里传开了，这使所有的学生都欣喜若狂。分析句子结构可知第一个空用that引导同位语从句，说明news的内容\'我们要放长假\'；第二个空用which引导非限制性定语从句，在从句中做主语，修饰先行词the news，\'这个消息让所有的学生欣喜若狂\'，故选C。"
    },
    {
      id: 11,
      question: "I'd like to live somewhere _ __ the sun shines all year long.",
      options: {
        A: "which",
        B: "that",
        C: "where",
        D: "in which"
      },
      answer: "C",
      explanation: "【解析】考查定语从句；句意：我喜欢住一年四季都有阳光的地方。先行词为somewhere, 作地点状语，关系副词为where。故选C项。"
    },
    {
      id: 12,
      question: "One day, my two brothers and I were coming back from the islands _______ we often risked going and got more fish than others",
      options: {
        A: "which",
        B: "when",
        C: "in which",
        D: "where"
      },
      answer: "D",
      explanation: "【解析】考查定语从句。句意：一天，我和我的两个兄弟从我们经常冒险去的岛屿回来，我们得到了比别人更多的鱼。分析句子，定语从句部分缺状语，所以此处需用关系副词。此处的先行词为islands表示地点，所以应用where。C项介词+关代可以相当于关系副词，但是此处的介词应改为on。综合分析，故选D项。"
    },
    {
      id: 13,
      question: "Which of the following sentences is INCORRECT?",
      options: {
        A: "The innovative novelist prefers to explore such themes that no one else has ever touched upon.",
        B: "Public opinion is such that fully ending the drug war is not within the realm of political possibility.",
        C: "Einstein believed in simplicity, so much so that he used only a safety razor and water to shave.",
        D: "The consumer battle is so significant to such supermarkets as Wal—Mart that they target Black Friday for profits."
      },
      answer: "A",
      explanation: "【解析】考查定语从句的关系词。在限制性定语从句中，先行词被so，as，such，the same修饰时，关系代词只能用as，as在从句中充当主语、宾语或表语。选项A中有一个限制性定语从句no one else has ever touched upon，先行词是themes，由such修饰先行词，可知此处应用关系代词as，不能用that，as充当has touched upon的宾语。故选A项。"
    },
    {
      id: 14,
      question: "What surprised me was not what he said but _______ he said it.",
      options: {
        A: "the way",
        B: "in the way that",
        C: "in the way",
        D: "the way which"
      },
      answer: "A",
      explanation: "【解析】考查名词。句意：使我惊奇的不是他说什么而是他说话的方式。way同时作was的表语，后面he said it作way的定语，省略引导词that 或in which。故选A项。"
    },
    {
      id: 15,
      question: "Can you lend me the book ________ you were reading this morning？",
      options: {
        A: "that",
        B: "what",
        C: "whose",
        D: "who"
      },
      answer: "A",
      explanation: "【解析】考查关系代词。句意：你能把今天早晨你在看的那本书借给我吗？分析句子结构可知，空处引导定语从句，先行词为the book，关系词在定语从句中作宾语，所以关系代词可用which 或that。故选A。"
    },
    {
      id: 16,
      question: "Many countries are now setting up national parks ________ animals and plants can be protected.",
      options: {
        A: "when",
        B: "which",
        C: "whose",
        D: "where"
      },
      answer: "D",
      explanation: "【解析】考查定语从句的关系词。句意：许多国家正在建立国家公园，在那里动植物可以得到保护。先行词为parks，在定语从句中作地点状语。故选D。"
    },
    {
      id: 17,
      question: "He showed me the new dictionary __________ he paid a lot of money.",
      options: {
        A: "by which",
        B: "for which",
        C: "to which",
        D: "on which"
      },
      answer: "B",
      explanation: "【解析】考查固定短语和定语从句。句意：他把新字典拿给我看，这本字典他花了很多钱。固定短语pay for，为……付款，关系代词which指代先行词dictionary并在从句中作for的宾语，故选B。"
    },
    {
      id: 18,
      question: "--- When did you know Mr. Wang?\n--- It was last month _____ he was knocked down by a motorbike.",
      options: {
        A: "before",
        B: "when",
        C: "that",
        D: "since"
      },
      answer: "B",
      explanation: "【解析】考查定语从句。句意：——你什么时间认识王先生的？——上个月他被摩托车撞到时我认识他的。分析句子可知，空处引导定语从句，last month是先行词，它在定语从句中作时间状语，应用when引导。故选B项。"
    },
    {
      id: 19,
      question: "—This is the refrigerator______ we had so much trouble.\n—Get someone to repair it .",
      options: {
        A: "at which",
        B: "of which",
        C: "with which",
        D: "to which"
      },
      answer: "C",
      explanation: "【解析】考查定语从句。句意：——这就是我们那台老是出问题的冰箱。——找人修一下。短语have trouble with sth,在某事上有麻烦。先行词refrigerator在定语从句中作have trouble with的宾语，所以定语从句的关系代词which之前要加上介词with。故选C。"
    },
    {
      id: 20,
      question: "Another endangered animal is the giant panda, ______ habitat is in China.",
      options: {
        A: "which",
        B: "that",
        C: "who",
        D: "whose"
      },
      answer: "D",
      explanation: "【解析】考查定语从句。句意：另一种濒危动物是大熊猫，它的栖息地在中国。先行词是 the giant panda，在定语从句中作定语，表示\'……的\'，用whose引导定语从句。故选D。"
    },
    {
      id: 21,
      question: "The pictures remind us ______ the days ______ we spent in Beijing.",
      options: {
        A: "/; that",
        B: "/; when",
        C: "of; that",
        D: "of; when"
      },
      answer: "C",
      explanation: "【解析】考查固定短语和定语从句。句意：这些照片让我们想起了我们在北京度过的日子。第一空，固定短语remind sb of sth，提醒某人某事，所以填of；第二空，关系词指代先行词days并在定语从句中作 spent 的宾语，故填that，故选C。"
    },
    {
      id: 22,
      question: "The Nobel Prize in literature has been awarded annually to an author from any country ________ has produced \'in the field of literature the most outstanding work in an ideal direction\'.",
      options: {
        A: "which",
        B: "who",
        C: "where",
        D: "as"
      },
      answer: "B",
      explanation: "【解析】考查定语从句。句意：诺贝尔文学奖每年颁发给\'在文学领域朝着理想方向创作出最杰出作品\'的任何国家的作家。本句是定语从句，从句修饰先行词an author，先行词是人，在从句中作主语，关系代词应用who，故选B项。"
    },
    {
      id: 23,
      question: "I have a big dream — I want to go into space, _______ will take some time to realize, I guess.",
      options: {
        A: "which",
        B: "it",
        C: "what",
        D: "where"
      },
      answer: "A",
      explanation: "【解析】试题分析：句意：我有一个很大的梦想，一个我想要花一些时间才能实现的梦想—去太空。这句话用了非限制性定语从句，先行词是dream，定语从句中缺少主语，用关系代词which引导定语从句，选A。"
    },
    {
      id: 24,
      question: "We are living in an age________ QR codes(二维码)are becoming more and more popular in our daily life.",
      options: {
        A: "why",
        B: "that",
        C: "whose",
        D: "when"
      },
      answer: "D",
      explanation: "【解析】考查定语从句。句意：我们生活在二维码在日常生活中越来越受欢迎的时代。关系副词when引导定语从句（包括限定性定语从句和非限定性定语从句），修饰表示时间的先行词age，在定语从句中充当时间状语，故选D。"
    },
    {
      id: 25,
      question: "As the dark horse, China's football team swept into the quarterfinals_______ it lost to host country Australia.",
      options: {
        A: "as",
        B: "what",
        C: "that",
        D: "where"
      },
      answer: "D",
      explanation: "【解析】考查定语从句的关系词。句意：作为一匹黑马，中国足球队一举进入四分之一决赛，在这个比赛中，输给了东道主澳大利亚队。分析句子结构可知，the quarterfinals为先行词，后接限制性定语从句；分析从句，主谓结构，先行词在从句中作地点状语，故用关系副词where引导定语从句。 故选D项。"
    },
    {
      id: 26,
      question: "The reason _______he was late for the meeting was that his little son fell ill this morning.",
      options: {
        A: "that",
        B: "which",
        C: "what",
        D: "why"
      },
      answer: "D",
      explanation: "【解析】考查定语从句。句意：他开会迟到的原因是他的小儿子今天早上病了。此处为定语从句修饰先行词reason，先行词在从句中作原因状语，故用why引导。故选D。"
    },
    {
      id: 27,
      question: "He is the person _______,I believe, has the ability to do this challenging job.",
      options: {
        A: "who",
        B: "whom",
        C: "him",
        D: "which"
      },
      answer: "A",
      explanation: "【解析】考查定语从句。句意：我相信他是有能力做这项有挑战性的工作的人。本题定语从句的先行词是the person，后面的定语从句中缺少主语，所以使用关系动词who指代先行词在句中做主语，不能省略。Whom通常在句中做宾语，him不能引导定语从句，which所指代的先行词不能是人。故A正确。"
    },
    {
      id: 28,
      question: "Television enables us to see things happen almost at the exact moment ________.",
      options: {
        A: "which they are happening",
        B: "when they are happening",
        C: "which is happening",
        D: "when they have happened"
      },
      answer: "B",
      explanation: "【解析】考查定语从句。句意：电视使我们几乎在事情发生的同一时刻看到它们发生。此处moment是先行词，在后面的定语从句中作时间状语，用when引导定语从句，再根据at the exact moment可知动作正在进行，所以用现在进行时态，故选B。"
    },
    {
      id: 29,
      question: "________ is known to citizens in Changchun, the news ________ the students from Jilin Provincial Experimental School did a fantastic job in the 2014 College Entrance Examination spread in the whole city.",
      options: {
        A: "Which; what",
        B: "As; that",
        C: "As; what",
        D: "It; that"
      },
      answer: "B",
      explanation: "【解析】考查定语从句及同位语从句。句意：据长春市市民所知，吉林省实验学校的学生在2014年高考中取得优异成绩的消息传遍了全市。第一空引导非限定性定语从句，指代后面整句话的内容，位于句首，应用as引导；第二空引导news的同位语从句，从句句意完整、成分齐全，应用只起连接作用、无实意的that引导。故选B。"
    },
    {
      id: 30,
      question: "Below the mountains, the sunshine reflects on the many lakes,____makes them shine likediamonds against the rich countryside.",
      options: {
        A: "as",
        B: "that",
        C: "which",
        D: "what"
      },
      answer: "C",
      explanation: "【解析】考查关系代词。句意：在山下，阳光反射在湖面上，这使得它们像钻石一样照耀着富裕的乡村。分析句子可知，which代替前面的整个句子，在后面的非限制性定语从句中作主语。故C选项正确。"
    },
    {
      id: 31,
      question: "They talked about the schools and teachers________they had visited.",
      options: {
        A: "whom",
        B: "who",
        C: "that",
        D: "whose"
      },
      answer: "C",
      explanation: "【解析】考查定语从句。句意：他们谈到了他们参观过的学校和老师。分析句子结构，此句为定语从句。从句不完整，缺宾语，用关系代词。先行词the schools and teachers既指人又指物，只能用关系代词that。故选C。"
    },
    {
      id: 32,
      question: "Occasions are quite rare___________ I can spend a whole week with my family during the Chinese New Year Holiday.",
      options: {
        A: "that",
        B: "where",
        C: "which",
        D: "when"
      },
      answer: "D",
      explanation: "【解析】考查定语从句。句意：在中国新年期间，我很少有机会和家人共度一周的时间。分析句子结构可知，此处为连词引导的定语从句，先行词与定语从句被分隔，先行词是occasion，意为\'时刻\'表示时间，代替它充当从句时间状语，所以使用关系副词when。故选D项。"
    },
    {
      id: 33,
      question: "Yesterday, I went back to my primary school, ________ my teachers and I talked about our good old days.",
      options: {
        A: "which",
        B: "that",
        C: "when",
        D: "where"
      },
      answer: "D",
      explanation: "【解析】考查非限定性定语从句。句意：昨天我回到了我的小学，在那里我和老师谈起了美好的旧时光。先行词为primary school，从句中缺少地点状语，故D项正确。"
    },
    {
      id: 34,
      question: "There seems to be nothing ________ seems impossible for him in the world.",
      options: {
        A: "that",
        B: "which",
        C: "as",
        D: "/"
      },
      answer: "A",
      explanation: "【解析】考查定语从句的连接词。句意：世界上似乎没有什么事情对他来说是不可能的。根据句子分析可知，此处引导定语从句，先行词为不定代词nothing，指物，定语从句中缺少主语，不定代词做先行词只用that不用which，故应用that引导。故选A。"
    },
    {
      id: 35,
      question: "Teenagers ________ do not sleep well may experience situations ________ body development slows down, and their health suffers.",
      options: {
        A: "what, where",
        B: "who, where",
        C: "which, whose",
        D: "that, whose"
      },
      answer: "B",
      explanation: "【解析】考查定语从句。句意：睡眠不好的青少年可能会经历身体发育减慢，健康受损的情况。结合句意，分析句子可知，句中\'______ do not sleep well\'是限制性定语从句，修饰先行词Teenagers，关系词代替先行词在定语从句中作主语，应使用关系代词who或that引导；\'______body development slows down, and their health suffers\'也是限制性定语从句，修饰先行词situations，其意为\'情况\'，在定语从句中作地点状语，应使用关系副词where引导。故选B项。"
    },
    {
      id: 36,
      question: "I will never forget those days________ I stayed with you in the countryside.",
      options: {
        A: "that",
        B: "which",
        C: "when",
        D: "where"
      },
      answer: "C",
      explanation: "【解析】考查定语从句。句意：我永远不会忘记和你一起在农村的那些日子。分析可知，空处引导定语从句，关系词代替先行词those days在从句中作时间状语，应用关系副词when。故选C。"
    },
    {
      id: 37,
      question: "Nowadays, sending e-mails to each other has become a way ______________ what they think to others.",
      options: {
        A: "many a student expresses",
        B: "in which more than one student express",
        C: "that most of students express",
        D: "the majority of students expresses"
      },
      answer: "A",
      explanation: "【解析】试题分析：当前面的名词是the way，后面的从句如果句子很完整，要使用that/in which/不填来引导。另外当主语是many a+单数名词作主语的时候，谓语动词使用单数形式。故A正确。"
    },
    {
      id: 38,
      question: "The book discussed the extent ________ family life has changed over the past 50 years.",
      options: {
        A: "in which",
        B: "at which",
        C: "on which",
        D: "to which"
      },
      answer: "D",
      explanation: "【解析】考查定语从句。句意：这本书讨论了过去50年家庭生活的变化程度。分析句子可知，句子为限制性定语从句，先行词为\'extent\'，指事物，句中涉及固定短语\'to the extent\'，意为\'到……的程度\'，\'extent\'作介词\'to\'的宾语，故应用\'介词to+关系代词which\'引导从句。故选D项。"
    },
    {
      id: 39,
      question: "We have reached a stage ________ we have almost no rights at all.",
      options: {
        A: "what",
        B: "which",
        C: "when",
        D: "where"
      },
      answer: "D",
      explanation: "【解析】考查定语从句。a stage是先行词，意为\'阶段\'，在定语从句中通常看作是表示地点的名词，从句中缺少地点状语，故选D。句意：我们已经到了几乎没有任何权力的阶段了。"
    },
    {
      id: 40,
      question: "—When did the couple die?\n—It was on May ________ the earthquake hit Wenchuan County.",
      options: {
        A: "that",
        B: "which",
        C: "when",
        D: "what"
      },
      answer: "C",
      explanation: "【解析】考查定语从句。句意：——这对夫妇什么时候死的？——在五月汶川发生地震的时候。A. that 那个（引导定语从时，指代先行词为人或物，在定语从句中做主语或宾语）；B. which 哪一个（引导定语从句时，指代先行词为物，在定语从句中做主语或宾语）；C. when 什么时候（引导定语从句时，指代先行词为时间，在定语从句中做时间状语）；D. what 什么（不能引导定语从句）。分析句子结构可知，\' ________ the earthquake hit Wenchuan County\'为定语从句，修饰先行词May，为时间，先行词在定语从句中做时间状语。故选C。"
    },
    {
      id: 41,
      question: "Peter, one of my colleagues, drove too fast, ____made us nervous.",
      options: {
        A: "who",
        B: "which",
        C: "what",
        D: "that"
      },
      answer: "B",
      explanation: "【解析】考查定语从句关系词。句意：我的一个同事彼得开得太快了，这使我们很紧张。分析句子可知，此句为非限制性定语从句，说明前面整个句子的情况\'Peter, one of my colleagues, drove too fast\'，在从句中作主语，应用关系代词\'which\'。故选B项。"
    },
    {
      id: 42,
      question: "Gillian Sandstorm, a senior lecturer in psychology at the University of Essex, investigated the extent ______people get happiness from weak-tie relationships.",
      options: {
        A: "which",
        B: "what",
        C: "to which",
        D: "in which"
      },
      answer: "C",
      explanation: "【解析】考查定语从句。句意：埃塞克斯大学心理学高级讲师Gillian Sandstorm调查了人们从弱关系中获得幸福的程度。名词extent通常和介词to搭配，to the extent\'……的程度，到……的程度\'；空处引导定语从句，先行词extent在从句中作介词to的宾语，应用which。故选C。"
    },
    {
      id: 43,
      question: "Sam remembered several occasions in the past _____ he had experienced a similar feeling.",
      options: {
        A: "when",
        B: "which",
        C: "why",
        D: "that"
      },
      answer: "A",
      explanation: "【解析】试题分析：考查定语从句。本题定语从句的先行词是several occasions，后面的定语从句结构很完整，所以使用关系副词引导定语从句，因为该先行词occasion意为\'机会 ，时机\'表示时间，所以使用when引导。故A正确。"
    },
    {
      id: 44,
      question: "Since 1995, ________people call the Year of the Internet, the world has turned flat thanks to the network.",
      options: {
        A: "when",
        B: "which",
        C: "in which",
        D: "by which time"
      },
      answer: "B",
      explanation: "【解析】考查定语从句。句意：1995年被称为\'互联网年\'，自那以后，由于网络，世界变得平了。分析句子可知，空处引导非限制性定语从句，先行词为1995，从句缺少宾语，应用关系代词which引导。故选B项。"
    },
    {
      id: 45,
      question: "The man _____ eyes were blinded moved to another country.",
      options: {
        A: "that",
        B: "which",
        C: "whose",
        D: "whom"
      },
      answer: "C",
      explanation: "【解析】考查定语从句的关系词。句意：那个失明的人搬到了另一个国家。分析句子可知，本句是定语从句。其中the man先行词，在定语从句作eyes的定语，即那个男的眼睛，关系词whose在定语从句中作定语。 that 和which在定语从句中都可做主语、宾语或表语，that既可指人也可指物，而which只能指物；whom在定语从句中作宾语，只能指人。本题中先行词在定语从句中做定语，故选C。"
    },
    {
      id: 46,
      question: "Living abroad may often make us feel lonely as home is the place _____our hearts should be.",
      options: {
        A: "as",
        B: "that",
        C: "where",
        D: "which"
      },
      answer: "C",
      explanation: "【解析】考查定语从句。句意：在国外生活往往会让我们感到孤独，因为家是我们心灵的归宿。分析句子可知，本句中的the place被定语从句修饰，指\'在这个地方\'，the place在句中作地点状语 ，要用关系副词where引导，因此本空选C。"
    },
    {
      id: 47,
      question: "I am thankful to him for that advice, ________I owe all my success.",
      options: {
        A: "to which",
        B: "to whom",
        C: "to what",
        D: "to that"
      },
      answer: "A",
      explanation: "【解析】考查定语从句。句意：我感谢他的忠告，我所有的成功都归功于它。分析句子可知，此处为介词+关系代词结构，引导的定语从句，因满足从句中owe…to…\'把……归功于……\'固定搭配，满足句意可知，此处为介词to前置，先行词advice在从句中作to的宾语。故选A项。"
    },
    {
      id: 48,
      question: "That land, ________you get your strength, is the only thing________ matters.",
      options: {
        A: "for which; /",
        B: "from which; that",
        C: "where; which",
        D: "that; but"
      },
      answer: "B",
      explanation: "【解析】考查定语从句。句意：那片土地，你从中获得力量，是唯一重要的东西。分析句子结构可知，一空处引导非限制性定语从句，从句中有固定搭配：get sth. from意为\'从…得到某物\'，缺少介词from，所以应该用from which引导从句，二空处引导定语从句，先行词是the only thing，在从句中作主语，当先行词有only修饰时，只能用that引导。故选B项。"
    },
    {
      id: 49,
      question: "These logs will be shipped from South America to Persian, Gulf countries like Saudi Arabia, ______ enforce laws protecting their own trees.",
      options: {
        A: "where",
        B: "that",
        C: "whose",
        D: "which"
      },
      answer: "D",
      explanation: "【解析】考查定语从句。句意：这些原木将从南美洲运往波斯湾国家，例如沙特阿拉伯，这些国家实施保护自己树木的法律。分析句子结构可知，此处是非限定性定语从句，先行词countries在从句______ enforce laws protecting their own trees.充当主语，故用关系代词which。故选D项。"
    },
    {
      id: 50,
      question: "---Where did you see the movie Personal Tailor directed by Feng Xiaogang?\n---- It was in the cinema ________ I regularly go .",
      options: {
        A: "which",
        B: "that",
        C: "where",
        D: "what"
      },
      answer: "C",
      explanation: "【解析】试题分析：考查关联词搭配。根据句子分析可知该句是一个定语从句，另根据从句I regularly go，因go后接宾语时要加介词to，可知关系词要用where=\'to\' which，句意：你在哪看的冯小刚的电影《私人订制》？在我经常去的电影院。"
    },
    {
      id: 51,
      question: "I have many friends, some ______ re teachers.",
      options: {
        A: "of them",
        B: "from which",
        C: "who of",
        D: "of whom"
      },
      answer: "D",
      explanation: "【解析】试题分析：考查定语从句。句意：我有很多朋友他们有的是老师。A. of them 介词of加代词；B. from which 介词from引导；C. who of who引导；D. of whom of加whom。原句应该是some of them are taechers所以介词用of，句中不缺少主语，所以用whom，所以选D。"
    },
    {
      id: 52,
      question: "She is such a good girl _____ we all like.",
      options: {
        A: "whom",
        B: "as",
        C: "that",
        D: "who"
      },
      answer: "B",
      explanation: "【解析】考查定语从句。句意：她是如此一个我们都喜欢的好女孩。这里使用了定语从句，先行词是girl，定语从句缺少宾语，用关系代词，因为先行词被such词修饰，只能用as引导定语从句，故答案为B。"
    },
    {
      id: 53,
      question: "It was 1897 ____a European chemist called Dr. Felix Hoffman produced aspirin from this chemical.",
      options: {
        A: "that",
        B: "how",
        C: "when",
        D: "which"
      },
      answer: "C",
      explanation: "【解析】考查定语从句。句意：就是在1987年一个叫做Felix Hoffman博士的欧洲化学家用这种化学制品制造出了阿司匹林。分析句子结构可知，前句It was 1897和后句都是完整的句子，不缺主宾语，考虑定语从句，句意上不难理解，后句描述的应该是在1897年发生的事情，即先行词作时间状语，要用关系副词when。故选C项。"
    },
    {
      id: 54,
      question: "These terraces were built by the local Zhuang and Yao people, ________ Guangxi is home.",
      options: {
        A: "of which",
        B: "to which",
        C: "for whom",
        D: "to whom"
      },
      answer: "D",
      explanation: "【解析】考查定语从句。句意：这些梯田是由当地的壮族和瑶族建造的，广西是壮族和瑶族的家园。A. of which哪一个的；B. to which对于哪一个；C. for whom为了谁；D. to whom对于谁。分析句子，空处引导非限制性定语从句，修饰先行词the local Zhuang and Yao people，先行词指人，关系词在定语从句中作状语，使用\'介词+whom\'引导从句，be home to为固定搭配，表示\'是……的家乡\'，所以使用to whom引导从句。故选D项。"
    },
    {
      id: 55,
      question: "We should realize the fact that when you graduate from university, you are still not prepared for the possible situations ________ we may face in the working world.",
      options: {
        A: "where",
        B: "when",
        C: "what",
        D: "that"
      },
      answer: "D",
      explanation: "【解析】考查定语从句引导词。句意：我们应该意识到，当你从大学毕业的时候，你仍然没有准备好应对可能在工作中出现的情况。分析句子可知，这是一个定语从句，先行词是situations,，在从句中作宾语，因此使用关系代词that引导定语从句。故选D项。"
    },
    {
      id: 56,
      question: "Anyone who is a server or ____ has been one knows that customers always come first.",
      options: {
        A: "whom",
        B: "what",
        C: "who",
        D: "which"
      },
      answer: "C",
      explanation: "【解析】考查定语从句。句意：任何服务员或曾经做过服务员的人都知道顾客至上的道理。此处是限定性定语从句，先行词是anyone，指人，关系词替代先行词在从句中作主语，应用who引导。故选C。"
    },
    {
      id: 57,
      question: "The factory was built in a secret place, around ________ high mountains.",
      options: {
        A: "which was",
        B: "it was",
        C: "which were",
        D: "them were"
      },
      answer: "C",
      explanation: "【解析】考查非限制性定语从句和主谓一致。句意：那家工厂建在一个秘密的地方，周围都是高山。分析句子可知，此处是\'介词+关系词\'引导的非限制性定语从句，先行词是place，关系词在从句中作宾语，应用which引导，从句中介词around位于句首引起倒装，high mountains是主语，be动词应该用were，故选C项。"
    },
    {
      id: 58,
      question: "From 1997, J.K. Rowling created the Harry Potter fantasy series, __________ she became internationally famous.",
      options: {
        A: "that",
        B: "which",
        C: "for which",
        D: "to which"
      },
      answer: "C",
      explanation: "【解析】考查定语从句。句意：从1997年开始，J.K.罗琳创作了奇幻系列《哈利波特》，并因此享誉国际。空格处引导的是非限制性定语从句，J.K.罗琳因为《哈利波特》出名，be famous for意为\'因……而出名\'，因此空格处用for which引导非限制性定语从句（关系代词which指代先行词the Harry Potter fantasy series作介词for的宾语），故选C。"
    },
    {
      id: 59,
      question: "You probably have been in such a situation ________ you are asked to help a foreign friend.",
      options: {
        A: "which",
        B: "as",
        C: "where",
        D: "why"
      },
      answer: "C",
      explanation: "【解析】考查关系副词辨析。句意：你可能遇到过这样的情况，你被要求帮助一个外国朋友。分析句子可知， situation为先行词，在后面的定语从句中作地点状语，所以关系副词为where。故选C项。"
    },
    {
      id: 60,
      question: "A friend is one ___________ can touch your heart and read your mind.",
      options: {
        A: "whom",
        B: "which",
        C: "whose",
        D: "who"
      },
      answer: "D",
      explanation: "【解析】考查定语从句。句意：朋友是能触动你的心，读懂你的心思的人。分析句子可知，\'can touch your heart and read your mind.\'是定语从句部分，修饰one，指人，且关系词在从句中作主语，所以用关系代词who。故选D。"
    }
  ]
};


if (typeof window !== 'undefined' && typeof window.registerGrammarBank === 'function') {
  window.registerGrammarBank('grammar-12定语从句', relativeClauses);
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = relativeClauses;
}
