import { Body2 } from '../../styles/typography/body-2';
import { H1 } from '../../styles/typography/h1';
import './form.css';
import { LoginForm } from './login-form';
import { RegisterForm } from './register-form';

interface FormProps {
  isLogin?: boolean;
  centered?: boolean;
}

export const Form = ({ isLogin, centered }: FormProps) => {
  const formContainerClasses = `form-container ${centered ? 'form-container-centered' : ''}`;

  return (
    <div className={formContainerClasses}>
      <div className="form-title">
        <H1 size="xxxLarge" color="NeutralXdark">
          {isLogin ? 'Acesse sua conta' : 'Cadastre-se'}
        </H1>
        <Body2 color="NeutralMedium" weight="regular">
          {isLogin
            ? 'Para utilizar os serviços da nossa plataforma, você precisa entrar uma conta!'
            : 'Insira alguns dados sobre seu perfil.'}
        </Body2>
      </div>
      {isLogin ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};
