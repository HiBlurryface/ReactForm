import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { Input } from "./Input";

type DatePickerProps = {
  name: string;
  label: string;
  placeholder?: string;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export const DatePicker = ({
  name,
  label,
  error,
  placeholder,
  value,
  onChange,
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (
        selectRef.current &&
        selectRef.current.contains(e.target as Node)
      ) {
        return;
      }

      setIsOpen(false);
    };

    document.addEventListener("mousedown", close, true);

    return () => {
      document.removeEventListener("mousedown", close, true);
    };
  }, []);

  return (
    <div ref={selectRef} className="relative">
      <Input
        name={name}
        readOnly
        label={label}
        placeholder={placeholder}
        value={value ?? ""}
        onClick={() => setIsOpen((prev) => !prev)}
        error={error}
      />

      {isOpen && (
        <div className="absolute z-10 bg-white shadow">
          <DayPicker
            mode="single"
            selected={value ? new Date(value) : undefined}
            onSelect={(date) => {
              if (!date) return;

              const formatted = date.toISOString().split("T")[0];

              onChange?.(formatted);
              setIsOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
};