let majorScale = [1,1,0,1,1,1,0];

let minorScale = [1,0,1,1,0,1,1,];


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

            let k = 0;
            for(let l = 0; l<key.length; l++){
                b[k] =  key[l];

                if(majorScale[k] === 1){
                    l++;						 
                }
                k++;
            }
        }  else if (extension[j].localeCompare("minor") === 0){

            let k = 0;
            for(let l = 0; l<key.length; l++){
                b[k] =  key[l];

                if(minorScale[k] === 1){
                    l++;						 
                }
                k++;
            }
        }			
    }
    for(let y=0;y<key.length; y++){
        key[y] = resetkey[y];
    }
}

export default scales;


