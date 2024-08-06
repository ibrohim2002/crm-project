import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: rgba(22, 37, 57, 1);
  width: calc(100vw - 250px);
  box-sizing: border-box;
  padding: 10px 16px;
  background: rgba(255, 255, 255, 1);
  `;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Text = styled.div`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
`;

Text.Time = styled(Text)`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: rgba(37, 62, 95, 1);
  .time {
    color: rgba(187, 195, 205, 1);
    margin-left: 8px;
  }
`;

export const Input = styled.input`
  width: 400px;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  opacity: 0px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(187, 195, 205, 1);
`;
