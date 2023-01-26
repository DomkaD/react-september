import './App.css';
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {AlbumsPage, CommentsPage, NotFoundPage, PostPage, TodosPage, WelcomePage} from "./pages";
import {MainLayout} from "./layout/MainLayout";





function App() {
  return (
    <div className={"App"}>

    <Header/>

      <Routes>
        <Route path={'/'} element ={<MainLayout/>}/>
          <Route index element ={<WelcomePage/>}/>
          <Route path={'/todos'} element ={<TodosPage/>}/>
          <Route path={'/albums'} element ={<AlbumsPage/>}/>
          <Route path={'/comments'} element ={<CommentsPage/>}/>
          <Route path={'/comments/:id'} element ={<PostPage/>}/>
          <Route path={'*'} element ={<NotFoundPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
