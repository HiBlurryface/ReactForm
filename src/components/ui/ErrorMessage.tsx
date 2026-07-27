type ErrorMessageProps = {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <p className="text-right block text-sm font-medium leading-6 text-red-600">
    {message}
  </p>
}