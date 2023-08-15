import React from "react";
import TitleH1 from "../../layout/TitleH1";
import Container from "../../layout/Container";

import styles from "./Categoria.module.css";

function Categoria() {
  return (
    <Container>
      <TitleH1>CATEGORIAS DE VEÍCULOS</TitleH1>
      <div className={styles.containerCategorias}>
        <div className={styles.subtitle}>
          <p>
            Aqui você encontra as informações que precisa saber sobre seu
            automóvel😉
          </p>
        </div>
        <div className={styles.inputGeral}>
          <p>
            Marca:
            <input type="text" placeholder="Digite a marca" />
          </p>
          <p>
            Modelo:
            <input type="text" placeholder="Digite o modelo" />
          </p>
          <p>
            Ano:
            <input type="year" placeholder="Digite o ano" />
          </p>
        </div>
        <button>Buscar</button>
      </div>
    </Container>
  );
}

export default Categoria;
