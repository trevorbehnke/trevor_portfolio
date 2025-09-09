import { ImageResponse } from 'next/og'
import { site } from '@/data/site'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: 64,
          background: '#0D9488',
          color: 'white',
        }}
      >
        <div style={{ fontSize: 48, fontWeight: 700 }}>{site.name}</div>
        <div style={{ fontSize: 28, marginTop: 8 }}>{site.title}</div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
