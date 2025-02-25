import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{title} | OpenCourse</title>
        <meta name="description" content={description} />
      </Helmet>
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-bold text-accent">OpenCourse</span>
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to="/courses"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-accent"
                >
                  Courses
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-accent"
                >
                  Pricing
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-accent"
                >
                  About
                </Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
              <Link
                to="/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-accent hover:bg-accent hover:text-white transition-colors"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-accent hover:bg-accent/90"
              >
                Sign up
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow mt-16">{children}</main>

      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link to="/about" className="text-base text-gray-600 hover:text-accent">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-base text-gray-600 hover:text-accent">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link to="/courses" className="text-base text-gray-600 hover:text-accent">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-base text-gray-600 hover:text-accent">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link to="/help" className="text-base text-gray-600 hover:text-accent">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-base text-gray-600 hover:text-accent">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link to="/privacy" className="text-base text-gray-600 hover:text-accent">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-base text-gray-600 hover:text-accent">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; {new Date().getFullYear()} OpenCourse. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
