import React,{Component} from 'react';
import Link from 'next/link';
import Router from 'next/router';

class IndexPage extends Component {

    static getInitialProps(context){
        console.log(context);
        const promise = new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve({appName : "SuperApp"});
            },1000);
        });
        return promise
    }

    render(){
        return (
            <div>
                <h1>The Main Page {this.props.appName}</h1>
                <p><Link href="/auth"><a>Auth</a></Link></p>
                <button onClick={() => {Router.push('/auth')}}>Auth Button</button>
            </div>
        );
    }
}

export default IndexPage;