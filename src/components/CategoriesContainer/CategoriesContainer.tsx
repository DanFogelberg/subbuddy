import espressoHouseLogo from '../../assets/images/espresso-house.png';
import netflixLogo from '../../assets/images/netflix-logo.png';
import spotifyLogo from '../../assets/images/spotify-logo.png';
import gpLogo from '../../assets/images/gp-logo.png';
import gamesLogo from '../../assets/images/games-logo.png';

import CategoryCard from '../CategoryCard/CategoryCard';

const CategoriesContainer = () => {
    return (
        <section className='flex overflow-y-hidden overflow-x-auto gap-3 whitespace-nowrap mr-[-1.5rem]'>
            <CategoryCard title='Mat & dryck' src={espressoHouseLogo} />
            <CategoryCard title='Streamingtjänster' src={netflixLogo} />
            <CategoryCard title='Musiktjänster' src={spotifyLogo} />
            <CategoryCard title='Tidningar' src={gpLogo} />
            <CategoryCard title='Spel' src={gamesLogo} />
        </section>
    );
}

export default CategoriesContainer;