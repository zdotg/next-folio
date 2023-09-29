
export default function ExperienceLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <div className="flex flex-col min-h-full">
          <section className="flex-grow">
            {children}
          </section> 
        </div>  
      </>
    )
}
