import React from "react";
const Introduction = () => {
    const imageStyles = { width: 550, height: 650 };
    return (
        <>
            <div className="intro-wrapperss">
                <div className="intro-head">
                <div className="intro-info">
                    <div className="intro-name">
                    <div >Hey There,<br/>I'm Siddharth</div>
                    </div>
                    <div className="intro-def">
                    <div >I'm a practicing Web Developer</div>
                    <div >And I love developing websites.</div>
                    </div>
                </div>
                    {/* email area*/}
                    <div style={{ paddingTop: 220 }}>
                        <div className="email-wrapper" style={{ fontSize: 18 }}>sidrai0608@gmail.com</div>
                    </div>
                {/* <div className="stack-name">
                    <div className="mern-stack">
                        <div><img style={{ width: 35, height: 55 }} src={mongoLogo}></img></div>
                        <div><img className="mern-logo" style={{ width: 45, height: 45,paddingTop:5 }} src={require('../Images/express logo.png')}></img></div>
                        <div><img className="mern-logo" style={{ width: 50, height: 50,paddingTop:5  }} src={require('../Images/react logo.png')}></img></div>
                        <div><img style={{ width: 40, height: 45 ,paddingTop:5 }} src={require('../Images/node logo.png')}></img></div>
                    </div>
                </div> */}
                </div>
                <div className="intro-image">
                    <img style={imageStyles} className="intro-img" src={require('../Images/final photo frame.jpg')} alt="my-intro" />
                </div>
                {/* <div className="intro-def">
                    <div >I'm a practicing Web Developer</div>
                    <div >And I love developing websites.</div>
                
                </div> */}
            </div>
            <hr className="hr" />
        </>
    )
}

export default Introduction;
