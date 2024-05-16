// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";

// const MyCard = () => {

//     const {user} = useContext(AuthContext)
//     const [item, setItem] =useState([])

//     useEffect(() => {
//         fetch(`http://localhost:5000/volunteerInfo/${user?.email}`)
//             .then(res => res.json())
//             .then(data => {
//                 setItem(data);
//             })
//     }, [user])
//     return (
//         <div>
//             {
//                 item?.map(p => (<div key={p._id}>
//                     <h2>hello</h2>
//                 </div>))
//             }
//         </div>
//     );
// };

// export default MyCard;