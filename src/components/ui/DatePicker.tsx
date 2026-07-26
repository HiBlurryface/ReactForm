import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { Input } from "./Input";

type DatePickerProps = {
  name: string,
  label: string,
  placeholder?: string,
  error?: string,
}

export const DatePicker = ({
  name, label, error, placeholder
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (selectRef.current && selectRef.current.contains(e.target as Node)) {
        return;
      }

      setIsOpen(false);
    };

    document.addEventListener('mousedown', close, true);

    return () => {
      document.removeEventListener('mousedown', close, true);
    };
  }, []);

  return <div className="">
    <Input
      readOnly
      name={name}
      label={label}
      placeholder={placeholder}
      onClick={() => setIsOpen((prev) => !prev)}
    />
    {isOpen && <div className="absolute bg-white">
      <DayPicker />
    </div>}
  </div>
}