import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site';

export const alt = `${siteConfig.name} | ${siteConfig.descriptor}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const dynamic = 'force-static';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#F8F5F0',
          color: '#242424',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', right: -120, top: -120, width: 520, height: 520, borderRadius: 9999, background: 'rgba(235,119,119,0.25)', display: 'flex' }} />
        <div style={{ position: 'absolute', right: 160, bottom: -160, width: 380, height: 380, borderRadius: 9999, background: 'rgba(217,200,184,0.6)', display: 'flex' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div style={{ width: 88, height: 88, background: '#EB7777', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 56, fontWeight: 600 }}>A</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: 8 }}>{siteConfig.name}</div>
            <div style={{ fontSize: 22, letterSpacing: 6, textTransform: 'uppercase', color: '#EB7777' }}>{siteConfig.descriptor}</div>
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 72, fontWeight: 600, marginTop: 64, lineHeight: 1.1 }}>Your Business.</div>
        <div style={{ display: 'flex', fontSize: 72, fontWeight: 600, color: '#EB7777', lineHeight: 1.1 }}>Our Commitment.</div>
        <div style={{ display: 'flex', fontSize: 28, marginTop: 36, color: 'rgba(36,36,36,0.7)' }}>
          Virtual Assistance · Graphic Design · Web Development · Social Media · Digital Solutions
        </div>
      </div>
    ),
    size,
  );
}
