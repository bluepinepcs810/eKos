import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { CATEGORY_KEYS } from '../../../libraries/constants/categories';
import { ProductCondition } from '../../../libraries/constants/products';
import { serializeToQuery } from '../../../libraries/utils/helpers/url';

export enum ProductSorterEnum {
  PRICE = 'price',
  CONDITION = 'condition',
  CATEGORY = 'category',
  NAME = 'name',
  CREATED_AT = 'createdAt',
}

export type ProductSorterType = {
  sort?: ProductSorterEnum;
  dir?: 'asc' | 'desc';
};

export type ProductFilterType = {
  q?: string;
  sort?: ProductSorterEnum;
  dir?: 'asc' | 'desc';
  category?: CATEGORY_KEYS;
  priceFrom?: number;
  priceTo?: number;
  condition?: ProductCondition[];
};

const useProductFilter = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    q: _q,
    sort: _sort,
    dir: _dir,
    category: _category,
    priceFrom: _priceFrom,
    priceTo: _priceTo,
    condition: _condition,
  } = router.query;

  const [q, setQ] = useState(_q ? (_q as string) : undefined);
  const [sort, setSort] = useState(
    _sort ? (_sort as ProductSorterEnum) : undefined
  );
  const [dir, setDir] = useState(_dir ? (_dir as 'asc' | 'desc') : undefined);
  const [category, setCategory] = useState(
    _category
      ? (parseInt(_category as string) as CATEGORY_KEYS)
      : CATEGORY_KEYS.ALL
  );

  const [priceFrom, setFrom] = useState(
    _priceFrom ? parseFloat(_priceFrom as string) : undefined
  );
  const [priceTo, setTo] = useState(
    _priceTo ? parseFloat(_priceTo as string) : undefined
  );
  const [condition, setCondition] = useState(
    _condition
      ? ((_condition as string)
          .split(',')
          .map((item) => parseInt(item)) as unknown as ProductCondition[])
      : []
  );

  const refresh = useCallback(() => {
    setQ(_q ? (_q as string) : undefined);
    setSort(_sort ? (_sort as ProductSorterEnum) : undefined);
    setDir(_dir ? (_dir as 'asc' | 'desc') : undefined);
    setCategory(
      _category
        ? (parseInt(_category as string) as CATEGORY_KEYS)
        : CATEGORY_KEYS.ALL
    );
    setFrom(_priceFrom ? parseFloat(_priceFrom as string) : undefined);
    setTo(_priceTo ? parseFloat(_priceTo as string) : undefined);
    setCondition(
      _condition
        ? ((_condition as string)
            .split(',')
            .map((item) => parseInt(item)) as unknown as ProductCondition[])
        : []
    );
  }, [_category, _condition, _dir, _priceFrom, _priceTo, _q, _sort]);

  const refetchProducts = useCallback(() => {
    queryClient.resetQueries({ queryKey: ['listProduct'] });
  }, [queryClient]);

  const handleApply = useCallback(
    (data?: ProductFilterType) => {
      let queryData: any = {
        q,
        sort,
        dir,
        category,
        priceFrom,
        priceTo,
        condition,
      };
      if (data) {
        queryData = { ...queryData, ...data };
      }
      queryData.condition = queryData.condition.join(',');
      const url = '/products?' + serializeToQuery(queryData);
      router.push(url);
      // queryClient.resetQueries({ queryKey: ['listProduct'] });
    },
    [category, condition, dir, priceFrom, priceTo, q, router, sort]
  );

  useEffect(() => {
    refresh();
  }, [refresh]);
  return {
    query: {
      q,
      sort,
      dir,
      category,
      priceFrom,
      priceTo,
      condition,
    },
    setQ,
    setSort,
    setDir,
    setCategory,
    setFrom,
    setTo,
    setCondition,
    refetchProducts,
    refresh,
    handleApply,
  };
};
export default useProductFilter;
