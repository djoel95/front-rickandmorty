import React from 'react';

import styles from './TablaPaginacion..module.css';
const TablaPaginacion = ({ totalPages, onPageChange, currentPage }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const pages = [];
  const maxVisiblePages = 3; // Número máximo de páginas visibles

  // Lógica para generar las páginas de la paginación
  if (currentPage <= maxVisiblePages) {
    // Mostrar las primeras páginas hasta el número máximo de páginas visibles
    for (let i = 1; i <= Math.min(totalPages, maxVisiblePages); i++) {
      pages.push(
        <li
          key={i}
          className={`${styles.pageItem} ${
            i === currentPage ? styles.active : ''
          }`}
          onClick={() => onPageChange(i)}
        >
          <button className={styles.pageLink}>{i}</button>
        </li>
      );
    }
  } else if (currentPage > totalPages - maxVisiblePages) {
    // Mostrar las últimas páginas desde el total de páginas menos el número máximo de páginas visibles
    for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          className={`${styles.pageItem} ${
            i === currentPage ? styles.active : ''
          }`}
          onClick={() => onPageChange(i)}
        >
          <button className={styles.pageLink}>{i}</button>
        </li>
      );
    }
  } else {
    // Mostrar las páginas alrededor de la página actual
    const startPage = currentPage - Math.floor(maxVisiblePages / 2);
    const endPage = currentPage + Math.floor(maxVisiblePages / 2);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li
          key={i}
          className={`${styles.pageItem} ${
            i === currentPage ? styles.active : ''
          }`}
          onClick={() => onPageChange(i)}
        >
          <button className={styles.pageLink}>{i}</button>
        </li>
      );
    }
  }

  return (
    <nav aria-label="...">
      <ul className={styles.pagination}>
        <li
          className={`${styles.pageItem} ${
            currentPage === 1 ? styles.disabled : ''
          }`}
        >
          <button
            className={styles.pageLink}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
        </li>
        {pages}
        <li
          className={`${styles.pageItem} ${
            currentPage === totalPages ? styles.disabled : ''
          }`}
        >
          <button
            className={styles.pageLink}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default TablaPaginacion;