import styled from "styled-components";
import search from "../../assets/icons/search.svg?react";

export const Container = styled.div`
  display: flex;
  background: rgba(22, 37, 57, 1);
  width: calc(100vw - 250px);
  box-sizing: border-box;
  padding: 10px 40px;
  background: rgba(255, 255, 255, 1);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const InputContainer = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-radius: 8px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #f0f0f0;
`;

export const Input = styled.input`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  border: none;
  width: 100%;
  color: rgba(187, 195, 205, 1);
`;
export const Data = styled.input`
  border-radius: 8px;
  border: 1px solid lightgray;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(37, 62, 95, 1);
  cursor: pointer;
  background-color: #f9f9f9;
  padding: 10px 10px 10px 16px;
  margin: 0 16px;
  height: 40px;
  box-sizing: border-box;
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

export const Search = styled(search)`
  width: 20px;
  margin: 0 16px;
`;

export const LangBtn = styled.div`
  border-radius: 8px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(37, 62, 95, 1);
  cursor: pointer;
  background-color: #f9f9f9;
  padding: 10px;
  height: 40px;
  width: 100px;
  box-sizing: border-box;
  position: relative;
  border: none;
`;

LangBtn.Main = styled(LangBtn)`
  border: 1px solid lightgray;
`;

export const Languages = styled.div`
  position: absolute;
  background-color: #f9f9f9;
  top: 100%;
  left: 0;
  border-radius: 8px;
  border: 1px solid lightgray;
`;
