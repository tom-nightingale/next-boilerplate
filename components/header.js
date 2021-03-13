import Container from './container'
import Link from 'next/link'
import FancyLink from '../components/fancyLink'

export default function Header({navItems}) {
    return (

        <header>
                      
            <Container>
                {navItems &&
                  <ul>
                    {navItems.map((item, i) => {
                      return (
                        <div key={i}>
                          {!item.parent && 
                            <li>
                              <Link href={`/${encodeURIComponent(item.slug)}`}>
                                <a>{item.pageTitle}</a>
                              </Link>

                              {item.children && 
                                <ul className="pl-4 bg-gray-200">
                                  {item.children?.map((child, i) => {
                                    return (
                                      <Link key={child.slug} href={`/${encodeURIComponent(child.slug)}`}>
                                        <a>{child.pageTitle}</a>
                                      </Link>
                                    )
                                  })}
                                </ul>
                              }

                            </li>
                          }
                        </div>
                      )
                    })}
                    <li>
                      <Link href="/posts">
                        <a>Latest News</a>
                      </Link>
                    </li>
                  </ul>
                }

                <FancyLink destination="/" a11yText="Navigate to homepage" extraClasses="bg-red-500" label="Home" />
                
            </Container>
            
        </header>
    )
}

