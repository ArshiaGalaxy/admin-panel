import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

function Gallery(){
    const [gallery, setGallery] = useState([]);


    useEffect(()=>{
        axios.get('https://api.escuelajs.co/api/v1/products').then(res=>{
            setGallery(res.data.slice(0, 10));
        }).catch(err => {
            console.log(err);
        });
    }, []);

    const removeGallery=(id)=>{
        MySwal.fire({
            customClass: 'bg-slate-800 text-gray-100 rounded-xl',
            icon: 'warning',
            iconColor: 'rgb(251, 44, 54)',
            text: "آیا مطمئن هستید میخواهید این عکس را حذف کنید",
            showCancelButton: true,
            confirmButtonColor: 'rgb(251, 44, 54)',
            confirmButtonText: 'بله',
            cancelButtonText: 'خیر',
            focusCancel: true,
            preConfirm: (()=>{
                axios.delete('https://api.escuelajs.co/api/v1/products/'+id).then(()=>{
                    setGallery(gallery.filter(u=>u.id != id));
                });
            })
        });
    }

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
            <div className="mt-4">
                {
                    gallery != [] ?
                    <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {
                        gallery.map(u => (
                            <li id={'u-'+u.id} className="text-white text-xs lg:text-sm p-4 flex flex-wrap bg-slate-800 rounded-lg items-center" key={u.id}>
                                <img alt={u.title} className="rounded-lg w-full aspect-square" src={`${u.images[1]}`}/>
                                <div className="w-full mt-4 flex justify-between">
                                    <span className="text-right">{u.title}</span>
                                    <div className="flex items-center ms-auto gap-2">
                                        <Link to={'/update-gallery/'+ u.id}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-gray-100 hover:text-green-500">
                                                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                                            </svg>
                                        </Link>
                                        <div className="cursor-pointer" onClick={()=>{removeGallery(u.id)}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-gray-100 hover:text-red-500">
                                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
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

export default Gallery;