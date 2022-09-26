function Todo({todo,index,remove}){

    function handle(){
        remove(index);
    }

    return (<div className='todo' >{todo.text} <button onClick={handle} className='btnDelete'>x</button></div>)


}