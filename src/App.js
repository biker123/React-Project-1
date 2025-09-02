import './App.css';
import Main from './component/Main/Main';
import Sidebar from './component/Sidebar/Sidebar';
import Topbar from './component/Topbar/Topbar';

function App() {
  return (
    <div class="app">
      <Sidebar></Sidebar>
      <main class="main">
        <Topbar></Topbar>
        <Main></Main>
      </main>
    </div>
  );
}

export default App;
