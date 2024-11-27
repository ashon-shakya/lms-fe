import React, { useRef } from "react";
import { CustomInput } from "../../components/customInput/CustomInput";
import { Button, Col, Row, Form } from "react-bootstrap";
import { loginUser } from "../../features/user/userAxios";
import { toast } from "react-toastify";

export const Login = () => {
  const emailRef = useRef("");
  const passRef = useRef("");

  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "Sam@email.com",
      inputRef: emailRef,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "*******",
      inputRef: passRef,
    },
  ];

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    console.log(1000, email, password);
    // if (!email || !password) {
    //   return toast.error("Both field must be filled");
    // }

    const responsePendig = loginUser({ email, password });
    toast.promise(responsePendig, {
      pending: "Please wait....",
    });

    const { status, message } = await responsePendig;

    toast[status](message);

    // dispatch(userSignInAction({ email, password }));
  };

  return (
    <div>
      <Row>
        <Col>
          <Form
            onSubmit={handleOnSubmit}
            className="shadow-lg border p-5 rounded  m-auto mt-4"
            style={{ width: "450px" }}
          >
            <h1>Welcome back!</h1>
            <hr />
            {inputs.map((input, i) => (
              <CustomInput key={i} {...input} />
            ))}

            <div className="d-grid">
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
