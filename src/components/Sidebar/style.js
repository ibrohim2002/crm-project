import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(22, 37, 57, 1);
  width: 20vw;
  height: 100vh;
`;

const common = `
font-family: Montserrat;
font-size: 14px;
font-weight: 500;
line-height: 20px;
text-align: left;
padding: 12px 24px;
color: rgba(24, 144, 255, 1);
`;

export const Title = styled.div`
  ${common};
  display: flex;
  justify-content: space-between;
`;

Title.Main = styled.div`
  ${common};
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
`;

Title.Exit = styled.div`
  ${common};
  margin-top: auto;
`;
