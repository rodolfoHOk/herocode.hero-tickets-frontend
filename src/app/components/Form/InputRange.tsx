import { ForwardRefRenderFunction, forwardRef } from "react";

interface IInput {
  title: string;
  className?: string;
}

const InputRangeBase: ForwardRefRenderFunction<
  HTMLInputElement & HTMLTextAreaElement,
  IInput
> = ({ title, className, ...rest }, ref) => {
  return (
    <div className={`mb-4 text-blue ${className}`}>
      <label className="flex flex-col gap-1">
        <span className="font-medium">{title}</span>

        <input
          className="w-full px-6 py-[5px] font-medium bg-white rounded-lg border border-teal-400"
          type="range"
          min={0}
          max={100}
          ref={ref}
          {...rest}
        />
      </label>
    </div>
  );
};

export const InputRange = forwardRef(InputRangeBase);
