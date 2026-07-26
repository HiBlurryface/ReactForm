export const Footer = () => {
  return <div className="mt-12 pt-12 border-t border-gray-200">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      <div className="text-center">
        <div className="flex justify-center">
          <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-lg">
            <svg className="w-6 h-6 text-cyan-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <h3 className="mt-3 text-lg font-medium text-gray-900">Email</h3>
        <p className="mt-3 text-sm text-gray-600">hello@company.com</p>
      </div>

      <div className="text-center">
        <div className="flex justify-center">
          <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-lg">
            <svg className="w-6 h-6 text-cyan-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
        </div>
        <h3 className="mt-3 text-lg font-medium text-gray-900">Phone</h3>
        <p className="mt-3 text-sm text-gray-600">+1 (555) 123-4567</p>
      </div>

      <div className="text-center">
        <div className="flex justify-center">
          <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-lg">
            <svg className="w-6 h-6 text-cyan-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>
        <h3 className="mt-3 text-lg font-medium text-gray-900">Office</h3>
        <p className="mt-3 text-sm text-gray-600">123 Business Ave<br />Suite 100<br />City, ST 12345</p>
      </div>
    </div>
  </div>
}