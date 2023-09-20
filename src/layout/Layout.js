import React from 'react'
import BarraMenu from '../componentes/inicio/BarraMenu'
function Layout({children}) {
  return (
    <div>
        <div className='container-fluid'>
            <BarraMenu/>
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout