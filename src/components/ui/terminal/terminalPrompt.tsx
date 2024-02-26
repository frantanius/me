import { forwardRef } from 'react';
import { TbBrandNextjs } from 'react-icons/tb';
import { type SubmitHandler, useForm } from 'react-hook-form';
import useCommandHandlers from '@/hooks/useCommandHandlers';
import { mergeRefs } from 'react-merge-refs';
import { Prompt } from '@/types/terminal';

interface InputPrompt {
  input: string;
}

const TerminalPrompt = forwardRef<HTMLInputElement, Prompt & { index: number }>(
  function TerminalPrompt(
    { children, isActive, inputValue, index },
    promptRef,
  ): JSX.Element {
    const { register, handleSubmit } = useForm<InputPrompt>({
      defaultValues: { input: inputValue },
    });

    const { ref, ...rest } = register('input');

    const handleCommand = useCommandHandlers();

    const submitPrompt: SubmitHandler<InputPrompt> = ({ input }): void => {
      handleCommand(index, input);
    };

    return (
      <div className="mb-2" data-testid="terminal-prompt">
        <div className="flex justify-between">
          <div className="flex">
            <span className="text-indigo-400">&nbsp;</span>
            <span className="text-accent-1">franz</span>
            <span className="text-gray-200">@</span>
            <span className="text-rose-400">fe&nbsp;</span>
            <span className="text-accent-2">~</span>
          </div>
          <span
            data-testid="terminal-next-ver"
            className="flex items-center gap-1 text-accent-3"
          >
            <TbBrandNextjs />
            <span>v14.0.4</span>
          </span>
        </div>
        <form onSubmit={handleSubmit(submitPrompt)}>
          <input
            data-testid="terminal-input"
            type="text"
            id="input"
            {...rest}
            disabled={isActive === false}
            ref={mergeRefs([ref, promptRef])}
            autoComplete="off"
            autoCorrect="off"
            className="w-full bg-transparent focus:outline-none"
          />
        </form>
        {children}
      </div>
    );
  },
);

export default TerminalPrompt;