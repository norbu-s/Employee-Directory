function Table(props) {
    console.log(props)
    return (
        <table>
            <tr><td>First Name</td><td>Last Name</td></tr>
            {
                //js to cycle to all user print another row with first name and last name.(m)
                props.users.map(user => {
                    return (
                        <tr><td>{user.name.first}</td><td>{user.name.last}</td></tr>
                        )
                    })
            }
        </table>
    )
}

export default Table