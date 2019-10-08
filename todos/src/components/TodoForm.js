import React from "react";
import styled from "styled-components";

const StyledForm = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #62df97;
  h1 {
    color: white;
    font-size: 6rem;
  }
  form {
    display: flex;
    align-items: center;
    input {
      width: 50vw;
      height: 3rem;
      border: none;
      border-radius: 10px;
      font-size: 1.8rem;
      padding-left: 1rem;
      color: grey;
    }
    img {
        width: 3.8rem;
        height: 3.8rem;
        margin-left: 1rem;
        cursor: pointer;
    }
  }
`;

export default function TodoForm(props) {
  const { state, dispatch } = props;

  const onInputChange = evt => {
    dispatch({
      type: "ON_INPUT_CHANGE",
      payload: { value: evt.target.value }
    });
  };

  const addTodo = evt => {
    evt.preventDefault();
    dispatch({
      type: "ON_ADD_TODO",
      payload: { id: Date.now(), name: state.formVal, complete: false }
    });
    document.querySelector("input").value = "";
  };

  return (
    <StyledForm>
      <h1>I need to...</h1>
      <form>
        <input onChange={onInputChange} />
        <img src="add-pink.png" onClick={addTodo} />
      </form>
    </StyledForm>
  );
}
