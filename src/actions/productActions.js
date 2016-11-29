import * as ActionTypes from '../constants/ActionTypes'
import DemoData from '../test/DemoData'

export const getProductList = (params) => {
  return (dispatch, getState) => {
    setTimeout(() => dispatch(
      {
        type: ActionTypes.GET_PRODUCT_LIST,
        listDataSource: DemoData
      }
    ), 2000)
  }
}