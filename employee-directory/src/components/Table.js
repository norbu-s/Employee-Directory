function Table(props) {
    console.log(props)
    return (
        <table>
            <tr><td>Photo</td><td>First Name</td><td>Last Name</td><td>Phone</td><td>Email</td><td>Location</td><td>Gender</td></tr>
            {
                //js to cycle to all user print another row with first name and last name.(m)
                props.users.map(user => {
                    return (
                        <tr><td>{user.picture.thumbnail}</td><td>{user.name.first}</td><td>{user.name.last}</td><td>{user.phone}</td><td>{user.email}</td><td>{user.location.city}</td><td>{user.gender}</td></tr>
                        )
                    })
            }
        </table>
    )
}

export default Table