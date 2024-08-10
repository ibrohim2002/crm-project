import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border: solid 1px rgba(240, 240, 240, 1);
  border-radius: 8px;
  box-sizing: border-box;
  padding: 24px;
  width: 100%;
`;

Container.Week = styled(Container)`
width: 100%;
flex-direction: row;
gap: 10px;
border: none;
  padding: 0;
`;
Container.Price = styled(Container)`
  border: none;
  width: 100%;
  padding: 0;
`;
Container.Month = styled(Container)`
  flex-direction: row;
  border: none;
  padding: 0;
  justify-content: space-between;
  width: 100%;
  .arrow {
    transform: rotate(180deg);
  }
`;

export const Wrapper = styled.div`
  display: flex;
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
`;
Title.Price = styled(Title)`
  font-size: 32px;
  font-weight: 600;
  text-align: left;
`;

Title.Container = styled(Title)`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  width: 50px;
  height: 70px;
  align-items: center;
  border-radius: 24px;
  border: solid 1px rgba(240, 240, 240, 1);
  padding: 10px;
  box-sizing: border-box;
  &:hover {
    background-color: #1890ff;
    .title {
      color: white;
    }
  }
`;
