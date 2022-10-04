export default function Container({ children }) {
  return(
    <div className="px-6 max-w-[2560px] mx-auto w-full md:px-8">
      {children}
    </div>
  )
}