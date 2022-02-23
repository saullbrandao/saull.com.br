import { LoaderFunction } from 'remix'

export const loader: LoaderFunction = async () => {
  const res = await fetch(
    'https://github.com/saullbrandao/saull.com.br/raw/main/resume.pdf'
  )

  // @ts-ignore
  return new Response(res.body, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename=resume.pdf'
    }
  })
}
