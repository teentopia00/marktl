const typeOrder = [
  "ISTJ",
  "ISFJ",
  "INFJ",
  "INTJ",
  "ISTP",
  "ISFP",
  "INFP",
  "INTP",
  "ESTP",
  "ESFP",
  "ENFP",
  "ENTP",
  "ESTJ",
  "ESFJ",
  "ENFJ",
  "ENTJ",
];

const accentByTemperament = {
  SJ: "#4f735f",
  SP: "#9a6845",
  NF: "#8b6173",
  NT: "#486b88",
};

const pathByType = {
  ESTP: "Se",
  ESFP: "Se",
  ISTJ: "Si",
  ISFJ: "Si",
  ENTP: "Ne",
  ENFP: "Ne",
  INTJ: "Ni",
  INFJ: "Ni",
  ESTJ: "Te",
  ENTJ: "Te",
  ISTP: "Ti",
  INTP: "Ti",
  ESFJ: "Fe",
  ENFJ: "Fe",
  ISFP: "Fi",
  INFP: "Fi",
};

const spiritualPaths = {
  Se: {
    title: "활동적인 영적 경로",
    subtitle: "외향적 감각",
    text:
      "지금 여기의 몸, 오감, 모험, 즉각적인 필요에 반응하는 행동 속에서 신앙이 살아납니다.",
    reset: "미래가 어둡게만 보일 때는 잠시 멈추고 짧은 묵상, 호흡, 기록으로 보이지 않는 의미를 천천히 초대하세요.",
  },
  Si: {
    title: "유서 깊은 영적 경로",
    subtitle: "내향적 감각",
    text:
      "시간의 검증을 거친 전통, 예측 가능한 예전, 구체적인 봉사와 책임의 반복 속에서 깊은 안정과 신실함을 얻습니다.",
    reset: "변화가 두려움을 키울 때는 통제 가능한 작은 일상으로 돌아와 현재의 신실함을 회복하세요.",
  },
  Ne: {
    title: "촉매 역할의 영적 경로",
    subtitle: "외향적 직관",
    text:
      "새로운 가능성, 질문, 다양한 전통과 아이디어의 연결을 통해 공동체와 자신 안에 변화를 일으킵니다.",
    reset: "아이디어가 너무 많아 지칠 때는 몸을 쓰는 단순한 활동과 반복 가능한 루틴으로 마음의 과열을 식히세요.",
  },
  Ni: {
    title: "깨달음을 주는 영적 경로",
    subtitle: "내향적 직관",
    text:
      "보이지 않는 신비, 큰 질문, 상징과 침묵 속에서 번쩍이는 통찰을 따라 깊은 의미를 탐구합니다.",
    reset: "생각이 최악의 시나리오로 몰릴 때는 청소, 산책, 손작업처럼 현재 감각에 집중하는 일을 해보세요.",
  },
  Te: {
    title: "분석적인 영적 경로",
    subtitle: "외향적 사고",
    text:
      "진리와 공의, 객관적 원칙, 효율적인 시스템을 세우는 일을 통해 신앙을 현실의 책임으로 구현합니다.",
    reset: "통제할 수 없는 위기 앞에서는 내면의 감정을 적으로 보지 말고, 돌봄이 필요한 신호로 받아들이세요.",
  },
  Ti: {
    title: "개념적인 영적 경로",
    subtitle: "내향적 사고",
    text:
      "모순을 분석하고 보편적 원리를 찾으며, 사적이고 합리적인 탐구 안에서 신앙의 뼈대를 세웁니다.",
    reset: "감정이 갑자기 폭발할 때는 혼자만의 시간을 확보하고, 감정의 원인을 차분히 이름 붙여 보세요.",
  },
  Fe: {
    title: "공동체 지향의 영적 경로",
    subtitle: "외향적 감정",
    text:
      "사람을 돌보고 조화와 협력을 만들며, 타인이 자신과 서로를 귀하게 여기도록 돕는 관계 속에서 하나님을 만납니다.",
    reset: "모두의 감정을 책임지려는 부담이 커질 때는 자신의 마음도 돌봄의 대상임을 기억하세요.",
  },
  Fi: {
    title: "개인적인 영적 경로",
    subtitle: "내향적 감정",
    text:
      "내면의 진실성, 가치, 양심, 깊은 공감을 따라 자신만의 고유한 방식으로 하나님과 관계를 맺습니다.",
    reset: "이상이 현실과 부딪힐 때는 마음의 진실을 작고 구체적인 실천 하나로 옮겨 보세요.",
  },
};

