import { GET_PRODUCT_LIST } from '../constants/ActionTypes';

const initialState = {
  isLoading: true,
  listDataSource: [],
}

const productList = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return {
      ...state,
        listDataSource: action.listDataSource,
        isLoading: false
      }
    default:
      return state;
  }
}

export default productList;