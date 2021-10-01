import { useState } from 'react'

import Cars from './components/Cars'

import CustomHook from './components/CustomHook'
import DemoRefUseRef from './components/DemoRefUseRef'
import DemoRFC from './components/DemoRFC'
import DemoUserCallBack from './components/DemoUserCallBack'
import DemoUserRefClass from './components/DemouseRefClass'
import UserModule from './components/CSSModule/UserModule'
import Footer from './components/Footer'
import Header from './components/Header'
import HOC from './components/HOC'
import MutateState from './components/MutateState'
import ReactMemo from './components/ReactMemo'
import UseMemo from './components/useMemo'
import UseContext from './components/UserContext/UseContext'
import UserReducer from './components/UserReducer/UserReducer'
import StyleComponent from './components/StyleComponent/StyleComponent'
import StudentManage from './components/StudentManage/StudentManage'
import Register from './components/ReactHookForm/Register'
import AppRouter from './components/ReactRouter/AppRouter'
import ReduxApp from './components/Redux/ReduxApp'

function App() {
  const [state, setState] = useState(true)
  return (
    // <div className="App m-auto">
    //   {/* <Footer name="Jay Nguyen" age={33} /> */}
    //   {/* <Cars /> */}
    //   <button
    //     onClick={() => {
    //       setState(state => !state)
    //     }}
    //   >
    //     Change State
    //   </button>
    //   <p>{String(state)}</p>
    //   {state && <Header />}
    // </div>
    // <DemoRFC />
    // <MutateState />
    // <HOC />
    // <ReactMemo />
    // <UseMemo />
    // <DemoUserCallBack />
    // <DemoRefUseRef />
    // <DemoUserRefClass />
    // <CustomHook />
    // <UseContext />
    // <UserReducer />
    // <UserModule />
    // <StyleComponent />
    // <StudentManage />
    // <Register />
    // <AppRouter />
    <ReduxApp />
  )
}

export default App
