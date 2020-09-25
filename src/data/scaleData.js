let majorScale = [2,2,1,2,2,2,1];

let minorScale = [2,1,2,2,1,2,2,];

let harmonicMinor = [2,1,2,2,1,3,1,];

let dorian = [2,1,2,2,2,1,2,];

let minorPentatonic = [3,2,2,3,2];

let minorBlues = [3,2,1,1,3,2,];

let japanese = [1,4,2,3,2];

let majorPentatonic = [2,2,3,2,3];

let majorBlues = [2,1,1,3,2,1,3];

let mixolydian = [2,2,1,2,2,1,2];

let klezmer = [2,1,3,1,2,1,2,];


let extension = ["major", "minor", "harmonicMinor","dorian","minorPentatonic","minorBlues","japanese","majorPentatonic","majorBlues",];

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

        }   else if (extension[j].localeCompare("minor") === 0){

            generateScale(minorScale, b);

        }	else if (extension[j].localeCompare("harmonicMinor") === 0){

            generateScale(harmonicMinor, b);

        }	else if (extension[j].localeCompare("dorian") === 0){

            generateScale(dorian, b);

        }	else if (extension[j].localeCompare("minorPentatonic") === 0){

            generateScale(minorPentatonic, b);

        }	else if (extension[j].localeCompare("minorBlues") === 0){

            generateScale(minorBlues, b);

        }	else if (extension[j].localeCompare("japanese") === 0){

            generateScale(japanese, b);

        }	else if (extension[j].localeCompare("majorPentatonic") === 0){

            generateScale(majorPentatonic, b);

        }	else if (extension[j].localeCompare("majorBlues") === 0){

            generateScale(majorBlues, b);

        }	else if (extension[j].localeCompare("mixolydian") === 0){

            generateScale(mixolydian, b);

        }	else if (extension[j].localeCompare("klezmer") === 0){

            generateScale(klezmer, b);

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


