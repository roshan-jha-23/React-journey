import { createSlice,nanoid } from "@reduxjs/toolkit";

const intialState={
    todos:[{id:1,msg:"hello"}]
}
export const todoSlice=createSlice({
    name: "todo",
    initialState:intialState,
    reducers:{
        addTodos:(state,action)=>{
          const todo={
            id:nanoid(),
            msg:action.payload
          }
          state.todos.push(todo)
        },
        removeTodos:(state,action)=> {
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo:(state,action)=>{
        const id=action.payload.id;
        const index=state.todos.findIndex((item)=>item.id===id)
        if(index>=0){
           state.todos[index]=action.payload
         }else{
             console.log("no such Todo")
         }

        }
    
    }
})
export const  {addTodos,removeTodos,updateTodo}=todoSlice.actions

export default todoSlice.reducer