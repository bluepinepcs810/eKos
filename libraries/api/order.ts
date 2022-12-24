import Api from '.';
import { MockOrders } from '../mock/orders';
import { OrderModel } from '../models/order';
import { ID, Pager } from '../types/common';

const getSellingOrders = async (query: Pager): Promise<OrderModel[]> => {
  return Api.get('/user/sell-orders', query);
  // return MockOrders;
};
const getBuyingOrders = async (query: Pager): Promise<OrderModel[]> => {
  // return MockOrders;
  return Api.get('/user/buy-orders', query);
};

const createOrder = async (productId: ID): Promise<{ orderId: ID }> => {
  return Api.post('/order/new', { productId });
};
const updateCreateOrder = async (
  orderId: ID,
  escrowPublicKey: string,
  txSig: string
): Promise<{ orderId: ID }> => {
  return Api.put('/order/update-create', {
    orderId,
    escrowPublicKey,
    txSig,
  });
};

const confirmOrder = async (orderId: ID, txSig: string) => {
  return Api.put('/order/confirm', { orderId, txSig });
};
export const OrderApi = {
  getSellingOrders,
  getBuyingOrders,
  createOrder,
  updateCreateOrder,
  confirmOrder,
};
