// Strategy interface
interface DiscountStrategy {
  calculateDiscount(amount: number): number
}

// Concrete strategies
class PercentageDiscount implements DiscountStrategy {
  constructor(private percentage: number) {}

  calculateDiscount(amount: number): number {
    return (this.percentage / 100) * amount
  }
}

class FixedAmountDiscount implements DiscountStrategy {
  constructor(private discountAmount: number) {}

  calculateDiscount(amount: number): number {
    return this.discountAmount
  }
}

// Context class
class DiscountContext {
  private discountStrategy: DiscountStrategy

  constructor(discountStrategy: DiscountStrategy) {
    this.discountStrategy = discountStrategy
  }

  setDiscountStrategy(discountStrategy: DiscountStrategy): void {
    this.discountStrategy = discountStrategy
  }

  calculateDiscount(amount: number): number {
    return this.discountStrategy.calculateDiscount(amount)
  }
}

// client code
const regularCustomerDiscount = new PercentageDiscount(10) // 10% discount for regular customers
const premiumCustomerDiscount = new FixedAmountDiscount(20) // $20 fixed discount for premium customers

const discountContext = new DiscountContext(regularCustomerDiscount)

const orderAmount = 100

// Calculate discount for a regular customer
const regularCustomerDiscountAmount =
  discountContext.calculateDiscount(orderAmount)
console.log('Regular Customer Discount:', regularCustomerDiscountAmount)

// Later, change the discount strategy for a premium customer
discountContext.setDiscountStrategy(premiumCustomerDiscount)
const premiumCustomerDiscountAmount =
  discountContext.calculateDiscount(orderAmount)
console.log('Premium Customer Discount:', premiumCustomerDiscountAmount)
