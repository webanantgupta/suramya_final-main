import PageHeader from "../../Common/PageHeader";
import qrcode from "../../../public/img/homeEventImg/qrcode.png"


const Donate = () => {
    return <div>
        <PageHeader title="Donate" />
        <div className="container">
            <div>
                <h2 className="text-center my-4">Support a More Inclusive & Mentally Healthy India</h2>
            </div>
            <div className="donate_element">


                <div className="donate_row">

                    <div className="donate_head1">
                        <h4 className="text-start" style={{ color: "orange" }}>Your contribution helps us run</h4>
                        <p>LGBTQIA+ sensitization programs</p>
                        <p>School life-skills projects</p>
                        <p>Mental health training sessions</p>
                        <p>Transgender welfare initiatives</p>
                        <p>Community support cells</p>
                        <p>Workshops for survivors of emotional abuse</p>
                    </div>

                    <div className="donate_bank">
                        <h4 className="text-start" style={{ color: "orange" }}>Bank Transfer Details</h4>
                        <div className="mt-3">
                            <p>Account Name: Suramya Life Foundation</p>
                            <p>Bank: (Add bank name)</p>
                            <p>Account Number: XXXXXXXX</p>
                            <p>IFSC: XXXXXXXX</p>
                            <p>Every contribution counts.</p>
                            <p>Every contribution creates hope.</p>
                        </div>
                    </div>

                </div>


                <div className="donate_upi my-4">
                    <h4 className="text-center" style={{ color: "orange" }}>Donate via UPI</h4>
                    <div className="donate_upi_element">
                        <div className="upi_element1">
                    <p className="mt-2">UPI ID: (Add your UPI ID)</p>
                        </div>
                        <div className="qrcode ">
                            <img src={qrcode} alt="qrcode" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
}

export default Donate;