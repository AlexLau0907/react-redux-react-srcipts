import { connect } from 'react-redux'

import { getProductList } from './actions/productActions'
import Home from './components/Home'

const mapStateProps = (state) => ({
  productList: state.productListReducer,
})

const App = connect(
  mapStateProps,
  {
    getProductList: (params) => getProductList(params)
  }
)(Home);

export default App