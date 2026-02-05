class PaymentProcessor {
constructor() {
this.gateway = null;
}

processPayment(amount) {
console.log(`Processing payment of ${amount}`);
return true;
}

}

module.exports = PaymentProcessor;