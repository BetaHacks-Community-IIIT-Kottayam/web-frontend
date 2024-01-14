import { useEffect } from 'react';
import './App.css';
import PageRoutes from './components/page-components/pageRoutes';
import { useAppDispatch, useContent } from './hooks/hooks';
import { getAllBlogsService } from './redux/features/system/contentService';

function App() {
  const {isFetchedAll}=useContent();
  const dispatch=useAppDispatch();
  useEffect(() => {
      if(!isFetchedAll){
         dispatch(getAllBlogsService());
      }
  }, [isFetchedAll]);
  return <PageRoutes/>;
}

export default App;
