import React from 'react'
import MenuOptions from './menuOptions'

const MobileHeader = () => {
  return (
        <div >
            <MenuOptions layout="vertfical" isMobileHeader={true} />
        </div>
  )
}

export default MobileHeader