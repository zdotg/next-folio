
export default function ExperienceLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <div className="flex flex-col min-h-screen">
          <section className="flex-grow">
            {children}
          </section> 
        </div>  
      </>
    )
}
