async function insertion(){
    const ele=document.querySelectorAll(".bar");
    ele[0].style.background='green';
    for(let i=1;i<ele.length;i++)
    {
        let key=ele[i].style.height;
        let j=i-1;
        ele[i].style.background='blue';
        await waitforme(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            ele[j].style.background='blue';
            ele[j+1].style.height=ele[j].style.height;
            j--;

            await waitforme(delay);

            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green';
            }
        }
        ele[j+1].style.height=key;
        ele[i].style.background='green';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
    inSortbtn.addEventListener('click', async function(){
        disableSortingBtns();
        disableSizeSlider();
        disableNewArrayBtn();
        await insertion();
        enableSortingBtns();
        enableSizeSlider();
        enableNewArrayBtn();
    });


