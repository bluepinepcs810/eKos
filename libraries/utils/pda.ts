import { PublicKey } from '@solana/web3.js';
import { PROGRAM_ADDRESS } from '../ekosSDK';
import { BN } from '@project-serum/anchor';

export const findEscrowSolPotPDA = ({
  escrowPublicKey,
}: {
  escrowPublicKey: PublicKey;
}) => {
  return PublicKey.findProgramAddressSync(
    [Buffer.from('escrow_sol_pot'), escrowPublicKey.toBytes()],
    new PublicKey(PROGRAM_ADDRESS)
  );
};

export const findEscrowAuthorityPDA = ({
  escrowPublicKey,
}: {
  escrowPublicKey: PublicKey;
}) => {
  return PublicKey.findProgramAddressSync(
    [escrowPublicKey.toBytes()],
    new PublicKey(PROGRAM_ADDRESS)
  );
};
