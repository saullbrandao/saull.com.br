import { LoaderFunction } from 'remix'

export const loader: LoaderFunction = async () => {
  try {
    const res = await fetch(
      'https://github.com/saullbrandao/saull.com.br/raw/main/cv.pdf'
    )

    // @ts-ignore
    return new Response(res.body, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename=resume.pdf'
      }
    })
  } catch {
    throw new Response('Error loading resume. Try again later', { status: 400 })
  }
}
