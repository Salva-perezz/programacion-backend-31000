class Cotizador {
  static currencies = {
    USD: 1,
    ARS: 290,
    UYU: 100,
  };

  getCurrencyPrice(price, currency) {
    switch (currency) {
      case "USD":
        return price * Cotizador.currencies.USD;
      case "ARS":
        return price * Cotizador.currencies.ARS;
      case "UYU":
        return price * Cotizador.currencies.UYU;
      default:
        break;
    }
  }
}

export default Cotizador;
