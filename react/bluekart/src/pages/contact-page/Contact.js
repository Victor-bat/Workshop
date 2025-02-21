import React from 'react'

const Contact = () => {
    return (
        <div>
            <section className="contact-form">
                <section className="my-3">
                    <div className="container my-5">
                        <h3 className="heading mb-5">Contact Form</h3>
                        <form>
                            <div className="form-row mb-4">

                                <div className="col-xl-6 col-lg-6">
                                    <label htmlFor="firstname" className="name">First name</label>
                                    <input type="text" className="form-control" placeholder="First name" />
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <label htmlFor="lastname" className="name">Last name</label>
                                    <input type="text" className="form-control" placeholder="Last name" />
                                </div>

                            </div>

                            <div className="form-group">
                                <label htmlFor="emailid">Email</label>
                                <input type="email" className="form-control" id="formGroupExampleInput" placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mobilenum">Mobile no.</label>
                                <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Enter your Mobile no." />
                            </div>
                            
                            <div className='col-lg-6 col-md-6 mb-3'>
                                <label className="form-group" name="gender">Gender</label>
                                <div>
                                <input type="radio" id="male" name="gender" value="Male"/>
                                <label htmlFor="male">Male</label>
                                </div>
                                <div>
                                <input type="radio" id="female" name="gender" value="Female"/>
                                <label htmlFor="female">Female</label>
                                </div>
                                <div>
                                <input type="radio" id="thirdgender" name="gender" value="Third Gender"/>
                                <label htmlFor="thirdgender">Third Gender</label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 mb-3">
                                <label htmlFor="department" className="form-label">Department</label>
                                <select className="form-control" name="department">
                                    <option value="csd">CSD</option>
                                    <option value="bt">BT</option>
                                    <option value="cse">CSE</option>
                                    <option value="it">IT</option>
                                    <option value="ece">ECE</option>
                                </select>
                            </div>
                    
                            <div className="form-group">
                                <label htmlFor="feedback">Feed back</label>
                                <textarea rows={4} className="form-control" id="formGroupExampleInput" placeholder="Enter your Feed back" ></textarea>
                            </div>
                            <button className="btn mt-3 btn-primary" type="submit">Submit</button>
                        </form>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Contact