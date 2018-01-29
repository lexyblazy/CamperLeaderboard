import React, { Component } from "react";

const style = {
  width: "30px",
  height: "30px"
};
class Table extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.toggleRecent = this.toggleRecent.bind(this);
  }

  renderList(campers) {
    if (!campers) {
      return <tr>Loading...</tr>;
    }
    return campers.map((camper, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>
            <img style={style} src={camper.img} alt="" /> {camper.username}
          </td>
          <td>{camper.recent}</td>
          <td>{camper.alltime}</td>
        </tr>
      );
    });
  }
  toggleRecent(){
    const {recentCampers} = this.props;
    this.props.toggle(recentCampers)
  }
  toggleAll(){
    const {allCampers} = this.props;
    this.props.toggle(allCampers)
  }
  render() {
    const { campers,getAll,getRecent } = this.props;
   

    return (
      <div className="container">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Camper Name</th>
              <th><button className='btn btn-link' onClick={getRecent}>Points in past 30 days </button></th>
              <th><button className='btn btn-link' onClick={getAll}>All time Points </button></th>
            </tr>
          </thead>
          <tbody>{this.renderList(campers)}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
