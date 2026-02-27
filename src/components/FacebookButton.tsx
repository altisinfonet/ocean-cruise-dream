const FacebookButton = () => (
  <a
    href="https://www.facebook.com/profile.php?id=100063974624755"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Follow us on Facebook"
    className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center gap-2 bg-[#1877F2] text-white shadow-lg hover:bg-[#1560c0] transition-all duration-200 group"
    style={{ borderRadius: "8px 0 0 8px", padding: "10px 12px" }}
  >
    {/* Facebook SVG icon */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 flex-shrink-0">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
    <span className="text-xs font-semibold whitespace-nowrap max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300">
      Follow Us
    </span>
  </a>
);

export default FacebookButton;
