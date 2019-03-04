import styled, { createGlobalStyle } from "styled-components";

createGlobalStyle`
*{
  margin:0px;
  padding:0px;
  box-sizing:border-box;
}

body{
  text-rendering:optimizeLegibility !important;
  --webkit-font-smoothing:antialiased !important;
  background:#f5f5f5;
}
`;

export const Header = styled.header`
  width: 100%;
  background-color: #7159c1;
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  display: flex;
  padding: 10px 20px;

  position: fixed;
  top: 0px;
  left: 0px;

  button {
    flex: 1;
    background: transparent;
    border: 0px;
    font-weight: 600px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }

  input {
    flex: 4;
    border: 0;
    background: #fff;
    color: #333;
    height: 32px;
    font-size: 14px;
    border-radius: 4px;
    padding: 0px 10px;
    margin-right: 10px;
  }
`;

export const Repositories = styled.ul`
  list-style: none;
  margin: 70px 20px 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    flex: 1;
    padding: 20px;
    display: flex;
    background: #fff;
    box-shadow: 0 0 10px 0 rgba(221, 221, 221, 0.5);
    border-radius: 4px;

    img {
      height: 60px;
      width: 60px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        color: #333;
        font-size: 16px;
      }

      p {
        font-size: 14px;
        color: #666;
        margin-top: 5px;
      }

      a {
        color: #7159c1;
        font-size: 14px;
        font-weight: bold;
        margin-top: 10px;
        text-decoration: none;
        text-transform: uppercase;
        display: block;
      }
    }
  }
`;

export const Offline = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 40px;
  width: 100%;
  background: #c15959;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;