const common = {
  E: "사람과 활동 속에서 에너지가 살아남",
  I: "고요한 내면과 깊은 성찰에서 에너지가 회복됨",
  S: "구체적 경험, 몸의 감각, 검증된 실천을 신뢰함",
  N: "상징, 가능성, 보이지 않는 의미를 빠르게 읽음",
  T: "원리, 진실성, 일관성을 통해 결단함",
  F: "관계, 가치, 공감의 울림을 통해 결단함",
  J: "질서, 약속, 계획 안에서 마음이 안정됨",
  P: "열린 흐름, 즉흥성, 탐색 속에서 생기가 살아남",
};

const quizAxes = [
  {
    id: "energy",
    code: "E-I",
    question: "나는 에너지를 어디서 얻는가?",
    description:
      "에너지 방향은 내가 힘을 회복하고 생각이 살아나는 자리를 말합니다. 외향형은 사람, 활동, 대화, 현장 경험 속에서 활력을 얻기 쉽고, 내향형은 고요함, 혼자만의 시간, 깊은 생각과 내면 정리 속에서 힘을 회복하기 쉽습니다.",
    choices: [
      { letter: "E", label: "외향", text: "사람들과 대화하고 함께 움직일 때 생각과 에너지가 살아난다." },
      { letter: "I", label: "내향", text: "혼자 생각하고 조용히 정리할 때 마음과 에너지가 회복된다." },
    ],
  },
  {
    id: "info",
    code: "S-N",
    question: "나는 정보를 어떻게 받아들이는가?",
    description:
      "정보 인식 방식은 내가 무엇을 먼저 알아차리고 신뢰하는지를 보여줍니다. 감각형은 실제 경험, 구체적 사실, 몸으로 확인되는 현실에 강하고, 직관형은 가능성, 상징, 의미, 보이지 않는 연결을 빠르게 읽습니다.",
    choices: [
      { letter: "S", label: "감각", text: "실제 사례, 구체적인 설명, 지금 눈앞의 현실이 먼저 와닿는다." },
      { letter: "N", label: "직관", text: "큰 그림, 의미, 가능성, 상징적 연결이 먼저 떠오른다." },
    ],
  },
  {
    id: "decision",
    code: "T-F",
    question: "나는 무엇을 기준으로 판단하는가?",
    description:
      "판단 기준은 결정을 내릴 때 무엇을 더 중요하게 붙드는지를 말합니다. 사고형은 원칙, 논리, 일관성, 진실성을 중시하고, 감정형은 관계, 가치, 공감, 사람에게 미치는 영향을 중요하게 봅니다.",
    choices: [
      { letter: "T", label: "사고", text: "원칙과 논리, 무엇이 맞는지 따져본 뒤 결정하는 편이다." },
      { letter: "F", label: "감정", text: "사람의 마음과 관계, 무엇이 더 따뜻하고 의미 있는지 살핀다." },
    ],
  },
  {
    id: "lifestyle",
    code: "J-P",
    question: "나는 삶을 어떻게 정리하는가?",
    description:
      "생활 방식은 내가 세상과 일정을 다루는 기본 리듬을 보여줍니다. 판단형은 계획, 마감, 질서, 예측 가능성 안에서 안정감을 느끼고, 인식형은 여유, 즉흥성, 열린 선택지, 유연한 흐름 속에서 생기가 살아납니다.",
    choices: [
      { letter: "J", label: "판단", text: "미리 정하고 계획대로 진행될 때 마음이 편하다." },
      { letter: "P", label: "인식", text: "상황에 맞게 열어두고 유연하게 움직일 때 더 자연스럽다." },
    ],
  },
];

