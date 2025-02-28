import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Comments(){
    const params = useParams();
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`).then(res=>{
            setComments(res.data.slice(0, 10));
        }).catch(err => {
            console.log(err);
        });
    }, [params]);

    return(
        <div>
            <div className="flex flex-wrap items-center gap-4 justify-between">
                <span className="text-3xl text-white font-extrabold">کامنت ها</span>
                <Link to={-1} className="px-6 py-1 flex border border-white rounded-lg font-bold text-white">
                    برگشت
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 my-auto ms-2">
                        <path fillRule="evenodd" d="M14.47 2.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H9a5.25 5.25 0 1 0 0 10.5h3a.75.75 0 0 1 0 1.5H9a6.75 6.75 0 0 1 0-13.5h10.19l-4.72-4.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>

                </Link>
            </div>
            <div className="mt-4">
                {
                    comments != [] ?
                    <ul className="w-full space-y-2">
                        {
                        comments.map(u => (
                            <li id={'u-'+u.id} className="text-white text-xs lg:text-sm py-2 px-4 flex flex-wrap bg-slate-800 rounded-lg items-center" key={u.id}>
                                <span className="h-6 w-56 flex justify-center items-center font-mono text-xs rounded-full mx-auto lg:ms-0 lg:me-8 bg-slate-900">{u.email}</span>
                                <span className="text-nowrap mt-2 lg:mt-0 w-full text-center lg:w-fit lg:text-right">{u.name}</span>
                                <span className="text-wrap w-full mt-4 text-right">{u.body}</span>
                            </li>
                        ))
                        }
                    </ul>
                    :
                    <p className="text-gray-200 animate-pulse ">لطفا چند لحظه صبر کنید.</p>
                }
            </div>
        </div>
    )
}

export default Comments;