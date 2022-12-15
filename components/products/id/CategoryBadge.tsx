import { useMemo } from 'react';
import CATEGORIES, {
  CATEGORY_KEYS,
} from '../../../libraries/constants/categories';
import AllCategoryHoverIcon from '../../../assets/icon/category-all-hover.svg';

type CategoryBadgeProps = {
  category: CATEGORY_KEYS;
};
const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
  const categoryItem = useMemo(() => {
    return CATEGORIES.find((item) => item.key === category);
  }, [category]);
  if (!categoryItem) return null;

  return (
    <div className="category-tag bg-main-dark rounded-full flex justify-center  px-4 py-1 gap-x-2">
      <div className="flex justify-center items-center">
        {categoryItem.icon.type4}
        {/* <AllCategoryHoverIcon
           width="20"
           height="15"
           viewBox="0 0 55 38"
        /> */}
      </div>
      <div className="text-main-light">{categoryItem.text}</div>
    </div>
  );
};
export default CategoryBadge;
