import React from "react";
import mongoLogo from "../Images/mongo db logo.svg";
const Introduction = () => {
    const imageStyles = { width: 500, height: 600 };
    return (
        <>
            <div className="intro-wrapper-1">
                <div className="intro-head">
                    <div >Hey There,</div>
                    <div >I'm Siddharth</div>
                    {/* email area*/}
                    <div style={{ paddingTop: 220 }}>
                        <div className="email-wrapper" style={{ fontSize: 18 }}>sidrai0608@gmail.com</div>
                    </div>
                </div>
                <div>
                    <img style={imageStyles} className="intro-img" src={require('../Images/photo frame.png')} alt="my-intro" />
                </div>
                <div className="intro-def">
                    <div >I'm a practicing Web Developer</div>
                    <div >And I love developing websites.</div>
                <div className="stack-name">
                    <div className="mern-stack">
                        <div><img style={{ width: 35, height: 55 }} src={mongoLogo}></img></div>
                        <div><img className="mern-logo" style={{ width: 45, height: 45,paddingTop:5 }} src={require('../Images/express logo.png')}></img></div>
                        <div><img className="mern-logo" style={{ width: 50, height: 50,paddingTop:5  }} src={require('../Images/react logo.png')}></img></div>
                        <div><img style={{ width: 40, height: 45 ,paddingTop:5 }} src={require('../Images/node logo.png')}></img></div>
                    </div>
                    {/* <div className="mern-stack">
                        <div><img style={{ width: 35, height: 55 }} src={mongoLogo}></img></div>
                        <div><img className="mern-logo" style={{ width: 45, height: 45,paddingTop:5 }} src={require('../Images/express logo.png')}></img></div>
                        <div><img className="mern-logo" style={{ width: 50, height: 50,paddingTop:5  }} src={require('../Images/react logo.png')}></img></div>
                        <div><img style={{ width: 40, height: 45 ,paddingTop:5 }} src={require('../Images/node logo.png')}></img></div>
                    </div> */}
                </div>
                </div>
            </div>
        </>
    )
}

export default Introduction;
