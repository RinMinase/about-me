import Typewriter, { TypewriterClass } from "typewriter-effect";

import bgSm from "../assets/bg-sm.jpg";
import bg from "../assets/bg.jpg";
import bg2x from "../assets/bg-2x.jpg";
import bg4x from "../assets/bg-4x.jpg";

const Home = () => {
  const handleInit = (typewriter: TypewriterClass) => {
    typewriter
      .typeString("Hello,")
      .pauseFor(1000)
      .typeString(" Welcome!")
      .start();
  };

  return (
    <div class="home-container">
      <div class="relative">
        <picture class="absolute top-0 left-0 -z-10 overflow-hidden background-image">
          <source srcset={bg4x} media="(min-width: 2000px)" />
          <source srcset={bg2x} media="(min-width: 1100px)" />
          <source srcset={bg} media="(min-width: 900px)" />
          <img src={bgSm} alt="background" class="w-screen object-cover object-right" />
        </picture>

        <div class="flex text-4xl flex justify-center items-center welcome-message">
          <Typewriter
            onInit={handleInit}
            options={{ cursor: "_", delay: 75 }}
          />
        </div>
      </div>
      <div>
        <p>home content</p>
      </div>
    </div>
  );
};

export default Home;
