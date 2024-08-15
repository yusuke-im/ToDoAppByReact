export const InputTodo = (props) => {
    const { todoText, onChange, onClick } = props;
    return (
        <div　className='input-area'>

        <input 
            placeholder="Input Todo"
            value={todoText}
            onChange={onChange}
        />
        
        <button onClick={onClick}>Add</button>
      </div>
    );
};