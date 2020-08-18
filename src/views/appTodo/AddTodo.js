import React from 'react';
import { connect } from 'react-redux';
import { actionAddTodo } from '../../reduxModules/appTodo';


const AddTodo = ({ dispatch }) => {
    let input

    return (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault()
              if (!input.value.trim()) {
                return
              }
              dispatch(actionAddTodo(input.value))
              input.value = ''
            }}
          >
            <input ref={node => (input = node)} />
            <button type="submit">Add Todo</button>
          </form>
        </div>
      )
};



export default connect()(AddTodo);