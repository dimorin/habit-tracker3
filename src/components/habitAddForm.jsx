import React, { memo, useRef } from 'react';

const HabitAddForm = memo((props) => {
    const inputRef = useRef();//React.createRef(); state나 prop 변경시 useRef은 새로 만들어지지 않는다. 처음 한 번만 만들어진다.
    const formRef = useRef();//React.createRef();
    const onSubmit = (event) => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        //this.inputRef.current.value = '';
        formRef.current.reset();
    };
    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
          <input ref={inputRef} type="text" className="add-input" placeholder="habit" />
          <button className="add-button">add</button>
        </form>
    );
});

export default HabitAddForm;

