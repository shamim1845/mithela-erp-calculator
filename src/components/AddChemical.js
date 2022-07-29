import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ChemicalContainer from './ChemicalContainer';


const AddChemical = ({show, currentDispo, totalQuantity, currentQuantity}) => {
    const [chemical, setChemical] = useState("");
    const [quantity, setQuantity] = useState("");
    const [allChemical, setAllChemical] = useState([])


    useEffect(() => {
  
        const prevChemical = JSON.parse(localStorage.getItem("allchemical"));
        setAllChemical(prevChemical);

    },[])

    const ChemicalHandle = (e) => {
const value = e.target.value;
setChemical(value);
    }

    const QuantityHandle = (e) => {
const value = e.target.value;
setQuantity(value);
    }


    const submitData = (e) => {
        e.preventDefault();
  

   if(chemical && quantity) {
    
    let data ;
    if(allChemical) {
        data= [...allChemical, {name:chemical, quantity: quantity}];
        setAllChemical(data)
    }else{
        data= [{name:chemical, quantity: quantity}];
        setAllChemical(data)
    }
    let totalQ_currQ = {dispo: currentDispo, total: totalQuantity, current: currentQuantity};


    localStorage.setItem("allchemical", JSON.stringify(data));
    localStorage.setItem("totalQ_currQ", JSON.stringify(totalQ_currQ));
    setChemical("");
    setQuantity("");
   }else{
    alert("Enter chemical and quantity")
   }

    }

    // console.log(allChemical);

  return (<>
  { show &&   <> 
    <AddChemicalContainer>
    <form onSubmit={submitData}>
    <InputBoxContainer>
        <Input type="text" autoComplete='on' value={chemical} onChange={ChemicalHandle} placeholder='Enter Chemical Name...' />
        <Input  type="text" autoComplete='on' value={quantity} onChange={ QuantityHandle} placeholder='Enter Chemical Quantity...' />
        <Button type='submit'>Submit</Button>
    </InputBoxContainer>
        </form>
   
</AddChemicalContainer>
  
  </>}



<ChemicalContainer chemical={allChemical} totalQuantity={totalQuantity} currentQuantity={currentQuantity}/>
</>
  )
}

export default AddChemical;

const AddChemicalContainer = styled.div`
    background-color: rgb(207, 181, 59);
    padding: 2rem;
`

const Input = styled.input`
outline: none;
border: none;
padding: 5px;
&:active{
    /* outline: 1px solid #000; */
}
`
const Button = styled.button`
cursor: pointer;
background-color: rgb(207, 181, 59);
color: #fff;
border: 1px solid #fff;
padding: 5px 10px;
transition: color .5s ease-in-out;

&:hover{
    color: #000;
    border: 1px solid #000;
   
}
`
const InputBoxContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`