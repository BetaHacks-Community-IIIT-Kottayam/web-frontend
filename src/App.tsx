import { useEffect } from 'react';
import './App.css';
import PageRoutes from './components/page-components/pageRoutes';
import { useAppDispatch, useAuth, useContent, useProfile } from './hooks/hooks';
import { getAllBlogsService } from './redux/features/system/contentService';
import { getUserProfile } from './redux/features/user/userService';

function App() {
  const {isFetchedAll}=useContent();
  const { userInfo, status } = useProfile();
  const {isAuth}=useAuth();
  const dispatch=useAppDispatch();
  useEffect(() => {
      if(!isFetchedAll){
         dispatch(getAllBlogsService());
      }
      if (!userInfo.email && !status.isError && isAuth) {
        dispatch(getUserProfile());
    }
  }, [isFetchedAll]);
  return <PageRoutes/>;
}

export default App;
