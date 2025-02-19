import { Link, useParams } from "react-router-dom";

function UpdatePost(){
    const params = useParams();
    return (
        <div className="rounded-xl shadow-lg bg-slate-800">
            <div className="flex justify-center">
                <span className="bg-[#011523] size-4 flex">
                    <span className="bg-slate-800 size-4 rounded-tl-xl"/>
                </span>
                <span className="text-white font-extrabold text-2xl bg-[#011523] px-8 pb-2 rounded-b-3xl">{params.id ? 'ویرایش پست' : 'افزودن پست'}</span>
                <span className="bg-[#011523] size-4 flex">
                    <span className="bg-slate-800 size-4 rounded-tr-xl"/>
                </span>
            </div>
            <form>
                <div className="grid gap-2 p-4">
                    <input className="h-8 rounded-lg bg-slate-900 !outline-none focus:ring-1 ring-green-400 ps-4 text-white placeholder:text-gray-400" placeholder="نام" minLength="3" required/>
                    <textarea className="h-24 rounded-lg bg-slate-900 !outline-none focus:ring-1 ring-green-400 pt-1 px-4 text-white placeholder:text-gray-400 resize-none" placeholder="متن" minLength="10" maxLength="100" required/>
                    <div className="flex gap-2">
                        <button type="submit" className="px-6 py-1 flex bg-green-500 rounded-lg font-bold text-slate-900">{params.id ? 'ویرایش' : 'افزودن'}</button>
                        <Link to="/posts" className="px-6 py-1 flex bg-gray-400 rounded-lg font-bold text-slate-900">
                            برگشت
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UpdatePost;