import React from "react";

import { Container } from "./styles";

import shoes from "../../assets/tenis.png";
import tshirt from "../../assets/camisa.png";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/LanguageSwitcher";

const CheckoutPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <section className="modal">
        <div className="modal-header">
          <h1 className="modal-title">{t("modal-title")}</h1>
          <LanguageSwitcher />
        </div>
        <div className="items">
          <div className="item">
            <img
              src={shoes}
              alt="Nike Paul George 2 Masculino"
              className="Item-image"
            />
            <div className="item-info">
              <h3>Tênis Nike Paul George 2 Masculino</h3>
              <span>Cód: AJ2039-003</span>
            </div>
            <span className="item-value">{t('currency')} 549,99</span>
          </div>
          <div className="item">
            <img
              src={tshirt}
              alt="Camiseta Masculina Fitness Básica Manga Curta"
              className="Item-image"
            />
            <div className="item-info">
              <h3>Camiseta Masculina Fitness Básica Manga Curta</h3>
              <span>Cód: MR 10047990791</span>
            </div>
            <span className="item-value">{t('currency')} 29,99</span>
          </div>
        </div>
        <div className="divider"></div>
        <div className="resume">
          <h1>{t("order-summary")}</h1>
          <div className="resume-itens">
            <div className="resume-item">
              <span>{t("order-summary-subtitle")}</span>
              <span>{t('currency')} 579,98</span>
            </div>
            <div className="resume-item">
              <span>{t('order-summary-shipping')}</span>
              <span>{t('currency')} 40,00</span>
            </div>
            <div className="divider"></div>
            <div className="amount">
              <span>Total</span>
              <span>{t('currency')} 619,98</span>
            </div>
            <button className="btn-checkout">{t('order-checkout')}</button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CheckoutPage;
