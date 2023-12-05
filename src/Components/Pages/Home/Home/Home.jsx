import { useContext } from "react";
import Banner from "../../Banner/Banner";
import Aboutus from "../About/Aboutus";
import Services from "../Services/Services";
import { AuthContext } from "../../../../Authentication/Authuser/Authinfo";

export default function Home() {

    return (
        <div>
            <Banner></Banner>
            <Aboutus></Aboutus>
            <Services></Services>
        </div>
    )
}
