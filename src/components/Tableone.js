import React from 'react'

const users = [
    {
        id:"1",
        name:"srujan",
        place:"bangalore"
},
{
        id:"2",
        name:"raj",
        place:"Hyd"
},
{
    id:"3",
        name:"suresh",
        place:"itpl"
}
]
const Tableone = () => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>
                        name
                    </th>
                    <th>
                        place
                    </th>
                </tr>
            </thead>
           <tbody>
                {users.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.place}</td>
                    </tr>
                ))}
           </tbody>
            
        </table>
    </div>
  )
}

export default Tableone