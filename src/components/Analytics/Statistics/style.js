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
  height: 148px;
  border-radius: 8px;
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
