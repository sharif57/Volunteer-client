import Card from "../pages/Card";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <h1 className="text-3xl">home section</h1>
            <Banner></Banner>
            <Card></Card>
        </div>
    );
};

export default Home;