import { forwardRef, type SelectHTMLAttributes } from "react"
import { ErrorMessage } from "./ErrorMessage";

type Option = {
  id: number,
  label: string,
  value: string,
}

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options?: Option[],
  label: string,
  name: string,
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  name,
  label,
  options,
  error,
  ...props
}, ref) => {
  return <div>
    <div className="flex justify-between gap-3">
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      {error !== undefined && <ErrorMessage message={error} />}
    </div>
    <div className="mt-3">
      <select
        ref={ref}
        id={name}
        name={name}
        {...props}
        className="block w-full rounded-md border-0 px-3 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
      >
        <option value="">Wybierz typ</option>
        {options?.map((item) => {
          return <option key={item.id} value={item.value}>{item.label}</option>
        })}
      </select>
    </div>
  </div>
}
)