import Item from './Item';
import { Wrapper, Form } from './Cart.styles';
import { CartItemType } from '../../App';
import Button from '@material-ui/core/Button';
import Modal from '../Modal/Modal';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';

type Props = {
  cartItems: CartItemType[];
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: number) => void;
  clearCartItems: () => void;
};

const Cart: React.FC<Props> = ({
  cartItems,
  addToCart,
  removeFromCart,
  clearCartItems,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleBuy = () => {
    clearCartItems();
    setModalOpen(false);
    alert('Your Purchase Was Successful!');
  };

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 && <p>The cart is empty.</p>}
      {cartItems.map(item => (
        <Item
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}

      {cartItems.length > 0 && (
        <>
          <p style={{ fontWeight: 500, fontSize: '1.5rem' }}>
            Total: ${cartItems.reduce((ac, e) => ac + e.amount * e.price, 0)}
          </p>
          <Button
            style={{
              backgroundColor: 'lightblue',
              color: 'white',
              fontSize: '1.5rem',
              margin: 10,
            }}
            onClick={() => setModalOpen(!modalOpen)}
          >
            Buy now!
          </Button>
        </>
      )}

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal handleClose={() => setModalOpen(!modalOpen)}>
            <Form>
              <h3>Enter Your Details</h3>
              <div>
                <TextField
                  required
                  id='outlined-required'
                  label='Full Name'
                  placeholder='John Doe'
                />
                <TextField
                  required
                  id='outlined-required'
                  label='Country'
                  placeholder='Poland'
                />
              </div>
              <div>
                <TextField
                  type='email'
                  id='outlined-required'
                  label='Email'
                  required
                />
                <TextField
                  type='tel'
                  id='outlined-required'
                  label='Phone Number'
                  required
                />
              </div>
              <div>
                <TextField id='outlined-required' label='Street' required />
                <TextField id='outlined-required' label='City' required />
                <TextField
                  id='outlined-required'
                  label='Postal Code'
                  required
                />
              </div>

              <div>
                <TextField
                  type='email'
                  disabled
                  id='outlined-disabled'
                  label='Credit Card Number'
                  defaultValue='123123123123'
                />
                <TextField
                  type='email'
                  disabled
                  id='outlined-disabled'
                  label='Expiry Date'
                  defaultValue='12/28'
                />
                <TextField
                  type='email'
                  disabled
                  id='outlined-disabled'
                  label='CVC Code'
                  defaultValue='420'
                />
              </div>

              <Button onClick={handleBuy}>Buy Now</Button>
            </Form>
          </Modal>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Cart;
