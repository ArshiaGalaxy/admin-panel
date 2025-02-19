import { Link } from "react-router-dom";

function Posts(){
    return(
        <div className="flex flex-wrap items-center gap-4 justify-between">
            <span className="text-3xl text-white font-extrabold">پست ها</span>
            <Link to='/update-post/' className="lg:order-2">
                <div className="bg-green-500 hover:bg-green-600 ms-auto py-1 px-6 rounded-xl font-bold text-slate-900 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>
                    <span>افزودن</span>
                </div>
            </Link>
            <form className="w-full lg:w-80 lg:ms-auto lg:order-1 flex items-center">
                <input className="w-full placeholder:text-gray-500 h-8 rounded-s-xl text-sm bg-white ps-4 !outline-none" placeholder="پست مورد نظر را جستجو کنید." autoComplete="off"></input>
                <button type="submit" className="px-2 bg-green-500 hover:bg-green-600 h-8 rounded-e-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg>
                </button>
            </form>
        </div>
    )
}

export default Posts;