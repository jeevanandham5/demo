import React,{Component} from "react";
import Table from "./Table";
import Form from "./Form";
import ApiExample from "./ApiExample";

class App extends Component{

    state = {
      characters : []
    }

    removeCharacter= (index) => {
      const {characters} = this.state ;

      let filtered = characters.filter((character,i) =>{
        return i !== index 
      });

        this.setState({characters : filtered});

    };

    handleSubmit = (character)=>{
      this.setState({characters : [...this.state.characters , character ]})
    }

    render(){
        const {characters} = this.state
      return(
        <div className="container">
          <h1>Employee Details</h1>
          <Table removeCharacter = {this.removeCharacter} charactersData = {characters}/>
          <Form handleSubmit = {this.handleSubmit} />
          <h2>Api Example</h2>
          <ApiExample/>
        </div>
      );
    }
  }

  export default App;