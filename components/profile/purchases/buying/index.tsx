import Image from 'next/image';
import { useEffect, useCallback, useState } from 'react';
import { useBuyingOrders, useOrderConfirm } from '../../../../hooks/api.hooks';
import { ID } from '../../../../libraries/types/common';
import { truncateString } from '../../../../libraries/utils/helpers/string';
import { showError } from '../../../../libraries/utils/toast';
import PageLoader from '../../../common/PageLoader';
import * as ekosProgram from '../../../../libraries/ekosSDK';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { sendTransactionWithRetry } from '../../../../libraries/utils/transaction';
import { findEscrowSolPotPDA } from '../../../../libraries/utils/pda';
import OrderStatusBadge from '../OrderStatusBadge';
import { OrderStatusEnum } from '../../../../libraries/models/order';

const BuyingPane = () => {
  const { data, isError, error } = useBuyingOrders(1);

  const wallet = useWallet();
  const { connection } = useConnection();

  const isConfirmEnabled = useCallback(
    (orderId: ID) => {
      const order = data?.find((item) => item.id === orderId);
      if (!order) return;
      return (
        order.status === OrderStatusEnum.NEW ||
        order.status === OrderStatusEnum.SHIPPED
      );
    },
    [data]
  );

  const confirmOrder = useOrderConfirm();

  const handleConfirm = useCallback(
    async (orderId: ID) => {
      if (!wallet.publicKey || !data) return;
      const order = data?.find((item) => item.id === orderId);
      if (!order) return;
      const buyerPublicKey = new PublicKey(order.buyer.walletAddress);
      const sellerPublicKey = new PublicKey(order.seller.walletAddress);
      const escrow = new PublicKey(
        // 'Bb1ktHASaKpA3DfsWtGXGcSbJjRRTa9tZUXoujMrkgf4'
        order.escrowPublicKey!
      );

      const [solPot, solPotBump] = findEscrowSolPotPDA({
        escrowPublicKey: escrow,
      });

      const accounts = {
        escrow,
        buyer: buyerPublicKey,
        seller: sellerPublicKey,
        solPot,
      };

      const args = { solPotBump };

      const confirmIx = ekosProgram.createConfirmInstruction(accounts, args);

      try {
        const { txid } = await sendTransactionWithRetry(
          connection,
          wallet,
          [confirmIx],
          []
        );
        // TODO send txid to server

        if (!txid) {
          return;
        }
        confirmOrder.mutate({ orderId, txSig: txid });
      } catch (e) {
        console.log(e);
        return;
      }
      // TODO add sign instruction
    },
    [confirmOrder, connection, data, wallet]
  );

  useEffect(() => {
    if (isError) {
      showError(error as any);
    }
  }, [error, isError]);

  return (
    <div className="shadow-lg bg-white border border-main-dark rounded-md px-3 py-5">
      <PageLoader loading={confirmOrder.isLoading} />
      <table className="min-w-full">
        <thead>
          <tr>
            <th
              scope="col"
              className="text-md font-semibold text-main-weighted text-left px-3"
            >
              Seller
            </th>
            <th
              scope="col"
              className="text-md font-semibold text-main-weighted text-left px-3"
            >
              Product
            </th>
            <th
              scope="col"
              className="text-md font-semibold text-main-weighted text-left px-3"
            >
              Status
            </th>
            <th
              scope="col"
              className="text-md font-semibold text-main-weighted text-left px-3"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((order) => (
            <tr
              className="border-b transition duration-300 ease-in-out hover:bg-main-light py-3"
              key={order.id}
            >
              <td className="whitespace-nowrap text-sm text-main-weighted py-2 px-3">
                <div className="flex gap-x-3">
                  <div className="relative w-[55px] h-[55px] flex-initial">
                    <Image
                      src={order.seller.avatar ?? '/avatar-sample.png'}
                      alt="avatar"
                      fill
                      className=" object-cover rounded-full"
                    />
                  </div>
                  <div className="flex items-center">
                    <div>{truncateString(order.seller.userName, 10)}</div>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap text-sm text-main-weighted py-2 px-3">
                <div className="flex gap-x-3 items-center">
                  <div className="relative w-[55px] h-[55px] rounded-full">
                    <Image
                      src={
                        order.product.photos.length
                          ? order.product.photos[0]
                          : '/avatar-sample.png'
                      }
                      alt="avatar"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex">{order.product.name}</div>
                </div>
              </td>
              <td className="whitespace-nowrap text-sm text-main-weighted py-2 px-3">
                <OrderStatusBadge data={order} editable={false} />
              </td>
              <td>
                {isConfirmEnabled(order.id) && (
                  <button
                    className="text-main-dark bg-main-strong hover:bg-opacity-80 px-4 py-1 rounded-lg"
                    onClick={() => handleConfirm(order.id)}
                  >
                    Confirm
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default BuyingPane;
