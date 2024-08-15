export const IncompleteTodos = (props) => {
    const { incompleteTodos, onClickComplete, onClickDelete } = props;

    return (

        <div className='incomplete-area'>
        <p className='title'>Incomplete Todo</p>
        <ul>
          {incompleteTodos.map((todo, index) => (
              <li key={todo}>
              <div className='list-row'>
                <p className='todo-item'>{todo}</p>
                <button onClick={ () => onClickComplete(index)}>Done</button> 
                <button onClick={ () => onClickDelete(index)}>Delete</button>
              </div>  
            </li>
            )           
          )}
        </ul>
      </div>

    )
}