import { useState } from 'react';
import { useQuery } from 'react-query';
import Drawer from '@material-ui/core/Drawer';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import { LoadingWrapper, Wrapper } from './ShopSection.styles';
import CartItem from '../CartItem/CartItem';
import { StyledCartIcon } from './ShopSection.styles';
import Cart from '../Cart/Cart';

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const ShopSection = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );

  const getTotalItems = (items: CartItemType[]) =>
    cartItems.reduce((ac: number, item) => ac + item.amount, 0);

  const handleAddToCart = (item: CartItemType) => {
    const isItem = cartItems.find(e => e.id === item.id);

    let newItems: CartItemType[] = [];

    if (isItem) {
      newItems = cartItems.map(e =>
        e.id === item.id ? { ...item, amount: e.amount + 1 } : e
      );
    }

    if (!isItem) {
      newItems = [...cartItems, { ...item, amount: 1 }];
    }

    setCartItems(newItems);
  };

  const handleRemoveFromCart = (id: number) => {
    const newItems = cartItems.map(e =>
      e.id === id ? { ...e, amount: e.amount - 1 } : e
    );
    const filteredItems = newItems.filter(e => e.amount > 0);

    setCartItems(filteredItems);
  };

  if (isLoading)
    return (
      <LoadingWrapper>
        <CircularProgress />
      </LoadingWrapper>
    );
  if (error) return <h2>Ooops. Something went wrong. :(</h2>;

  return (
    <Wrapper id='shop'>
      <h1>Our products</h1>
      <StyledCartIcon onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error' />
        <AddShoppingCartIcon
          style={{ fontSize: '2.25rem', color: '#658F9C' }}
        />
      </StyledCartIcon>

      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
          clearCartItems={() => setCartItems([])}
        />
      </Drawer>

      <Grid container spacing={3}>
        {data?.map((item: CartItemType) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <CartItem item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default ShopSection;
