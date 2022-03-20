import { BackdropWrapper } from './Modal.styles';

type Props = {
  children: JSX.Element;
  onClick: () => void;
};

const Backdrop: React.FC<Props> = ({ children, onClick }) => {
  return (
    <BackdropWrapper
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </BackdropWrapper>
  );
};

export default Backdrop;
