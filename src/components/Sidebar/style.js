import styled from "styled-components";
import RightArrow from "../../assets/icons/arrow.svg?react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  position: relative;
  background-color: white;
  height: 100vh;
  overflow: hidden scroll;
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
  color: #1890ff;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
`;

Title.Exit = styled.div`
  ${common};
  display: flex;
  margin-top: auto;
  width: 100%;
  position: sticky;
  bottom: 0px;
  border-top: 1px solid rgb(222, 225, 227);
  background-color: white;
`;

export const Arrow = styled(RightArrow)`
  margin-left: auto;
`;

export const Submenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;
