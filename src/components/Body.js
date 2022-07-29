import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import AddChemical from './AddChemical';


const Body = () => {
    const [show, setShow] = useState(false);
    const [totalQuantity, setTotalQuantity] = useState();
    const [currentQuantity, setCurrentQuantity] = useState();
    const [currentDispo, setCurrentDispo] = useState();


    useEffect(() => {

        const prevQData = JSON.parse(localStorage.getItem("totalQ_currQ"));
        // console.log(prevQData);

        if(prevQData) {
            setCurrentDispo(prevQData.dispo)
            setTotalQuantity(prevQData.total);
            setCurrentQuantity(prevQData.current);
        }
       

    },[])

    const checkHandle = () => {
        if(currentDispo && totalQuantity && currentQuantity) {
            setShow(!show);
        }
        else{
            alert("Field is required. Please fill all of this field.")
        }
    }
    return (
        <BodyContainer>
            <Container>

                <InputBoxContainer>
                    <Input placeholder='Dispo Number..' value={currentDispo || ""} onChange={(e) => setCurrentDispo(e.target.value)}/>
                    <Input placeholder='Total Fabric Quantity..' value={totalQuantity || ""} onChange={(e) => setTotalQuantity(e.target.value)}/>
                    <Input placeholder='Current Fabric Quantity..' value={currentQuantity || ""} onChange={(e) => setCurrentQuantity(e.target.value)}/>
                </InputBoxContainer>
<br />
                <AddProductContainer>
                    <Button onClick={() => checkHandle()}>Add Chemical/Dyes</Button>
                </AddProductContainer>

                <br />
<AddChemical  show={show} currentDispo={currentDispo} totalQuantity={totalQuantity} currentQuantity={currentQuantity}/>

                


            </Container>
        </BodyContainer>
    )
}

export default Body;


const BodyContainer = styled.div`
width: 100%;
max-width: 1000px;
margin: auto;
margin-top: 5rem;
overflow: auto;

`
const Container = styled.div`
margin: 20px;
padding: 1rem;
border: 1px solid rgb(207, 181, 59);

`
const Input = styled.input`
`

const InputBoxContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const AddProductContainer = styled.div`
display: flex;
justify-content:center;
align-items: center;



`

const Button = styled.button`
cursor: pointer;
border: 1px solid rgb(207, 181, 59);
padding: 3px 6px;
background-color: #fff;
transition: all .3s ease-out;

&:hover{
    color: #fff;
    background-color: rgb(207, 181, 59);
   
}
`