const data = {
  ISTJ: {
    name: "신실한 보존자",
    summary: "책임감과 현실 감각이 강하며, 약속과 전통을 성실하게 지켜 공동체의 뿌리를 든든히 세웁니다.",
    strengths: ["꾸준함", "정확성", "절제", "신뢰"],
    spiritual:
      "검증된 예전, 규칙적인 기도, 말씀 묵상 계획, 역사적 신앙 고백처럼 오래 축적된 길에서 깊은 안정과 경건을 얻습니다.",
    alienation:
      "즉흥적인 감정 표현만 강조되거나, 기준 없이 새로움만 요구되는 환경에서는 영적 깊이보다 혼란을 먼저 느낄 수 있습니다.",
    practices: ["정해진 시간의 짧은 기도문", "신앙 일지와 감사 기록", "교회력에 따른 묵상", "작은 봉사의 반복"],
    growth: "계획 밖의 은혜를 받아들이는 연습이 필요합니다. 가끔은 완벽히 준비되지 않은 만남과 기도도 하나님께 열려 있을 수 있습니다.",
  },
  ISFJ: {
    name: "따뜻한 돌봄가",
    summary: "세심한 관찰과 헌신으로 사람을 살피며, 눈에 잘 띄지 않는 자리에서 공동체를 안전하게 만듭니다.",
    strengths: ["배려", "기억력", "헌신", "현실적 도움"],
    spiritual:
      "익숙한 예배 리듬, 가족과 공동체를 위한 중보, 손으로 하는 돌봄과 환대 속에서 영성이 자연스럽게 피어납니다.",
    alienation:
      "강한 논쟁이나 추상적 비전만 반복되는 자리는 마음을 지치게 하고, 자신의 조용한 헌신이 보이지 않는다고 느끼게 할 수 있습니다.",
    practices: ["이름을 적어 드리는 중보기도", "식탁과 환대의 영성", "시편 필사", "돌봄 후 짧은 침묵"],
    growth: "타인을 돌보는 만큼 자신의 필요도 하나님 앞에 말하는 훈련이 중요합니다. 거절은 사랑의 실패가 아니라 경계의 지혜일 수 있습니다.",
  },
  INFJ: {
    name: "통찰의 안내자",
    summary: "사람과 세계의 깊은 의미를 읽고, 보이지 않는 방향성을 조용히 붙들어 주는 유형입니다.",
    strengths: ["통찰", "공감", "비전", "상징 이해"],
    spiritual:
      "침묵, 상징, 말씀의 깊은 묵상, 소명에 대한 분별 속에서 하나님과 만나는 길이 자연스럽습니다.",
    alienation:
      "표면적인 활동만 많고 의미를 돌아볼 시간이 없는 환경에서는 내면이 소진되기 쉽습니다.",
    practices: ["렉시오 디비나", "영적 독서", "소명 일지", "한 사람을 위한 깊은 경청"],
    growth: "내면의 통찰을 현실의 작은 행동으로 옮길 때 성숙이 깊어집니다. 완벽한 때를 기다리기보다 작게 시작해 보세요.",
  },
  INTJ: {
    name: "비전의 설계자",
    summary: "긴 흐름을 읽고 구조를 세우며, 신앙과 삶이 어떤 방향으로 자라야 하는지 전략적으로 바라봅니다.",
    strengths: ["전략", "독립성", "분석", "장기 비전"],
    spiritual:
      "체계적인 신학 탐구, 세계관 정리, 긴 호흡의 묵상 프로젝트, 삶의 원칙을 세우는 과정에서 영적 활력을 얻습니다.",
    alienation:
      "감정적 동조만 요구하거나 질문을 불신으로 여기는 분위기에서는 영적으로 멀어진다고 느낄 수 있습니다.",
    practices: ["주제별 신학 노트", "월간 영적 점검", "성경 전체 구조 읽기", "침묵 속 전략적 분별"],
    growth: "정답을 세우는 능력만큼 타인의 연약한 속도를 기다리는 사랑도 필요합니다. 관계는 효율보다 은혜를 먼저 배웁니다.",
  },
  ISTP: {
    name: "고요한 실험가",
    summary: "복잡한 말을 줄이고 실제로 작동하는 방식을 찾습니다. 위기 속에서 차분하고 유연합니다.",
    strengths: ["문제 해결", "관찰", "실용성", "침착함"],
    spiritual:
      "몸을 움직이는 기도, 자연 속 걷기, 기술과 손작업, 실제 문제를 해결하는 봉사에서 하나님을 경험하기 쉽습니다.",
    alienation:
      "끝없는 말과 감정 표현을 요구하는 모임에서는 신앙이 과장된 언어처럼 느껴질 수 있습니다.",
    practices: ["걷기 기도", "수리와 제작 봉사", "짧고 정직한 기도", "야외 묵상"],
    growth: "느낀 것을 전부 말할 필요는 없지만, 중요한 사람에게는 내면의 한 문장을 나누는 연습이 관계를 깊게 합니다.",
  },
  ISFP: {
    name: "아름다움의 순례자",
    summary: "섬세한 감각과 진정성을 지니고, 말보다 분위기와 행동으로 마음을 표현합니다.",
    strengths: ["진정성", "미감", "공감", "유연함"],
    spiritual:
      "음악, 자연, 예술, 조용한 봉사, 마음이 담긴 작은 행위 안에서 하나님을 가까이 느낍니다.",
    alienation:
      "획일적 규칙이나 지나친 평가가 많은 환경에서는 마음이 닫히고, 신앙이 의무처럼 무거워질 수 있습니다.",
    practices: ["찬양 감상 묵상", "자연 관찰 일지", "그림이나 사진 기도", "익명의 선행"],
    growth: "진정성을 지키면서도 필요한 약속과 구조를 받아들이면 은사가 더 오래 지속됩니다.",
  },
  INFP: {
    name: "가치의 구도자",
    summary: "내면의 진실성과 이상을 소중히 여기며, 상처 입은 마음과 잊힌 가능성을 민감하게 알아봅니다.",
    strengths: ["상상력", "가치 감각", "공감", "진실성"],
    spiritual:
      "시, 이야기, 고백적 기도, 정의와 회복에 대한 묵상 속에서 하나님을 인격적으로 만납니다.",
    alienation:
      "성과와 규칙만 강조되고 마음의 진실을 다룰 공간이 없으면 깊은 소외감을 느낄 수 있습니다.",
    practices: ["시편으로 쓰는 개인 기도", "가치 선언문 작성", "회복을 위한 중보", "창작 묵상"],
    growth: "이상은 작은 습관을 만날 때 현실을 바꿉니다. 마음이 움직인 뒤 실행할 아주 작은 다음 행동을 정해 보세요.",
  },
  INTP: {
    name: "진리의 탐구자",
    summary: "질문을 통해 본질을 파고들며, 모순을 발견하고 더 정직한 이해로 나아가려 합니다.",
    strengths: ["논리", "탐구", "개념화", "독립적 사고"],
    spiritual:
      "성경과 신학의 난제를 탐구하고, 믿음의 구조를 질문하며, 조용히 사유하는 과정에서 깊은 영적 만족을 얻습니다.",
    alienation:
      "질문을 불경건으로 취급하거나 빠른 결론만 요구하는 환경에서는 마음을 닫기 쉽습니다.",
    practices: ["질문 노트", "주제별 성경 연구", "신학 토론", "침묵 후 한 문장 정리"],
    growth: "분석이 사랑을 대신하지 않도록, 깨달은 진리를 한 사람에게 유익이 되는 행동으로 연결해 보세요.",
  },
  ESTP: {
    name: "현장의 행동가",
    summary: "순간을 읽고 빠르게 움직이며, 실제 현장에서 사람을 돕고 변화를 만들어 냅니다.",
    strengths: ["행동력", "적응력", "현장 감각", "담대함"],
    spiritual:
      "봉사 현장, 선교적 실천, 몸을 쓰는 활동, 즉각적인 필요에 반응하는 자리에서 신앙이 살아납니다.",
    alienation:
      "긴 이론 강의와 정적인 프로그램만 이어지면 영성이 멀고 지루한 것으로 느껴질 수 있습니다.",
    practices: ["현장 봉사", "짧은 행동 기도", "응급 돌봄 참여", "운동과 묵상 결합"],
    growth: "속도와 담대함에 깊은 성찰을 더하면 영향력이 오래갑니다. 행동 뒤에 짧은 회고를 붙여 보세요.",
  },
  ESFP: {
    name: "기쁨의 환대자",
    summary: "사람의 분위기를 살리고 지금 이 순간의 기쁨을 나누며, 따뜻한 존재감으로 공동체를 밝힙니다.",
    strengths: ["환대", "표현력", "낙관성", "현실 감각"],
    spiritual:
      "찬양, 축제, 식탁 교제, 몸과 감각이 열리는 예배 속에서 하나님을 생생하게 경험합니다.",
    alienation:
      "감정을 억누르거나 지나치게 형식적인 분위기에서는 자신이 가볍게 취급된다고 느낄 수 있습니다.",
    practices: ["찬양과 움직임", "환대 사역", "감사 나눔", "기쁨을 기록하는 사진 일지"],
    growth: "순간의 은혜를 오래 품기 위해 규칙적인 쉼과 약속을 세워 보세요. 기쁨도 돌봄을 받을 때 깊어집니다.",
  },
  ENFP: {
    name: "가능성의 촉매자",
    summary: "사람과 아이디어를 연결하고, 닫힌 마음에 새로운 가능성과 생기를 불어넣습니다.",
    strengths: ["창의성", "격려", "연결", "열정"],
    spiritual:
      "새로운 프로젝트, 대화, 이야기, 상징, 공동체적 상상 속에서 하나님의 가능성을 발견합니다.",
    alienation:
      "반복과 통제만 있고 질문이나 실험이 허용되지 않는 곳에서는 영적 호흡이 막히는 느낌을 받을 수 있습니다.",
    practices: ["비전 보드", "대화형 묵상 모임", "창의적 기도", "새로운 봉사 실험"],
    growth: "가능성은 선택을 통해 열매 맺습니다. 너무 많은 길을 동시에 열기보다 지금 부름 받은 하나를 끝까지 돌보세요.",
  },
  ENTP: {
    name: "질문의 혁신가",
    summary: "익숙한 전제를 흔들고, 대화를 통해 더 넓은 관점과 살아 있는 해석을 찾아냅니다.",
    strengths: ["토론", "발상", "유연한 사고", "문제 재구성"],
    spiritual:
      "질문, 토론, 변증, 새로운 사역 모델 설계, 낡은 틀을 새롭게 해석하는 과정에서 영적 에너지가 살아납니다.",
    alienation:
      "질문을 반항으로만 보거나 정해진 답을 반복하는 환경에서는 신앙이 닫힌 체계처럼 느껴질 수 있습니다.",
    practices: ["변증 토론", "질문 중심 성경공부", "사역 아이디어 스프린트", "반대 관점 묵상"],
    growth: "논쟁의 승리보다 사랑의 열매를 확인해 보세요. 좋은 질문은 사람을 무너뜨리지 않고 더 진실한 곳으로 초대합니다.",
  },
  ESTJ: {
    name: "질서의 실행자",
    summary: "목표를 분명히 하고 책임을 조직하여 공동체가 실제로 움직이게 만드는 힘이 있습니다.",
    strengths: ["책임", "조직력", "결단", "실행"],
    spiritual:
      "명확한 사명, 역할이 있는 봉사, 공동체 운영, 실천 가능한 제자훈련 안에서 신앙이 힘을 얻습니다.",
    alienation:
      "목표가 흐릿하거나 책임이 불분명한 환경에서는 답답함과 비효율을 강하게 느낄 수 있습니다.",
    practices: ["사역 계획표", "실천 중심 제자훈련", "봉사팀 운영", "주간 순종 점검"],
    growth: "일의 완성도만큼 사람의 속도와 마음도 살피면 리더십이 더 따뜻해집니다.",
  },
  ESFJ: {
    name: "공동체의 섬김가",
    summary: "사람들의 필요와 분위기를 민감하게 살피고, 관계가 안전하게 이어지도록 돕습니다.",
    strengths: ["친화력", "섬김", "협력", "세심함"],
    spiritual:
      "공동기도, 돌봄 사역, 환대, 예배 공동체의 리듬 속에서 하나님과 사람을 함께 만납니다.",
    alienation:
      "차가운 토론이나 개인주의적 분위기에서는 자신의 신앙 언어가 약하게 여겨진다고 느낄 수 있습니다.",
    practices: ["소그룹 돌봄", "축복 메시지 보내기", "공동 식사", "기도 제목 관리"],
    growth: "모두를 만족시키려는 부담을 내려놓고, 하나님 앞에서 자신의 진짜 감정도 돌보는 시간이 필요합니다.",
  },
  ENFJ: {
    name: "성장의 동반자",
    summary: "사람의 가능성을 보고 격려하며, 공동체가 더 선한 방향으로 자라도록 이끕니다.",
    strengths: ["격려", "리더십", "공감", "비전 공유"],
    spiritual:
      "제자훈련, 멘토링, 공동체 비전, 사람을 세우는 대화 속에서 신앙의 의미가 선명해집니다.",
    alienation:
      "무관심하거나 냉소적인 환경에서는 깊이 상처받고, 자신이 너무 많이 책임지고 있다고 느낄 수 있습니다.",
    practices: ["멘토링", "공동체 기도회", "비전 나눔", "격려 편지"],
    growth: "타인의 성장을 돕는 손길이 자신을 소진시키지 않도록 고독과 쉼의 경계를 세워야 합니다.",
  },
  ENTJ: {
    name: "사명의 지휘자",
    summary: "큰 목표를 세우고 자원을 정렬하여, 비전이 실제 성과로 이어지도록 추진합니다.",
    strengths: ["전략", "추진력", "리더십", "분명한 판단"],
    spiritual:
      "사명 중심의 프로젝트, 사회적 영향력, 리더십 훈련, 체계적인 변화 계획 속에서 하나님 나라의 방향을 봅니다.",
    alienation:
      "우유부단하거나 책임을 회피하는 분위기에서는 답답함을 느끼고 사람보다 과업을 앞세울 위험이 있습니다.",
    practices: ["사명 선언문", "리더십 금식일", "목표와 가치 점검", "정의 실천 프로젝트"],
    growth: "강한 방향 제시에 연약한 사람을 품는 여백을 더해 보세요. 권위는 섬김을 통과할 때 신뢰가 됩니다.",
  },
};

