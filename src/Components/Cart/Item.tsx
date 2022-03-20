import Button from '@material-ui/core/Button';
import { CartItemType } from '../../App';
import { ItemInfo, ItemWrapper, ItemButtons } from './Cart.styles';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Item: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  const { title, price, amount, image } = item;

  return (
    <ItemWrapper>
      <div>
        <h3>{title}</h3>

        <ItemInfo>
          <p>Price: ${price}</p>
          <p>Total: ${(price * amount).toFixed(2)}</p>
        </ItemInfo>

        <ItemButtons>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <p>{amount}</p>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </ItemButtons>
      </div>
      <img src={image} alt='' />
    </ItemWrapper>
  );
};

export default Item;
