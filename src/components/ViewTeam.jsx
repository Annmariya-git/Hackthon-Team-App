import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavTeam from './NavTeam'


const ViewTeam = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.get("http://localhost:3000/view-team")
            .then((response) => {

                changeData(response.data)

            })
            .catch((error) => {

                console.log(error)

            })

    }


    useEffect(() => {

        fetchData()

    }, [])


    return (

        <div>

            <NavTeam />

            <div className="container">

                <div className="row">

                    <div className="col-12">


                        <table className="table table-bordered">

                            <thead>

                                <tr>

                                    <th>Team ID</th>
                                    <th>Team Name</th>
                                    <th>Team Leader Name</th>
                                    <th>Leader Email</th>
                                    <th>Leader Phone</th>
                                    <th>College Name</th>
                                    <th>Number of Members</th>
                                    <th>Project Title</th>
                                    <th>Problem Statement Track</th>
                                    <th>Track</th>
                                    <th>Technology Stack</th>
                                    <th>Mentor Name</th>
                                    <th>Registration Date</th>
                                    <th>Table / Station Number</th>

                                </tr>

                            </thead>


                            <tbody>

                                {
                                    data.map((value, index) => (

                                        <tr key={index}>

                                            <td>{value.teamid}</td>
                                            <td>{value.teamname}</td>
                                            <td>{value.teamleadername}</td>
                                            <td>{value.leaderemail}</td>
                                            <td>{value.leaderphone}</td>
                                            <td>{value.collegename}</td>
                                            <td>{value.numberofmembers}</td>
                                            <td>{value.projecttitle}</td>
                                            <td>{value.problemstatementtrack}</td>
                                            <td>{value.track}</td>
                                            <td>{value.technologystack}</td>
                                            <td>{value.mentorname}</td>
                                            <td>{value.registrationdate}</td>
                                            <td>{value.tablenumber}</td>

                                        </tr>

                                    ))
                                }


                            </tbody>


                        </table>


                    </div>

                </div>

            </div>

        </div>

    )
}

export default ViewTeam