function SidebarClass(){
    return (
        <div className="flex">
            <div className="bg-pink-300 w-1/4 h-screen transition-all duration-500 p-2 hidden md:block">
                Side Bar
            </div>
            <div className="bg-gray-400 md:w-3/4 w-full h-screen p-2">
                Content Bar
            </div>
        </div>
    )
}

export default SidebarClass