type Option = {
  id: number,
  label: string,
  value: string,
}

type SelectProps = {
  options?: Option[],
  label: string,
  name: string,
}

export const Select = ({
  name,
  label,
  options,
}: SelectProps) => {
  return <div>
    <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
      {label}
    </label>
    <div className="mt-3">
      <select
        id={name}
        name={name}
        className="block w-full rounded-md border-0 px-3 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
      >
        <option value={0}>Wybierz typ</option>
        {options?.map((item) => {
          return <option key={item.id} value={item.value}>{item.label}</option>
        })}
      </select>
    </div>
  </div>
}