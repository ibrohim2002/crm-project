import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  gap: 24px;
  border: solid 1px rgba(240, 240, 240, 1);
  border-radius: 8px;
  box-sizing: border-box;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  width: 434px;
  border-radius: 8px;
`;

export const Title = styled.div`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: rgba(37, 62, 95, 1);
`;

Title.Job = styled(Title)`
  font-size: 12px;
  font-weight: 500;
  color:rgba(146, 159, 175, 1);
`;
