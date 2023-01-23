import React, { useState } from 'react';
import styles from '../../styles/ContactUs.module.css';
import Button from '../Button';
import Input from '../Input';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import P1 from '../P1';

type Inputs = {
  name: string;
  phone: string;
  email: string;
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

function ContactUsForm() {
  const [errorSend, setErrorSend] = useState<boolean>(false);
  const [successfulSend, setSuccessfulSend] = useState<boolean>(false);

  let schema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),
    email: yup.string().email('Email is not valid').required()
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      axios({
        method: 'post',
        url: 'http://localhost:3004/feedback',
        data: {
          name: data.name,
          phone: data.phone,
          email: data.email
        }
      });
      reset();
      setSuccessfulSend(true);
    } catch (e) {
      setErrorSend(true);
    }
  };
  console.log(errors.email?.message);
  return (
    <form className={styles.contactUsFrom} onSubmit={handleSubmit(onSubmit)}>
      <Input label="Name" type="text" register={register('name')} error={errors.name?.message} />
      {errors.name?.message && <P1>{errors.name?.message}</P1>}
      <Input label="Phone" type="text" register={register('phone')} error={errors.phone?.message} />
      {errors.phone?.message && <P1>{errors.phone.message}</P1>}
      <Input label="E-mail" type="text" register={register('email')} error={errors.email?.message} />
      {errors.email?.message && <P1>{errors.email?.message}</P1>}
      <Button text="Send" disabled={false} />
      {errorSend && <P1>Send error</P1>}
      {successfulSend && <P1>Successfully sent</P1>}
    </form>
  );
}

export default ContactUsForm;
