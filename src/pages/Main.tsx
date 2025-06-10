import { Link } from 'react-router-dom';

const MainPage = ( ) => {
	return (
		<div className="bg-gradient-to-br from-pink-50 via-white to-indigo-100 min-h-screen flex items-center justify-center px-4 py-10">
		<div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8">
			<h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-8 tracking-tight">
				📘 My React Tasks
			</h1>

			<nav className="space-y-6">
				<Link 
					to="./components/Task-1.tsx"
					className="block rounded-xl p-5 bg-indigo-500 text-white text-xl font-semibold shadow-md hover:bg-indigo-600 transition duration-300 ease-in-out"
				>
					 Task 1
				</Link>

				<Link
					to="./components/Task-2.tsx"
					className="block rounded-xl p-5 bg-pink-500 text-white text-xl font-semibold shadow-md hover:bg-pink-600 transition duration-300 ease-in-out"
				>
					Task 2
				</Link>
			</nav>

			<p className="text-center text-#8e8c8c-500 text-sm mt-10">
				Built with 💙 by Olha
			</p>
		</div>
	</div>
	);
}
export default MainPage;