import React from 'react';
import { useFormErrors, useFormData, updateFormField, resetForm, submitForm } from '../store/use-form-store';
import { Button } from "./ui/button";
import FormField from "./ui/input";
import { useTranslation } from "react-i18next";

const Form: React.FC = () => {
  const [t, i18n] = useTranslation();
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
      <h1 className="text-3xl font-bold text-gray-100">{t("form.title")}</h1>


      <form onSubmit={handleSubmit} className="bg-gray-800 w-[400px] space-y-4 p-6 rounded-lg shadow-md text-gray-100">
        <FormField
          id="name"
          name="name"
          label={t("form.name")}
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder={t("form.namePlaceholder")}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        <FormField
          id="email"
          name="email"
          label={t("form.email")}
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder={t("form.emailPlaceholder")}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        <FormField
          id="password"
          name="password"
          label={t("form.password")}
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder={t("form.passwordPlaceholder")}
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        <FormField
          id="phone"
          name="phone"
          label={t("form.phone")}
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder={t("form.phonePlaceholder")}
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}

        <div className="flex gap-2">
          <Button
            variant="secondary"
            type="submit"
          >
            {t("form.buttonSubmit")}
          </Button>
          <Button
            variant='ghost'
            type="button"
            onClick={resetForm}
          >
            {t("form.buttonReset")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
