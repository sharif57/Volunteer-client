
const Review = () => {
    return (
        <div className="lg:flex justify-center items-center gap-4 mt-10 mb-6">
            <img className="lg:size-1/2" src="https://i.ibb.co/YX3Hpr1/helping-hands-volunteer-support-community-service-graphic.jpg" alt="" />
            <div className="bg-slate-200">
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Volunteer Opportunities
                    </div>
                    <div className="collapse-content">
                        <p> This name is straightforward and effectively communicates the purpose of the home section. It clearly indicates to users that they can find various volunteer opportunities on the website</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Get Involved
                    </div>
                    <div className="collapse-content">
                        <p>This name is inviting and encourages users to engage with the platform. It effectively conveys the message that the website is a place where users can get involved in volunteer activities.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Make a Difference
                    </div>
                    <div className="collapse-content">
                        <p>This name is inspirational and highlights the impact that volunteering can have on communities. It motivates users to explore the website with the intention of making a positive difference.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Community Impact
                    </div>
                    <div className="collapse-content">
                        <p>This name emphasizes the broader impact of volunteering on communities and society. It positions the website as a platform where users can contribute to meaningful social change.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Helping Hands
                    </div>
                    <div className="collapse-content">
                        <p> This name is warm and inviting, evoking the image of people coming together to support one another. It conveys the message that users can offer their assistance through volunteer work.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;