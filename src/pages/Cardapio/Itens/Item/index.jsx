import styles from './Item.module.scss';
import React from 'react';
import { Prato } from 'types/Type';
import TagsPrato from 'components/TagsPrato';
import { useNavigate } from 'react-router-dom';

type Props = Prato;

export default function Item(props: Props) {
  const { title, description, id, photo } = props;
  const navigate = useNavigate();
  return (
    <div className={styles.item} key={id} onClick={() => navigate(`/prato/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <TagsPrato {...props} />
      </div>
    </div>
  );
}