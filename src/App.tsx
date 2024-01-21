import { useEffect } from 'react';
import './App.css';
import PageRoutes from './components/page-components/pageRoutes';
import { useAppDispatch, useAuth, useContent, useProfile } from './hooks/hooks';
import { getAllBlogsService } from './redux/features/system/contentService';
import { getUserProfile } from './redux/features/user/userService';

function App() {
  const {isFetchedAll}=useContent();
  const {isAuth}=useAuth();
  const dispatch=useAppDispatch();
  useEffect(() => {
      if(!isFetchedAll){
         dispatch(getAllBlogsService());
      }
      if (isAuth) {
        dispatch(getUserProfile());
    }
  }, [isFetchedAll,isAuth]);
  return <PageRoutes/>;
}

export default App;
