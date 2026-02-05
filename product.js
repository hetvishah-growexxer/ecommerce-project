class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.discount = 0;
}

getPrice() {

    const tax = 0.18; // 18% tax
    const discountPrice = this.price - (this.price * this.discount / 100);    
    return discountPrice + (discountPrice * tax);

    }
}

module.exports = Product;