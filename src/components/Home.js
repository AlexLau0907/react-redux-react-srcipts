import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import 'whatwg-fetch'

class Home extends Component {

  constructor(props) {
    super(props)
    props.getProductList()
  }
  
  getProductThumb(productObj, index) {
    return (
      <div key={productObj.id}>
        <h2>品名: {productObj.name}</h2>
        <img width="300px" src={'http://www.uhubest.com/virgo-core/download/' + productObj.image} alt=""/>
        <div><span style={{marginRight: '30px'}}>价格:{productObj.price}</span><span>评论:{productObj.comments}</span></div>
      </div>
    )
  }

  getProductListElement() {
    const {listDataSource} = this.props.productList;

    const thumblist = !!listDataSource.data && listDataSource.data.map((e, index) => {
      return this.getProductThumb(e, index)
    })
    return thumblist
  }

  render() {
    return (
      <div className="Home">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
         { this.getProductListElement()}
      </div>
    );
  }
}

export default Home;