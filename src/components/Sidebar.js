import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

const Sidebar = ({ links, close }) => {
  const location = useLocation();

  return (
    <div className="sidebar" onClick={close}>
      {links?.map((item) => (
        <a
          className={
            location.pathname === item.path
              ? "sidebar-link active"
              : "sidebar-link"
          }
          href={item?.path}
          key={item?.name}
        >
          <FontAwesomeIcon icon={faHome} />
          {item?.name}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
