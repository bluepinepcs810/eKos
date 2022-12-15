import Api from '.';
import { ProductFilterType, ProductSorterType } from '../../components/products/context/filter-context';
import { ProductDetailModel, ProductModel, ProductShortModel } from '../models/product';
import { ID, Pager } from '../types/common';

const createProduct = async (
  data: ProductModel
): Promise<{ product: ProductDetailModel }> => {
  const formData = new FormData();
  for (const key in data) {
    if (key === 'photos') {
      for (const value of data[key]) {
        if (!value.file) continue;
        formData.append(key, value.file);
      }
    } else if (key === 'hashTags') {
      for (const value of data[key]) {
        formData.append(key, value);
      }
    } else {
      formData.append(key, data[key as keyof ProductModel] as string);
    }
  }

  return await Api.post('/product', formData, {
    'Content-Type': 'multipart/form-data',
  });
};
const retrieveProduct = async (
  id: ID
): Promise<{ product: ProductDetailModel }> => {
  return Api.get(`/product/${id}`);
};

const listProduct = async (filter: Pager<ProductFilterType & ProductSorterType>): Promise<{ products: ProductShortModel[]}> => {
  const query = {
    page: filter.page,
    size: filter.size,
    sort: filter.sort || undefined,
    dir: filter.dir || undefined,
    category: filter.category,
    priceFrom: filter.price.from || undefined,
    priceTo: filter.price.to || undefined,
    condition: filter.condition.join(','),
    q: filter.q,
  };
  return Api.get(`/product`, query);
}
export const ProductApi = {
  createProduct,
  retrieveProduct,
  listProduct
};
