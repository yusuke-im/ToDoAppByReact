export const CompleteTodos = (props) => {
    const { completeTodos, onClickRestore } = props;

    return (

        <div className='complete-area'>
        <p className='title'>complete Todo</p>
          <ul>
            {completeTodos.map((todo, index) => (
                  <li key={todo}>
                  <div className='list-row'>
                    <p className='todo-item'>{todo}</p>
                    <button onClick={ () => onClickRestore(index)}>Restore</button>
                  </div>  
                </li>
                )           
              )}
          </ul>
        </div>
    )
}