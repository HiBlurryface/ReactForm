import { forwardRef, type TextareaHTMLAttributes } from "react"

type MessageProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string,
  label: string,
  placeholder: string,
}

export const TextArea = forwardRef<HTMLTextAreaElement, MessageProps>(({
  name,
  label,
  placeholder,
  ...props
}, ref) => {
  return <div>
    <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
      {label}
    </label>
    <div className="mt-3">
      <textarea
        ref={ref}
        name={name}
        id={name}
        {...props}
        rows={6}
        className="block w-full rounded-md border-0 px-3 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
    </div>
  </div>
}
)