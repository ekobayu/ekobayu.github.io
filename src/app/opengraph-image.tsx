import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Eko Bayu'
export const size = {
  width: 1200,
  height: 630
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        About Eko Bayu
      </div>
    )
  )
}
