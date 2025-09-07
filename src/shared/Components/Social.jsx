import { Link } from "react-router-dom";

const Social = ({ socialLinks, mobile }) => {
  return (
    <div
      className={` ${mobile ? " flex" : "hidden xl:flex items-center"}  py-3`}
    >
      {socialLinks.map((social, index) => (
        <Link
          key={index}
          to={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden text-white bg-[#262323] rounded-full p-3 text-xl flex items-center justify-center mx-2 group"
        >
          {/* Background hover "pop effect" */}
          <span className="absolute inset-0 rounded-full scale-0 bg-[#fb1359] transition-transform duration-500 ease-out group-hover:scale-100 z-0" />

          {/* Icon (z-10 to stay above the expanding background) */}
          <span className="relative z-10 text-xl">
            <social.icon />
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Social;
