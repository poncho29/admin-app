import { HTMLAttributes } from "react";

type SpanProps = HTMLAttributes<HTMLSpanElement>;

export const SpanLink = ({ ...props }: SpanProps) => {
  return (
    <span
      {...props}
      className="block text-sm text-center font-semibold leading-6 mt-4 cursor-pointer hover:underline hover:text-indigo-500"
    >
      {props.children}
    </span>
  );
};
