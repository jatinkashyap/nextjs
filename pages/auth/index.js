import React from 'react';
import User from '../../components/User';

const authIndexPage = (props) => (
    <div>
        <h1>The Auth Page {props.appName}</h1>
        <User name="jatin" age={29}/>
    </div>
);

authIndexPage.getInitialProps = context => {
    console.log(context);
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({appName : "Auth SuperApp"});
        },1000);
    });
    return promise;
}

export default authIndexPage;