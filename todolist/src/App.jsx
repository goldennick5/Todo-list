import s from './App.module.css';
import Container from './components/Container/Container.jsx';
import Button from './components/Button/Button.jsx';
import Form from "./components/Form/Form.jsx";

function App() {

  return (
      <Container>
          <div className={s.header_body}>
              <div className={s.form_filter}>
                  <h1 className={s.title}>Simple To Do List</h1>
                  <p className={s.paragraph}>Today is awesome day. The weather is awesome, you are awesome too!</p>
                  <div className={s.btn_container}>
                      <Button name="To Do"/>
                      <Button name="Done"/>
                      <Button name="Trash"/>
                  </div>
              </div>
              <Form/>
          </div>
      </Container>
  );
};

export default App;
