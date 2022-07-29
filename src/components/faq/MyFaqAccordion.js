import React, {useState} from 'react'

const MyFaqAccordion = ({ question, answer }) => {
    const [show, setShow] = useState(false);
    return (
        <>
           <div className="FaqMainHeading">
                <p onClick={() => setShow(!show)}> { show? "➖" : "➕"} </p>
                <h3 className='animationFaqHeding'>{question}</h3>
                   
            </div>
            { show &&  <p className="answers "> {answer} </p> }
         
        </>
    )
}

export default MyFaqAccordion