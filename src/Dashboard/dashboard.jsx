function Dashboard() {
    return (
      <Router>
        <header>
          <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
            <div className="text-xl font-bold">
              <Link to="/">LUXIDRIVE</Link>
            </div>
            <ul className="hidden md:flex gap-4">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/ride">Ride</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div>
              <button className="bg-blue-600 px-4 py-2 rounded"><Link to="/login">Login</Link></button>
            </div>
          </nav>
        </header>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ride" element={<Ride />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
  
        <footer className="bg-gray-900 text-white p-6 mt-8">
          <div className="container mx-auto grid grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold">Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/career">Career</Link></li>
                <li><Link to="/press">Press</Link></li>
                <li><Link to="/support">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Product</h4>
              <ul>
                <li><Link to="/demo">Demo</Link></li>
                <li><Link to="/security">Security</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/features">Features</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#"><i className="ri-facebook-fill"></i></a>
                <a href="#"><i className="ri-twitter-fill"></i></a>
                <a href="#"><i className="ri-linkedin-fill"></i></a>
              </div>
            </div>
          </div>
        </footer>
      </Router>
    )
    
}

export default Dashboard;