import { LoaderFunction } from 'remix'
import fs from 'fs'

export const loader: LoaderFunction = async () => {
  const pdf = fs.readFileSync('resume.pdf')

  return new Response(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename=resume.pdf'
    }
  })
}
