import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px;
  min-height: calc(100vh - 70px);
  font-family: Arial, Helvetica, sans-serif;

  img {
    width: 100vw;
    max-width: 1200px;
  }

  h2 {
    span {
      color: lightblue;
    }
    margin-bottom: 20px;
  }
`;

type SectionProps = {
  colored?: boolean;
};

export const Section = styled.section<SectionProps>`
  padding: 40px;
  margin: 50px 0;
  min-height: 800px;
  background-color: ${({ colored }) => (colored ? 'lightblue' : 'white')};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 2.5rem;
    color: ${({ colored }) => (colored ? 'white' : 'black')};
  }
`;

export const CarouseleItemContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  min-height: 300px;
  max-height: 500px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  border: 2px solid white;
  border-top: none;
  img {
    display: block;
    width: 100%;
    height: auto;
    min-height: 300px;
    max-height: 500px;

    object-fit: cover;
  }

  .overlay {
    border-bottom-left-radius: 30%;
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    top: -2px;
    background-color: lightblue;
    overflow: hidden;
    width: 100%;
    max-width: 1000px;
    height: 0;
    transition: 0.5s ease;

    p {
      font-family: Arial, Helvetica, sans-serif;
      white-space: nowrap;
      color: white;
      font-size: 2rem;
      position: absolute;
      overflow: hidden;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
    }
  }

  &:hover .overlay {
    bottom: 5px;
    height: calc(2px + 100%);
  }
`;

export const HeroBtn = styled(Button)`
  background-color: lightblue !important;
  font-size: 1.5rem !important;
  color: white !important;
  padding: 10px !important;
  transition: transform 0.3s ease-out !important;

  &:hover {
    transform: scale(0.95);
  }
`;
