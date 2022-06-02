import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'
import './whatapp.css'

function FloatingWhatsappButton(props) {
  return (
    <div>
    <FloatingWhatsApp
        phoneNumber="+918368491107"
        accountName="Digicircle"
        allowClickAway
        avatar="/images/DIGI_3D.jpg"
        notification
        height={300}
        notificationDelay={60000} // 1 minute
        style={{zIndex:"110"}}
        className='whatapp'
      />
  
    </div>
  )
}


export default FloatingWhatsappButton