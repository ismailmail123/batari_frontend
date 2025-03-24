import { Link, useNavigate } from "react-router-dom";


const Index = () => {
    const navigate = useNavigate();

    return(
       <>
        <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">404 Error</h1>
        <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item"><Link onClick={()=> navigate('/')}>Home</Link></li>
            <li className="breadcrumb-item"><Link onClick={() => navigate(-1)}>Pages</Link></li>
            <li className="breadcrumb-item active text-white">404</li>
        </ol>
    </div>
    <div className="container-fluid ">
        <div className="container py-5 text-center">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <i className="bi bi-exclamation-triangle display-1 text-secondary"></i>
                    <h1 className="display-1">404</h1>
                    <h1 className="mb-4">Page Not Found</h1>
                    <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                    <Link 
                    onClick={()=> navigate('/')}
                    className="btn border-secondary rounded-pill py-3 px-5" href="index.html">Go Back To Home</Link>
                </div>
            </div>
        </div>
    </div>
       </>
    )
}

export default Index;