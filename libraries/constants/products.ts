export enum ProductCodition {
  NEW,
  AS_GOOD_AS_NEW,
  GOOD,
  FAIR,
  HAS_GIVEN_ALL
}
export type ProductConditionItemType = {
  key: ProductCodition,
  text: string
}
export const PRODUCT_CONDITIONS: ProductConditionItemType[] = [
  {
    key: ProductCodition.NEW,
    text: 'New'
  },
  {
    key: ProductCodition.AS_GOOD_AS_NEW,
    text: 'As good as new'
  },
  {
    key: ProductCodition.GOOD,
    text: 'Good condition'
  },
  {
    key: ProductCodition.FAIR,
    text: 'Fair condition'
  },
  {
    key: ProductCodition.HAS_GIVEN_ALL,
    text: 'Has given it all'
  }
]
