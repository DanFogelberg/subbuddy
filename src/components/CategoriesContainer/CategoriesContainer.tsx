import espressoHouseLogo from '../../assets/images/espresso-house.png';
import netflixLogo from '../../assets/images/netflix-logo.png';
import spotifyLogo from '../../assets/images/spotify-logo.png';
import gpLogo from '../../assets/images/gp-logo.png';
import gamesLogo from '../../assets/images/games-logo.png';

import CategoryCard from '../CategoryCard/CategoryCard';

interface CategoriesContainerProps {
  setCategoryView: Function;
  setSubscriptionsView: Function;
  setCategoryMessage: Function;
}

const CategoriesContainer = (props: CategoriesContainerProps) => {
  return (
    <section className="flex overflow-y-hidden overflow-x-auto gap-3 whitespace-nowrap mr-[-1.5rem] mb-8 ">
      <CategoryCard
        title="Mat & dryck"
        src={espressoHouseLogo}
        setCategoryView={props.setCategoryView}
        setSubscriptionsView={props.setSubscriptionsView}
        setCategoryMessage={() => props.setCategoryMessage('Mat & Dryck')}
        category={'food'}
      />
      <CategoryCard
        title="Streamingtjänster"
        src={netflixLogo}
        setCategoryView={props.setCategoryView}
        setSubscriptionsView={props.setSubscriptionsView}
        setCategoryMessage={() => props.setCategoryMessage('Streamingtjänster')}
        category={'streaming'}
      />
      <CategoryCard
        title="Musiktjänster"
        src={spotifyLogo}
        setCategoryView={props.setCategoryView}
        setSubscriptionsView={props.setSubscriptionsView}
        setCategoryMessage={() => props.setCategoryMessage('Musiktjänster')}
        category={'music'}
      />
      <CategoryCard
        title="Tidningar"
        src={gpLogo}
        setCategoryView={props.setCategoryView}
        setSubscriptionsView={props.setSubscriptionsView}
        setCategoryMessage={() => props.setCategoryMessage('Tidningar')}
        category={'paper'}
      />
      <CategoryCard
        title="Spel"
        src={gamesLogo}
        setCategoryView={props.setCategoryView}
        setSubscriptionsView={props.setSubscriptionsView}
        setCategoryMessage={() => props.setCategoryMessage('Spel')}
        category={'games'}
      />
    </section>
  );
};

export default CategoriesContainer;
