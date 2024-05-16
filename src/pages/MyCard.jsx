import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

const MyCard = () => {
    const { user } = useContext(AuthContext)
    const [item, setItem] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`http://localhost:5000/volunteerInfo/${user?.email}`)
            setItem(data)
        }
        getData()
    }, [user])

    console.log(item);
    return (
        <div>
            <h2>hello {item.length}</h2>
        </div>
    );
};

export default MyCard;