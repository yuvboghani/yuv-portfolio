"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "motion/react"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Fun", path: "/fun" },
  { name: "Contact", path: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <div className="fixed top-0 left-0 w-full z-[100] pointer-events-none p-6 flex justify-end items-start">


      <nav className="pointer-events-auto">
        <ul className="flex items-center gap-1 bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-full p-2 px-4 shadow-2xl">
          {navItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <li key={item.path}>
                <Link href={item.path} className="relative px-4 py-2 block">
                  <span
                    className={`text-sm font-space-grotesk font-medium transition-colors duration-200 ${isActive ? "text-white" : "text-neutral-400 hover:text-[#42B0D5]"}`}
                  >
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#42B0D5]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
