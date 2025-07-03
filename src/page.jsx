import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useRef } from 'react';
import { Users , Search, ArrowLeft} from 'lucide-react';
import ResidentApp from './app';

const AppPage = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [view, setView] = useState('list');
  const ResidentAppRef = useRef();
  
  const openSideMenu = () => {
    setNavOpen(!navOpen);
  };

  const changeView = (newView) => {
    setNavOpen(false);
    setView(newView);
  };
  
  const filterFamilies = (searchTerm) => {
    setView('list');
    ResidentAppRef.current.filter(searchTerm);
  }

  return (
    <div id='pwrap' className={'page_'+view}>
      <nav id="topbar" className="navbar navbar-light">
        <img style={{'height':'55px'}} src="images/logo2.png" alt="אפליקציית תושבים" className="logo" />
        
        <Search id='searchIcon' style={{}} onClick={()=>{document.getElementById('searchTB').classList.toggle('show')}} />
        <input id='searchTB' type="text" className="form-control" onKeyUp={filterFamilies} style={{position:'fixed',left:'112px',width:'200px'}} placeholder="חיפוש משפחה" />
              
        <button className="navbar-toggler" type="button" onClick={openSideMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>

      {navOpen && 
        <div id="sidebar"
            tabIndex={0}
            onBlur={() => setNavOpen(false)}>
          <ul className="">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => changeView('list')}>רשימת טלפונים</a>
            </li>                                                                                                               
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => changeView('login')}>כניסה</a>
            </li>         
          </ul>
        </div>
      }
      { view !== 'list' &&
            <div className="back-to-list">
              
              <button
                onClick={() => changeView('list')}
                className="btn btn-link text-decoration-none d-flex align-items-center gap-2"
              >
                <ArrowLeft size={20} />
                חזרה לרשימה
              </button>
            </div>
      }
      <ResidentApp ref={ResidentAppRef} setCurrentView={changeView} currentView={view} />
    </div>
  );
};

export default AppPage;