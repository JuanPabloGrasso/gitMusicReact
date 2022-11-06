import React from "react";

class LastProductInDb extends React.Component {
  state = {
    overTitle: false
  }

  handleMouseOver = () => {
    this.setState({ overTitle: !this.state.overTitle });
  }

  render() {
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 onClick={this.handleMouseOver} className="m-0 font-weight-bold text-gray-800">
              Categorías en database
            </h5>
          </div>
          <div className={`card-body ${this.state.overTitle ? 'bg-secondary' : ''}`}>
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">Amplificadores</div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-info text-dark shadow">
                  <div className="card-body">Bajos</div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-info text-dark shadow">
                  <div className="card-body">Baterías</div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">Guitarras</div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">Saxofones</div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-info text-dark shadow">
                  <div className="card-body">Teclados</div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LastProductInDb;
