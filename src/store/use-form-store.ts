import { create, type StateCreator } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { devtools } from 'zustand/middleware'
import { z } from 'zod'

// Zod schema для валидации формы (только английские буквы)
const formSchema = z.object({
    name: z
        .string()
        .min(2, "Имя должно содержать минимум 2 символа")
        .max(50, "Имя не должно превышать 50 символов")
        .regex(/^[a-zA-Z\s]+$/, "Имя должно содержать только английские буквы"),
    email: z
        .string()
        .email("Введите корректный email адрес"),
    password: z
        .string()
        .min(8, "Пароль должен содержать минимум 8 символов")
        .max(100, "Пароль не должен превышать 100 символов")
        .regex(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/, "Пароль должен содержать только английские буквы, цифры и спецсимволы")
        .regex(/[a-z]/, "Пароль должен содержать хотя бы одну маленькую букву")
        .regex(/[A-Z]/, "Пароль должен содержать хотя бы одну большую букву")
        .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, "Пароль должен содержать хотя бы один спецсимвол"),
    phone: z
        .string()
        .regex(/^\+?\d{1,3}?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/, "Введите корректный номер телефона")
})

type FormSchema = z.infer<typeof formSchema>


interface IFormData {
    name: string;
    email: string;
    password: string;
    phone: string;
}

interface IActions {
    updateField: (field: keyof IFormData, value: string) => void;
    resetForm: () => void;
    submitForm: () => void;
    validateField: (field: keyof IFormData, value: string) => string | null;
    validateForm: () => { isValid: boolean; errors: Partial<Record<keyof IFormData, string>> };
}

interface IInitialState {
    formData: IFormData;
    isSubmitted: boolean;
    errors: Partial<Record<keyof IFormData, string | null>>;
}

interface IFormState extends IInitialState, IActions { }

const initialState: IInitialState = {
    formData: {
        name: '',
        email: '',
        password: '',
        phone: ''
    },
    isSubmitted: false,
    errors: {
        name: null,
        email: null,
        password: null,
        phone: null,
    },
}

const formatPhoneNumber = (value: string): string => {
    const digits = value.replace(/\D/g, '');

    if (digits.length === 0) return '';

    // Если начинается с 7 или 8, используем российский формат
    if (digits[0] === '7' || digits[0] === '8') {
        const cleanDigits = digits[0] === '8' ? '7' + digits.slice(1) : digits;

        if (cleanDigits.length <= 1) return `+${cleanDigits}`;
        if (cleanDigits.length <= 4) return `+${cleanDigits.slice(0, 1)} (${cleanDigits.slice(1)}`;
        if (cleanDigits.length <= 7) return `+${cleanDigits.slice(0, 1)} (${cleanDigits.slice(1, 4)}) ${cleanDigits.slice(4)}`;
        if (cleanDigits.length <= 9) return `+${cleanDigits.slice(0, 1)} (${cleanDigits.slice(1, 4)}) ${cleanDigits.slice(4, 7)}-${cleanDigits.slice(7)}`;

        return `+${cleanDigits.slice(0, 1)} (${cleanDigits.slice(1, 4)}) ${cleanDigits.slice(4, 7)}-${cleanDigits.slice(7, 9)}-${cleanDigits.slice(9, 11)}`;
    }

    // Для других форматов
    return `+${digits}`;
};

const formStore: StateCreator<IFormState,
    [['zustand/devtools', unknown], ['zustand/persist', unknown]]
> = (set, get) => ({
    ...initialState,
    updateField: (field: keyof IFormData, value: string) => {
        let formattedValue = value;

        if (field === 'phone') {
            formattedValue = formatPhoneNumber(value);
        }

        const error = get().validateField(field, formattedValue);
        set((state) => ({
            formData: { ...state.formData, [field]: formattedValue },
            errors: { ...state.errors, [field]: error }
        }), false, 'updateField')
    },

    resetForm: () =>
        set({
            formData: initialState.formData,
            isSubmitted: false,
            errors: initialState.errors
        }, false, 'resetForm'),

    validateField: (field: keyof IFormData, value: string) => {
        try {
            formSchema.shape[field].parse(value);
            return null;
        } catch (error) {
            if (error instanceof z.ZodError) {
                return error.issues[0]?.message || 'Ошибка валидации';
            }
            return 'Ошибка валидации';
        }
    },

    validateForm: () => {
        const { formData } = get();
        try {
            formSchema.parse(formData);
            return { isValid: true, errors: {} };
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errors: Partial<Record<keyof IFormData, string>> = {};
                error.issues.forEach((err: any) => {
                    if (err.path[0]) {
                        errors[err.path[0] as keyof IFormData] = err.message;
                    }
                });
                return { isValid: false, errors };
            }
            return { isValid: false, errors: {} };
        }
    },

    submitForm: () => {
        const { formData, validateForm } = get();
        const validation = validateForm();

        if (!validation.isValid) {
            set({ errors: validation.errors }, false, 'submitForm/validation-error');
            alert('Исправьте ошибки в форме');
            return;
        }

        console.log('Form submitted:', formData);
        alert(`Форма успешно отправлена: ${JSON.stringify(formData, null, 2)}`);
        set({ isSubmitted: true }, false, 'submitForm/success');
    }
})

const useFormStore = create<IFormState>()(
    devtools(
        persist(
            formStore,
            {
                name: 'form-storage',
                storage: createJSONStorage(() => localStorage),
            }
        )
    )
);

// Селекторы для вызова
export const useFormErrors = () => useFormStore((state) => state.errors)
export const useFormData = () => useFormStore((state) => state.formData)
export const useIsSubmitted = () => useFormStore((state) => state.isSubmitted)
export const updateFormField = (field: keyof IFormData, value: string) =>
    useFormStore.getState().updateField(field, value)
export const resetForm = () => useFormStore.getState().resetForm()
export const submitForm = () => useFormStore.getState().submitForm()
