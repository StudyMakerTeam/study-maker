import React from 'react';
import styled from 'styled-components';
import DateInput from './dateInput';
import DetailInput from './detailInput';
import DropDownList from './dropdownList';
import FullInput from './fullInput';
import SmallInput from './smallInput';
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

const StyledContainer = styled.table`
  width: 70%;
  margin: 0px auto;
  border-collapse: separate;
  border-spacing: 0 15px;
`;

const StyledTr = styled.tr`
  & > td + td {
    padding-left: 10px;
  }
`;

const MakeStudy = (props) => {
  return (
    <>
      <StyledContainer>
        <thead>
          <tr>
            <td colSpan="5">
              <FullInput text="스터디 이름을 입력하세요." />
            </td>
          </tr>
          <tr>
            <td colSpan="5">
              <FullInput text="스터디 한 줄 설명을 입력하세요." />
            </td>
          </tr>
          <StyledTr>
            <td>
              <DropDownList name="온/오프라인" options={type} />
            </td>
            <td>
              <DropDownList name="분야" options={category} />
            </td>
            <td>
              <DropDownList name="지역" options={region} />
            </td>
            <td>
              <SmallInput text="모집인원" />
            </td>
            <td width="20%">
              <DateInput text="시작일" />
            </td>
          </StyledTr>
          <tr>
            <td colSpan="5">
              <DetailInput text="스터디에 대한 설명을 작성해 주세요. 허위, 광고글 작성 시 스터디 만들기 권한이 제한될 수 있어요." />
            </td>
          </tr>
          <tr align="right">
            <td colSpan="5">
              <SubmitBtn />
            </td>
          </tr>
        </thead>
      </StyledContainer>
    </>
  );
};

export default MakeStudy;
