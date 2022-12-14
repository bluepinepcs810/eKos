import Api from ".";
import { ProductModel } from "../models/product";

const createProduct = async (data: ProductModel) => {
    const formData = new FormData();
    console.log({ data });
    for (const key in data) {
        if (key === "photos") {
            for (const value of data[key]) {
              if (!value.file) continue;
              formData.append(key, value.file);
            }
        } else if (key === 'hashTags') {
          for (const value of data[key]) {
            formData.append(key, value);
          }
        } else {
          formData.append(key, (data[key as keyof ProductModel] as string))
        }
    }

    return await Api.post('/product', formData, { 'Content-Type': 'multipart/form-data'});
}

export const ProductApi = {
    createProduct
}
