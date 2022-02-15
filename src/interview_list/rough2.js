<div className="container">
                <div className="row">
                    <h2 className="Headings">Enter Your details</h2>
                    <form className="formbox" method="POST">
                        <div className="inputbox">
                            <input
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={getUserData}
                                required
                                autocomplete="off" />
                            <span>Enter Your Name</span>
                        </div>

                        <div className="inputbox">
                            <input
                                type="text"
                                name="branch"
                                value={user.branch}
                                onChange={getUserData}
                                required
                                autocomplete="off" />
                            <span>Enter Your Branch</span>
                        </div>

                        <div className="yearbox">
                            <h4>Select your year</h4>
                            <input type="radio" name="year"
                                value="2"
                                onChange={getUserData} />
                            <label for="year">2nd Year</label>
                            <input type="radio" name="year"
                                value="3"
                                onChange={getUserData} />
                            <label for="year">3rd Year</label>
                            <input type="radio" name="year"
                                value="4"
                                onChange={getUserData} />
                            <label for="year">4th Year</label>
                        </div>
                        <div className="jobbox">
                            <h4>Select your profile</h4>
                            <input
                                type="radio"
                                name="job"
                                value="intern"
                                onChange={getUserData} />
                            <label for="job">Internship</label>
                            <input
                                type="radio"
                                value="placement"
                                onChange={getUserData}
                                name="job" />
                            <label for="job">Placement</label>
                        </div>

                        <div className="companybox">
                            <label for="company">Select Your Company</label>
                            <select name="company"
                                value={user.company}
                                onChange={getUserData}>
                                <option value="none">company</option>
                                <option value="microsoft">Microsoft</option>
                                <option value="amazon">amazon</option>
                                <option value="deshaw">De-Shaw</option>
                                <option value="accenture">Accenture</option>
                            </select>
                        </div>
                        <div className="profilebox">
                            <input
                                type="text"
                                name="profile"
                                value={user.profile}
                                onChange={getUserData}
                                required
                                autocomplete="off" />
                            <span>Enter Your Job Profile</span>
                        </div>
                        <div className="linkedinbox">
                            <input
                                type="url"
                                name="linkedin"
                                value={user.linkedin}
                                onChange={getUserData}
                                required
                                autocomplete="off" />
                            <span>Enter Your Linkedin Profile</span>
                        </div>

                        <div className="ytinbox">
                            <input
                                type="url"
                                value={user.yt}
                                onChange={getUserData}
                                name="yt"
                                required
                                autocomplete="off" />
                            <span>Enter Your Youtube or portfolio or resume link</span>
                        </div>

                        <div className="roundbox">
                            <input
                                type="number"
                                name="round"
                                value={user.round}
                                onChange={getUserData}
                                required
                                autocomplete="off" />
                            <span>No of Rounds</span>
                        </div>

                        <div className="codingbox">
                            <textarea
                                name="coding"
                                rows="5" cols="40"
                                value={user.coding}
                                onChange={getUserData}
                                required
                                autocomplete="off"></textarea>
                            <span>Descibe coding round</span>
                        </div>
                        <div className="interview1box">
                            <textarea
                                name="interview1"
                                rows="5" cols="40"
                                value={user.interview1}
                                onChange={getUserData}
                                required autocomplete="off"></textarea>
                            <span>Descibe interview round</span>
                        </div>
                        <div className="interview2box">
                            <textarea
                                name="interview2"
                                rows="5" cols="40"
                                value={user.interview2}
                                onChange={getUserData}
                                required autocomplete="off"></textarea>
                            <span>Descibe interview round</span>
                        </div>

                        <div className="tipsbox">
                            <textarea
                                name="tips"
                                rows="5" cols="40"
                                value={user.tips}
                                onChange={getUserData}
                                required autocomplete="off"></textarea>
                            <span>special tips</span>
                        </div>

                        <div className="submit">
                            {/* <input type="submit" name = "submit"/> */}
                            <button type="button" onClick={postData}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>