import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import {
  FormWrap,
  FormEl,
  FormTitleLogIn,
  InputWrap,
  Input,
  FocusInput,
  Button,
  LockClosedSVG,
  OutlineMailSVG,
} from './LoginForm.styled';

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    // Викликаємо дію  register з параметрами name,
    // email та password, які отримуємо зі значень полів форми
    dispatch(
      logIn({
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormWrap>
      <FormEl onSubmit={handleSubmit} autoComplete="off">
        <FormTitleLogIn>Log In</FormTitleLogIn>
        <InputWrap>
          <OutlineMailSVG />
          <Input
            type="text"
            name="email"
            placeholder="Email"
            title="Будь ласка, введіть дійсну адресу електронної пошти"
            required
          />
          <FocusInput></FocusInput>
        </InputWrap>

        <InputWrap>
          <LockClosedSVG />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            title="Пароль повинен містити тільки латинські літери (як великі, так і малі), цифри та інші символи"
            required
          />
          <FocusInput></FocusInput>
        </InputWrap>
        <Button type="submit">Log In</Button>
      </FormEl>
    </FormWrap>
  );
};
