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

  & > input,
  & > div {
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

  return (
    <>
      <StyledContainer>
        <FullInput
          text="스터디 이름을 입력하세요."
          value={infos.name}
          onChange={onChange}
        />
        <FullInput
          text="스터디 한 줄 설명을 입력하세요."
          value={infos.summary}
          onChange={onChange}
        />
        <StyledDiv>
          <DropDownList
            name="온/오프라인"
            options={type}
            value={infos.type}
            onChange={onChange}
          />
          <DropDownList
            name="분야"
            options={category}
            value={infos.category}
            onChange={onChange}
          />
          <DropDownList
            name="지역"
            options={region}
            value={infos.region}
            onChange={onChange}
          />
          <NumInput
            text="모집인원"
            value={infos.numOfPeople}
            onChange={onChange}
          />
          <DateInput text="시작일" value={infos.startDay} onChange={onChange} />
        </StyledDiv>
        <DetailInput
          text="스터디에 대한 설명을 작성해 주세요. 허위, 광고글 작성 시 스터디 만들기 권한이 제한될 수 있어요."
          value={infos.description}
          onChange={onChange}
        />
        <SubmitBtn />
      </StyledContainer>
    </>
  );
};

export default MakeStudy;
