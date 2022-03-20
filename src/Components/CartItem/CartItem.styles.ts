import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  cursor: pointer;
  transition: transform 0.5s ease-in;
  button {
    border-radius: 0 0 20px;
  }

  img {
    max-height: 250px;
    object-fit: contain;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Ariel;
    padding: 1rem;
    height: 100%;
    text-align: center;
  }

  &:hover {
    transform: scale(1.07);
  }
`;

export const ItemDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 580px) {
    flex-direction: column;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    * {
      margin: 5px;
    }
    p {
      line-height: 32px;
      @media (max-width: 580px) {
        line-height: 24px;
      }
    }
    button {
      width: 100% !important;

      background: black;
      color: white;
      font-weight: 700;
      font-size: 1rem;
      transition: transform 0.3s ease-in;
      &:hover {
        transform: scale(0.95);
        background: #232b2b;
      }
    }
  }

  img {
    width: min(500px, 40%);
    margin-right: 20px;
  }
`;
