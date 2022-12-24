import { useRef, useCallback, useMemo, useState } from 'react';
import { OrderModel, OrderStatusEnum } from '../../../libraries/models/order';
import { ID } from '../../../libraries/types/common';

type OrderStatusBadgeProps = {
  data: OrderModel;
  editable: boolean;
  onChange?: (id: ID, value: OrderStatusEnum) => void;
};
const OrderStatusBadge: React.FC<OrderStatusBadgeProps> = ({
  data,
  editable,
  onChange,
}) => {
  const [editActive, setEditActive] = useState(false);
  const selectRef = useRef<HTMLSelectElement>(null);

  const status = useMemo(() => {
    switch (data.status) {
      case OrderStatusEnum.NEW:
        return { label: 'New', className: 'bg-blue-600' };
      case OrderStatusEnum.SHIPPED:
        return { label: 'Shipped', className: 'bg-purple-600' };
      case OrderStatusEnum.COMPLETED:
        return { label: 'Completed', className: 'bg-green-600' };
      case OrderStatusEnum.CANCELED:
        return { label: 'Canceled', className: 'bg-red-600' };
    }
    return { label: 'Unknown', className: 'bg-slate-600' };
  }, [data.status]);

  const editEnable = useMemo(() => {
    if (!editable) return false;
    if (
      data.status !== OrderStatusEnum.NEW &&
      data.status !== OrderStatusEnum.SHIPPED
    )
      return false;
    return true;
  }, [data.status, editable]);

  const handleChange = useCallback(
    (value: OrderStatusEnum) => {
      if (onChange) {
        onChange(data.id, value);
      }
      data.status = value;
      setEditActive((old) => !old);
    },
    [data, onChange]
  );

  const handleToggleEdit = useCallback(() => {
    if (!editEnable) return;
    if (editActive) {
      setEditActive(false);
    } else {
      setEditActive(true);
      selectRef.current?.click();
    }
  }, [editActive, editEnable]);

  return (
    <div className="">
      {!editActive && (
        <button
          type="button"
          className={
            'text-white w-fit px-1 py-0.5 text-xs rounded-full ' +
            status.className
          }
          onClick={handleToggleEdit}
        >
          {status.label}
        </button>
      )}
      {editEnable && editActive && (
        <select
          onChange={(e) => handleChange(e.target.value as OrderStatusEnum)}
          ref={selectRef}
          value={data.status}
        >
          <option value={OrderStatusEnum.NEW}>New</option>
          <option value={OrderStatusEnum.SHIPPED}>Shipped</option>
        </select>
      )}
    </div>
  );
};
export default OrderStatusBadge;
