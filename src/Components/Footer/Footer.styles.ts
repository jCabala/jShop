import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: lightblue;
  padding: 30px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  div {
    * {
      color: white;
      line-height: 24px;
      font-weight: 500;
    }

    p {
      font-size: 1.25rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;

  p {
    font-size: 3rem;
    color: white;
    margin-left: 20px;
    font-weight: 500;
  }
`;
