import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

interface ProjectProps {
  title: string
  url: string
  repo: string
  description: {
    enUS: string[]
  }
  images: {
    light: string
    dark: string
  }
}

export const Project = ({
  title,
  url,
  description,
  repo,
  images
}: ProjectProps) => {
  return (
    <div className="flex w-full flex-col gap-6 bg-gray-200 p-9 dark:bg-gray-800 lg:rounded-xl">
      <div className="flex items-center justify-center gap-6 text-2xl font-bold text-black dark:text-white">
        <h2>{title}</h2>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue"
        >
          <FaExternalLinkAlt />
        </a>
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue"
          aria-label="Github Repository"
        >
          <FaGithub />
        </a>
      </div>
      <img
        className="hidden sm:block"
        src={images.light}
        alt="demo"
        width={1920}
        height={930}
      />
      <ul className="list-inside list-[circle] leading-8 text-gray-800 dark:text-gray-200">
        {description['enUS'].map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  )
}