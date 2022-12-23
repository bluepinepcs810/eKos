import Image from "next/image";
import { useEffect } from "react";
import { useSellingOrders } from "../../../../hooks/api.hooks";
import { truncateString } from "../../../../libraries/utils/helpers/string";
import { showError } from "../../../../libraries/utils/toast";
import OrderStatusBadge from "../OrderStatusBadge";

const BuyingPane = () => {

  const {
    data,
    isError,
    error,
  } = useSellingOrders(1);

  useEffect(() => {
    if (isError) {
      showError(error as any)
    }
  }, [error, isError])

  return (
    <div className="shadow-lg bg-white border border-main-dark rounded-md px-3 py-5">
      <table className="min-w-full">
        <thead>
          <tr>
            <th scope="col" className="text-md font-semibold text-main-weighted text-left px-3">Buyer</th>
            <th scope="col" className="text-md font-semibold text-main-weighted text-left px-3">Product</th>
            <th scope="col" className="text-md font-semibold text-main-weighted text-left px-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(order => (
            <tr className="border-b transition duration-300 ease-in-out hover:bg-main-light py-3" key={order.id}>
              <td className="whitespace-nowrap text-sm text-main-weighted py-2 px-3">
                <div className="flex gap-x-3">
                  <div className="relative w-[55px] h-[55px] flex-initial">
                    <Image
                      src={order.buyer?.avatar ?? "/avatar-sample.png"}
                      alt="avatar"
                      fill
                      className=" object-cover rounded-full"
                    />
                  </div>
                  <div className="flex items-center">
                    <div>
                      {truncateString(order.buyer.userName, 10)}
                    </div>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap text-sm text-main-weighted py-2 px-3">
              <div className="flex gap-x-3 items-center">
                <div className="relative w-[55px] h-[55px]">
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
                <OrderStatusBadge data={order} editable={false}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default BuyingPane;
