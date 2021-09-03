import React from 'react';
import DateInput from './dateInput';
import Description from './description';
import DropDownList from './dropdownList';
import FullInput from './fullInput';
import SmallInput from './smallInput';

const type = ['온라인', '오프라인'];
const category = [
  '어학',
  '취업',
  '고시/공무원',
  '취미/교양',
  '프로그래밍',
  '자율',
  '기타',
];
const region = [
  '서울',
  '수원',
  '인천',
  '대구',
  '부산',
  '울산',
  '광주',
  '전주',
  '대전',
  '세종',
  '천안',
  '청주',
  '원주',
  '춘천',
  '제주',
  '기타',
];

const MakeStudy = (props) => {
  return (
    <>
      <FullInput text="스터디 이름을 입력하세요." />
      <FullInput text="스터디 한 줄 설명을 입력하세요." />
      <DropDownList name="온/오프라인" options={type} />
      <DropDownList name="분야" options={category} />
      <DropDownList name="지역" options={region} />
      <SmallInput text="모집인원" />
      <DateInput text="시작일" />
      <Description />
    </>
  );
};

export default MakeStudy;
