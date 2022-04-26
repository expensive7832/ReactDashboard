import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import Dashboard from "./../assets/images/dashboard.png";
import app from "./../assets/images/app.png";
import customer from "./../assets/images/customer.png";
import home from "./../assets/images/home.png";
import pay from "./../assets/images/pay.png";
import settings from "./../assets/images/settings.png";
import statement from "./../assets/images/statement.png";

const navigation = [
  {
    title: "Home",
    href: "/starter",
    icon: home,
  },
  {
    title: "Dashboard",
    href: "/alerts",
    icon: Dashboard,
  },
  {
    title: "Apps",
    href: "/badges",
    icon: app,
  },
  {
    title: "Customers",
    href: "/buttons",
    icon: customer,
  },
  {
    title: "statements",
    href: "/cards",
    icon: statement,
  },
  {
    title: "Direct Pay",
    href: "/grid",
    icon: pay,
  },
  {
    title: "Settings",
    href: "/table",
    icon: settings,
  },
 

];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-2 " >
      <div className="d-flex align-items-center">
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary fw-bold nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <img src={navi.icon} />
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
