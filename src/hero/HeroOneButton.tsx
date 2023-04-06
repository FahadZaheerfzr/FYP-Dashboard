import Typewriter from 'typewriter-effect';

type IHeroOneButtonProps = {
  title: string;
  description: string;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-5xl text-green-400 font-bold whitespace-pre-line leading-hero p-14">
    <Typewriter
        options={{
          strings: [props.title],
          autoStart: true,
          //change speed
          delay: 70,
          pauseFor: 100000,
          loop: true,
        }}
      />
    </h1>
    <div className="text-2xl mt-4 mb-16">
      {props.description}
    </div>
  </header>
);

export { HeroOneButton };
