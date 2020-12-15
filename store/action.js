import prompt from 'react-native-prompt-android'
function SetTodo(task){

    return {
        type : "ADDDATA",
        payload : task
    }
}

export const Edit = (index) =>{
var  value =prompt("Enter new Value","enter value")
console.log("value =>"  + value)
return {
    type: "EDITDATA",
    payload: value,
    index : index
}

}
export const Delete = (index) =>{
    return {
        type: "DELETEITEM",
        payload: index
        
    }
    
    }
    export const DeleteAll = () =>{
        return {
            type: "DELETEALL",
             }
            }
export {
    SetTodo
}