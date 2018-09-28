import React, { Component } from 'react'

class Items extends Component {
	createTasks = item => {
    return (
      <li key={item.key} onClick={() => this.props.removeItem(item.key)}>
        {item.text}
      </li>
    )
  }

  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)
		if (this.props.activeList[0]){
      return <ul><h2>{this.props.activeList[0].text}</h2>{listItems}</ul>
    } else {
      return <ul><h2>{this.props.activeList.text}</h2>{listItems}</ul>    	
    }
  }
}

export default Items;