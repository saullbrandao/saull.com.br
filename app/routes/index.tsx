import { FaFolderOpen, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'remix'
import { Footer } from '~/components/Footer'

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-20">
      <h1 className="text-center text-7xl font-bold text-blue">
        Saull Brandão
      </h1>
      <span className="text-3xl text-gray-800 dark:text-gray-200 ">
        Software Engineer
      </span>
      <nav>
        <ul className="flex gap-6 text-gray-800 dark:text-gray-200">
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
          <ListItem>
            <a
              href="https://twitter.com/saullbrandao"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center "
            >
              Twitter
              <FaTwitter className="h-auto w-12" />
            </a>
          </ListItem>
        </ul>
      </nav>
      <Footer />
    </div>
  )
}

interface ListItemProps {
  children: React.ReactNode
}
const ListItem = ({ children }: ListItemProps) => {
  return (
    <li className="transition-all duration-500 ease-in-out hover:scale-110 hover:text-blue">
      {children}
    </li>
  )
}
