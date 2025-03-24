import { Link, useNavigate } from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* Background Gradient */}
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex flex-col items-center justify-center p-6">
                {/* Animated Illustration */}
                <div className="relative w-64 h-64 mb-8 animate-float">
                    <div className="absolute w-full h-full bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute w-3/4 h-3/4 bg-indigo-500 rounded-full opacity-30 animate-pulse animation-delay-1000 top-1/4 left-1/4"></div>
                    <div className="absolute w-1/2 h-1/2 bg-blue-500 rounded-full opacity-40 animate-pulse animation-delay-2000 top-1/2 left-1/2"></div>
                    <div className="absolute w-1/4 h-1/4 bg-white rounded-full opacity-50 animate-pulse animation-delay-3000 top-3/4 left-3/4"></div>
                </div>

                {/* 404 Text */}
                <h1 className="text-9xl font-bold text-white mb-4 animate-bounce">
                    404
                </h1>

                {/* Error Message */}
                <h2 className="text-4xl font-semibold text-white mb-6">
                    Oops! Page Not Found
                </h2>
                <p className="text-lg text-gray-300 mb-8 text-center max-w-2xl">
                    It looks like the page you're trying to reach doesn't exist. Maybe it was moved or deleted. Don't worry, let's get you back on track!
                </p>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                    <Link
                        onClick={() => navigate('/')}
                        className="bg-white text-purple-900 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-100 hover:shadow-xl transition duration-300 transform hover:scale-105"
                    >
                        Go Back Home
                    </Link>
                    <Link
                        onClick={() => navigate(-1)}
                        className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-purple-900 hover:shadow-xl transition duration-300 transform hover:scale-105"
                    >
                        Previous Page
                    </Link>
                </div>

                {/* Footer */}
                <div className="mt-12 text-center text-gray-400">
                    <p>Need help? <a href="/contact" className="text-white hover:underline">Contact us</a></p>
                </div>
            </div>
        </>
    );
};

export default Index;