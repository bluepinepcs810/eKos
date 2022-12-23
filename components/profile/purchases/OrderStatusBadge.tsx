import { HTMLAttributes, useMemo } from "react";
import { OrderModel, OrderStatusEnum } from "../../../libraries/models/order";

type OrderStatusBadgeProps = {
  data: OrderModel,
  editable: false,
} & HTMLAttributes<HTMLSelectElement>
const OrderStatusBadge: React.FC<OrderStatusBadgeProps> = ({ data }) => {
  const label = useMemo(() => {
    switch(data.status) {
      case OrderStatusEnum.NEW:
        return 'New';
      case OrderStatusEnum.SHIPPED:
        return 'Shipped';
      case OrderStatusEnum.COMPLETED:
        return 'Completed';
      case OrderStatusEnum.CANCELED:
        return 'Canceled';
    }
  }, [data.status]);

  return (
    <div className="">
      <div>
        {label}
      </div>
    </div>
  )
}
export default OrderStatusBadge;
