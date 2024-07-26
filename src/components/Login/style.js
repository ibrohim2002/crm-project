import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Wrapper = styled.div`
  width: 430px;
  height: 414px;
  padding: 12px 20px;
`;

export const Title = styled.div`
  font-family: "Inter";
  font-size: 28px;
  font-weight: 500;
  line-height: 38px;
  text-align: center;
  margin: 10px;
`;

Title.Main = styled(Title)``;
Title.Description = styled(Title)`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

Title.Label = styled(Title)`
  font-size: 14px;
  line-height: 20px;
  text-align: left;
`;

export const Input = styled.input`
  width: 390px;
  height: 48px;
  padding: 8px 12px;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid black;
  box-sizing: border-box;
  width: 100%;
`;

export const Button = styled.button`
  width: 390px;
  height: 48px;
  padding: 8px 12px;
  gap: 8px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid rgba(47, 84, 235, 1);
  background-color: rgba(47, 84, 235, 1);
  color: #fff;
  margin-top: 30px;
  width: 100%;
`;
