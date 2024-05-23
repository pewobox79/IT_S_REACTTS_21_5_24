import Header from '../compontents/Header'
import Footer from '../compontents/Footer'
import { Outlet } from 'react-router-dom'
import { DataContext } from '../store/context/dataContext'
import { useState } from 'react'

export default function MainLayout() {

  const [user, setUser] = useState({
    name: "Peter",
    fired: false
  });

  return (
    <DataContext.Provider value={{ user, setUser }}>
      <Header />
      <div style={{ minHeight: "500px", height: "auto" }}>
        <Outlet />
      </div>
      <Footer />
    </DataContext.Provider>
  )
}
