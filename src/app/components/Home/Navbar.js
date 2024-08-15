import Image from 'next/image';


const Navbar = ({ onShowCreatePost }) => { // Accept the function as a prop

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/a-sleek-and-modern-sports-logo-featuring-the-face--n3DfSSrzRHK82qYNkwawdQ-Qlm6Ge1GQ9qkYifYI2PH4w.jpeg"
            alt="Logo"
            layout="fixed"
            width={80}
            height={80}
            className="mr-1 rounded-full"
          />
        </div>

        {/* Right side: Buttons */}
        <div className="flex items-center space-x-4">
          <button
            className="bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600 transition"
            onClick={onShowCreatePost} // Toggle to show create post form
          >
            Create Post
          </button>
          <button className="bg-green-500 text-white px-2 py-2 rounded hover:bg-green-600 transition">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
