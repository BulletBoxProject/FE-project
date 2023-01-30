import React from "react";
import styled from "styled-components";

import DailyLogCalendar from "../../common/calendar/DailyLogCalendar";

const CalendarModal = () => {
  const focusTodayHandler = () => {
    console.log("today Clicked");
  };
  return (
    <CalendarContents>
      <TodayButton onClick={focusTodayHandler}>Today</TodayButton>
      <DailyLogCalendar />
      <CalendarButtonGroup>
        <ComfirmButton>
          <span>확인</span>
        </ComfirmButton>
        <CancelButton>
          <span>취소</span>
        </CancelButton>
      </CalendarButtonGroup>
    </CalendarContents>
  );
};

export default CalendarModal;

const CalendarContents = styled.div``;
const TodayButton = styled.button`
  position: absolute;
  transform: translate(660%, 180%);
  border: 0;
  background-color: transparent;
  font-weight: bolder;
`;
const CalendarButtonGroup = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 80%;
  transform: translate(12.5%, -100%);
  border-radius: 0 0 8px 8px;
  & > button {
    background-color: var(--color-default);
    width: 50%;
    height: 45px;
    font-size: 14px;
    font-weight: bold;
  }
`;
const ComfirmButton = styled.button`
  border: 0;
  border-radius: 0 0 0 8px;
  pointer-events: none;
  color: var(--color-main);
  & > span {
    pointer-events: all;
  }
`;
const CancelButton = styled.button`
  border: 0;
  border-radius: 0 0 8px 0;
  pointer-events: none;
  & > span {
    pointer-events: all;
    color: gray;
  }
`;
