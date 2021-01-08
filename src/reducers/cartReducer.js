import { ADD_TO_CART, REMOVE_ITEM, EMPTY_CART } from "./types.constants";

const initState = {
  addedItems: [],
  total: 0,
};

const findProductInCart = (
  products = initState.addedItems,
  ProductToBeFoundById,
  ProductToBeFoundBySize
) => {
  return products.find(
    (product, index) =>
      product.id === ProductToBeFoundById &&
      product.size === ProductToBeFoundBySize
  );
};

const findIndexOfProductInCart = (
  products = initState.addedItems,
  ProductToBeFoundById,
  ProductToBeFoundBySize
) => {
  return products.findIndex(
    (product) =>
      product.id === ProductToBeFoundById &&
      product.size === ProductToBeFoundBySize
  );
};

const calculateTotal = (products = []) => {
  let total = 0;
  products.forEach((product) => {
    total = total + product.quantity * product.price;
  });
  return total;
};

const removeItem = (
  products = [],
  ProductToBeRemovedById,
  ProductToBeFoundBySize
) => {
  return products.filter((product) => {
    return !(
      product.id === ProductToBeRemovedById &&
      product.size === ProductToBeFoundBySize
    );
  });
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = findProductInCart(
        state.addedItems,
        action.payload.id,
        action.payload.size
      );
      const cartItems = [...state.addedItems];
      if (existingItem) {
        existingItem.quantity = action.payload.quantity;
        const index = findIndexOfProductInCart(
          state.addedItems,
          existingItem.id,
          existingItem.size
        );
        cartItems[index] = existingItem;
      } else {
        cartItems.push(action.payload);
      }

      return {
        ...state,
        addedItems: [...cartItems],
        total: calculateTotal(cartItems),
      };

    case REMOVE_ITEM:
      const newCart = removeItem(
        state.addedItems,
        action.payload.id,
        action.payload.size
      );

      return {
        ...state,
        total: calculateTotal(newCart),
        addedItems: [...newCart],
      };

    case EMPTY_CART:
      return {
        ...state,
        total: 0,
        addedItems: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
