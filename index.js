import react from 'react'

function home(){
  const listItems = [1,2,3,4]

  const addItem = () => {
    const variableA = 1;
    const variableB = 3;
    const variableC = 2;

    return variableA*3 + variableB*variableC
/**
estoy aqui
**/
  }

  return(
    <><div>home</div>
    <p>hola mundo</p>
    <p>miguelon</p>
    <p>sisas</p>
    <button onClick={addItem}/></>
  )

}

export default home
