import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import {DeleteAll, SetTodo} from '../store/action'
import { TextInput,StyleSheet,View,Text, Button} from 'react-native'
export const Setdata = () =>{

    var [todo, settodo] = useState("");
    const dispatch = useDispatch();
        return(
            <View style={styles.fixToText}>
                <TextInput style={styles.input} id="standard-basic" label="Enter ToDo" value={todo}   placeholder="Enter ToDo" onChangeText={(e)=>settodo(e)} />
                {/* <input type="text" value={todo} placeholder="Enter ToDo" onChange={(e)=>settodo(e.target.value)}></input> */}
               
                <Button variant="outline-success" title="Add Task" onPress={()=>{dispatch(SetTodo(String(todo))),settodo("")}}><Text>Add Task</Text></Button>
                {/* <button onClick={()=>{dispatch(SetTodo(String(todo)))}}> Add Task</button>   
                       */}
                       <Button variant="outline-danger" color="brown" title="Delete Al" onPress={()=>{dispatch(DeleteAll()) }}><Text>Delete All</Text></Button> 
                {/* <button onClick={()=>{dispatch(DeleteAll())}}> DELETE ALL</button>          */}

            </View>
        )
                    }
const styles = StyleSheet.create({
            fixToText: {
                flexDirection: 'column',
                
                margin: 10
               
              },
              input: {
                margin:5,
                 backgroundColor: "grey",
                 height:40,
                 borderRadius: 10,
                 color:"white",
                 fontSize:20,
                
                 
              }
            })
