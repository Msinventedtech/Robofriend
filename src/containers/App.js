import React, { Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfeild: '',
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (response=> response.json())
        .then(users => this.setState({ robots: users}));
        
    }
    
    
    onsearchChange =(event) => {
        this.setState({searchfeild: event.target.value})
        }
    


    render () {  
        const { robots , searchfeild } = this.state; 
        const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfeild.toLowerCase());
        })
        return !robots.length ?
             <h1>Loading</h1> :
        (
                <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onsearchChange}/>
                <Scroll>
                <CardList robots={filteredRobots}/>
                </Scroll>
                </div>
                );
          }   
}
export default App;
