import funcs from "./main"

export default async function bS(speed)
{
    funcs.disable();
    //getting values of bars in arr
    const arr = document.querySelectorAll(".array-bar");

    for(let i = 0; i < arr.length-1; i++){
        
        for(let j = 0; j < arr.length-i-1; j++){
            
            //displaying currently selected elements in yellow
            arr[j].style.backgroundColor = 'yellow';
            arr[j+1].style.backgroundColor = 'yellow';

            //if earlier element greater than later , swap
            if(parseInt(arr[j].style.height) > parseInt(arr[j+1].style.height)){
                
                await funcs.waitforme(speed);
                funcs.swap(arr[j], arr[j+1]);
            }

            
            arr[j].style.backgroundColor = 'cyan';
            arr[j+1].style.backgroundColor = 'cyan';
        }
        arr[arr.length-1-i].style.backgroundColor = 'green';
    }
    arr[0].style.backgroundColor = 'green';

    funcs.enable();
}



