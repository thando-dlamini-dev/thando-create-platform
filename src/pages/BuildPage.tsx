


const BuildPage = () => {

    // const [ selectedPages, setSelectedPages ] = useState([
    //     {
    //         name: 'Landing Page',
    //         selected: false,
    //     },
    //     {
    //         name: 'Login Page',
    //         selected: false,
    //     },
    //     {
    //         name: 'Dashboard Page',
    //         selected: false,
    //     },
    //     {
    //         name: 'Blog Page',
    //         selected: false,
    //     },
    //     {
    //         name: 'About Page',
    //         selected: false,
    //     }
    // ])

    // interface Page {
    //     name: string,
    //     selected: boolean
    // }

    // const pages: [Page] = [
    //     {
    //         name: 'Landing Page',
    //         selected: false,
    //     },
    //     {
    //         name: 'Login Page',
    //         selected: false,
    //     },
    //     {
    //         name: 'Dashboard Page',
    //         selected: false,
    //     },
    //     {
    //         name: 'Blog Page',
    //         selected: false,
    //     },
    //     {
    //         name: 'About Page',
    //         selected: false,
    //     }
    // ]

    return (
        <>
            <section className='caret-transparent cursor-default overflow-hidden relative min-h-screen flex justify-between items-center bg-background pt-30'>
                <div className='w-screen min-h-screen flex justify-between items-center'>
                    {/*<div className='w-full pl-4 h-20 border-0 border-lime-300 m-5 flex items-center justify-start gap-3'>*/}
                    {/*    {selectedPages.map((selectedPage) => <div key={selectedPage.name}*/}
                    {/*          className='text-center relative px-3 py-2 rounded-xl text-text flex items-center justify-between gap-2 border-lime-300 border-2 hover:scale-105 transition-all ease-in-out'>*/}
                    {/*        {selectedPage.name}*/}
                    {/*        <CirclePlusIcon onClick={() => setSelectedPages(selectedPages.filter(p => p.name !== selectedPage.name))} className='cursor-pointer rotate-45 hover:text-red-400 transition-all duration-300 ease-in-out' />*/}
                    {/*    </div>)}*/}
                    {/*</div>*/}

                    <div className='w-4/5 h-screen '></div>
                    <div className='relative w-1/5 h-screen border-l-1 border-neutral-500 flex flex-col justify-start items-start p-5'>
                        <div className='w-full h-20 border-0 rounded-2xl bg-neutral-900 border-gray-500 flex justify-center items-center'>
                            <h1 className='text-2xl font-mono fot-bold'>
                                Full-Stack Website
                            </h1>
                        </div>
                        <div className='w-full h-20 border-0 border-gray-500 flex justify-start items-center'>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BuildPage;