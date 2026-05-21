export default function Footer() {
  return (
    <footer className="py-8 md:py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-[#F2F2F4]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-[#B0FC51] font-bold text-lg md:text-xl">VolaNow</div>
        <p className="text-gray-400 text-sm md:text-base">&copy; {new Date().getFullYear()} VolaNow. All rights reserved.</p>
      </div>
    </footer>
  );
}