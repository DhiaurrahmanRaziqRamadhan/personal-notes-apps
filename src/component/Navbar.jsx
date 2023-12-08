const Navbar = ({darkMode, handleThemeSwitch}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <header className='w-full border-b-[1px] border-slate-500 text-black dark:text-white backdrop-blur-xl fixed top-0 left-0'>
      <div className='flex items-center justify-between p-4 xl:w-[1000px] mx-auto'>
        <div className='text-2xl font-bold cursor-pointer' onClick={scrollToTop}>
          <p>Notes Apps</p>
        </div>
        <button onClick={handleThemeSwitch} aria-label="dark-mode">
          {darkMode? <i className="fa-regular fa-sun fa-xl"></i> : <i className="fa-solid fa-moon fa-xl cursor-pointer"></i>}
        </button>
      </div>
    </header>
  )
}

export default Navbar
