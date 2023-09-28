import topLogo from '../../assets/images/logo-top.svg';
import bottomLogo from '../../assets/images/logo-bottom.svg';

const LoadingScreen = () => {
  return (
    <section className="min-w-screen min-h-screen relative m-[-1.5rem] flex flex-col justify-center mt-[-3.25rem] animation-fade-out">
      <div className="w-full h-full">
        <div className="max-w-fit h-auto absolute top-[40px] animation-top left-0 right-0 m-0 mx-auto">
          <img src={topLogo} alt="Top of the logo." />
        </div>
        <div className="max-w-fit h-auto absolute bottom-[40px] animation-bottom left-0 right-0 m-0 mx-auto">
          <img src={bottomLogo} alt="Bottom of the logo." />
        </div>
      </div>
    </section>
  );
};

export default LoadingScreen;