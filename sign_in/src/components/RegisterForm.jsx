import { Formik, Form } from "formik";
import styled from "styled-components";
import FormikInput from "./FormikInput";
import { Link } from "react-router-dom";
import GoogleButton from "./GoogleButton";
import FacebookButton from "./FacebookButton";

const Container = styled.div`
  display: flex;
  margin: 10rem auto;
  justify-content: center;
  
`

const LeftSideWrapper = styled.div`
  background-color: #F2877D;
  padding: 30px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const BrandLogo = styled.img`
  height: 45px;
`

const MainImage = styled.img`
  height: 400px;
`

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  
`

const Text = styled.p`
  text-align: center;
  color: white;
  font-size: 18px;
`

const FormWrapper = styled.div`
  width: 500px;
  border: 3px solid #F2877D;
  padding: 2rem;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

`



const LogInLinks = styled(Link)`
  color: #F2877D;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 20px;
  margin-bottom: 25px;
`

const OrContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 23px;
  margin-bottom: 10px;
`

const StyledField = styled.div`
  margin-bottom: 1rem;

  input:focus {
    border-color: #F2877D;
  }
`

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #F2877D;
  cursor: pointer;
  width: 100%;
  margin-top: 15px;
  transition: 300ms;

  &:hover {
    background-color: #b9655e;
  }
`

const requiredField = "Required";

const RegisterFormFormik = () => {
  const handleSubmit = (values) => {
    alert(JSON.stringify(values))
  }

  return (
    <Container>
      <LeftSideWrapper>
        <div><BrandLogo src="https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/logo.svg" alt="" /></div>
        <div><MainImage src="https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/illustration.svg" alt="" /></div>
        <TextWrapper><Text>Start for free & get <br />
          attractive offers today !</Text></TextWrapper>
      </LeftSideWrapper>

    <FormWrapper>
      <div>
        <h2>Get Started</h2>
        <p>Already have an account?</p>
        <LogInLinks to="/login-formik">Log In</LogInLinks>
      </div>

      <ButtonContainer>
        <GoogleButton />
        <FacebookButton />
      </ButtonContainer>

      <OrContainer>
      <p>Or</p>
      </OrContainer>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.name) errors.name = requiredField;
          if (!values.email) {
            errors.email = requiredField;
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid format";
          }
          if (!values.password) {
            errors.password = requiredField;
          } else if (
            !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(
              values.password
            )
          ) {
            errors.password =
              "The password must contain at least one number, uppercase letter, and symbol";
          }

          return errors;
        }}
      >
        <Form>
          <StyledField>
            <FormikInput name="name" label="Name" placeholder='Joy Shaheb' />
          </StyledField>
          <StyledField>
            <FormikInput type="email" name="email" label="Email" placeholder="abc@gmail.com" />
          </StyledField>
          <StyledField>
            <FormikInput type="password" name="password" label="Password" placeholder="Password here" />
          </StyledField>
          <StyledButton>Submit</StyledButton>
        </Form>
      </Formik>
    </FormWrapper>
    </Container>
  );
};

export default RegisterFormFormik;
