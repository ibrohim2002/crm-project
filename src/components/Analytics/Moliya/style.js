import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 24px;
  border: solid 1px rgba(240, 240, 240, 1);
  border-radius: 8px;
  box-sizing: border-box;
  padding: 24px;
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 50px;
  box-sizing: border-box;
`;

export const Title = styled.div`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: rgba(37, 62, 95, 1);
  `;

Title.Main = styled(Title)`
font-size: 16px;
font-weight: 700;
  padding: 16px;
`

Title.Container = styled(Title)`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  width: 50px;
  align-items: center;
  border-radius: 18px;
  border: solid 1px rgba(240, 240, 240, 1);
  padding: 10px;
  box-sizing: border-box;
  &:hover {
    background-color: #1890ff;
    .title{
      color: white;
    }
  }
`;
