export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo centré avec lueur */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#B0FC51]/15 rounded-xl blur-md"></div>
              <img src="/Logo_Light.png" alt="VolaNow" className="relative h-10 w-auto" />
            </div>
          </div>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
            La solution pour votre quotidien
          </p>
        </div>

        {/* Ligne avec point vert */}
        <div className="relative h-[1px] bg-gray-200 mb-8">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#B0FC51] rounded-full"></div>
        </div>

        {/* Copyright et liens */}
        <div className="flex items-center justify-center gap-4 text-sm">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#B0FC51]/10 rounded-lg">
            <span className="text-gray-600">&copy; {currentYear} VolaNow</span>
          </div>
          <span className="w-1.5 h-1.5 bg-[#B0FC51] rounded-full"></span>
          <div className="flex items-center gap-4 text-gray-600">
            <a href="/conditions" className="hover:text-[#B0FC51] transition-colors duration-300">Confidentialité</a>
            <span className="w-px h-4 bg-gray-300"></span>
            <a href="/privacy" className="hover:text-[#B0FC51] transition-colors duration-300">Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}