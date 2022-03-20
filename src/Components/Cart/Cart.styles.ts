import styled from 'styled-components';

export const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  @media (max-width: 550px) {
    width: 80vw;
  }
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ItemWrapper = styled.div`
  display: flex;

  justify-content: space-between;
  img {
    width: 150px;
  }

  margin: 50px 20px;
`;

export const ItemInfo = styled.div``;

export const ItemButtons = styled.div`
  display: flex;

  p {
    margin: 10px 20px;
    text-align: center;
  }
`;

export const Form = styled.form`
  div {
    * {
      margin-top: 10px;
    }
  }

  button {
    margin-top: 10px;
    background-color: black;
    color: white;
    &:hover {
      background-color: lightblue;
    }
  }
`;
