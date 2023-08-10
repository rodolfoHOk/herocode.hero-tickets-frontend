import { ForwardRefRenderFunction, forwardRef } from "react";

interface IInput {
  type: string;
  title: string;
  placeholder: string;
  className?: string;
}

const InputBase: ForwardRefRenderFunction<
  HTMLInputElement & HTMLTextAreaElement,
  IInput
> = ({ placeholder, type, title, className, ...rest }, ref) => {
  if (type === "textarea") {
    return (
      <div className={`mb-4 text-blue ${className}`}>
        <label className="flex flex-col gap-1">
          <span className="font-medium">{title}</span>

          <textarea
            className="w-full px-6 py-[5px] font-medium bg-white rounded-lg border border-teal-400"
            placeholder={placeholder}
            ref={ref}
            rows={3}
            {...rest}
          />
        </label>
      </div>
    );
  }
  return (
    <div className={`mb-4 text-blue ${className}`}>
      <label className="flex flex-col gap-1">
        <span className="font-medium">{title}</span>

        <input
          className="w-full px-6 py-[5px] font-medium bg-white rounded-lg border border-teal-400"
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
      </label>
    </div>
  );
};

export const Input = forwardRef(InputBase);
