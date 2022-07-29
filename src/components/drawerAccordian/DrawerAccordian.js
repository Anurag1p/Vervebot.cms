import React, { useState } from 'react'
import './draweraccordian.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'

const DrawerAccordian = (props) => {

    const {title, urlData} = props

    const [accordian, accordianSet] = useState('')
    

    return (
        <div>
            <div className="Accordian_main">
                    <div className='AccordianTitle'>{title}</div> 
                    <div className='AccordianDown'
                            aria-label="toggle" 
                            role='button'
                            tabIndex={0} 
                            onKeyDown={() => accordianSet(s => !s)} 
                            onClick={() => accordianSet(s => !s)} ><FontAwesomeIcon icon={faAngleDown} className="AccordianFa-icons" /></div>
            </div>
            {accordian ?  <div className='AccordianList'>
                  {urlData.map((data) =>(<a href={data.url} >{data.urlName}</a>))}
            </div> : null}
        </div>
    )
}

export default DrawerAccordian