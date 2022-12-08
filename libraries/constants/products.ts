export enum ProductCondition {
  NEW,
  AS_GOOD_AS_NEW,
  GOOD,
  FAIR,
  HAS_GIVEN_ALL
}
export type ProductConditionItemType = {
  key: ProductCondition,
  text: string
}
export const PRODUCT_CONDITIONS: ProductConditionItemType[] = [
  {
    key: ProductCondition.NEW,
    text: 'New'
  },
  {
    key: ProductCondition.AS_GOOD_AS_NEW,
    text: 'As good as new'
  },
  {
    key: ProductCondition.GOOD,
    text: 'Good condition'
  },
  {
    key: ProductCondition.FAIR,
    text: 'Fair condition'
  },
  {
    key: ProductCondition.HAS_GIVEN_ALL,
    text: 'Has given it all'
  }
]
