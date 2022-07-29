import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faLightbulb, faChartColumn, faBriefcase, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'

const Section6CardsData = [
    {
        icon:  faBook ,
        title: "Feasibility Study or Planning",
        dsc: "It defines the problem and scope of existing system and also overview the new system and determine its objectives."
    },
    {
        icon:  faLightbulb ,
        title: "Analysis and Specification",
        dsc: "Examine the information needs of end-user and enhances the system goal."
    },
    {
        icon:  faChartColumn ,
        title: "System Design",
        dsc: "It includes the design of application, network, databases, user interfaces, and system interfaces."
    },
    {
        icon: faBriefcase ,
        title: "Implementation",
        dsc: "Implement the design into source code through coding."
    },
    {
        icon:  faScrewdriverWrench ,
        title: "Maintenance/Support",
        dsc: "It includes all the activities such as phone support or physical on-site support for users that is required once the system is installing."
    },


]





const Section6Cards = () => {
    return (
        <>
            {Section6CardsData.map((items) =>
            (
                <div className="feasible border border-info ">
                    <div className="suv-divisions  ">
                        <div className="feasible-icon"><FontAwesomeIcon className='faIcon headingAnimation' icon={items.icon} />
                        </div>
                        <h2 className="feasble-title headingAnimation ">{items.title}</h2>
                    </div>
                    <div className="feasible-content">
                        <p className="feasible-dsc headingAnimation">
                            {items.dsc}</p>
                    </div>
                </div>
            ))}

        </>
    )
}

export default Section6Cards