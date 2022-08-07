import Typewriter, { TypewriterClass } from "typewriter-effect";

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
    <div>
      <picture>
        <source srcset={bg4x} media="(min-width: 2000px)" />
        <source srcset={bg2x} media="(min-width: 1100px)" />
        <img src={bg} alt="" />
      </picture>

      <div class="text-4xl">
        <Typewriter onInit={handleInit} options={{ cursor: "_", delay: 75 }} />
      </div>
    </div>
  );
};

export default Home;
