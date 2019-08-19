import React, {Component} from "react";
import {observer, inject} from "mobx-react";

@inject("CartStore")
@observer
class CartCounte extends Component {
  render() {
    const {cart} = this.props.CartStore;
    return <span>Carrito: {cart.length}</span>;
  }
}

export default CartCounte;
