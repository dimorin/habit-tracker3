import './app.css';
import React, { Component } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';
import Container from '@mui/material/Container';
import { grey } from '@mui/material/colors';
class App extends Component {
  state = {
    habits:[
        {id:'1', name:'Reading five pages of the Bible.', count:0},
        {id:'2', name:'Take 1000mg of vitamin C.', count:0},
        {id:'3', name:'Stretching for 10 minutes.', count:0}
    ]
  }
  handleIncrement = (habit) => {
      // setState 함수를 사용해야만 state 값의 변동여부를 알수있다.
      /* 
      shallow copy가 이루어지기 때문에 이 방법을 쓰지 않는다.
      const copy = [...this.state.habits];
      const index = copy.indexOf(habit);
      copy[index].count++; */
      const copy = this.state.habits.map(item => {
        if(item.id === habit.id){
          return {...habit, count:habit.count + 1}
        }
        return item;
      })
      this.setState({habits:copy});
  };
  handleDecrement = (habit) => {
    const copy = this.state.habits.map(item => {
      if(item.id === habit.id){
        const count = habit.count - 1;
        return {...habit, count:count < 0 ? 0 : count}
      }
      return item;
    })
      this.setState({habits:copy});
  };
  handleDelete = (habit) => {
      const copy = this.state.habits.filter(item => item.id !== habit.id);
      this.setState({habits:copy});
  };
  handleAdd = (name) => {
    const newHabits = [...this.state.habits, {id:Date.now(), name:name, count:0}];
    this.setState({habits:newHabits});
  }
  handleReset = () => {
    const newHabits = this.state.habits.map(habit => {
      if(habit.count !== 0){
        return {...habit, count:0};
      }
      return habit;
    });
    this.setState({habits:newHabits});
  }
  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Container fixed sx={{mt:3, mb:3}}>
          <Habits habits={this.state.habits} onReset={this.handleReset} onAdd={this.handleAdd} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete}></Habits>
        </Container>        
      </>
    );
  }
}

export default App;