import { LoaderFunction } from 'remix'

export const loader: LoaderFunction = async () => {
  return fetch(
    'https://github.com/saullbrandao/saull.com.br/raw/main/resume.pdf'
  )
}
