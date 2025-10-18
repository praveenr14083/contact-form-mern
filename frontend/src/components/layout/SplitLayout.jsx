export default function SplitLayout({ imageSrc, children }) {
  return (
    <div className="flex min-h-screen">
      {/* Left side */}
      <div className="hidden md:flex w-1/2 items-center justify-center">
        <img src={imageSrc} alt="Illustration" className="w-3/4" />
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        {children}
      </div>
    </div>
  );
}
