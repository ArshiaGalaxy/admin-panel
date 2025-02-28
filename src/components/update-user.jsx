import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";

function UpdateUser(){
    const params = useParams();
    const [data, setData] = useState({});
    useEffect(()=>{
        if (params.id){
            axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`).then(res=>{
                setData(res.data);
            });
        }
    },[params]);

    const updateUser=(e)=>{
        e.preventDefault();
        if (params.id){
            axios.put('https://jsonplaceholder.typicode.com/users/'+params.id, data).then(res=>{
                console.log(res.status);
            });
        }else{
            axios.post('https://jsonplaceholder.typicode.com/users/', data).then(res=>{
                console.log(res.status);
            });
        }
        Navigate({to: '/'});
    }
    return (
        <div className="rounded-xl shadow-lg bg-slate-800 max-w-[800px] mx-auto">
            <div className="flex justify-center">
                <span className="bg-[#011523] size-4 flex">
                    <span className="bg-slate-800 size-4 rounded-tl-xl"/>
                </span>
                <span className="text-white font-extrabold text-2xl bg-[#011523] px-8 pb-2 rounded-b-3xl">{params.id ? 'ویرایش کاربر' : 'افزودن کاربر'}</span>
                <span className="bg-[#011523] size-4 flex">
                    <span className="bg-slate-800 size-4 rounded-tr-xl"/>
                </span>
            </div>
            <form onSubmit={updateUser}>
                <div className="flex flex-wrap gap-2 p-4">
                    <input className="h-8 w-full rounded-lg bg-slate-900 !outline-none focus:ring-1 ring-green-400 ps-4 text-white placeholder:text-gray-400" placeholder="نام و خانوادگی" minLength="3" value={data.name} onChange={(e)=>{setData({...data, name:e.target.value})}} required/>
                    <input className="h-8 w-full rounded-lg bg-slate-900 !outline-none focus:ring-1 ring-green-400 ps-4 text-white placeholder:text-gray-400" placeholder="شماره تلفن" minLength="10" value={data.phone} onChange={(e)=>{setData({...data, phone:e.target.value})}} required/>
                    <div className="flex w-full text-sm lg:text-base gap-2 justify-end">
                        <Link to="/" className="px-6 py-1 flex bg-gray-400 rounded-lg font-bold text-slate-900">
                            برگشت
                        </Link>
                        <button type="submit" className="px-6 py-1 flex bg-green-500 rounded-lg font-bold text-slate-900">{params.id ? 'ویرایش' : 'افزودن'}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UpdateUser;