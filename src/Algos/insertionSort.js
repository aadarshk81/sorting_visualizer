import funcs from './main'

let fast=0;

//green for sorted list
//blue for unsorted list
//red for current element for which comparisons need to be done
//yellow for element compared with current element
async function insertionSort(arr,n)
{
    //marking first element in sorted list
    arr[0].style.backgroundColor = 'green';
    for(var i=1;i<n;i++)
    {
        let curr = arr[i].style.height;
        arr[i].style.backgroundColor = 'red';
        await funcs.waitforme(fast);
        let j = i-1;

        //traverse sorted list from behind till current element is small
        while(j>-1 && parseInt(curr)<parseInt(arr[j].style.height))
        {
            //element compared with curr marked as yellow
            arr[j].style.backgroundColor = 'yellow';
            //changing values
            arr[j+1].style.height = arr[j].style.height;
            
            await funcs.waitforme(fast);

            j--;
            
            //marking sorted list as green till ith element
            for(var k=0;k<=i;k++)
            arr[k].style.backgroundColor = 'green';
        }

        //insert current element at its sorted position and mark as green
        arr[j+1].style.height = curr;
        arr[j+1].style.backgroundColor = 'green';

    }
}

export default async function iS(speed){
    fast = speed;
    funcs.disable();        //disabling buttons

    //getting the elements of array
    var arr = document.querySelectorAll(".array-bar");
    let n = arr.length;

    for(let i=0; i<n; i++)
    {console.log(arr[i].style.height);}

    await insertionSort(arr, n);

    for(let i=0; i<n; i++)
    {console.log(arr[i].style.height);}

    funcs.enable();     //enabling buttons
}