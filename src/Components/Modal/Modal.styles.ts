import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BackdropWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #000000e1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 90;
`;

export const ModalWrapper = styled(motion.div)`
  width: clamp(50%, 700px, 90%);

  margin: auto;
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  background: white;
`;
