export const TextArea = () => {
  return <div>
    <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
      Message
    </label>
    <div className="mt-3">
      <textarea
        name="message"
        id="message"
        rows={6}
        className="block w-full rounded-md border-0 px-3 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
        placeholder="Tell us more about your inquiry..."
      />
    </div>
  </div>
}