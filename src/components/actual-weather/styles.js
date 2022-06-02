import styled from "styled-components";

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .one {
  }
  .image {
  }

  .three {
  }
`;

export const Today = styled.div`
  margin-bottom: 30px;
  font-weight: 600;

  & h2 {
    font-size: 2.5rem;
    margin: 0;
  }
  & p {
    margin: 0;
  }
`;

export const CustomImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 90%;

  & img {
    max-height: 150px;
  }
`;
export const Number = styled.div`
  & p {
    font-size: 5rem;
    margin: 0;
  }

  & span {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;
