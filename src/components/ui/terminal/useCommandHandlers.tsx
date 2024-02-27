import TerminalContact from '@/components/ui/terminal/terminalContact';
import TerminalEducations from '@/components/ui/terminal/terminalEducations';
import TerminalError from '@/components/ui/terminal/terminalError';
import TerminalExperience from '@/components/ui/terminal/terminalExperience';
import TerminalHelp from '@/components/ui/terminal/terminalHelp';
import TerminalSkills from '@/components/ui/terminal/terminalSkills';
import TerminalSummary from '@/components/ui/terminal/terminalSummary';
import useTerminalStore from '@/components/ui/terminal/terminal-store';

type CommandHandlers = (index: number, input: string) => void;

const useCommandHandlers = (): CommandHandlers => {
  const [addPrompt, updatePrompt, clearPrompts] = useTerminalStore((state) => [
    state.addPrompt,
    state.updatePrompt,
    state.clearPrompts,
  ]);

  const handle: CommandHandlers = (index, input) => {
    const [command, option, ...args] = input.split(' ');

    if (command === 'fe') {
      if (
        option === '' ||
        option === '--help' ||
        option === '-h' ||
        option === undefined
      ) {
        updatePrompt(index, {
          children: <TerminalHelp />,
        });
      } else if (option === 'summary') {
        updatePrompt(index, {
          children: <TerminalSummary />,
        });
      } else if (option === 'skills') {
        updatePrompt(index, {
          children: <TerminalSkills />,
        });
      } else if (option === 'experience') {
        updatePrompt(index, {
          children: <TerminalExperience />,
        });
      } else if (option === 'educations') {
        updatePrompt(index, {
          children: <TerminalEducations />,
        });
      } else if (option === 'contact') {
        updatePrompt(index, {
          children: <TerminalContact />,
        });
      } else {
        updatePrompt(index, {
          children: <TerminalError option={option} />,
        });
      }
    } else if (input === '') {
      updatePrompt(index, {
        children: null,
      });
    } else if (input === 'clear') {
      clearPrompts();
      return;
    } else {
      updatePrompt(index, {
        children: <TerminalError command={command} />,
      });
    }

    updatePrompt(index, {
      isActive: false,
      inputValue: input,
    });
    addPrompt();
  };

  return handle;
};

export default useCommandHandlers;
