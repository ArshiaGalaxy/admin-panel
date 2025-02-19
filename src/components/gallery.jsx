import { Link } from "react-router-dom";

function Gallery(){
    return(
        <div>
            <div className="flex flex-wrap items-center gap-4 justify-between">
                <span className="text-3xl text-white font-extrabold">گالری</span>
                <Link to='/add-image/'>
                    <div className="bg-green-500 hover:bg-green-600 ms-auto py-1 px-6 rounded-xl font-bold text-slate-900 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                        </svg>
                        <span>افزودن</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Gallery;