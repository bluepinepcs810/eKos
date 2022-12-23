import { PublicKey } from '@solana/web3.js';
import { PROGRAM_ADDRESS } from '../ekosSDK';

export const findEscrowPDA = ({
  sellerPublicKey,
  buyerPublicKey,
  productId,
}: {
  sellerPublicKey: PublicKey;
  buyerPublicKey: PublicKey;
  productId: string;
}) => {
  return PublicKey.findProgramAddressSync(
    [sellerPublicKey.toBytes(), buyerPublicKey.toBytes()],
    new PublicKey(PROGRAM_ADDRESS)
  );
};
