import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);


function Users(){
    const [users, setUsers] = useState([]);
    const [mainUsers, setMainUsers] = useState([]);

    const searchHandle=(e)=>{
        e.preventDefault();
        setUsers(mainUsers.filter(u=>u.name.includes(e.target.value)));
    }

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            setUsers(res.data);
            setMainUsers(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    const removeUser=(id)=>{
        MySwal.fire({
            customClass: 'bg-slate-800 text-gray-100 rounded-xl',
            icon: 'warning',
            iconColor: 'rgb(251, 44, 54)',
            text: "آیا مطمئن هستید میخواهید این کاربر را حذف کنید",
            showCancelButton: true,
            confirmButtonColor: 'rgb(251, 44, 54)',
            confirmButtonText: 'بله',
            cancelButtonText: 'خیر',
            focusCancel: true,
            preConfirm: (()=>{
                axios.delete('https://jsonplaceholder.typicode.com/users/'+id).then(()=>{
                    setMainUsers(mainUsers.filter(u=>u.id != id));
                    setUsers(mainUsers.filter(u=>u.id != id));
                });
            })
        });
    }

    return (
        <div>
            <div className="flex flex-wrap items-center gap-4 justify-between">
                <span className="text-3xl text-white font-extrabold">کاربران</span>
                <Link to='/update-user' className="lg:order-2" >
                    <div className="bg-green-500 hover:bg-green-600 ms-auto py-1 px-6 rounded-xl font-bold text-slate-900 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                        </svg>
                        <span>افزودن</span>
                    </div>
                </Link>
                <form className="w-full lg:w-80 lg:ms-auto lg:order-1 flex items-center" onSubmit={searchHandle}>
                    <input className="w-full placeholder:text-gray-500 h-8 rounded-s-xl text-sm bg-white ps-4 !outline-none" placeholder="کاربر مورد نظر را جستجو کنید." autoComplete="off" onChange={searchHandle}/>
                    <button type="submit" className="px-2 bg-green-500 hover:bg-green-600 h-8 rounded-e-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </form>
            </div>
            <div className="mt-4">
                {
                    users !== [] ?
                    <table className="w-full" id="user-list">
                        <tbody className="w-full space-y-2">
                            {
                            users.map(u => (
                                <tr id={'u-'+u.id} className="text-white text-xs lg:text-sm py-2 px-4 flex bg-slate-800 rounded-lg items-center" key={u.id}>
                                    <td className="size-6 hidden lg:flex justify-center items-center font-mono rounded-full me-4 lg:me-8 bg-slate-900 ">{u.id}</td>
                                    <td className="text-start w-40 lg:w-96">{u.name}</td>
                                    <td className="font-mono">{u.phone}</td>
                                    <td className="flex items-center ms-auto gap-2">
                                        <Link to={'/update-user/'+ u.id}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-gray-100 hover:text-green-500">
                                                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                                            </svg>
                                        </Link>
                                        <div className="cursor-pointer" onClick={()=>{removeUser(u.id);}}>
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

export default Users;