import React from "react";
import {TextField, Paper, Button, Grid} from "@material-ui/core";

class AddTodo extends React.Component{

    constructor(props){
        super(props);
        this.state={item : {title:""} }; //사용자 입력을 저장할 오브젝트
    }

    onInputChange = (e) =>{

        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item:thisItem})
        
        console.log(thisItem)
    }


    render(){
        return(
            <Paper style={{margin: 16, padding:16}}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{ paddingRight: 16}}>
                        <TextField onChange={this.onInputChange} placeholder="Add Todo here" fullWidth></TextField>
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button fullWidth color="secondary" variant="outlined">
                            +
                        </Button>
                    </Grid>
                </Grid>

            </Paper>
        )
    }
}

export default AddTodo;