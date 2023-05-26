import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../../assets/home/featured.jpg';
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item  text-gray-100 py-20 my-20">
            <SectionTitle heading={"Featured Item"} subHeading={"check it out"}></SectionTitle>
            <div className="md:flex justify-center items-center py-10  px-32">
                <div>
                    <img src={featuredImg} alt="featuredImg" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2020</p>
                    <p className="uppercase">Where can i get some</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus velit deleniti architecto assumenda ipsa ex suscipit unde cum cumque, in vel autem aspernatur, ab facilis inventore nam placeat quae libero at dolorem nemo maiores aliquid tenetur! Quasi tenetur recusandae architecto unde officiis saepe, commodi odit magni repudiandae perferendis illum similique.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;