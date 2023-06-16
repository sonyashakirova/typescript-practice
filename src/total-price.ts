type Range< 
  END extends number, 
  ACC extends number = never,
  START_ARR extends number[] = [],
> = START_ARR['length'] extends END ? ACC | END : Range<END, ACC | START_ARR['length'], [...START_ARR, 1]>

type DiscountType = Range<100>

interface ITotalPrice {
  price: number
  discount?: DiscountType
  isInstallment?: boolean
  months?: number
}

const totalPrice = ({ price, discount, isInstallment, months }: ITotalPrice): number => {
  let result = price
  !discount || (result = result * (100 - discount) * 0.01)
  !isInstallment || !months || (result = result / months)
  return result
}

export default totalPrice
