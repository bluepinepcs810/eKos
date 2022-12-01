import React, { ButtonHTMLAttributes } from "react";
import ConnectWalletIcon from '../../assets/icon/connect-wallet.svg';

const ConnectWalletButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button className="rounded-full h-[40px] border border-main-dark text-main-dark flex items-center justify-center gap-2 transition hover:bg-main-strong px-4" {...props}>
      {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.1579 3.80446V1.77778C15.1579 0.800003 14.4 0 13.4737 0H1.68421C0.749474 0 0 0.800003 0 1.77778V14.2223C0 15.2001 0.749474 16.0001 1.68421 16.0001H13.4737C14.4 16.0001 15.1579 15.2001 15.1579 14.2223V12.1956C15.6547 11.8845 16 11.3245 16 10.6667V5.33335C16 4.67557 15.6547 4.11557 15.1579 3.80446ZM14.3158 5.33335V10.6667H8.42105V5.33335H14.3158ZM1.68421 14.2223V1.77778H13.4737V3.55557H8.42105C7.49474 3.55557 6.73684 4.35557 6.73684 5.33335V10.6667C6.73684 11.6445 7.49474 12.4445 8.42105 12.4445H13.4737V14.2223H1.68421Z" fill="#5E25D9"/>
        <path d="M10.8799 9.3333C11.5868 9.3333 12.1599 8.73635 12.1599 7.99996C12.1599 7.26358 11.5868 6.66663 10.8799 6.66663C10.173 6.66663 9.59988 7.26358 9.59988 7.99996C9.59988 8.73635 10.173 9.3333 10.8799 9.3333Z" fill="#5E25D9"/>
      </svg> */}
      <ConnectWalletIcon />
      Connect Wallet
    </button>
  )
}
export default ConnectWalletButton;
