import { ModalWrapper } from './Modal.styles';
import Backdrop from './Backdrop';

type Props = {
  handleClose: () => void;
  children: JSX.Element | JSX.Element[];
};

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffnes: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const Modal: React.FC<Props> = ({ handleClose, children }) => {
  return (
    <Backdrop onClick={handleClose}>
      <ModalWrapper
        onClick={e => e.stopPropagation()}
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        {children}
      </ModalWrapper>
    </Backdrop>
  );
};

export default Modal;
