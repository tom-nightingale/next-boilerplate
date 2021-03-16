import Link from 'next/link'

export default function Pagination({currentPage, postsPerPage, allPosts, pagedUrlBase, archive}) {

    // Get the total number of posts
    const totalPosts = allPosts.length;

    // Figure out the total number of pages
    const totalPages = Math.ceil(totalPosts/postsPerPage);

    // Create an array that we can iterate over. Start at one as we rarely have page/0
    const pageLinks = [];
    let i = 1;
    while(i <= totalPages) {
        pageLinks.push(i); i++;
    }

    return (
        <div className="flex items-center justify-center w-full my-8">
            
            <p>Pagination:</p>

            {pageLinks.map((page, i) => {
                return (
                    <>
                    {page === 1 && 
                        <li key={i} className="p-2 mx-2 list-none bg-gray-200 rounded-sm">
                            {
                                currentPage == 1 
                                ? <>Page {page}</>
                                : <Link href={`/${pagedUrlBase}/`}><a>Page {page}</a></Link>
                            }                            
                        </li>
                    }
                    {page !== 1 && 
                        <li key={i} className="p-2 mx-2 list-none bg-gray-200 rounded-sm">
                            {
                                currentPage == page
                                ? <>Page {page}</>
                                : <Link href={`/${pagedUrlBase}/page/${page}`}><a>Page {page}</a></Link>
                            }
                        </li>
                    }
                    </>
                )                
            })}

        </div>
    )   
}