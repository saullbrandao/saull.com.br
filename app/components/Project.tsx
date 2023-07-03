import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { Badge } from './Badge'

interface ProjectProps {
  project: {
    title: string
    url: string
    repo: string
    description: string[]
    images: string[]
    technologies: string[]
  }
}

export const Project = ({ project }: ProjectProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const onImageLoad = () => {
    setIsImageLoaded(true)
  }

  // Fix for the bug where the image doesn't trigger the onLoad function when it finish loading
  const imgRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      onImageLoad()
    }
  }, [])

  const { description, images, repo, technologies, title, url } = project

  return (
    <div className="flex w-full flex-col gap-6 border border-blue p-9 lg:rounded-xl">
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="flex items-center justify-center gap-6 text-2xl font-bold text-black dark:text-white"
      >
        <h2>{title}</h2>
        <a
          href={url || repo}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 hover:text-blue hover:duration-500 hover:ease-in-out"
          aria-label={`Visit ${title} website`}
        >
          <FaExternalLinkAlt />
        </a>
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 hover:text-blue hover:duration-500 hover:ease-in-out"
          aria-label={`${title} github repository`}
        >
          <FaGithub />
        </a>
      </motion.div>
      <ul className="flex list-inside list-[circle] justify-center gap-2">
        {technologies.map((el, index) => (
          <Badge index={index} element={el} />
        ))}
      </ul>
      <div
        className={`${
          isImageLoaded ? 'animate-none' : 'animate-pulse'
        } bg-gradient-to-r from-[#abacae] via-[#7e8087] to-[#abacae] sm:aspect-h-8 sm:aspect-w-16`}
      >
        <img
          className={`hidden sm:block ${
            isImageLoaded
              ? 'opacity-100 transition-opacity duration-1000'
              : 'opacity-0'
          }`}
          src={images[0]}
          onLoad={onImageLoad}
          loading="lazy"
          alt="demo"
          ref={imgRef}
          decoding="async"
        />
      </div>
      <div className="leading-8 text-gray-800 dark:text-gray-200">
        <ul className="list-inside list-[circle]">
          {description.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
