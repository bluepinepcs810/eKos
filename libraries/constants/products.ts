export enum ProductCondition {
  NEW = 1,
  AS_GOOD_AS_NEW = 2,
  GOOD = 3,
  FAIR = 4,
  HAS_GIVEN_ALL = 5,
}
export type ProductConditionItemType = {
  key: ProductCondition;
  text: string;
};
export const PRODUCT_CONDITIONS: ProductConditionItemType[] = [
  {
    key: ProductCondition.NEW,
    text: 'New',
  },
  {
    key: ProductCondition.AS_GOOD_AS_NEW,
    text: 'As good as new',
  },
  {
    key: ProductCondition.GOOD,
    text: 'Good condition',
  },
  {
    key: ProductCondition.FAIR,
    text: 'Fair condition',
  },
  {
    key: ProductCondition.HAS_GIVEN_ALL,
    text: 'Has given it all',
  },
];

export const getConditionLabel = (key: ProductCondition) => {
  const item = PRODUCT_CONDITIONS.find((cond) => cond.key === key);
  if (!item) return 'Unknown';
  return item.text;
};
