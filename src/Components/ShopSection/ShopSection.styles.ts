import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
  margin: 40px;

  h1 {
    color: lightblue;
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 40px;
  }
`;

export const LoadingWrapper = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCartIcon = styled(IconButton)`
  position: fixed !important;
  z-index: 100;
  right: 10px;
  top: 15px;
`;
