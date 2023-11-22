import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
`

const TodoContainer = styled.div`
  background-color: white;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  width: 500px;
`

const Title = styled.h2`
  text-align: center;
  border-bottom: 1px solid #d1d1d1;
  padding: 1rem;
`

const List = styled.ul`
  padding: 0;
`

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  list-style-type: none;
  margin: 0;
`

const DeleteButton = styled.button`
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

const ActionBar = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1rem;
`

const StyledInput = styled.input`
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  padding: 1rem;
  width: 100%;
`

const Button = styled.button`
  border: 1px solid #d1d1d1;
  padding: 1rem 2rem;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

const App = () => {
  const [task, setTask] = useState(``)
  const [items, setItems] = useState([{ id: 1, title: "Test" }])
  

  // const items = [{ id: 1, title: "Test" }]

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const handleSubmit = () => {
    if (task.trim() !== "") {
      const newItem = { id: items.length + 1, title: task }
      setItems([...items, newItem])
      setTask("")
  }
}

  return (
    <Container>
      <TodoContainer>
        <Title>Todo list</Title>
        <List>
          {items.map((item) => (
            <ListItem key={item.id}>
              {item.title}
              <DeleteButton 
              onClick={() => handleDelete(item.id)}
              >X
              </DeleteButton>
            </ListItem>
          ))}
        </List>
        <ActionBar>
          <StyledInput 
          placeholder="Enter item..."
          value={task}
          onChange={(e) => setTask(e.target.value)} />
          <Button
          onClick={handleSubmit}
          >Submit</Button>
        </ActionBar>
      </TodoContainer>
    </Container>
  )
}

export default App
