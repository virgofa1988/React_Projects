import React, { useEffect, useState } from 'react'

export default function MutateState() {
  const [profile, setProfile] = useState({
    name: 'Tuan',
    age: 23,
    address: {
      company: '110 Queen Str, Auckland CBD',
      home: '711 Union Street'
    }
  })
  //Initial state has 2-level object. when update state, must return new 2-level object. It means we have to clone address, otherwise state cannot recognize the changes by reference value. Especially when using lifecycle useEffect need to check dependencies

  //This one, change the value, but useEffect cannot console.log(profile.address.company) or mutate
  const changeAdressMutate = () => {
    let _profile = { ...profile }
    _profile.address.company = '300 Queen Street'
    setProfile(_profile)
  }
  //This one, change the value, and effect can console.log(profile.address.company)
  const changeAdress = () => {
    let _profile = { ...profile }
    _profile.address = { ..._profile.address, company: '300 Queen Street' }
    setProfile(_profile)
  }

  useEffect(() => {
    console.log(profile.address.company)
  }, [profile.address])
  return (
    <div>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>Company: {profile.address.company}</p>
      <p>Home: {profile.address.home}</p>
      <button className="btn btn-success" onClick={changeAdress}>
        Change Address
      </button>
      <button className="btn btn-warning" onClick={changeAdressMutate}>
        Change Address Mutate
      </button>
    </div>
  )
}
