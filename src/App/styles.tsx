import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
  max-height: 585px;

  @media (max-width: 750px) {
    align-items: center;
  }
`;

export const RightContainer = styled.div``;
