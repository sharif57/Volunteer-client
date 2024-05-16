import Card from "../pages/Card";
import Review from "../pages/Review";
import Banner from "./Banner";
import Team from "./Team";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Card></Card>
            <div className="mt-10 w-1/2 mx-auto text-center">
                <h1 className="text-4xl font-bold mb-3">Volunteer Experience Review</h1>
                <p>Although your volunteer experiences have to do with YOU, it is mainly about what you did for OTHERS. Don't forget: this is a mutual experience for both you and the people impacted by your efforts</p>
            </div>
            <Review></Review>
            <Team></Team>
        </div>
    );
};

export default Home;