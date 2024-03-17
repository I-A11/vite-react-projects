import sublinks from "./data";
import { useGlobalContext } from "./Context";

const NavLinks = () => {
  return (
    <div className="nav-links">
      {sublinks.map((item) => {
        const { pageId, page } = item;
        return (
          <button className="nav-link" key={pageId}>
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default NavLinks;
