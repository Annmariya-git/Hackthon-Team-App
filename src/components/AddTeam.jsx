import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import NavTeam from './NavTeam'




const AddTeam = () => {

    const [input, changeInput] = useState({

        teamid: "",
        teamname: "",
        teamleadername: "",
        leaderemail: "",
        leaderphone: "",
        collegename: "",
        numberofmembers: "",
        projecttitle: "",
        problemstatementtrack: "",
        track: "",
        technologystack: "",
        mentorname: "",
        registrationdate: "",
        tablenumber: ""

    })

    const inputHandler = (event) => {

        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readvalue = () => {

        console.log(input)

        axios.post("https://host-demo-app.onrender.com/api/add-team", input).then(

            (response) => {

                console.log(response.data)
            }
        ).catch()

    }


    return (
        <div>

            
            <NavTeam />
            <div className="container">

                <div className="row">

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row">


                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">teamid</label>
                                <input type="text" className="form-control" name="teamid" value={input.teamid} onChange={inputHandler}/>
                            </div>


                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">teamname</label>
                                <input type="text" className="form-control" name="teamname" value={input.teamname} onChange={inputHandler}/>
                            </div>


                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">teamleadername</label>
                                <input type="text" className="form-control" name="teamleadername" value={input.teamleadername} onChange={inputHandler}/>
                            </div>


                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">leaderemail</label>
                                <input type="email" className="form-control" name="leaderemail" value={input.leaderemail} onChange={inputHandler}/>
                            </div>


                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">leaderphone</label>
                                <input type="text" className="form-control" name="leaderphone" value={input.leaderphone} onChange={inputHandler}/>
                            </div>


                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">collegename</label>
                                <input type="text" className="form-control" name="collegename" value={input.collegename} onChange={inputHandler}/>
                            </div>


                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">numberofmembers</label>
                                <input type="text" className="form-control" name="numberofmembers" value={input.numberofmembers} onChange={inputHandler}/>
                            </div>


                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">projecttitle</label>
                                <input type="text" className="form-control" name="projecttitle" value={input.projecttitle} onChange={inputHandler}/>
                            </div>


                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">problemstatementtrack</label>
                                <input type="text" className="form-control" name="problemstatementtrack" value={input.problemstatementtrack} onChange={inputHandler}/>
                            </div>


                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">track</label>
                                <input type="text" className="form-control" name="track" value={input.track} onChange={inputHandler}/>
                            </div>


                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">technologystack</label>
                                <input type="text" className="form-control" name="technologystack" value={input.technologystack} onChange={inputHandler}/>
                            </div>


                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">mentorname</label>
                                <input type="text" className="form-control" name="mentorname" value={input.mentorname} onChange={inputHandler}/>
                            </div>


                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">registrationdate</label>
                                <input type="date" className="form-control" name="registrationdate" value={input.registrationdate} onChange={inputHandler}/>
                            </div>


                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">tablenumber</label>
                                <input type="text" className="form-control" name="tablenumber" value={input.tablenumber} onChange={inputHandler}/>
                            </div>


                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <br></br>

                                <button className="btn btn-success" onClick={readvalue}>Submit</button>

                            </div>


                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AddTeam