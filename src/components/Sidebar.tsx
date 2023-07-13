import twitterLogo from "../assets/logoTwitter.svg";
import{ House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, DotsThree, Pencil } from "phosphor-react";
import "./Sidebar.css"
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
  
    <aside className="sidebar">
    <img className="logo" src={twitterLogo} alt="logo" />
    <nav className="main-navigation">
    <NavLink to ="/">
        <House weight="fill"/>
       <span>Home</span> 
    </NavLink>

    <a href="">
        <Hash />
        <span>Explore</span> 
    </a>

    <a href="">
        <Bell/>
        <span>Notificações</span> 
    </a>

    <a href="">
        <Envelope/>
        <span>Mensagens</span> 
    </a>

    <a href="">
        <BookmarkSimple/>
        <span>Itens salvos</span> 
    </a>

    <a href="">
        <FileText/>
        <span>Listas</span> 
    </a>
    
    <a href="">
        <User/>
        <span>Perfil</span> 
    </a>

    <a href="">
        <DotsThree/>
        <span>Mais opções</span>
    </a>
    </nav>

    <button className="new-tweet" type="button">
    <Pencil/>
    <span>Tweet</span> 
    </button>


    </aside>
  );
}
