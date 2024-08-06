import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 24px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => color};
  box-sizing: border-box;
  padding: 10px 16px;
  width: 334px;
  height: 128px;
  border-radius: 8px;
  border: solid 1px rgba(240, 240, 240, 1);
`;

export const Title = styled.div`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: rgba(37, 62, 95, 1);
  text-align: left;
`;

Title.Number = styled(Title)`
  font-size: 32px;
`;
Title.Percent = styled(Title)`
  font-size: 22px;
  color: green;
`;
