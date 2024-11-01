export const getRandomKoreanName = (): string => {
  const lastNames: string[] = [
    '김',
    '이',
    '박',
    '최',
    '정',
    '강',
    '조',
    '윤',
    '장',
    '임',
    '홍',
    '문',
    '하',
  ];
  const firstNames: string[] = [
    '민준',
    '서준',
    '도윤',
    '예준',
    '시우',
    '하준',
    '주원',
    '지호',
    '지훈',
    '준우',
    '예서',
    '현상',
    '서윤',
    '서연',
    '지우',
    '하은',
    '호준',
    '민서',
    '수아',
    '하윤',
    '다은',
    '예린',
    '은비',
  ];

  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];
  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];

  return `${randomLastName}${randomFirstName}`;
};
