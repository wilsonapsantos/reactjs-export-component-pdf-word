import React, { Component } from 'react';
import { render } from 'react-dom';
import Doc from './components/servicePDF/DocService';
import DocWord from './components/serviceWord/DocService';
import { ExportFile } from './components/containerFile/Index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Wilson, Wander, Kaique, Pedro',
      area: 'Desenvolvimento',
      description: 'Exportando tela do ReactJs components para PDF e Word'
    };
  }

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState((state) => {
      state[name] = value;
      return state;
    })
  }

  createPdf = (html) => Doc.createPdf(html);
  createWord = () => DocWord.createWord();

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <section className="header-bar">
          <span className="header">Exportando formulário de componentes:</span>
        </section>
        <ExportFile createPdf={this.createPdf} createWord={this.createWord}>
          <div id="exportContent">
            <section className="flex-column">
              <h2 className="flex">Formulario - Desenvolvimento de Sistemas</h2>
              <section className="flex-row">
                <input style={{ width: "10%" }} placeholder="Area"
                  name="area"
                  value={this.state.area}
                  onChange={this.onChange} />
                <input style={{ width: "40%" }} className="flex"
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange} />
              </section>
              <br />
              <textarea rows="10" style={{ width: "50%" }}
                placeholder="Description"
                name="description"
                value={this.state.description}
                onChange={this.onChange} />
            </section>
          </div>
        </ExportFile>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));