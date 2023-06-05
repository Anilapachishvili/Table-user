import Container from "./Header.module.css";
import React, { useState } from "react";

function Header() {
  const [newItem, setNewItem] = useState("");
  const [excuse, setExcuse] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = () => {
    setTodoList((prev) => [{ title: newItem, excuse: excuse }, ...prev]);
    setNewItem("");
    setExcuse("");
  };

  return (
    <div className={Container.flex}>
      
      <div className={Container.textcolumn}>
        <h1>Wall of shame</h1>
        <p>5 members</p>
      </div>
      <form>
        <input
        
          type="text"
          placeholder="Name"
      
          onChange={(e) => setNewItem(e.target.value)}
        />
        <input
      
          type="text"
          placeholder="Excuse"
     
          onChange={(e) => setExcuse(e.target.value)}
        />
      </form>
   
      <button className={Container.pink} onClick={addNewTodo}>Create</button>
      <div className={Container.txt}>
        <div className={Container.flexrow}>
          <h1>Name</h1>
          <h2>Excuse</h2>
          <h3>Count</h3>
        </div>
      </div>
      {todoList.map((todo, index) => (
        <div className={Container.box} key={index}>
          
            <p>1</p>
            <h1>{todo.title}</h1>

            <h2>{todo.excuse}</h2>
            


    
            
          
         
    
          
          </div>
      
    
      ))}
    </div>
  );
}

export default Header;

