import React,{useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn = useSelector((state) => state.logged.isLoggedin);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (<>
        {isLoggedIn ? children : navigate("/login")}
        </>
  )
};

export default PrivateRoute;
