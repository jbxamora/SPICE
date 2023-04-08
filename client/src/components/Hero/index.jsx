
import { Styles } from "../../styles"; // Importing Styles object for reusing CSS classes


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${Styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Logo and line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Headline and subtext */}
        <div>
          <h1 className={`${Styles.heroHeadText} text-white`}>
            Welcome to <span className="text-[#915EFF]">SPICE</span>
          </h1>
          <p className={`${Styles.heroSubText} mt-2 text-white-100`}>
            test <br className="sm:block hidden" />
            test
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
