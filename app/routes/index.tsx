import { FaFolderOpen, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Footer } from '~/components/Footer'

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-20 bg-white dark:bg-black">
      <h1 className="text-center text-7xl font-bold text-blue">
        Saull Brandão
      </h1>
      <span className="text-3xl text-gray-800 dark:text-gray-200 ">
        Software Engineer
      </span>
      <nav>
        <ul className="flex gap-6 text-gray-800 dark:text-gray-200">
          <li>
            <a
              href="portfolio"
              className="flex flex-col items-center hover:text-blue"
            >
              Portfolio
              <FaFolderOpen className="h-auto w-12" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/saullbrandao"
              target="_blank"
              className="flex flex-col items-center hover:text-blue"
            >
              Github
              <FaGithub className="h-auto w-12" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/saullbrandao/"
              target="_blank"
              className="flex flex-col items-center hover:text-blue"
            >
              Linkedin
              <FaLinkedin className="h-auto w-12" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/saullbrandao"
              target="_blank"
              className="flex flex-col items-center hover:text-blue"
            >
              Twitter
              <FaTwitter className="h-auto w-12" />
            </a>
          </li>
        </ul>
      </nav>
      <Footer />
    </div>
  )
}
