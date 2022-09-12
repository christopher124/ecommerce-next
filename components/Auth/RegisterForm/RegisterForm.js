import { useState } from "react";
import { Form, Button } from "semantic-ui-react";

export default function RegisterForm(props) {
  const { showLoginForm } = props;

  return (
    <Form className="login-form">
      <Form.Input name="name" type="text" placeholder="Nombres" />
      <Form.Input name="lastname" type="text" placeholder="Apellidos" />
      <Form.Input name="username" type="text" placeholder="Nombre de usuario" />
      <Form.Input name="email" type="text" placeholder="correo electronico" />
      <Form.Input name="password" type="password" placeholder="Contraseña" />
      <div className="actions">
        <Button type="button" basic>
          Iniciar sesíon
        </Button>
        <Button type="submit" className="submit">
          registrar
        </Button>
      </div>
    </Form>
  );
}
