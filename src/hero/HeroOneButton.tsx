import Typewriter from 'typewriter-effect';

type IHeroOneButtonProps = {
  title: string;
  description: string;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-left">
    <h1 className="text-5xl text-green-400 font-bold whitespace-pre-line leading-hero pt-14">
    {/* <Typewriter
        options={{
          strings: [props.title],
          autoStart: true,
          //change speed
          delay: 70,
          pauseFor: 100000,
          loop: true,
        }}
      /> */}
      {props.title}
    </h1>
    <div className="text-2xl mt-4 mb-16 text-justify">
    <Typewriter
        options={{
          strings: [props.description],
          autoStart: true,
          //change speed
          delay: 10,
          pauseFor: 100000,
          loop: true,
        }}
      />
    </div>
  </header>
);

export { HeroOneButton };
