import React from 'react'
import styled from 'styled-components'
import AddChemical from './AddChemical';

const ChemicalContainer = ({ show, chemical, totalQuantity, currentQuantity }) => {

    const removeData = () => {
        localStorage.removeItem("allchemical");
        localStorage.removeItem("totalQ_currQ");
        window.location.reload(false);
    }
    return (<>
        {show && <AddChemical />}
        <br />
        {
            chemical && <RemoveContainer>
                <Button onClick={() => removeData()}>Remove Data</Button>
            </RemoveContainer>
        }

        {chemical &&
            <Container>
                <ChemicalBox>
                    <table>
                        <thead>
                            <tr>
                                <th>Dyes/Chemical</th>
                                <th>Total Quantity</th>
                                <th>Quantity for Current Dispo </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                chemical && chemical.map((chemical, index) => {
                                    const { name, quantity } = chemical;
                                    const divider = totalQuantity / currentQuantity;
                                    let calculatedData = (quantity / divider).toFixed(3);
                                    return <tr key={index}>
                                        <td>{name.toUpperCase()}</td>
                                        <td>{quantity}</td>
                                        <td>{calculatedData}</td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>

                </ChemicalBox>

            </Container>
        }




    </>
    )
}

export default ChemicalContainer;

const Container = styled.div`
margin: 1rem 0;
`

const ChemicalBox = styled.div`
display: flex;
justify-content:center;
align-items: center;
border: 1px solid rgb(207, 181, 59);

table{
    width: 100%;
    
    thead{
        tr{
            display: flex;
            justify-content: space-around;
            align-items: center;
            
            th{
             
                flex: 1;
                color: rgb(207, 181, 59);
               
            }
        }
    }
    tbody{
        tr{
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-bottom: 1px solid #000;
            text-align: left;
            font-size: 1rem;

            
            &:first-child{
                border-top: 1px solid #000;
            }
            
            &:last-child{
                     border: none;
         }
            td{
                min-width: 100px;
              
           
           &:first-child{
            text-align: left;
            min-width: 200px;
           }
                &:last-child{
           
              color: red;

            }
            }
            
        }
    }
    
}

`

const RemoveContainer = styled.div`
display: flex;
justify-content:flex-end;
align-items: center;
`

const Button = styled.button`
cursor: pointer;
border: 1px solid rgb(207, 181, 59);
padding: 3px 6px;
background-color: #fff;
transition: all .5s ease-out;

&:hover{
    color: red;
    border: 1px solid red;
}
`