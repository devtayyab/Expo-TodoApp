import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Edit} from '../store/action'
import {Delete} from '../store/action'
import {Text,Button, View } from 'react-native';
export const Display = () =>{
    const Todos =useSelector((state)=>{  
        console.log(state.todo)
        return state.todo

        
    })
    const dispatch =useDispatch();


   

    return(
       <View>
        
            {Todos.map((v,i)=>
           
           <View key={i}>
           {console.log(v)}
            <Text key={i}>
                {String(v)}
            <Button variant="outline-warning" title="EDIT" color="orange" onPress={()=>dispatch(Edit(i = i))}><Text>Edit</Text></Button>
            <Button variant="outline-danger" title="DELETE" color="brown" onPress={()=>dispatch(Delete(i = i))}><Text>Delete</Text></Button>
            
            </Text>
            </View>
        )}
       
       </View>
    )
}