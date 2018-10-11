import React from 'react';

const user = (props) => (
    <div>
        <h1>{props.name}</h1>
        <p>{props.age}</p>
        <style jsx>{`
            div {
                border : 1px solid #eee;
                box-shadow : 0 2px 3 px #ccc;
                padding : 20 px;
                text-align : center;
            }
        `}</style>
    </div>
)

export default user;