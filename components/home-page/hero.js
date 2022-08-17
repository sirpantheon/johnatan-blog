import Image from 'next/image';

import classes from './hero.module.scss';

function Hero() {

  const Imagen1 = '/images/site/Image-Johnatan.jpg'
  const Imagen2 = '/images/site/Image-Johnatan.jpg'
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/john3.png'
          alt='Eu sou o Johnatan'
          width={250}
          height={250}
        />
      </div>
      <h1>Óla, Meu Nome e Johnatan</h1>
      <p>
        Este e o meu blog sobre a minha evolução como Web Developer - Especialidade em frameworks como NextsJs e React.
      </p>
      <p>NextsJs | React | TypeScript | NodeJs | MongoDb | Sass</p>
    </section>
  );
}

export default Hero;
