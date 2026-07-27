import { forwardRef, type InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string,
  label: string,
  error?: string | undefined,
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  name,
  label,
  error,
  ...props
}, ref) => {

  return <div>
    <div className="flex justify-between gap-3">
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      {error !== undefined && <p className="block text-sm font-medium leading-6 text-red-600">
        {error}
      </p>}
    </div>
    <div className="mt-3">
      <input
        className="block w-full rounded-md border-0 px-3 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
        ref={ref}
        id={name}
        name={name}
        {...props}
      />
    </div>
  </div>
}
);

Input.displayName = 'Input';