import TerminalHelp from '@/app/ui/home/terminal/terminalHelp';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';
import { Prompt } from '@/app/types/terminal';

interface TerminalState {
  prompts: Prompt[];
  addPrompt: () => void;
  updatePrompt: (index: number, prompt: Prompt) => void;
  clearPrompts: () => void;
}

const defaultPrompt: Prompt = {
  isActive: true,
  inputValue: '',
  children: null,
};

const useTerminalStore = createWithEqualityFn<TerminalState>()(
  (set, get) => ({
    prompts: [
      {
        ...defaultPrompt,
        isActive: false,
        children: <TerminalHelp />,
      },
      defaultPrompt,
    ],
    addPrompt: () => {
      set((state) => ({ prompts: [...state.prompts, defaultPrompt] }));
    },
    updatePrompt: (index, prompt) => {
      set((state) => {
        const prompts = [...state.prompts];
        prompts[index] = { ...prompts[index], ...prompt };
        return { prompts };
      });
    },
    clearPrompts: () => {
      set({ prompts: [defaultPrompt] });
    },
  }),
  shallow,
);

export default useTerminalStore;
