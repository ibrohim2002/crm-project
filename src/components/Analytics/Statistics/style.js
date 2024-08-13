import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => color};
  box-sizing: border-box;
  padding: 16px;
  width: 100%;
  height: 168px;
  border-radius: 8px;
`;
Container.Card = styled(Container)`
  align-items: center;
  box-sizing: border-box;
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

Title.Plus = styled(Title)`
  font-size: 32px;
  line-height: 19px;
  margin: 0 8px 0 auto;
  background-color: ${({ color }) =>
    color == "#f6ffed"
      ? "#B7EB8F"
      : color == "#fffbe6"
      ? "#FFE58F"
      : "#91D5FF"};
  border-radius: 50%;
  padding: 5px;
  text-align: center;
  color: white;
  cursor: pointer;
`;

Title.Container = styled(Title)`
  font-size: 16px;
  font-weight: 700;
  padding: 16px;
`;

export const Image = styled.img`
  display: inline;
  border-radius: 50%;
  width: 177px;
  /* height: 48px; */
  padding-right: 10px;
  margin-left: auto;
`;
