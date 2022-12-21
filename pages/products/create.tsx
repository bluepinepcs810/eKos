import { useContext } from 'react';
import CATEGORIES, {
  CATEGORY_KEYS,
} from '../../libraries/constants/categories';
import {
  ProductCondition,
  PRODUCT_CONDITIONS,
} from '../../libraries/constants/products';
import { useForm } from 'react-hook-form';
import { CoinTypeEnum, ProductModel } from '../../libraries/models/product';
import TagsInput from 'react-tagsinput';
import { useCallback, useMemo, useState } from 'react';
import RDropzone, { RDropzoneData } from '../../components/common/RDropzone';
import { useProductCreate } from '../../hooks/api.hooks';
import { showError, showSuccess } from '../../libraries/utils/toast';
import { useRouter } from 'next/router';
import PageLoader from '../../components/common/PageLoader';
import { CoinGeckoContext } from '../../components/providers/CoingeckoProvider';
import { roundNumber } from '../../libraries/utils/helpers/string';
import { countries } from '../../libraries/utils/helpers/location';
import { City } from 'country-state-city';

const ProductCreatePage = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    setError,
    watch,
    clearErrors,
  } = useForm<ProductModel>({
    defaultValues: {
      name: '',
      category: CATEGORY_KEYS.OTHER,
      price: 1,
      condition: ProductCondition.NEW,
      description: '',
      hashTags: [],
      photos: []
    },
  });
  const { solanaPrice } = useContext(CoinGeckoContext);
  const categories = useMemo(
    () => CATEGORIES.filter((item) => item.key !== CATEGORY_KEYS.ALL),
    []
  );

  const photos = watch('photos', []);
  const hashTags = watch('hashTags', []);
  const price = watch('price', 1);
  const country = watch('country');

  const cities = useMemo(() => {
    if (!country) return [];
    return City.getCitiesOfCountry(country) ?? [];
  }, [country]);

  const handlePhotoChange = useCallback(
    ({ files }: RDropzoneData) => {
      setValue('photos', [...files]);
      if (!files.length) {
        setError('photos', { message: 'Please upload image' });
      }
    },
    [setError, setValue]
  );

  const { mutateAsync: createProduct, isLoading } = useProductCreate();

  const onSubmit = useCallback(
    (data: ProductModel) => {
      clearErrors();
      if (!data.photos.length) {
        setError('photos', { message: 'Please upload image' });
        return;
      }
      createProduct({ ...data, coinType: CoinTypeEnum.SOL })
        .then((response) => {
          showSuccess('Successfully listed');
          router.push(`/products/${response.productId}`);
        })
        .catch((e) => {
          showError(e.message);
        });
    },
    [clearErrors, createProduct, router, setError]
  );

  return (
    <div className="product-detail-page bg-main pt-4 flex flex-col items-center justify-center">
      <PageLoader loading={isLoading} />

      <div className="w-full max-w-[828px] mb-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="product-detail__card w-full bg-main-light p-5 mb-3">
            <h2 className="uppercase font-semibold text-main-dark mb-6">
              Information about your item
            </h2>
            <div className="mb-5">
              <div className="text-main-weighted font-semibold mb-3.5">
                What are you selling?
              </div>
              <div>
                <input
                  className="w-full py-4 px-6 border border-main-weighted rounded-md bg-main-light text-main-weighted"
                  placeholder="In some words..."
                  {...register('name', {
                    required: 'Product name is required',
                    maxLength: {
                      message: 'Name should less than 100',
                      value: 100,
                    },
                  })}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-4 flex">
              <div className="w-1/2 pr-2">
                <div className="text-main-weighted font-semibold mb-3.5">
                  Category
                </div>
                <div>
                  <select
                    className="w-full py-4 px-6 border border-main-weighted rounded-md bg-main-light select-box text-main-weighted"
                    {...register('category')}
                  >
                    {categories.map((category) => (
                      <option key={category.key} value={category.key}>
                        {category.text}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-1/2 pl-2">
                <div className="text-main-weighted font-semibold mb-3.5">
                  Price
                </div>
                <div className="flex">
                  <div className="w-full py-4 px-6 border border-main-weighted rounded-md flex">
                    <input
                      className="bg-main-light flex-grow text-main-weighted"
                      placeholder="Your offer"
                      type="number"
                      min={0}
                      {...register('price', {
                        required: 'Please input price',
                        min: {
                          value: 0,
                          message: 'Price should be a positive value',
                        },
                      })}
                    />
                    <div>
                      <svg
                        width="27"
                        height="21"
                        viewBox="0 0 27 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.0507 0.21327C4.14427 0.0796061 4.29716 0 4.46032 0H26.0396C26.4441 0 26.6812 0.455341 26.4492 0.78673L22.9492 5.78675C22.8557 5.92042 22.7028 6.00002 22.5396 6.00002H0.960324C0.555813 6.00002 0.318737 5.54468 0.550708 5.21329L4.0507 0.21327Z"
                          fill="#C883FF"
                        />
                        <path
                          d="M22.9493 7.71327C22.8557 7.57961 22.7028 7.5 22.5397 7.5H0.960374C0.555863 7.5 0.318787 7.95534 0.550758 8.28673L4.05075 13.2868C4.14432 13.4204 4.29721 13.5 4.46037 13.5H26.0397C26.4442 13.5 26.6813 13.0447 26.4493 12.7133L22.9493 7.71327Z"
                          fill="#C883FF"
                        />
                        <path
                          d="M4.0507 15.2133C4.14427 15.0796 4.29716 15 4.46032 15H26.0396C26.4441 15 26.6812 15.4553 26.4492 15.7867L22.9492 20.7868C22.8557 20.9204 22.7028 21 22.5396 21H0.960324C0.555813 21 0.318737 20.5447 0.550708 20.2133L4.0507 15.2133Z"
                          fill="#C883FF"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-main-weighted flex justify-start items-center ml-4 w-32">
                    <div>
                      ={!!solanaPrice ? roundNumber(solanaPrice * price) : '??'}
                      $
                    </div>
                  </div>
                </div>
                {errors.price && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.price.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-4 flex">
              <div className="w-1/2 pr-2">
                <div className="text-main-weighted font-semibold mb-3.5">
                  Product condition
                </div>
                <div>
                  <select
                    className="w-full py-4 px-6 border border-main-weighted rounded-md bg-main-light select-box text-main-weighted"
                    {...register('condition', {
                      required: 'Please select condition',
                    })}
                  >
                    {PRODUCT_CONDITIONS.map((item) => (
                      <option key={item.key} value={item.key}>
                        {item.text}
                      </option>
                    ))}
                  </select>
                  {errors.condition && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.condition.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-4 flex">
              <div className="w-full pr-2">
                <div className="text-main-weighted font-semibold mb-3.5">
                  Description
                </div>
                <div>
                  <textarea
                    className="w-full py-4 px-6 border border-main-weighted rounded-md bg-main-light text-main-weighted"
                    placeholder="In some words..."
                    {...register('description', {
                      required: 'Please input description',
                      maxLength: { value: 500, message: 'Max length is 500' },
                    })}
                  />
                  {errors.description && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.description.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="text-main-weighted font-semibold mb-3.5">
                Hashtags
              </div>
              <div>
                <TagsInput
                  value={hashTags}
                  onChange={(tags) => setValue('hashTags', tags)}
                  className="w-full py-2.5 px-6 border border-main-weighted rounded-md bg-main-light text-main-weighted"
                  inputProps={{ placeholder: 'Your hashtags' }}
                />
              </div>
            </div>
            <div className="mb-4 flex">
              <div className="w-1/2 pr-2">
                <div className="text-main-weighted font-semibold mb-3.5">
                  Country
                </div>
                <div>
                  <select
                    className="w-full py-4 px-6 border border-main-weighted rounded-md bg-main-light select-box text-main-weighted"
                    {...register('country')}
                  >
                    <option>Please select country</option>
                    {countries.map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  {errors.country && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.country?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-1/2 pr-2">
                <div className="text-main-weighted font-semibold mb-3.5">
                  Cities
                </div>
                <div>
                  <select
                    className="w-full py-4 px-6 border border-main-weighted rounded-md bg-main-light select-box text-main-weighted"
                    {...register('city')}
                  >
                    <option>Please select city</option>
                    {cities.map((item) => (
                      <option key={item.name + item.latitude + item.longitude} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  {errors.city && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.city?.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="product-detail__card w-full bg-main-light p-5 mb-3">
            <h2 className="uppercase font-semibold text-main-dark mb-3">
              Photos
            </h2>
            <RDropzone
              dropzonClassName="mb-3 h-[130px] uppercase text-main-weighted border-2 rounded-lg border-main-weighted border-dashed flex justify-center items-center"
              dropzonLabel="Move files here"
              maxFiles={8}
              files={photos}
              remove={[]}
              onChange={handlePhotoChange}
            />
            {errors.photos && (
              <p className="mt-2 text-sm text-red-600">
                {errors.photos.message}
              </p>
            )}
          </div>

          <div className="product-detail__card w-full bg-main-light p-5 mb-3 flex justify-between">
            <button className="rounded-full py-1.5 border border-main-dark text-main-light filled-button min-w-[175px]">
              Post Ad
            </button>
            <div className="flex items-center text-main-dark cursor-pointer">
              <div>Help?</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ProductCreatePage;
