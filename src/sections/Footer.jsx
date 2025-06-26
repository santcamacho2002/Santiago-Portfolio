

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white border-t border-zinc-700 py-6 mt-20">
  <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center gap-6 px-5">

    <div className=" text-gray-400">
      © {new Date().getFullYear()} Santiago Camacho. All rights reserved.
    </div>
    
  </div>
</footer>

  );
};

export default Footer;