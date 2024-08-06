import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { logout } from "../redux/slices/loginSlice";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";

export default function NavBar({ state }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const [isLoading, setisLoading] = useState(false);
  const handlelogout = async () => {
    dispatch(logout());
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
      navigate("/");
    }, 1000);
  };

  return (
    <>
      {isLoading ? (
        <Loader message={"Wait a while. Logging out!"} />
      ) : (
        <>
          <div className="flex items-center md:hidden pt-5 justify-center ">
            <Link to="/">
              <img className="w-10" src={Logo} alt="lOGO" />
            </Link>
            <h1 className="text-white  text-2xl">Sales Strive</h1>
          </div>

          <div className=" md:w-full flex justify-between p-6 mb-6">
            <div className="md:flex items-center hidden ">
              <Link to="/">
                <img className="md:w-20" src={Logo} alt="lOGO" />
              </Link>
              <h1 className="text-white  text-2xl">Sales Strive</h1>
            </div>
            {state ? (
              <div>
                <NavigationMenu className="flex md:gap-x-5 gap-x-2 p-4">
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent text-white">
                        About Us
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="p-4 bg-white rounded shadow-lg">
                        <div className="w-56">
                          <p className="text-sm">
                            Welcome to our app! Our platform is designed to help
                            you gain insights into your sales data, reward
                            points, and commission details.
                          </p>

                          <p className="mt-7">
                            Thank you for choosing our app. We hope it helps you
                            achieve your goals and succeed in your business
                            endeavors.
                          </p>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent text-white">
                        Contact
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="p-4 bg-white rounded shadow-lg">
                        <strong>Email:</strong> support@example.com
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                  {isAuthenticated && (
                    <Link to="/dashboard">
                      <Button>Dashboard</Button>
                    </Link>
                  )}
                </NavigationMenu>
              </div>
            ) : (
              <Button
                type="submit"
                className="bg-red-600 md:static absolute right-0 md:w-28"
                onClick={handlelogout}
              >
                Logout
              </Button>
            )}
          </div>
        </>
      )}
    </>
  );
}
