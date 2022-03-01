function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
      timeStamp: '2/28/2022, 8:56:45 PM',
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
      timeStamp: '2/27/2022, 8:56:45 AM',
    },
    {
      text: 'build todo app',
      isCompleted: false,
      timeStamp: '2/27/2022, 8:00:05 PM',
    }        
  ]);

  const addTodo = text => {
    var datime = new Date().toLocaleString();
    const newTodos = [...todos, {text, isCompleted:false, timeStamp:datime,}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return (
    <div className="app">
      <div className="todo-list">
          {todos.map((todo, i) => 
            <Todo index={i} key={i} todo={todo} 
            remove = {removeTodo}/>)}
          <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}  

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
