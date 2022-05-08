var myWorker = new Worker('worker-bundle.js');
console.log("starting worker");

let invocations = 0 ;

myWorker.addEventListener('message', function(e) {
    document.getElementById('hash').textContent = e.data;
    invocations++;
}, false);

var intervalId = window.setInterval(function(){
    document.getElementById('rate').textContent = (invocations * 10 * 1) + " h/s"; //invoc * 10fps * worker evey 100 hash
    invocations = 0;
  }, 100);

const block = {
    version: 536870912,
    previousblockhash: '0000000000000000000x1CEF1B5ddE14d272B9D95F3a570287C7d2b8C8b8',
    merkleroot: '871148c57dad60c0cde483233b099daa3e6492a91c13b337a5413a4c4f842978',
    time: 1515252561,
    bits: '180091c1'
};
message = {block : block , startNonce : 44500998}
myWorker.postMessage(message);
