import { useEffect, useState } from 'react';

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
 value: string | number;
 debounceTime?: number;
 onChange: (val: string | number) => void;
}

export const InputDebounced = ({ value: initialValue, debounceTime = 300, onChange, ...props }: Props) => {
 const [value, setValue] = useState(initialValue);

 // setValue if any initialValue changes
 useEffect(() => {
   setValue(initialValue);
 }, [initialValue]);

 // debounce onChange — triggered on every keypress
 useEffect(() => {
   const timeout = setTimeout(() => {
     onChange(value);
   }, debounceTime);

   return () => {
     clearTimeout(timeout);
   };
 }, [value, debounceTime, onChange]);

 return <input {...props} value={value} onChange={(e) => setValue(e.target.value)} />;
};