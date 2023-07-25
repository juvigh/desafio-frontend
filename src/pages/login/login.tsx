import { Form } from '../../components/forms/form';
import { Menu } from '../../components/menu/menu';
import './login.css';

export const Login = () => {
  return (
    <div>
      <Menu />
      <div className="form">
        <Form centered isLogin />
      </div>
    </div>
  );
};
