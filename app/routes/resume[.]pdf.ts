import fs from 'fs'
import { google } from 'googleapis'
import { LoaderFunction } from 'remix'

const drive = google.drive('v3')

export const loader: LoaderFunction = async () => {
  // const auth = new google.auth.GoogleAuth({
  //   keyFile: 'credentials.json',
  //   scopes: 'https://www.googleapis.com/auth/drive.readonly'
  // })

  // google.options({ auth })

  // const fileId = '1IhUePfVCZ9W93sWr9-NG7m3U6jKgBntyuXxpucKkQWI'

  // const res = await drive.files.export(
  //   { fileId, mimeType: 'application/pdf' },
  //   { responseType: 'stream' }
  // )

  // const dest = fs.createWriteStream('resume.pdf')
  // await new Promise((resolve, reject) => {
  //   res.data
  //     .on('error', reject)
  //     .pipe(dest)
  //     .on('error', reject)
  //     .on('finish', resolve)
  // })

  const pdf = await fs.promises.readFile('resume.pdf')

  return new Response(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename=resume.pdf',
      'Content-Length': `${pdf.length}`
    }
  })
}