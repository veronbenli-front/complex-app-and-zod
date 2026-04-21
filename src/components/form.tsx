import React from 'react';
import { useFormErrors, useFormData, updateFormField, resetForm, submitForm } from '../store/use-form-store';
import { Button } from "./ui/button";
import FormField from "./ui/input";

const Form: React.FC = () => {
  const formData = useFormData();
  const errors = useFormErrors();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormField(name as keyof typeof formData, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <div className='my-10 w-[600px] flex flex-col gap-4 justify-center items-center border border-gray-300 p-4 rounded-lg'>
      <h1 className="text-3xl font-bold text-gray-100">Form</h1>


      <form onSubmit={handleSubmit} className="bg-gray-800 w-[400px] space-y-4 p-6 rounded-lg shadow-md text-gray-100">
        <FormField
          id="name"
          name="name"
          label="Name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Введите ваше имя"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        <FormField
          id="email"
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="example@mail.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        <FormField
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Введите пароль"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        <FormField
          id="phone"
          name="phone"
          label="Phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="+7 (999) 123-45-67"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}

        <div className="flex gap-2">
          <Button
            variant="secondary"
            type="submit"
          >
            Отправить
          </Button>
          <Button
            variant='ghost'
            type="button"
            onClick={resetForm}
          >
            Очистить
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
