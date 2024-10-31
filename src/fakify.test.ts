import { describe, it, expect } from 'vitest';
import { getRandomKoreanName } from './fakify.js';

// 성과 이름 배열
const lastNames = [
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
];
const firstNames = [
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
  '서윤',
  '서연',
  '지우',
  '하은',
  '민서',
  '수아',
  '하윤',
  '다은',
  '예린',
  '은비',
];

describe('getRandomKoreanName', () => {
  it('should return a string', () => {
    const name = getRandomKoreanName();
    expect(typeof name).toBe('string');
  });

  it('should return a name with a valid last name and first name', () => {
    const name = getRandomKoreanName();
    const lastName = name[0]; // 성은 이름의 첫 글자로 가정
    const firstName = name.slice(1); // 나머지는 이름으로 간주

    // 올바른 성과 이름인지 확인
    expect(lastNames).toContain(lastName);
    expect(firstNames).toContain(firstName);
  });

  it('should return different names on multiple calls', () => {
    const name1 = getRandomKoreanName();
    const name2 = getRandomKoreanName();

    // 여러 번 호출했을 때, 이름이 다를 가능성이 있음을 확인
    expect(name1).not.toBe(name2);
  });
});
