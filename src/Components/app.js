import React, {Component} from 'react';
import './app.css'

class App extends Component{
    state = {
        member : [],
    }
    componentDidMount(){
        console.log('componenet did mount')
    }

    refresh(){
        window.location.reload();
    }
    
    fizzBuzz(n){
        for(let i = 1; i<n + 1; i++){
            // debugger;
            if((i/3) % 1 === 0 && (i/5) % 1 === 0){
                console.log('FizzBuzz')
            }
            else if((i / 3) % 1=== 0){
                console.log('Fizz')
            }
            else if((i / 5) % 1=== 0){
                console.log('Buzz')
            }
            else{console.log(i)}
            
        }
        
    }
    
    render(){
        this.fizzBuzz(35)
        return(
            <div> 
            <h1>Church Memebership</h1>
            <button className ="test" onClick={() => this.refresh()}  >Click Me</button>
            </div>
        )
    }
}

export default App;