import React from "react";
const Introduction = () => {
    const imageStyles = { width: 500, height: 600 };
    return (
        <>
            {/* <div className="intro-wrapper-1">
                <div className="intro-head">
                    <div >Hey There,</div>
                    <div >I'm Siddharth</div>
                </div>
                <div className="intro-def">
                    <div >I'm a practicing Web Developer</div>
                    <div >And I love developing websites.</div>
                </div>
            </div>
            <div className="intro-wrapper-2">
                <div>

                </div>
                <div>
                    <img style={imageStyles} className="intro-img" src={require('../Images/photo frame.png')} alt="my-intro" /> 
                </div>
                <div>Hello</div>
            </div> */}
            <div className="intro-wrapper-1">
                <div className="intro-head">
                    <div >Hey There,</div>
                    <div >I'm Siddharth</div>
                </div>
                <div>
                    <img style={imageStyles} className="intro-img" src={require('../Images/photo frame.png')} alt="my-intro" /> 
                </div>
                <div className="intro-def">
                    <div >I'm a practicing Web Developer</div>
                    <div >And I love developing websites.</div>
                </div>
            </div>
        </>
    )
}

export default Introduction;
