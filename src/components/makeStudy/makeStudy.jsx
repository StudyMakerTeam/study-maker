import React, { useState } from 'react';
import styled from 'styled-components';
import DateInput from './dateInput';
import DetailInput from './detailInput';
import DropDownList from './dropdownList';
import FullInput from './fullInput';
import NumInput from './numInput';
import SubmitBtn from './submitBtn';

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

const StyledContainer = styled.div`
  margin: 0px auto;

  & form > input,
  & form > div {
    margin-bottom: 10px;
  }
  & > button {
    float: right;
    margin-top: 10px;
  }
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 12% 20%;
  grid-gap: 10px;
  justify-content: space-between;
`;

const MakeStudy = () => {
  const [infos, setInfos] = useState({
    name: '',
    summary: '',
    type: '',
    category: '',
    region: '',
    numOfPeople: 0,
    startDay: '',
    description: '',
  });

  const onChange = (value) => {
    setInfos({ ...infos, ...value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (infos.name === '') {
      alert('스터디 이름을 입력하세요.');
    } else if (infos.summary === '') {
      alert('스터디 한 줄 설명을 입력하세요.');
    } else if (infos.type === '') {
      alert('스터디 방식을 선택하세요.');
    } else if (infos.category === '') {
      alert('스터디 분야를 선택하세요.');
    } else if (infos.region === '') {
      alert('스터디 지역을 선택하세요.');
    } else if (infos.numOfPeople === 0) {
      alert('스터디 모집 최소 인원 수를 입력하세요.');
    } else if (infos.startDay === '') {
      alert('스터디 시작일을 입력하세요.');
    } else if (infos.description === '') {
      alert('스터디에 대한 설명을 작성하세요.');
    }
  };

  return (
    <>
      <StyledContainer>
        <form onSubmit={onSubmit} action="index.html">
          <FullInput
            name="name"
            text="스터디 이름을 입력하세요."
            value={infos.name}
            onChange={onChange}
          />
          <FullInput
            name="summary"
            text="스터디 한 줄 설명을 입력하세요."
            value={infos.summary}
            onChange={onChange}
          />
          <StyledDiv>
            <DropDownList
              name="type"
              optionName="온/오프라인"
              options={type}
              value={infos.type}
              onChange={onChange}
            />
            <DropDownList
              name="category"
              optionName="분야"
              options={category}
              value={infos.category}
              onChange={onChange}
            />
            <DropDownList
              name="region"
              optionName="지역"
              options={region}
              value={infos.region}
              onChange={onChange}
            />
            <NumInput
              name="numOfPeople"
              text="모집인원"
              value={infos.numOfPeople}
              onChange={onChange}
            />
            <DateInput
              name="startDay"
              text="시작일"
              value={infos.startDay}
              onChange={onChange}
            />
          </StyledDiv>
          <DetailInput
            name="description"
            text="스터디에 대한 설명을 작성해 주세요. 허위, 광고글 작성 시 스터디 만들기 권한이 제한될 수 있어요."
            value={infos.description}
            onChange={onChange}
          />
        </form>
        <SubmitBtn onSubmit={onSubmit} />
      </StyledContainer>
    </>
  );
};

export default MakeStudy;
