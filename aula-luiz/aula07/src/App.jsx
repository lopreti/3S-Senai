import './styles/global.css';
import { Mail, Lock } from 'lucide-react';
import Container from './components/Container';
import MainForm from './components/MainForm';
import DefaultInput from './components/DefaultInput';
import DefaultButton from './components/DefaultButton';

export default function App() {
  return (
    <Container>
      <MainForm>
        <DefaultInput icon={Mail} type="email" placeholder="E-mail" />
        <DefaultInput icon={Lock} type="password" placeholder="Senha" />
        <DefaultButton label="Entrar" />
      </MainForm>
    </Container>
  );
}