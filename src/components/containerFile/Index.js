import React from 'react';

export const ExportFile = (props) => {
  const bodyRef = React.createRef();

  const createPdf = () => props.createPdf(bodyRef.current);
  const createWord = () => props.createWord();
  return (
    <section className="pdf-container">
      <section className="pdf-toolbar">
        <button onClick={createPdf}>Exportar para PDF</button>
        <button onClick={() => createWord('exportContent')}>Exportar para Word</button>
      </section>
      <hr />
      <section className="pdf-body" ref={bodyRef}>
        {props.children}
      </section>
      <hr />
      <footer>
        <p>Desenvolvimento@{new Date().getFullYear()}</p>
      </footer>
    </section>
  )
}