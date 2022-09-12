export default function RegisterForm(props) {
  const { showLoginForm } = props;

  return (
    <div>
      <h1>Estamos en el formulario de registro</h1>
      <button onClick={showLoginForm}>ir a Login</button>
    </div>
  );
}
