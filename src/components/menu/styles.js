import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-height: fit-content;
  width: 100%;
  z-index: 4;

  .principalButton {
    display: flex;
    align-items: flex-end;
    z-index: 4;
  }

  .list {
    position: absolute;
    background-color: transparent;
    position: absolute;
    top: -100px;
    margin-right: auto;
    margin-left: auto;
    width: 300px;
    font-size: 35px;
  }
  .active {
    position: absolute;
    max-width: 460px;
    top: 80px;
    z-index: 999;
    left: 0;
    padding: 25px;
    text-align: start;
    width: 100%;
  }
`;

export const BgDiv = styled.div`
  background-color: #587789;
  background-image: linear-gradient(90deg, #587789 0%, #54aaa2 100%);

  &.active {
    width: 100%;
    height: 100%;
    z-index: 3;
    height: 100vh;
    position: absolute;
    top: 0;
  }
`;

export const FavElement = styled.div`
  margin: 10px 0;
  border-top: 2px solid #d1c3c3;
  min-width: 250px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  p {
    height: 100%;
    font-size: 2rem;
    font-weight: 600;
  }

  &:last-child {
    border-bottom: 2px solid #d1c3c3;
  }
`;
