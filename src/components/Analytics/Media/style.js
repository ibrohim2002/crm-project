import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 16px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => color};
  box-sizing: border-box;
  padding: 24px;
  width: 100%;
  border-radius: 8px;
  border: solid 1px rgba(240, 240, 240, 1);
  gap:16px;
  justify-content: center;
  align-items: center;
`;

Container.Card = styled(Container)`
  align-items: center;
  box-sizing: border-box;
  width: 100%;
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

Title.Container = styled(Title)`
  font-size: 16px;
  font-weight: 700;
  padding: 16px;
`;
