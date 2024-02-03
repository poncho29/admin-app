import { InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement>;

type CustomProps = {
  label: string;
}

type Props = InputProps & CustomProps;

export const InputCheck = ({ label, ...props }: Props) => {
  return (
    <>
      <label
        htmlFor={props.id}
        className={`
          w-24 flex items-center justify-center gap-1 font-medium p-2 border-2 border-indigo-800 rounded-xl cursor-pointer
          ${props.checked && 'bg-indigo-600 text-white'}
        `}
      >
        <input hidden type="radio" {...props} />
        {label}
      </label>
    </>
  );
};
