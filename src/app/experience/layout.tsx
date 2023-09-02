import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ExperienceLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <Header />
            <body>{children}</body>
        <Footer />
      </>
    )
  }