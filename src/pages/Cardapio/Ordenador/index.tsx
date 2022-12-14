import { useState } from 'react';
import opcoes from './opcoes.json';
import styles from './Ordenador.module.scss';
import classNames from 'classnames';
import * as React from 'react';

interface Props {
  ordenador: string,
  setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenador({ ordenador, setOrdenador }: Props) {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find((opcao) => opcao.value === ordenador)?.nome;
  return (
    <button
      className={classNames({
        [styles.ordenador]: true,
        [styles['ordenador--ativo']]: ordenador !== ''
      })}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>{nomeOrdenador || 'Ordenar por'}</span>
      <div className={classNames({
        [styles.ordenador__options]: true,
        [styles['ordenador__options--ativo']]: aberto
      })}>
        {opcoes.map(opcao => (
          <div
            className={styles.ordenador__option}
            key={opcao.value}
            onClick={() => setOrdenador(opcao.value)}>
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}