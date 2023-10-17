import React,{Component} from "react";
class MyComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            error: null,
        };
    }
    componentDidCatch(error, errorInfo){
        this.setState({error});
    }
    render(){
        if(this.state.error){
            return<p>An error occured: {this.state.error.message}</p>
        }
    
        return(
            <div>No error</div>
                //Component JSx goes here
        );
        }
    
}
export default MyComponent;