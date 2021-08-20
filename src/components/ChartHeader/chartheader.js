import "./chartheader.css";

const Chartheader = () => {
    return (
  <>      
<div className="Header">
<div className="container-fluid">
  
<ul className="nav nav-pills nav-fill ">
  <li className="nav-item ">
    <a className="nav-link dashboard" aria-current="page" href="#">Dashboard</a>
  </li>
  
  
  <li className="nav-item">
    <a className="nav-link icons " href="#" tabindex="-1" >
    <i className="fas fa-bullhorn"></i>
    <i className="fas fa-bell"></i>
    </a>
  </li>
</ul>
</div>

</div>
</>
        
    );
};

export default Chartheader;