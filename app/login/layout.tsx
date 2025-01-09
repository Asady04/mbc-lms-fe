'use client'
import CoverImage from '@/assets/BannerLaboratorium.png';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>
        {children}
      </div>
    </section>
  );
}
