import Image from "next/image";
import { useEffect, useCallback, useState } from "react";
import { useBuyingOrders, useOrderConfirm } from "../../../../hooks/api.hooks";
import { ID } from "../../../../libraries/types/common";
import { truncateString } from "../../../../libraries/utils/helpers/string";
import { showError } from "../../../../libraries/utils/toast";
import PageLoader from "../../../common/PageLoader";

const BuyingPane = () => {
  const {
    data,
    isError,
    error,
  } = useBuyingOrders(1);

  const confirmOrder = useOrderConfirm();

  const handleConfirm = useCallback((orderId: ID) => {
    // TODO add sign instruction
    confirmOrder.mutate({ orderId });
  }, [confirmOrder]);

  useEffect(() => {
    if (isError) {
      showError(error as any)
    }
  }, [error, isError])

  return (
    <div className="shadow-lg bg-white border border-main-dark rounded-md px-3 py-5">
      <PageLoader loading={confirmOrder.isLoading} />
      <table className="min-w-full">
        <thead>
          <tr>
            <th scope="col" className="text-md font-semibold text-main-weighted text-left px-3">Seller</th>
            <th scope="col" className="text-md font-semibold text-main-weighted text-left px-3">Product</th>
            <th scope="col" className="text-md font-semibold text-main-weighted text-left px-3">Status</th>
            <th scope="col" className="text-md font-semibold text-main-weighted text-left px-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(order => (
            <tr className="border-b transition duration-300 ease-in-out hover:bg-main-light py-3" key={order.id}>
              <td className="whitespace-nowrap text-sm text-main-weighted py-2 px-3">
                <div className="flex gap-x-3">
                  <div className="relative w-[55px] h-[55px] flex-initial">
                    <Image
                      src={order.seller.avatar ?? "/avatar-sample.png"}
                      alt="avatar"
                      fill
                      className=" object-cover rounded-full"
                    />
                  </div>
                  <div className="flex items-center">
                    <div>
                      {truncateString(order.seller.userName, 10)}
                    </div>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap text-sm text-main-weighted py-2 px-3">
              <div className="flex gap-x-3 items-center">
                <div className="relative w-[55px] h-[55px] rounded-full">
                  <Image
                    src={order.product.photos.length ? order.product.photos[0] : "/avatar-sample.png"}
                    alt="avatar"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex">
                  {order.product.name}
                </div>
              </div>
              </td>
              <td className="whitespace-nowrap text-sm text-main-weighted py-2 px-3">
                {order.status}
              </td>
              <td>
                <button className="text-main-dark bg-main-strong hover:bg-opacity-80 px-4 py-1 rounded-lg" onClick={() => handleConfirm(order.id)}>
                  Confirm
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default BuyingPane;
