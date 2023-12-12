import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  margin: 10rem auto;
  padding: 2rem;
  border: 3px solid #F2877D;
  border-radius: 5px;
`;

const Heading = styled.h2`
  margin-bottom: 1rem;
`;

const StyledField = styled.div`
  margin-bottom: 1rem;
`;

const StyledInput = styled(Field)`
  display: block;
  border-radius: 5px;
  border: 1px solid #cecece;
  padding: 0.5rem;
  width: 100%;
  margin-top: 4px;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #F2877D;
  cursor: pointer;
  transition: 300ms;
  width: 100%;
  margin-top: 20px;

  &:hover {
    background-color: #b9655e;
  }
`;

const StyledErrorMessage = styled.div`
  color: red;
`;

const LoginForm = () => {
  const handleSubmit = (values) => {
    // console.log(values);
    alert(JSON.stringify(values));
  };

  return (
    <Container>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Email is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid format";
          }
          if (!values.password) errors.password = "Password is required";

          return errors;
        }}
      >
        <Form>
          <Heading>Login</Heading>

          <StyledField>
            <label htmlFor="email">Email</label>
            <StyledInput type="email" name="email" placeholder='abc@gmail.com' />
            <StyledErrorMessage>
              <ErrorMessage name="email" />
            </StyledErrorMessage>
          </StyledField>

          <StyledField>
            <label htmlFor="password">Password</label>
            <StyledInput type="password" name="password" placeholder='Password' />
            <StyledErrorMessage>
              <ErrorMessage name="password" />
            </StyledErrorMessage>
          </StyledField>

          <StyledButton>Login</StyledButton>
        </Form>
      </Formik>
    </Container>
  );
};

export default LoginForm;