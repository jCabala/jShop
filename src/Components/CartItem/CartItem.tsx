import Button from '@material-ui/core/Button';
import { Wrapper, ItemDisplay } from './CartItem.styles';
import { CartItemType } from '../../App';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import { AnimatePresence } from 'framer-motion';

type Props = {
  item: CartItemType;
  handleAddToCart: (item: CartItemType) => void;
};

const CartItem: React.FC<Props> = ({ item, handleAddToCart }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const { title, description, image, price } = item;

  return (
    <>
      <Wrapper onClick={() => setModalOpen(!modalOpen)}>
        <img src={image} alt='' />
        <div>
          <h3>{title}</h3>

          <h3>$ {price}</h3>
        </div>
      </Wrapper>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal handleClose={() => setModalOpen(!modalOpen)}>
            <ItemDisplay>
              <img src={image} alt='' />
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <h3>$ {price}</h3>
                <Button onClick={() => handleAddToCart(item)}>
                  Add To Cart
                </Button>
              </div>
            </ItemDisplay>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartItem;
