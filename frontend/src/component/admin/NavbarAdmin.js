import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const NavbarAdmin = () => {
  function logout(){
    sessionStorage.removeItem("user");
}
  return (
    <div
      style={{ display: 'flex', height: '100%', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#B36A40">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            Ngethrift
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/admin" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Pesanan</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/create-produk" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Produk</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/create-admin" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Admin</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
           onClick={logout}>
            <a href="/login" style={{color:"white"}}>Logout</a>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default NavbarAdmin;