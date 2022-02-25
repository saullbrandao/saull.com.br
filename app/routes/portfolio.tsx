import { Link, MetaFunction } from 'remix'
import { Footer } from '~/components/Footer'
import { Project } from '~/components/Project'
import projectsList from '../../projects.json'

export const meta: MetaFunction = () => {
  return {
    title: 'Saull Brandão Portfolio',
    description: 'List of projects developed by Saull Brandão.'
  }
}

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center">
      <nav className="sticky top-0 z-10 flex w-full justify-center bg-gray-200/50 p-4 text-black backdrop-blur-md dark:bg-gray-800/70 dark:text-white ">
        <div className="w-5xl flex w-full max-w-5xl justify-center md:justify-between">
          <Link
            to="/"
            className="text-xl font-bold hover:text-blue hover:duration-300 hover:ease-in-out"
          >
            Saull Brandão
          </Link>
        </div>
      </nav>
      <div className="mt-4 flex w-full max-w-5xl flex-col items-center gap-1 lg:gap-8">
        <h1 className="mb-4 text-3xl font-bold text-blue lg:mb-0 lg:self-start">
          Projects
        </h1>
        {projectsList.map((project) => {
          return (
            <Project
              description={project.description}
              repo={project.repo}
              title={project.title}
              url={project.url}
              key={project.id}
              images={project.images}
            />
          )
        })}
        <Footer />
      </div>
    </div>
  )
}
