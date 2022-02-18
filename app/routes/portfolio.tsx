import { Footer } from '~/components/Footer'
import { Project } from '~/components/Project'
import projectsList from '../../projects.json'

export default function Portfolio() {
  return (
    <div className="flex w-full flex-col items-center justify-center dark:bg-black">
      <nav className="sticky top-0 z-10 flex w-full justify-center bg-gray-200/50 p-4 text-black backdrop-blur-md dark:bg-gray-800/70 dark:text-white ">
        <div className="w-5xl flex w-full max-w-5xl justify-between">
          <a className="text-xl font-bold hover:text-blue" href="/">
            Saull Brandão
          </a>
        </div>
      </nav>
      <div className="mt-4 flex max-w-5xl flex-col items-center gap-12">
        <h1 className="self-start text-3xl font-bold text-blue">Projects</h1>
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
