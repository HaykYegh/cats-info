const Spinner = () => (
  <svg
    className="animate-spin h-5 w-5 text-white-500"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 01.33-1.77l.044-.23A10 10 0 1112 22v-2a8 8 0 10-8-8z"
    ></path>
  </svg>
);

export default Spinner;
