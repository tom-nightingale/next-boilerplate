import FancyLink from '@/components/fancyLink'
import Container from '@/components/container'

export default function Header() {
  return (
    <header className="py-4 mb-4 bg-gray-200 md:mb-6 xl:mb-8">
      <Container>
        <div className="flex flex-wrap">
          <FancyLink destination="/" a11yText="Navigate to the home page" label="Next x Tailwind x Motion" extraClasses="mb-1 md:mb-0" />

          <nav className="flex w-full ml-auto space-x-3 text-sm md:text-base md:w-auto">
            <FancyLink destination="/" a11yText="Navigate to the home page" label="Home" />

            <FancyLink destination="/about" a11yText="Navigate to the about page" label="About" />
          </nav>
        </div>
      </Container>
    </header>
  )
}