function temperament(type) {
  if (type.includes("S") && type.includes("J")) return "SJ";
  if (type.includes("S") && type.includes("P")) return "SP";
  if (type.includes("N") && type.includes("F")) return "NF";
  return "NT";
}

function renderButtons(selected) {
  const grid = document.querySelector("#type-grid");
  grid.innerHTML = typeOrder
    .map(
      (type) =>
        `<button class="type-button" type="button" data-type="${type}" aria-pressed="${
          type === selected
        }">${type}</button>`,
    )
    .join("");
}

function renderResult(type) {
  const item = data[type];
  const result = document.querySelector("#result");
  if (!item) {
    result.innerHTML = "";
    renderButtons("");
    return;
  }

  const letters = type.split("");
  const accent = accentByTemperament[temperament(type)];
  const path = spiritualPaths[pathByType[type]];
  result.innerHTML = `
    <article class="result-card" style="--accent:${accent}">
      <header class="result-head">
        <h2>${type}</h2>
        <p>${item.name} · ${item.summary}</p>
        <div class="path-wheel" aria-label="${type} 선호 지표">
          ${letters.map((letter) => `<span>${letter}<small></small></span>`).join("")}
        </div>
      </header>
      <div class="content">
        <section class="block">
          <h3>주요 특징</h3>
          <div class="chips">${item.strengths.map((text) => `<span class="chip">${text}</span>`).join("")}</div>
        </section>
        <section class="block">
          <h3>선호 지표 해석</h3>
          <ul>${letters.map((letter) => `<li>${common[letter]}</li>`).join("")}</ul>
        </section>
        <section class="block path-block">
          <h3>자연스러운 영적 경로</h3>
          <p><strong>${path.title}</strong> · ${path.subtitle}</p>
          <p>${path.text}</p>
        </section>
        <section class="block">
          <h3>영성적 특징</h3>
          <p>${item.spiritual}</p>
        </section>
        <section class="block">
          <h3>소외되기 쉬운 환경</h3>
          <p>${item.alienation}</p>
        </section>
        <section class="block">
          <h3>추천 Soulwork</h3>
          <ul>${item.practices.map((text) => `<li>${text}</li>`).join("")}</ul>
        </section>
        <section class="block">
          <h3>성장 포인트</h3>
          <p>${item.growth}</p>
          <p class="reset-note">${path.reset}</p>
        </section>
      </div>
    </article>
  `;
  renderButtons(type);
}

