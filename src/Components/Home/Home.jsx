import React from 'react';
import TitleCard from '../TitleCard/TitleCard';
import Banner from '../Banner/Banner';
import ModernCard from '../TitleCard/ModernCard/ModernCard';
import UltraModernCard from '../UltraModernCard/UltraModernCard';


const Home = () => {
    return (
        <div >
            <Banner/>
            <UltraModernCard/>
            <ModernCard/>
         <TitleCard title={"Popular In Here"}/>
         <TitleCard title={"Thrillers"}/>
         <TitleCard title={"Sports"}/>
         <TitleCard title={"Comedies"}/>
         <TitleCard title={"Romantic"}/>
         <TitleCard title={"Documentaries"}/>
         <TitleCard title={"Action & Adventure"}/>
         <TitleCard title={"Netflix Originals"}/>
        </div>
    );
};

export default Home;