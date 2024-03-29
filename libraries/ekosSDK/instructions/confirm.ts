/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category Confirm
 * @category generated
 */
export type ConfirmInstructionArgs = {
  solPotBump: number;
};
/**
 * @category Instructions
 * @category Confirm
 * @category generated
 */
export const confirmStruct = new beet.BeetArgsStruct<
  ConfirmInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['solPotBump', beet.u8],
  ],
  'ConfirmInstructionArgs'
);
/**
 * Accounts required by the _confirm_ instruction
 *
 * @property [_writable_] escrow
 * @property [_writable_, **signer**] buyer
 * @property [_writable_] seller
 * @property [_writable_] solPot
 * @category Instructions
 * @category Confirm
 * @category generated
 */
export type ConfirmInstructionAccounts = {
  escrow: web3.PublicKey;
  buyer: web3.PublicKey;
  seller: web3.PublicKey;
  solPot: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  anchorRemainingAccounts?: web3.AccountMeta[];
};

export const confirmInstructionDiscriminator = [
  174, 1, 15, 213, 3, 190, 131, 0,
];

/**
 * Creates a _Confirm_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Confirm
 * @category generated
 */
export function createConfirmInstruction(
  accounts: ConfirmInstructionAccounts,
  args: ConfirmInstructionArgs,
  programId = new web3.PublicKey('6PzCGqfvD4warUKFqyB2GUgdw3U4QM9dzrK7rkj9ooB9')
) {
  const [data] = confirmStruct.serialize({
    instructionDiscriminator: confirmInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.escrow,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.buyer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.seller,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.solPot,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ];

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc);
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
