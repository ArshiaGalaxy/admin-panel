import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Main from './components/main';
import Users from './components/users';
import Posts from './components/posts';
import Gallery from './components/gallery';
import UpdateUser from './components/update-user';
import UpdatePost from './components/update-post';

function App() {
  return (
    <div className="min-h-screen h-screen">
      <BrowserRouter>
        <div className='lg:flex min-h-full'>
          <Navbar/>
          <Main>
            <Routes>
              <Route path='/' element={<Users/>}/>
              <Route path='/update-user/' element={<UpdateUser/>}>
                <Route path=':id'/>
              </Route>
              <Route path='/update-post/' element={<UpdatePost/>}>
                <Route path=':id'/>
              </Route>
              <Route path='posts/' element={<Posts/>}/>
              <Route path='gallery/' element={<Gallery/>}/>
              <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
          </Main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
