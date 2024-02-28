import { create } from 'zustand'

type State = {
  formData: {
    name: string;
    email: string;
    message: string;
  };
}

type Action = {
  setFormData: (formData: Partial<State['formData']>) => void;
}

const useStore = create<State & Action>((set) => ({
  formData: {
    name: '',
    email: '',
    message: '',
  },
  setFormData: (formData) => set((state) => ({
    formData: {
      ...state.formData,
      ...formData,
    },
  })),
}));

export default useStore;
