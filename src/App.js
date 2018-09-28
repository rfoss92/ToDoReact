import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>

        <form onSubmit={this.props.createList}>
    			<label htmlFor="list"></label>
          <input name="list" placeholder="Create A List" required="" maxLength="30" type="text"
            ref={this.props.inputElement}
            value={this.props.currentList.text}
            onChange={this.props.handleInputList}
          />
          <button type="submit" aria-label="Create List"><i className="fas fa-pencil-alt"></i></button>
          <br/>
        </form>

        <form onSubmit={this.props.addItem}>
          <label htmlFor="add"></label>
          <input placeholder="Add" required="" maxLength="90" type="text"
            ref={this.props.inputElement}
            value={this.props.currentItem.text}
            onChange={this.props.handleInputItem}
          />
          <button type="submit" aria-label="Add item"><i className="fas fa-plus"></i></button>
          <br/>
        </form>

      </div>
    );
  }
}

export default App;