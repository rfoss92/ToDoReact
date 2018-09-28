import React, { Component } from 'react';
import './App.css';
import App from './App';
import Items from './Items';
import Lists from './Lists';

class Menu extends Component {
  constructor() {
    super()
    this.state = {
      lists: [],
      currentList: {text:'', key:''},
      activeList: [],
      items: [],
      currentItem: {text:'', key:''},
    };  
  }

  handleInputItem = (e) => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      let activeList = this.state.activeList;
      let items;
      if (activeList.items){
        items = activeList.items
      } else {
        items = activeList[0].items        
      }
      items.push(newItem);                   
      this.setState({
        items,
        currentItem: { text: '', key: '' },
      })  
    }
  };

  removeItem = (key) =>  {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    let activeList = this.state.activeList;
    if (activeList.items){
      activeList.items = filteredItems;
    } else {
      activeList[0].items = filteredItems;
    }
    this.setState({
      items: filteredItems,
      activeList
    })
  };

  handleInputList = (e) => {
    const itemText = e.target.value;
    const currentList = { 
      text: itemText,
      items: [], 
      key: Date.now() 
    }
    this.setState({
      currentList,
    })
  };

  createList = (e) => {
    e.preventDefault();
    const newList = this.state.currentList;
    if (newList.text !== '') {
      const lists = [...this.state.lists, newList]
      this.setState({
        lists,
        currentList: { text: '', key: '' },
        items: [],
        activeList: newList
      })
    }
  };

  removeList = (key) => {
    const filteredLists = this.state.lists.filter(list => {
      return list.key !== key
    })
    this.setState({
      lists: filteredLists,
      items: [],
      activeList: []
    })
  };

  selectList = (key) => {
    const activeList = this.state.lists.filter(list => {
      return list.key === key
    })
    const items = [...activeList[0].items]
    this.setState({
      activeList,
      items
    })
  };

  render() {
    return (
      <div>
        <h1>To Do</h1>
        <App 
          addItem={this.addItem}
          createList={this.createList}          
          inputElement={this.inputElement}
          handleInputItem={this.handleInputItem}
          handleInputList={this.handleInputList}          
          currentItem={this.state.currentItem}
          currentList={this.state.currentList}          
        />
        <div className="grid-container">
          <section className="grid-item"> 
            <Lists
              entries={this.state.lists}
              removeList={this.removeList}
              selectList={this.selectList}
            />
          </section>
          <section className="grid-item">  
            <Items 
              entries={this.state.items}
              removeItem={this.removeItem}
              activeList={this.state.activeList}
            />
          </section>  
        </div>
      </div>
    );
  }
}

export default Menu;
