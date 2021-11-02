import React from "react";
import Produk from "../Class/Produk";
// import { Button } from "bootstrap";
// import Blog from "./Blog";

const Home = () => {
  return (
    <div>
      <Produk stock="10" nama="Macbook Max Pro" harga="36.000.000" />
      <Produk stock="10" nama="Macbook Max Pro" harga="36.000.000" />
      <Produk stock="10" nama="Macbook Max Pro" harga="36.000.000" />
      <Produk stock="10" nama="Macbook Max Pro" harga="36.000.000" />
      <Produk stock="10" nama="Macbook Max Pro" harga="36.000.000" />

      {/* <Button color="danger">Danger!</Button> */}

      {/* <Blog
        tanggal="12 September 2022"
        judul="Teknologi Blockchain"
        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur massa quis magna eleifend vestibulum."
      />
      <Blog
        tanggal="14 September 2022"
        judul="Teknologi Robotik"
        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur massa quis magna eleifend vestibulum."
      />
      <Blog
        tanggal="16 September 2022"
        judul="Teknologi Front End"
        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur massa quis magna eleifend vestibulum."
      /> */}
    </div>
  );
};

export default Home;
