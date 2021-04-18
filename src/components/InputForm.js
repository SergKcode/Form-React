import { useState} from "react";
import React from "react";
import {DataReturn} from "./DataReturn";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import Button from 'react-bootstrap/Button';

import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'





export default function InputForm(){
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const [startDate, setStartDate] = useState(new Date(Date.now()));
    const [endDate, setEndDate] = useState(tomorrow);
    const  [days, setDays]=useState();
    const [onSubmit, setOnsubmit]=useState(false)
 


    console.log(days)
    console.log (startDate)
    console.log (endDate)
    
  


    const [budget, setBudget] = useState(0)
    const [origin, setOrigin] = useState("")
    const [destiny, setDestiny] = useState("")
    
  

    const handleInputBudgetChange =(e)=>{
        setBudget(e.target.value);
    }
    const handleInputOrigin =(e)=>{
        setOrigin(e.target.value);
        
    }
    const handleInputDestiny =(e)=>{
        setDestiny(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const timeStart= startDate.getTime() 
        const timeFinish= endDate.getTime()
        const totalTime= (timeFinish -timeStart)/(1000*60*60*24)
        setOnsubmit(true)
        setDays(totalTime)
        
        
    }
    console.log(days)

    return (
        <div >
            <h2 className="d-flex justify-content-center mt-3">Create a new Budget</h2>
            
            <form className="InputForm-form" onSubmit={handleSubmit}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Your Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="name"
                            aria-label="name"
                            aria-describedby="basic-addon1"
                            
                            />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Your email"
                            aria-label="Your email"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Budget Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Trip to Berlin"
                            aria-label="Trip name"
                            aria-describedby="basic-addon1"
                            
                            />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Your budget</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                        aria-label="budget" 
                        type='number'
                        onChange={handleInputBudgetChange}/>
                        <InputGroup.Append>
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Origin Country</InputGroup.Text>
                        </InputGroup.Prepend>
                
                        <Form.Control  
                        as="select" 
                        value={origin}
                        onChange={handleInputOrigin} 
                        defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>

                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Country Destination</InputGroup.Text>
                        </InputGroup.Prepend>
                
                        <Form.Control  
                        as="select" 
                        value={destiny}
                        onChange={handleInputDestiny} 
                        defaultValue="Choose...">
                        
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>

                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>People</InputGroup.Text>
                        </InputGroup.Prepend>
                
                        <Form.Control  as="select" defaultValue="number of people">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>

                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text >Depart Day</InputGroup.Text>
                        </InputGroup.Prepend>
                        
                        
                        <DatePicker className="mr-10"
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat="dd/MM/yyyy"

                        />

                        <InputGroup.Prepend>
                            <InputGroup.Text>Return Day</InputGroup.Text>
                        </InputGroup.Prepend>
                        
                        
                            <DatePicker wrapperClassName="datePicker"
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        dateFormat="dd/MM/yyyy"
                        />
                        

                    </InputGroup>
                    
                   

                
                <Button type="submit" variant="primary">Send</Button>{' '}

            
            </form>
            <h1></h1>
            
            <div>
            {
                onSubmit &&
                <DataReturn budget={budget} origin={origin} destiny={destiny}/>
            }
            </div>
        </div>
    );




}