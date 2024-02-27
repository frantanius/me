import { forwardRef, useEffect, useRef } from 'react';
import { TbBrandNextjs } from 'react-icons/tb';
import { type SubmitHandler, useForm } from 'react-hook-form';
import useCommandHandlers from '@/components/ui/terminal/useCommandHandlers';
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

    const inputRef = useRef<HTMLInputElement>();
    const { ref, ...rest } = register('input');

    const handleCommand = useCommandHandlers();

    const submitPrompt: SubmitHandler<InputPrompt> = ({ input }): void => {
      handleCommand(index, input);
    };

    useEffect(() => {
      inputRef.current?.focus();
    });

    return (
      <div className="mb-2">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div>
              <span className="text-customGreen">➜ </span>
              <span className="text-accent-1">franz</span>
              <span className="text-gray-200">@</span>
              <span className="text-rose-400">fe&nbsp;</span>
              <span className="text-accent-2">~</span>
            </div>
            <form onSubmit={handleSubmit(submitPrompt)}>
              <input
                type="text"
                id="input"
                {...rest}
                disabled={isActive === false}
                ref={mergeRefs([inputRef, ref, promptRef])}
                autoComplete="off"
                autoCorrect="off"
                className="w-full bg-transparent focus:outline-none"
              />
            </form>
          </div>

          <span className="flex items-center gap-1 text-accent-3">
            <TbBrandNextjs />
            <span className="text-xs">v14.0.4</span>
          </span>
        </div>
        {children}
      </div>
    );
  },
);

export default TerminalPrompt;
