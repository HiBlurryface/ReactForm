import classNames from "classnames";
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  loading?: boolean,
}

export const Button = ({
  type = 'button',
  children,
  className,
  loading = false,
  ...props
}: ButtonProps) => {
  return <button
    type={type}
    {...props}
    disabled={loading}
    className={classNames('w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-700 transition-colors duration-200', className, {
      'opacity-50': loading
    })}
  >
    {children}
  </button>
}