import Api from '.';
import { ProductFilterType } from '../../components/products/hooks/useProductFilter';
import {
  ProductDetailModel,
  ProductModel,
  ProductShortModel,
} from '../models/product';
import { ID, Pager } from '../types/common';

const createProduct = async (
  data: ProductModel
): Promise<{ productId: ID }> => {
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
  return Api.get(`/product/`, { id });
};

const listProduct = async (
  filter: Pager<ProductFilterType>
): Promise<{ productList: ProductDetailModel[] }> => {
  return Api.get(`/product`, {
    ...filter,
    condition: filter.condition?.join(','),
  });
};
export const ProductApi = {
  createProduct,
  retrieveProduct,
  listProduct,
};
