import React from "react";

import { Container } from "./styles";

import shoes from "../../assets/tenis.png";
import tshirt from "../../assets/camisa.png";

const CheckoutPage: React.FC = () => {
  return (
    <Container>
      <section className="modal">
        <h1 className="modal-title">Seu Carrinho</h1>
        <div className="items">
          <div className="item">
            <img src={shoes} alt="item" className="Item-image" />
            <div className="item-info">
              <h3>Tênis Nike Paul George 2 Masculino</h3>
              <span>Cód: AJ2039-003</span>
            </div>
            <span className="item-value">R$ 549,99</span>
          </div>
          <div className="item">
            <img src={tshirt} alt="item" className="Item-image" />
            <div className="item-info">
              <h3>Camiseta Masculina Fitness Básica Manga Curta </h3>
              <span>Cód: MR 10047990791</span>
            </div>
            <span className="item-value">R$ 29,99</span>
          </div>
        </div>
        <div className="divider"></div>
        <div className="resume">
          <h1>Resumo do Pedido</h1>
          <div className="resume-itens">
            <div className="resume-item">
              <span>Subtotal de produtos</span>
              <span>R$ 579,98</span>
            </div>
            <div className="resume-item">
              <span>Entrega</span>
              <span>R$ 40,00</span>
            </div>
            <div className="divider"></div>
            <div className="amount">
              <span>Total</span>
              <span>R$ 619,98</span>
            </div>
            <button className="btn-checkout">Finalizar Pedido</button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CheckoutPage;
