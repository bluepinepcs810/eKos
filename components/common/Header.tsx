import Image from "next/image";
import Logo from "../../assets/eKos.png";
import ConnectWalletButton from "../snippet/ConnectWalletButton";
import ListProductButton from "../snippet/ListProductButton";
import MagnifierIcon from '../../assets/icon/magnifier-gray.svg';

const Header = () => {
  return (
    <div className="header bg-main flex justify-center h-[70px]">
      <div className="content-container flex justify-between">
        <div className="header__logo flex items-center">
          <div>
            <Image
              src={Logo}
              width={100}
              height={50}
              alt="logo"
            />
          </div>
        </div>
        <div className="header__left-pane flex items-center">
          <div className="header__search mr-6">
            {/* ----- B Search box ------*/}
            <div className='search-box'>
              <div className="flex gap-x-2 bg-white justify-start items-center rounded-full px-3 py-2">
                <div className="icon">
                  <MagnifierIcon />
                </div>
                <div className="search-input rounded-full">
                  <input className='mr-5 w-56' type="text" placeholder="Search"/>
                </div>
              </div>
            </div>
            {/* ----- E Search box ------*/}
          </div>
          <div className="header__action-group flex items-center gap-3">
            <div className="header__connect-btn">
              <ConnectWalletButton />
            </div>
            <div className="header__list-product-btn">
              <ListProductButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
