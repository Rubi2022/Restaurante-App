import { makeStyles } from "@material-ui/core"


  
const Layout = ({children}) => {
  const classes = useStyles 
  return (
    <div className={classes.root }>
      {children}
      </div>
  )
}

export default Layout

const useStyles = makeStyles((theme) => ({
  root: {
        dislpay:"flex",

  }
}))


console.log('holi')

const inputVal = document.getElementById('input-text')
const botAgregar = document.querySelector('#agregar')

console.log(inputVal)
console.log(botAgregar)

let arr= [];

botAgregar.addEventListener('click',() => {
    arr.push(inputVal.value)
    inputVal.value = ''
    console.log(arr)
    localStorage.setItem('ordencliente', arr)
    renderizaElem()
})

function renderizaElem(){
  const lista= document.getElementById('order-list')
  lista.innerHTML = ''
  arr.forEach(function (item,i){
      lista.innerHTML += `
      <li>
      ${item}
      <button class="buton3" onclick="borrarElemento(${i})">Quitar</button>
      `
  })
}



















/**import { makeStyles } from '@material-ui/core'

const Layout = ({children}) => {
  const classes = useStyles ()
 return (
  <div className={classes.root}>
   {children}

  </div>
 )
}

export default Layout

const useStyles = makeStyles((theme) => ({
    root: {
     backgroundColor: "green",

    }
    
              
 
}))/** */