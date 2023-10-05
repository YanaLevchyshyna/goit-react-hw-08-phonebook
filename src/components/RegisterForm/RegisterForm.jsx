import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

import {
  FormWrap,
  FormEl,
  FormTitleLogIn,
  InputWrap,
  Input,
  FocusInput,
  Button,
  CiUserSVG,
  LockClosedSVG,
  OutlineMailSVG,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    // Викликаємо дію  register з параметрами name,
    // email та password, які отримуємо зі значень полів форми
    dispatch(
      register({
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
        <FormTitleLogIn>Sign up</FormTitleLogIn>
        <InputWrap>
          <CiUserSVG />
          <Input
            type="text"
            name="name"
            placeholder="Username"
            pattern="^[^\d]+$"
            title="Ім'я має містити лише літери, апострофи, дефіси та відступи"
            required
          />
          <FocusInput></FocusInput>
        </InputWrap>

        <InputWrap>
          <OutlineMailSVG />
          <Input
            type="text"
            name="email"
            placeholder="Email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
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
            pattern="^[a-zA-Z0-9!@#\\$%^&*()\\-_=+~[\\]{}|:<>/?]+$"
            title="Пароль повинен містити тільки латинські літери (як великі, так і малі), цифри та інші символи"
            required
          />
          <FocusInput></FocusInput>
        </InputWrap>
        <Button type="submit">Register</Button>
      </FormEl>
    </FormWrap>
  );
};
