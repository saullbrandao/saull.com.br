import { google } from 'googleapis'
import { LoaderFunction } from 'remix'
import MemoryStream from 'memorystream'

const drive = google.drive('v3')

export const loader: LoaderFunction = async () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: __dirname + '../../credentials.json',
    scopes: 'https://www.googleapis.com/auth/drive.readonly'
  })

  google.options({ auth })

  const fileId = '1IhUePfVCZ9W93sWr9-NG7m3U6jKgBntyuXxpucKkQWI'

  const res = await drive.files.export(
    { fileId, mimeType: 'application/pdf' },
    { responseType: 'stream' }
  )

  const pdf = new MemoryStream()

  await new Promise((resolve, reject) => {
    res.data
      .on('error', reject)
      .pipe(pdf)
      .on('error', reject)
      .on('finish', resolve)
  })

  // @ts-ignore
  return new Response(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename=resume.pdf'
    }
  })
}
