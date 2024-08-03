import styled from "styled-components";
import RightArrow from "../../assets/icons/arrow.svg?react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(22, 37, 57, 1);
  width: 250px;
  min-height: 100vh;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  color: ${({ active }) => (active ? "#1890ff" : "#929FAF")};
  &:active,
  &:hover {
    color: #1890ff;
    .icon {
      padding-right: 10px;
      & path {
        fill: #1890ff;
      }
    }
  }
  .icon {
    padding-right: 10px;
    & path {
      fill: ${({ active }) => (active ? "#1890ff" : "#929FAF")};
    }
  }
`;

Title.Main = styled.div`
  ${common};
  color: #1890FF;
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
`;

export const Submenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;
