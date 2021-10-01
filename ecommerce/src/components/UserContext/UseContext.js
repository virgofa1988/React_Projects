import React from 'react'
import AppContextProvider from './AppContext'
import User from './User'

// Khi tạo ra userContext, tất cả các children component đc bao bọc bên trong context.provider
export default function UseContext() {
  return (
    <div>
      <AppContextProvider>
        <User />
      </AppContextProvider>
    </div>
  )
}
