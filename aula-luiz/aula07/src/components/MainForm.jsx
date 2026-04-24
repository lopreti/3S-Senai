import './MainForm.css';

export default function MainForm({ children }) {
  return (
    <form className="main-form">
      <h1>Login</h1>
      {children}
    </form>
  );
}