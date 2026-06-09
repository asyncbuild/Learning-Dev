function SidebarClass(){
    return (
        <div className="flex">
            <div className="bg-pink-300 h-screen transition-all duration-2000 p-2 md:w-96 w-0 ">
                Side Bar
            </div>
            <div className="bg-gray-400 w-full h-screen p-2">
                Content Bar
            </div>
        </div>
    )
}

export default SidebarClass