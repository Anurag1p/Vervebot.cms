import React from 'react'
import "./cancel.css"
import Haveidea from '../haveIdeacard/Haveidea'


const RefundCancel = () => {


    return (
        <>
            <div className="conatiner-fluid CancellationMain pb-5">
                <div className="container ">
                    <div className="CancellationHeading">
                        <h2 className="CancellationTitle ">Cancellation and Refund</h2>
                    </div>


                    <div className="Cancellation-container">
                        <div className="CancellationText">
                        <p>We want you to be happy with your purchase. If you’re dissatisfied with an item, please mail us for a refund or exchange,
                                    please let us know within 48 hours from the time of advance deposits only.
                                    Otherwise we won’t be able to refund any amount later than that.
                                    All claims must be made to our customer service department within Two (2) days of delivery.
                                    The following policy guidelines apply: Refunds are issued in the form in which payment was made at the time of purchase.
                                    <br /><br />The value of the refund for returns with a receipt will be the price paid on date of payment.
                                    The value will be adjusted to reflect coupons or special offers received at the time of purchase.
                                    <br />Refunds may take up-to 20 days to process in your account.</p>
                                <p>To request a refund, contact our Customer Satisfaction Centre at info@34.203.234.180.
                                    Please provide the complete information in your email.
                                    Customer would be contacted with return authorisation and notify further process.&nbsp;</p>
                                <p>We cannot issue refunds, credits or exchanges for any of the following Scenarios:
                                    <br />When Customer do not mail us for any issues related to the services within 2 days after we have
                                    completed the project and delivered to the customer.<br />Other restrictions may apply.
                                    <br />THIS POLICY IS SUBJECT TO CHANGE AND MAY BE MODIFIED AT THE COMPANY DISCRETION.</p>
                        </div>
                    </div>
                </div>


                <Haveidea />

            </div>
            {/* </div> */}


        </>
    )
}

export default RefundCancel