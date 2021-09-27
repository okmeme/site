import React from 'react';
import logo from './logo.svg';
import './App.css';
// import grpc from 'grpc-web';
// import protoLoader from '@grpc/proto-loader';
import { HelloRequest } from '@okmeme/shared';
import { GreeterClient } from '@okmeme/shared';


// const PROTO_PATH = __dirname + '/../node_modules/@okmeme/shared/protos/helloworld.proto';
// const packageDefinition = protoLoader.loadSync(
//   PROTO_PATH,
//   {
//     keepCase: true,
//     longs: String,
//     enums: String,
//     defaults: true,
//     oneofs: true
//   });
// const hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;
const request = new HelloRequest();
const target = 'http://localhost:9999';
// const target = 'http://localhost:50051'; 
const user = 'asdf';
request.setName(user);
var res = '';
const client = new GreeterClient(target);
console.log(client)
console.log(request)
client.sayHello(request, {}, (err, response) => {
  console.log(err)
  console.log(response);
  res = response.getMessage();
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{res}</p>
      </header>
    </div>
  );
}

export default App;
