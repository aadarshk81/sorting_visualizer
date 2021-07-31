import funcs from "./main"

let fast = 0;

//cyan shows the element that is being compared
//yellow shows the element which is compared to cyan
//red shows the minimum element that will replace cyan
//green shows that element is at its correct sorted position
async function selectionSort(arr, n){

    for(let step = 0; step<n-1; step++){
        //min_idx variable which keeps track of min element present
        let min_idx = step;
        arr[step].style.backgroundColor = "cyan";
        await funcs.waitforme(fast);


        for(let i=step+1; i<n; i++){
            //element being compared to cyan
            arr[i].style.backgroundColor = "yellow";
            await funcs.waitforme(fast);

            //if ith position is minimum than min_idx position
            if(parseInt(arr[i].style.height)<parseInt(arr[min_idx].style.height)){
                //if min idx position is not same as step
                //it means we found an element smaller than min_idx pos
                //so turn the previous min_idx pos as blue
                if(min_idx!==step){
                    arr[min_idx].style.backgroundColor = "blue";
                }
                //and change the min_idx pos to i
                min_idx =i;
                //change the minimum position element to red
                arr[min_idx].style.backgroundColor = "red";
                await funcs.waitforme(fast);
            }else{
                arr[i].style.backgroundColor = "blue";
            }
            
        }
        console.log(min_idx+" "+step);
        await funcs.waitforme(fast);
        //after processed change to green
        arr[step].style.backgroundColor = "green";
        //change the min_idx back to blue
        arr[min_idx].style.backgroundColor = "blue";
        //swap the min_idx position element and step element
        funcs.swap(arr[step],arr[min_idx]);
        await funcs.waitforme(fast);
        //change step element to green
        arr[step].style.backgroundColor = "green";

    }
}
export default async function sS(speed){
    fast = speed;
    funcs.disable();

    //get the elements of the array
    var arr = document.querySelectorAll(".array-bar");
    let n = arr.length;
    /* 
    for(let i=0; i<n; i++)
    {console.log(arr[i].style.height);} */

    //call selectionSort func
    await selectionSort(arr, n);
    /* 
    for(let i=0; i<n; i++)
    {console.log(arr[i].style.height);} */
    funcs.enable();
}