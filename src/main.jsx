import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import myRoute from './Router/Route'
import AuthProvider from './Pages/Providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(

  <div className='max-w-7xl mx-auto'>

    <React.StrictMode>

      <AuthProvider>
        <RouterProvider router={myRoute}></RouterProvider>
      </AuthProvider>

    </React.StrictMode>

  </div>
)
