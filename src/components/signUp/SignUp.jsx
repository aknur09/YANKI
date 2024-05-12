import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const SignUp = ({ setIsVisible }) => {
    const [ userData, setUserData] = useState({
        name: "",
        password: "",
        email: "",
        img: ""
    });

    const dispatch = useDispatch()

    const changeInput = (e) => {
      const { name, value } = e.target;
      setUserData ({ ...userData, [name] : value })
    }

    const clickOverlay = (e) => {
    let authDiv = e.target.closest('#test')
    if (!authDiv) setIsVisible(false)
    }

    const submit = (e) => {
        console.log(e);
        e.preventDefault()
        console.log(userData);
        dispatch(craeteUser(userData))
        setIsVisible(false)
    }
  return (
    <div className={styles.overlay} onClick={clickOverlay}>
      <div id="test" className={styles.auth}>
       <form onSubmit={submit}>
        <h3>Зарегистрироваться</h3>
        <p>
            <input type="email"  placeholder='Ваш e-mail*' onChange={changeInput} required/>
        </p>
        <p>
            <input type="text"  placeholder='имя'  onChange={changeInput}  required/>
        </p>
        <p>
            <input type="password" placeholder='password'  onChange={changeInput} re  />
        </p>
        <p>
            <input type="email"  placeholder='img url'  onChange={changeInput}  required/>
        </p>
        <input type="submit"  />
       </form>
      </div>
    </div>
  )
}

export default SignUp