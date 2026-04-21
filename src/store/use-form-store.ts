import { create, type StateCreator } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { devtools } from 'zustand/middleware'

interface IFormData {
    name: string;
    email: string;
}

interface IActions {
    updateField: (field: keyof IFormData, value: string) => void;
    resetForm: () => void;
    submitForm: () => void;
}

interface IInitialState {
    formData: IFormData;
    isSubmitted: boolean;
}

interface IFormState extends IInitialState, IActions { }

const initialState: IInitialState = {
    formData: {
        name: '',
        email: ''
    },
    isSubmitted: false,
}

const formStore: StateCreator<IFormState,
    [['zustand/devtools', unknown], ['zustand/persist', unknown]]
> = (set, get) => ({
    ...initialState,
    updateField: (field: keyof IFormData, value: string) => 
        set((state) => ({ 
            formData: { ...state.formData, [field]: value } 
        }), false, 'updateField'),
    
    resetForm: () => 
        set({ 
            formData: initialState.formData,
            isSubmitted: false 
        }, false, 'resetForm'),
    
    submitForm: () => {
        const { formData } = get();
        console.log('Form submitted:', formData);
        alert(`Form submitted: ${JSON.stringify(formData, null, 2)}`);
        set({ isSubmitted: true }, false, 'submitForm');
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
export const useFormData = () => useFormStore((state) => state.formData)
export const useIsSubmitted = () => useFormStore((state) => state.isSubmitted)
export const updateFormField = (field: keyof IFormData, value: string) => 
    useFormStore.getState().updateField(field, value)
export const resetForm = () => useFormStore.getState().resetForm()
export const submitForm = () => useFormStore.getState().submitForm()
