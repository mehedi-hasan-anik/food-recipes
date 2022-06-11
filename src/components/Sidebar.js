import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ links, close }) => {
  const location = useLocation();

  return (
    <div className="sidebar" onClick={close}>
      {links?.map((item) => (
        <Link
          className={
            location.pathname === item.path
              ? "sidebar-link active"
              : "sidebar-link"
          }
          to={item?.path}
          key={item?.name}
        >
          <FontAwesomeIcon icon={faHome} />
          {item?.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
