import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
`;

Container.Nav = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 24px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  box-sizing: border-box;
  background-color: rgba(240, 245, 255, 1);
`;
// Container.Filter = styled(Container)``;
export const Table = styled.table`
  border-collapse: collapse;
`;
export const Btn = styled.button`
  display: flex;
  font-family: Montserrat;
  background-color: rgb(24, 144, 255);
  color: white;
  border-radius: 8px;
  padding: 10px 16px;
  cursor: pointer;
  margin-left: auto;
  border: none;
`;
export const Title = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: rgba(37, 62, 95, 1);
`;

Title.Main = styled(Title)`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
`;
Title.Header = styled(Title)`
  color: rgba(146, 159, 175, 1);
`;

export const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 6px;
  gap: 10px;
  margin-left: auto;
`;
export const TableRow = styled.tr`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 16px;
  display: table-row;
  vertical-align: middle;
  &:hover {
    background: #e1effd;
  }
`;
export const TableData = styled.td`
  box-sizing: border-box;
  padding: 16px;
`;
export const TableHead = styled.td`
  box-sizing: border-box;
  padding: 16px;
`;

export const Modal = styled.div`
  position: fixed;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const AddOrder = styled.div`
  display: flex;
  flex-direction: column;
  margin: 78px auto auto;
  width: fit-content;
  background-color: white;
  padding: 32px 48px;
  gap: 16px;
  border-radius: 8px;
  max-height: 90%;
  /* overflow: hidden scroll; */
  width: 400px;
  input,select{
    padding: 10px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 5px;
    font-size: 14px;
    color: rgb(73, 80, 87);
  }
  button{
    padding: 10px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 5px;
    font-size: 14px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    background-color: rgb(24, 144, 255);
    width: 100px;
  }
`;
