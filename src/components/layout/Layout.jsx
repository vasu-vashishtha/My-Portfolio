import React from 'react'
import { Outlet } from 'react-router-dom';
import SideNav from './SideNav';
import TopNav from './TopNav';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <SideNav />
        <div className="flex flex-col flex-1 bg-zinc-950 text-zinc-100">
          <TopNav />
          <main className="flex-1 overflow-y-auto p-4">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout;