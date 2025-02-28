import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

function Posts(){
    const [posts, setPosts] = useState([]);
    const [mainPosts, setMainPosts] = useState([]);

    const searchHandle=(e)=>{
        e.preventDefault();
        setPosts(mainPosts.filter(u=>u.title.includes(e.target.value)));
    }

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
            setPosts(res.data.slice(0, 10));
            setMainPosts(res.data.slice(0, 10));
        }).catch(err => {
            console.log(err);
        });
    }, []);

    const removePost=(id)=>{
        MySwal.fire({
            customClass: 'bg-slate-800 text-gray-100 rounded-xl',
            icon: 'warning',
            iconColor: 'rgb(251, 44, 54)',
            text: "آیا مطمئن هستید میخواهید این پست را حذف کنید",
            showCancelButton: true,
            confirmButtonColor: 'rgb(251, 44, 54)',
            confirmButtonText: 'بله',
            cancelButtonText: 'خیر',
            focusCancel: true,
            preConfirm: (()=>{
                axios.delete('https://jsonplaceholder.typicode.com/posts/'+id).then(()=>{
                    setMainPosts(mainPosts.filter(u=>u.id != id));
                    setPosts(mainPosts.filter(u=>u.id != id));
                });
            })
        });
    }


    return(
        <div>
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
                    <input className="w-full placeholder:text-gray-500 h-8 rounded-s-xl text-sm bg-white ps-4 !outline-none" placeholder="پست مورد نظر را جستجو کنید." autoComplete="off" onChange={searchHandle}></input>
                    <button type="submit" className="px-2 bg-green-500 hover:bg-green-600 h-8 rounded-e-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </form>
            </div>
            <div className="mt-4">
                {
                    posts != [] ?
                    <table className="w-full">
                        <tbody className="w-full space-y-2">
                            {
                            posts.map(u => (
                                <tr id={'u-'+u.id} className="text-white text-xs lg:text-sm py-2 px-4 flex bg-slate-800 rounded-lg items-center" key={u.id}>
                                    <td className="size-6 hidden lg:flex justify-center items-center font-mono rounded-full me-4 lg:me-8 bg-slate-900">{u.id}</td>
                                    <td className="">{u.title}</td>
                                    <td className="flex items-center ms-auto gap-2">
                                        <Link to={'/comments/'+ u.id}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-gray-100 hover:text-green-500">
                                                <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
                                                <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
                                            </svg>
                                        </Link>
                                        <Link to={'/update-post/'+ u.id}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-gray-100 hover:text-green-500">
                                                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                                            </svg>
                                        </Link>
                                        <div className="cursor-pointer" onClick={()=>{removePost(u.id)}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-gray-100 hover:text-red-500">
                                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                    :
                    <p className="text-gray-200 animate-pulse ">لطفا چند لحظه صبر کنید.</p>
                }
            </div>
        </div>
    )
}

export default Posts;