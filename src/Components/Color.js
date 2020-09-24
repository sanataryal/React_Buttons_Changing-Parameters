import React from 'react'

export default class Color extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Sanat",
            zip: 27511,
            char: "Lovely"
        };
    }

changeZip = () => {
    this.setState({zip:27513});
}
changeChar = () => {
        this.setState({char:"Sweet"});
}
changeName = () => {
    this.setState({name:"John"});
}

render(){
    return(
        <div>
            <p class = "p1">My Name is <b>{this.state.name}</b>. I live in <b> {this.state.zip}</b> and 
            I am <b>{this.state.char}</b>.</p>

            <button class= "button1" onClick = {this.changeName}>Change Name

            </button><br></br><br></br>
            <button onClick = {this.changeZip}>Change Zip

</button><br></br><br></br>

            <button onClick = {this.changeChar}>Change Pros

            </button>
            
        </div>
    );

    }
}




