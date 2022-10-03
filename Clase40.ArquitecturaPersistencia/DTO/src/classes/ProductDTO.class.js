class ProductDTO {
  constructor(data, currencies) {
    this.name = data.name;
    this.stock = data.stock;
    this.price = data.price;

    for (const [currency, value] of Object.entries(currencies)) {
      this[currency] = value;
    }
  }
}

export default ProductDTO;

// Lo que hace el Object.entries:
// {
//     USD: 1,
//     ARS: 290,
//     UYU: 100,
// }

// [["USD", 1],["ARS", 290],["UYU", 100]]
