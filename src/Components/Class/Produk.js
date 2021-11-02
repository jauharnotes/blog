import React from "react";
import { Component } from "react";
import "./css/Produk.css";

class Produk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stock: this.props.stock,
      sub: "Beli",
      status: "Tersedia",
      disabled: false,
    };
  }

  ButtonClick = () => {
    this.setState({ stock: this.state.stock - 1 });
    if (this.state.stock === 1) {
      this.setState({
        status: "Habis",
        disabled: true,
      });
    }
  };

  render() {
    return (
      <div className="box-stock">
        <h2>{this.props.nama}</h2>
        <img
          src="https://i.gadgets360cdn.com/large/macbook_pro_2021_16_inch_model_image_apple_1634901389235.jpg"
          alt="macbook"
        />
        <p>{this.props.harga}</p>
        <p>{this.state.stock}</p>
        <button
          className="btn-click"
          onClick={this.ButtonClick}
          disabled={this.state.disabled}
        >
          {this.state.sub}
        </button>
        <p>{this.state.status}</p>
      </div>
    );
  }
}

export default Produk;
