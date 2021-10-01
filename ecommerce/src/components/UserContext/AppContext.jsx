import React, { useContext } from 'react'

//Create a context Object
export const AppContext = React.createContext()

// custom hook, thay vì từng child component sử dụng useContext để lấy shared state. Ta tạo ra useUser( a custom hook). Và chỉ cần import và gọi sẽ nhận shared state.
export const useUser = () => useContext(AppContext)

//HOC
const AppContextProvider = ({ children }) => {
  //Shared State in context Object
  const user = { name: 'Tuan', age: 24 }
  return <AppContext.Provider value={user}>{children}</AppContext.Provider>
}
export default AppContextProvider
