let majorScale = [2,2,1,2,2,2,1];
// let majorScale = [1,1,0,1,1,1,0];

let minorScale = [2,1,2,2,1,2,2,];

// let harmonicMinor = [2,1,2,2,1,3,1,]


let extension = ["major", "minor", "harmonicMinor","dorian"];

let key = ["A","AsBb","B","C","CsDb","D","DsEb","E","F","FsGf","G","GsAb"];
let resetkey = ["A","AsBb","B","C","CsDb","D","DsEb","E","F","FsGf","G","GsAb"];

let scales = {};

for(let i = 0; i<key.length; i++){
    let a = scales[key[i]] = {};
    for(let t=0; t<i; t++){
        let zs = key.shift();
        key = key.concat(zs);
    }

	for(let j = 0; j<extension.length; j++){
    
        let b = a[extension[j]] = [];
        
        if(extension[j].localeCompare("major") === 0){

            generateScale(majorScale, b);

        }  else if (extension[j].localeCompare("minor") === 0){

            generateScale(minorScale, b);

        }			
    }
    for(let y=0;y<key.length; y++){
        key[y] = resetkey[y];
    }
}

function generateScale(scale, ext){
    let k = 0;

    for(let l = 0; l<key.length; l++){

        ext[k] =  key[l];

        l = l+scale[k]-1;

        console.log(scale[k]);
        
        k++;
    }
}

console.log(scales);

export default scales;


