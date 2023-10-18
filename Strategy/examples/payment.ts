// Strategy interface
interface PaymentStrategy {
  processPayment(amount: number): void
}

// Concrete Strategies
class CreditCardPaymentStrategy implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of $${amount}`)
    //TODO: Implement Payment processing logic for credit card payments
  }
}

class PayPalPaymentStrategy implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of $${amount}`)
    //TODO: Implement Payment processing logic for PayPal payments
  }
}

class ApplePayPaymentStrategy implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log(`Processing Apple Pay payment of $${amount}`)
    //TODO: Implement Payment processing logic for Apple Pay payments
  }
}

// Context class
class PaymentContext {
  private paymentStrategy: PaymentStrategy

  constructor(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy
  }

  setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
    this.paymentStrategy = paymentStrategy
  }

  processPayment(amount: number): void {
    this.paymentStrategy.processPayment(amount)
  }
}

// Client Code
const orderTotal = 100.0

const creditCardStrategy = new CreditCardPaymentStrategy()
const paypalStrategy = new PayPalPaymentStrategy()
const applePayStrategy = new ApplePayPaymentStrategy()

const paymentContext = new PaymentContext(creditCardStrategy)

// Customer makes a payment with credit card
paymentContext.processPayment(orderTotal) // Processing credit card payment of $100

// Later, customer changes payment method to PayPal
paymentContext.setPaymentStrategy(paypalStrategy)
paymentContext.processPayment(orderTotal) // Processing PayPal payment of $100

// Change payment method to Apple Pay
paymentContext.setPaymentStrategy(applePayStrategy)
paymentContext.processPayment(orderTotal) // Processing Apple Pay payment of $100
