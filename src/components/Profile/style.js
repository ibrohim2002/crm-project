import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 24px;
`;

export const Image = styled.img`
  display: inline;
  border-radius: 50%;
  width: 48px;
`;

export const Username = styled.div`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  color: white;
`;

export const Email = styled.div`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: rgba(146, 159, 175, 1);
`;
