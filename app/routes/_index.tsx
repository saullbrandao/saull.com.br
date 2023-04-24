import { Link } from '@remix-run/react'
import { motion } from 'framer-motion'
import {
  FaAddressCard,
  FaFolderOpen,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa'
import { Footer } from '~/components/Footer'

export default function Index() {
  return (
    <main className="flex min-h-screen justify-center">
      <div className="flex flex-col items-center justify-center  gap-20">
        <h1 className="text-center text-7xl font-bold text-blue">
          Saull Brandão
        </h1>
        <div className="flex flex-col items-center gap-4">
          <span className="text-4xl text-gray-800 dark:text-gray-200 ">
            Fullstack Developer
          </span>
          <span className="text-3xl text-gray-800 dark:text-gray-200 ">
            Java | Spring | Typescript | Angular
          </span>
        </div>
        <nav>
          <motion.ul
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.75 }}
            className="flex gap-6 text-gray-800 dark:text-gray-200"
          >
            <ListItem>
              <Link
                to="portfolio"
                prefetch="intent"
                className="flex flex-col items-center"
              >
                Portfolio
                <FaFolderOpen className="h-auto w-12" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="resume.pdf"
                target="_blank"
                className="flex flex-col items-center"
              >
                Resume
                <FaAddressCard className="h-auto w-12" />
              </Link>
            </ListItem>
            <ListItem>
              <a
                href="https://github.com/saullbrandao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center "
              >
                Github
                <FaGithub className="h-auto w-12" />
              </a>
            </ListItem>
            <ListItem>
              <a
                href="https://www.linkedin.com/in/saullbrandao/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center "
              >
                Linkedin
                <FaLinkedin className="h-auto w-12" />
              </a>
            </ListItem>
          </motion.ul>
        </nav>
        <Footer />
      </div>
    </main>
  )
}

interface ListItemProps {
  children: React.ReactNode
}
const ListItem = ({ children }: ListItemProps) => {
  return (
    <li className="hover:scale-110 hover:text-blue hover:delay-75 hover:duration-500 hover:ease-in-out dark:bg-black">
      {children}
    </li>
  )
}
