import React from 'react';
import './Blogs.css';
import jsNode from '../../../images/JS Vs Node.jpg';
import nodeMongodb from '../../../images/node and mongodb.jpg';
import sqlNosql from '../../../images/SQL Vs NoSQL.png';
import jwt from '../../../images/jwt.png'

const Blogs = () => {
    return (
        <div className='md:ml-20 ml-5 my-14 md:mr-20 mr-5'>
            <article className='grid lg:grid-cols-2 grid-cols-1 gap-10 mb-12'>
                <div>
                    <img className='rounded-lg' src={jsNode} alt="" />
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-2xl font-semibold mb-2'>What is the difference between JavaScript and NodeJS?</h1>
                    <p className='text-lg'><span className='font-semibold'>Answer: </span>Javascript is a programming language that is used for writing scripts on the website. On the other hand NodeJS is a Javascript runtime environment. Javascript is basically used on the client-side but, NodeJS is mostly used on the server-side. Javascript is used in frontend development but, NodeJS is used in server-side development. Javascript is a newer version of the ECMA script that runs on Chrome's V8 engine, which is written in C++ and, NodeJS uses C, C++, and JavaScript.</p>
                </div>
            </article>

            <article className='grid lg:grid-cols-2 grid-cols-1 gap-10 mb-12'>
                <div className='flex flex-col lg:order-1 order-2 justify-center'>
                    <h1 className='text-2xl font-semibold mb-2'>When should you use NodeJS?</h1>
                    <p className='text-lg'><span className='font-semibold'>Answer: </span>To build Real-time applications NodeJS is a perfect choice. As we have found that Node.js can ensure great speed and performance, one of the textbook's Node.js use cases is real-time messaging or chatting. We can also use NodeJS for IoT applications, Collaborative tools, Data streaming applications, Applications relying on scalability, etc.</p>
                    <h1 className='text-2xl font-semibold mb-2 mt-3'>When should you use mongoDB?</h1>
                    <p className='text-lg'><span className='font-semibold'>Answer: </span>NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases. MongoDB is an excellent choice if you need to: Support rapid iterative development. Enable collaboration of a large number of teams.</p>
                </div>
                <div className='lg:order-2 order-1'>
                    <img className='rounded-lg border-2 border-slate-200' src={nodeMongodb} alt="" />
                </div>
            </article>

            <article className='grid lg:grid-cols-2 grid-cols-1 gap-10 mb-12'>
                <div>
                    <img className='rounded-lg' src={sqlNosql} alt="" />
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-2xl font-semibold mb-2'>What is the difference between JavaScript and NodeJS?</h1>
                    <p className='text-lg'><span className='font-semibold'>Answer: </span>SQL databases are categorized as Relational Database Management System (RDBMS). On the other hand NoSQL databases are categorized as Non-relational or distributed database system. SQL databases are vertically scalable but, NoSQL databases are horizontally scalable. SQL databases are not best suited for hierarchical data storage but, NoSQL databases are best suited for hierarchical data storage.</p>
                </div>
            </article>

            <article className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                <div className='flex flex-col lg:order-1 order-2 justify-center'>
                    <h1 className='text-2xl font-semibold mb-2'>What is the purpose of jwt and how does it work?</h1>
                    <p className='text-lg'><span className='font-semibold'>Answer: </span>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.JWT is mainly used for authorization purpose.
                    <br />
                    When client login with email and password then server creates a token for client. Then server send this token to the client and, client stores the token on either localStorage or Browser cookie. Next time the client makes a request, a copy of the token is send to the server for the authorization. Then server verifies the token before giving the authorization. Then server response to the clients request. A JWT token made up of three parts: 1.Header, 2.Payload and, 3.Signature</p>
                </div>
                <div className='lg:md:order-2 order-1'>
                    <img className='rounded-lg' src={jwt} alt="" />
                </div>
            </article>
        </div>
    );
};

export default Blogs;