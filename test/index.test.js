var getMinAngle = require('../index.js');

describe('getMinAngle', function(done){

    
    [[0,0,0],[3,0,90],[3,30,75],[4,0,120],[6,0,180],[7,0,150],[9,0,90],[11,59,5.5]].forEach(function(a){

        it((a[0]+ ":" +a[1]+ " = " + getMinAngle(a[0],a[1])), function(done){
            console.log("Expecting: " + a[2]);
            (getMinAngle(a[0], a[1])).should.equal(a[2]);

            done();
        });
    });
});
