import React from 'react'
import './icms.css'

const Icmscard = (props) => {
    const { icmsCardTitle, icmsCardDsc, icmsListTitle1, current, icmsListTitle2, problem, icmsListTitle3, unique } = props;

    return (
        <>

            <div className="container">

                <div className="icmsCards">
                    <div className="icmscard ">

                        <h2 className="icmsCardTitle ">Verve-ICMS(Our Crown)</h2>
                        <p className="icmsCardDsc">Unique approach to the biggest challenges faced by
                            every company dealing in inventory management of their stocks.</p>
                        <ul className="icsmUnorderList">
                            <li className="icmsListTitle "> Current Approach </li>
                            <p className="liDsc">Hirinng in bulk to do manual data entry. Leaving the
                                inventory unregulated.</p>
                            <li className="icmsListTitle">Problem with Current Approach</li>
                            <p className="liDsc">Hefty Salaries just to do data entryHuge losses due towastage (Expired/Rotten Products) Human Errors.</p>
                            <li className="icmsListTitle">Our Unique Approach</li>
                            <p className="liDsc">Provide A based software to manage inventory.
                                Reducing the cost by more than 90%</p>
                        </ul>
                    </div>
                    <div className="icmscard ">

                        <h2 className="icmsCardTitle ">ICMS Scope</h2>
                        <p className="icmsCrdDsc">Every Business which deals in physical products. Grocery Chains,
                            Warehouses, Liquor stores, Apparels Store, Nutrition Stores, Factories etc.</p>

                        <h2 className="icmsCardTitle ">Just one! Only one. </h2>
                        <p className="icmsCrdDsc">Our Survey shows that old school approach is still
                            being used in this technology driven era which Verve ICMS commits to change.</p>
                        <p className="icmsCrdDsc">Our Solution is the only solution currently in the market to
                            achieve high level of optimisation in the field of inventory management.</p>



                    </div>
                </div>

            </div>

        </>
    )
}

export default Icmscard