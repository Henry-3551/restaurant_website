const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/5 bg-[#050806]/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold text-white">FreshBite Kitchen</p>
          <p>Lagos · Nigeria</p>
        </div>
        <p className="text-xs text-white/50">© {new Date().getFullYear()} FreshBite Kitchen. Crafted with ❤️ by Henrify.dev.</p>
      </div>
    </footer>
  )
}

export default Footer
