import funcs from "./main"

let fast = 10;

async function selectionSort(arr, n){
    for(let step = 0; step<n-1; step++){
        let min_idx = step;
        arr[step].style.backgroundColor = "cyan";
        await funcs.waitforme(fast);
        for(let i=step+1; i<n; i++){
            arr[i].style.backgroundColor = "cyan";
            await funcs.waitforme(fast);
            if(parseInt(arr[i].style.height)<parseInt(arr[min_idx].style.height)){
                if(min_idx!==step){
                    arr[min_idx].style.backgroundColor = "blue";
                }
                min_idx =i;
                arr[min_idx].style.backgroundColor = "red";
                await funcs.waitforme(fast);
            }else{
                arr[i].style.backgroundColor = "blue";
            }
            
        }
        console.log(min_idx+" "+step);
        await funcs.waitforme(fast);
        arr[step].style.backgroundColor = "blue";
        arr[min_idx].style.backgroundColor = "blue";
        funcs.swap(arr[step],arr[min_idx]);
    }
}
export default async function sS(speed){
    fast = speed;
    funcs.disable();
    var arr = document.querySelectorAll(".array-bar");
    let n = arr.length;
    for(let i=0; i<n; i++)
    {console.log(arr[i].style.height);}
    await selectionSort(arr, n);
    for(let i=0; i<n; i++)
    {console.log(arr[i].style.height);}
    funcs.enable();
}