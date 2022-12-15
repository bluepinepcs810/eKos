import Api from '.';
import { ProductDetailModel, ProductModel } from '../models/product';
import { ID } from '../types/common';

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
export const ProductApi = {
  createProduct,
  retrieveProduct,
};
