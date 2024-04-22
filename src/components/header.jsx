const Header = () => {

    return(
<div className="navbar px-10 h-10 shadow-none mt-5">
	<div className="flex flex-nowrap w-1/6 text-lg text-2xl me-10">
		<a className="navbar-item">CO-developer</a>
	</div>
	<div className="">
		<a className="navbar-item hover:bg-blue-100">Home</a>
		<a className="navbar-item hover:bg-blue-100">About</a>
		<a className="navbar-item hover:bg-blue-100">Contact</a>
	</div>
	<div className="navbar-end">
		<a className="navbar-item hover:bg-blue-100">Sign in</a>
		<a className="h-10 flex justify-center px-3 pt-2 rounded-lg bg-blue-800 text-white hover:bg-blue-900">Create free account</a>
	</div>
</div>
    )
}

export default Header