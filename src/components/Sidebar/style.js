import styled from "styled-components";
import RightArrow from "../../assets/icons/arrow.svg?react"

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
color: #929FAF;
`;

export const Title = styled.div`
  ${common};
  display: flex;
  align-items: center;
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

export const Arrow = styled(RightArrow)`
  margin-left: auto;
`
