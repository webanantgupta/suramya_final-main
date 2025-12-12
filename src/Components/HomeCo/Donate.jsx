import { MotionConfig } from "motion/react";
import PageHeader from "../../Common/PageHeader";
import qrcode from "../../assets/qrcode.png"
import * as motion from "motion/react-client";


const Donate = () => {
    return <div>
        <PageHeader title="Donate" />
        <div className="container">
            
            <div>
                <h2 className="text-center my-4">Support a More Inclusive & Mentally Healthy India</h2>
            </div>
            <div className="donate_element">


                <div className="donate_row">




                    <div className="donate_head1 d-flex justify-content-center py-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <div>
                                <h4 className="text-start" style={{ color: "orange" }}>Your contribution helps us run</h4>
                                <p className="mb-0">LGBTQIA+ sensitization programs</p>
                                <p className="mb-0">School life-skills projects</p>
                                <p className="mb-0">Mental health training sessions</p>
                                <p className="mb-0">Transgender welfare initiatives</p>
                                <p className="mb-0">Community support cells</p>
                                <p className="mb-0">Workshops for survivors of emotional abuse</p>
                            </div>
                        </motion.div>

                    </div>

                    <div className="donate_bank d-flex justify-content-center py-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <div>
                                <h4 className="text-start" style={{ color: "orange" }}>Bank Transfer Details</h4>
                                <div className="mt-3">
                                    <p className="mb-0">Account Name: Suramya Life Foundation</p>
                                    <p className="mb-0">Bank: (Add bank name)</p>
                                    <p className="mb-0">Account Number: XXXXXXXX</p>
                                    <p className="mb-0">IFSC: XXXXXXXX</p>
                                    <p className="mb-0">Every contribution counts.</p>
                                    <p className="mb-0">Every contribution creates hope.</p>
                                </div>
                            </div>
                        </motion.div>

                    </div>

                </div>


                <div className="donate_upi my-4">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <div>
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
                    </motion.div>

                </div>

            </div>

        </div>
    </div>
}

export default Donate;