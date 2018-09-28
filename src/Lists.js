import React, { Component } from 'react';

class Lists extends Component {
  createTasks = lists => {
    return (
      <li key={lists.key}>
        <i className="fas fa-minus" onClick={() => this.props.removeList(lists.key)}></i> 
        <span onClick={() => this.props.selectList(lists.key)}>{lists.text}</span>
      </li>
    )
  }
  
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <ul>{listItems}</ul>
  }
}

export default Lists;