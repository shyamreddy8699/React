import React from "react"
class App extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            count : 0
        }
        this.handleClick = this.handleClick.bind(this)
        
        this.handleClick1= this.handleClick1.bind(this)
    }
   handleClick()
    {
        this.setState(prevState=> {
            
            return{
                count: prevState.count+1}
        })
    }
    handleClick1()
    {
        this.setState(prevState =>{
            
            return {
                count:prevState.count/2
            }
        })
        }
    render() {
        return (
            <div>
            <h1>{this.state.count}</h1>
 <button onClick= {this.handleClick}>change</button> 
 <button onClick ={this.handleClick1}>half</button>       
            </div>
        )
    }
}
export default App
