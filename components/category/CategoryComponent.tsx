import React from 'react';
import styles from './CategoryComponent.module.css';
import Image from 'next/image';
import Filter from '../../assets/Filter.svg';

interface CategoryConfig {
  style: 'small' | 'large';
  showSvg: boolean;
}

const CategoryComponent: React.FC<CategoryConfig> = ({ style, showSvg }) => {

  return (
    <div className={styles.container}>
        {showSvg && <Image src={Filter} alt='filter'/>}
        <select name="categories" id = {styles[style]} defaultValue={""}>
            <option className={styles.option} value="">Filter by Category </option>
            <option className={styles.option} value="filmes">Filmes</option>
            <option className={styles.option} value="musicas">Músicas</option>
            <option className={styles.option} value="livros">Livros</option>
            <option className={styles.option} value="series">Séries</option>
            <option className={styles.option} value="viagens">Viagens</option>
            <option className={styles.option} value="receitas">Receitas</option>
            <option className={styles.option} value="exercicios">Exercícios</option>
            <option className={styles.option} value="hobbies">Hobbies</option>
        </select>
    </div>
  )
}

export default CategoryComponent