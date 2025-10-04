(function(global) {
  const CLASS_ROSTERS = Object.freeze({
    '31班': [
      '焦良瑾', '庄优岳', '曾媛媛', '陈伟聪', '李煜文', '吴沛宜', '王泽霖', '吴苑萍', '陈佳琳', '黄钰莹',
      '刘文锋', '杨淳好', '刘欣', '梁鸿浩', '杨映春', '甘紫渊', '黄书慧', '谭铠淇', '叶蕙仪', '王诗涵',
      '谢家锐', '张育东', '余乐欢', '余欣莹', '何厚玮', '李襄', '曹淑怡', '王馨怡', '叶思翰'
    ],
    '39班': [
      '蔡梦媛', '曾怀萱', '陈家熙', '陈以琳', '邓凯文', '邓梓莹', '董靓涵', '冯奥慧', '耿思媛', '黄优妙',
      '李琬怡', '林靖可', '刘嘉欣', '庞杰', '卿紫娟', '邱童', '涂莉嘉', '王家怡', '吴霖垚', '叶盛林',
      '叶欣', '叶泽怿', '张凯瑞', '张艺', '郑家俊'
    ]
  });

  const CLASS_KEYS = {
    '31班': 'class31',
    '39班': 'class39'
  };

  const ROSTERS_BY_KEY = Object.freeze(
    Object.fromEntries(
      Object.entries(CLASS_ROSTERS).map(([label, names]) => [CLASS_KEYS[label] || label, names.slice()])
    )
  );

  const ALL_STUDENTS = Object.freeze(
    Object.entries(CLASS_ROSTERS).flatMap(([label, names]) =>
      names.map((name, index) => ({
        id: `${CLASS_KEYS[label] || label}-${String(index + 1).padStart(2, '0')}`,
        name,
        className: label
      }))
    )
  );

  global.STUDENT_ROSTERS = CLASS_ROSTERS;
  global.STUDENT_ROSTERS_BY_KEY = ROSTERS_BY_KEY;
  global.ALL_STUDENTS = ALL_STUDENTS;
})(typeof window !== 'undefined' ? window : globalThis);
