import Typewriter, { TypewriterClass } from "typewriter-effect";

export function App() {
  const handleInit = (typewriter: TypewriterClass) => {
    typewriter
      .typeString("Hello,")
      .pauseFor(1000)
      .typeString(" Welcome!")
      .start();
  };

  return (
    <div>
      <div class="text-4xl">
        <Typewriter onInit={handleInit} options={{ cursor: "_", delay: 75 }} />
      </div>
    </div>
  );
}
