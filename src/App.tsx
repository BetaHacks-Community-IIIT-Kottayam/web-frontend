import { useEffect } from 'react';
import './App.css';
import PageRoutes from './components/page-components/pageRoutes';
import { useAppDispatch, useAuth, useContent, useProfile } from './hooks/hooks';
import { getAllBlogsService } from './redux/features/system/contentService';
import { getUserProfile } from './redux/features/user/userService';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  return <div className='overflow-x-hidden'>
  {/* Include the ToastContainer component */}
  <ToastContainer />
  {/* Other components */}
  <PageRoutes />
</div>
}

export default App;
