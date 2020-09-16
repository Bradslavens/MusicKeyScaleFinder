let majorScale = [1,1,0,1,1,1,0];

let minorScale = [1,0,1,1,0,1,1,];

// now just need to add the rest of the scales .... :/

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
    // console.log(key);
	for(let j = 0; j<extension.length; j++){
        // console.log(j + " ext");
    
        let b = a[extension[j]] = [];
        if(extension[j].localeCompare("major") === 0){
            // console.log(extension[j]);
            // calculate the scale
            let k = 0;
            for(let l = 0; l<key.length; l++){
            b[k] =  key[l];
            // console.log(b[k]); 							 
            if(majorScale[k] === 1){
                l++;						 
            }
            k++;
        }
        //console.log("major");
        }  else if (extension[j].localeCompare("minor") === 0){
            // console.log("minor");		
            // calculate the scale
            let k = 0;
            for(let l = 0; l<key.length; l++){
                b[k] =  key[l];
                // console.log(b[k]); 							 
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
    // console.log(key);
}

export const scaleData = scales;


