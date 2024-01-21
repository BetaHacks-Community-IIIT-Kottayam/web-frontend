import { BResponsePopupProps } from '../../types/props.types';

const ResponsePopup = (props:BResponsePopupProps) => {
  const isError = props.type === 'error';

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" id="my-modal">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div
          className={`inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ${
            isError ? 'border-red-500' : 'border-green-500'
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
              {isError ? (
                <svg
                  className="h-6 w-6 text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-green-600"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              )}
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                {isError ? 'Error' : 'Successful'}
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  {isError ? props.text?.message : 'Redirecting.....'}
                </p>
              </div>
            </div>
          </div>
          {!isError && (
            <div className="mt-5 sm:mt-6">
              {/* Additional success content can be added here */}
            </div>
          )}
          {isError &&<div className="mt-5 sm:mt-6">
            <button
              className={`inline-flex justify-center rounded-md border border-transparent shadow-sm px-8 py-2 ${
                isError ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-green-600 text-white hover:bg-green-700'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isError ? 'focus:ring-red-500' : 'focus:ring-green-500'
              } sm:text-sm`}
              onClick={props.onClose}
            >
              OK
            </button>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default ResponsePopup;
