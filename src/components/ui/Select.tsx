export const Select = () => {
  return <div>
    <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">
      Subject
    </label>
    <div className="mt-3">
      <select
        id="subject"
        name="subject"
        className="block w-full rounded-md border-0 px-3 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
      >
        <option value="">Select a subject</option>
        <option value="general">General Inquiry</option>
        <option value="support">Technical Support</option>
        <option value="sales">Sales Question</option>
        <option value="partnership">Partnership Opportunity</option>
        <option value="other">Other</option>
      </select>
    </div>
  </div>
}