import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title='React | Contato' description='Entre em contato' />
      <img src={foto} alt='Máquina de escrever' />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>williangoncalves74@gmail.com</li>
          <li>19 98139-8215</li>
          <li>Campinas, SP</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