function renderQuiz() {
  const form = document.querySelector("#quiz-form");
  if (!form) return;
  form.innerHTML = quizAxes
    .map(
      (axis) => `
        <section class="quiz-axis" aria-labelledby="${axis.id}-title">
          <h3 id="${axis.id}-title">${axis.question} <span class="axis-code">(${axis.code})</span></h3>
          <p class="axis-description">${axis.description}</p>
          <div class="choice-pair">
            ${axis.choices
              .map(
                (choice) => `
                  <button class="choice-button" type="button" data-axis="${axis.id}" data-letter="${choice.letter}" aria-pressed="false">
                    <span class="choice-letter">${choice.letter}</span>
                    <strong>${choice.label}</strong> ${choice.text}
                  </button>
                `,
              )
              .join("")}
          </div>
        </section>
      `,
    )
    .join("");
}

function updateQuizResult() {
  const answers = quizAxes.map((axis) => {
    const selected = document.querySelector(`.choice-button[data-axis="${axis.id}"][aria-pressed="true"]`);
    return selected ? selected.dataset.letter : "";
  });
  const result = document.querySelector("#quiz-result");
  if (!result) return;

  if (answers.some((letter) => !letter)) {
    result.classList.remove("is-ready");
    result.innerHTML = "";
    return;
  }

  const type = answers.join("");
  input.value = type;
  renderResult(type);
  result.classList.add("is-ready");
  result.innerHTML = `
    <strong>${type}</strong>
    <p>당신의 약식 결과는 ${type}입니다. 아래 해석은 이 결과를 바탕으로, 당신에게 자연스러운 영성의 길과 성장 포인트를 보여줍니다.</p>
    <p>이 결과는 자기 이해를 돕는 참고용입니다. 사람은 한 유형 안에 갇히지 않으며, 영적 성숙은 익숙한 길에서 출발해 낯선 기능까지 통합해 가는 과정입니다.</p>
  `;
  document.querySelector("#result").scrollIntoView({ behavior: "smooth", block: "start" });
}

function normalizeType(value) {
  return value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 4);
}

const input = document.querySelector("#type-search");
const clear = document.querySelector("#clear-search");

renderQuiz();
renderResult("INFJ");
input.value = "INFJ";

input.addEventListener("input", (event) => {
  const next = normalizeType(event.target.value);
  input.value = next;
  if (next.length === 4) renderResult(next);
});

clear.addEventListener("click", () => {
  input.value = "";
  input.focus();
  renderResult("");
});

document.querySelector("#type-grid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-type]");
  if (!button) return;
  input.value = button.dataset.type;
  renderResult(button.dataset.type);
  document.querySelector("#result").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#quiz-form")?.addEventListener("click", (event) => {
  const button = event.target.closest(".choice-button");
  if (!button) return;
  document
    .querySelectorAll(`.choice-button[data-axis="${button.dataset.axis}"]`)
    .forEach((choice) => choice.setAttribute("aria-pressed", "false"));
  button.setAttribute("aria-pressed", "true");
  updateQuizResult();
});
