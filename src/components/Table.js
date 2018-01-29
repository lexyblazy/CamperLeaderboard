import React from 'react';

const Table = ()=>{
    return (
        <div className="container">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Camper Name</th>
                <th>Points in past 30days</th>
                <th>All time Points</th>
              </tr>
            </thead>
          </table>
        </div>
      );
}

export default Table;