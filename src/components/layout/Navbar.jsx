
import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Projects",
    "Skills",
    "About",
    "Contact",
  ];

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 w-full px-4">
        <div className="glass-card mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full px-6 py-4">

          <a href="#" className="text-xl font-black tracking-wide">
            Vaibhav
            <span className="text-cyan-400"> Mahajan</span>
          </a>

          {/* Desktop */}

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-slate-300 transition hover:text-cyan-300"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="primary-btn hidden md:inline-flex !px-5 !py-2 text-sm"
          >
            Let's Connect
          </a>

          {/* Mobile */}

          <button
            onClick={() => setOpen(true)}
            className="text-3xl md:hidden"
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-[#020617]/90 backdrop-blur-2xl"
          >
            <div className="flex justify-end p-6">

              <button
                onClick={() => setOpen(false)}
                className="text-4xl"
              >
                <HiOutlineX />
              </button>

            </div>

            <motion.div
              initial={{ y: 60 }}
              animate={{ y: 0 }}
              exit={{ y: 60 }}
              transition={{ duration: .35 }}
              className="mt-10 flex flex-col items-center"
            >

              <h2 className="text-5xl font-black">
                Vaibhav
                <span className="text-cyan-400">.</span>
              </h2>

              <div className="mt-14 flex flex-col gap-8 text-center">

                {navLinks.map((item) => (

                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="text-3xl font-bold text-slate-300 transition hover:text-cyan-300"
                  >
                    {item}
                  </a>

                ))}

              </div>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="primary-btn mt-14"
              >
                Let's Connect
              </a>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}

export default Navbar;