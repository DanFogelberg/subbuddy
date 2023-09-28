interface CategoryCardProps {
  title: string;
  src: string;
  setCategoryView: Function;
  setSubscriptionsView: Function;
  category: string;
}

const CategoryCard: React.FC<CategoryCardProps> = props => {
  return (
    <article
      className="py-3 px-[26px] flex justify-center items-center min-w-[116px] bg-black rounded-[5px] text-font_primary_white relative dark:bg-widget_primary_black"
      onClick={() => {
        props.setCategoryView(props.category);
        props.setSubscriptionsView('category');
      }}
    >
      <p className="absolute z-10 text-xs font-semibold drop-shadow-[rgba(0,_0,_0,_0.75)_0px_1px_1px]">
        {props.title}
      </p>
      <img
        className="w-16 h-16 blur-sm"
        src={props.src}
        alt="The logo of Espresso House."
      />
    </article>
  );
};

export default CategoryCard;
