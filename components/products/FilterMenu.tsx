import { useState } from 'react';
import ProductFilterDrawer from './drawer/ProductFilterDrawer';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import ProductCategoryPane from './drawer/ProductCategoryPane';

const FiltersMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="filters-menu">
      <button
        className="filter-menu-button rounded-full bg-main-light py-1 px-5 text-main-dark hover:bg-main-strong transition"
        onClick={() => setOpen((old) => !old)}
      >
        Filters
      </button>
      <Drawer
        open={open}
        direction="left"
        onClose={() => setOpen(false)}
        className="!w-full md:!max-w-[524px]"
      >
        <ProductFilterDrawer onClose={() => setOpen(false)} />
      </Drawer>
    </div>
  );
};
export default FiltersMenu;
