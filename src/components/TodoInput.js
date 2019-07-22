import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    // const handleChange = this.props.handleChange;
    // const item = this.props.item;
    // const handleSubmit = this.props.handleSubmit;

    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i class="fas fa-book    " />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
              value={item}
              onChange={handleChange}
            />
            <button
              type="submit"
              className={
                editItem
                  ? 'btn btn-block btn-success mt-3'
                  : 'btn btn-block btn-primary mt-3'
              }
            >
              {editItem ? 'Edit Item' : 'Add Item'}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default TodoInput;
