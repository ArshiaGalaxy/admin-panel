function Main(props){
    return(
        <div className="p-4 pt-20 lg:pt-4 lg:flex-1 overflow-y-auto h-screen bg-[#011523]">
            { props.children }
        </div>
    )
}

export default Main;