import Stripe from "./Stripe"
import express from './../assets/images/express.png';
import firebase from './../assets/images/firebase.png';
import mongodb from './../assets/images/mongodb.png';
import next from './../assets/images/next.png';
import node from './../assets/images/node.png';
import react from './../assets/images/react.png';

function Stripes() {
  var data = [
    {url: mongodb, number: 98},
    {url: express, number: 98},
    {url: react, number: 98},
    {url: node, number: 98},
    {url: firebase, number: 98},
    {url: next, number: 98},
  ]
  return (
    <div className="mt-10 flex items-center justify-center">
      {data.map((elem, index) => (
        <Stripe val={elem} key={index} />
      ))}
    </div>
  )
}

export default Stripes