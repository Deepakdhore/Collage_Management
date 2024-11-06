import React from "react";

function Header({ name })
{
    return(
        <div className="text-center" style={{background:'yellow',padding:20}}>
            <h1>Welcome to Courses</h1>
            <h1>learn code with {name}</h1>

        </div>
    );
}

export default Header;