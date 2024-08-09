import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 24px; */
  border: solid 1px rgba(240, 240, 240, 1);
  border-radius: 8px;
  box-sizing: border-box;
  padding: 24px;
  width: 695px;
`;

export const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 6px;
  &:hover {
    background: #e1effd;
  }
`;

Wrapper.Message = styled(Wrapper)`
  flex-direction: column;
  width: 180px;
  align-items: start;
`;

Wrapper.Profile = styled(Wrapper)`
  gap: 20px;
`;

export const Title = styled.div`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: rgba(37, 62, 95, 1);
  text-align: left;
`;

Title.Message = styled(Title)``;

Title.Job = styled(Title)`
  font-size: 12px;
  font-weight: 500;
  color: rgba(146, 159, 175, 1);
`;
Title.Time = styled(Title)`
  font-size: 12px;
  font-weight: 500;
  color: rgba(146, 159, 175, 1);
  margin-left: auto;
`;

Title.Container = styled(Title)`
  font-size: 16px;
  font-weight: 700;
  padding: 16px;
`;
