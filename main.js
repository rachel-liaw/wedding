window.onload=function (){
    const loading = document.querySelector('.loading')
    loading.classList.add('disapear')
    window.setTimeout(()=>{
        loading.style.display = 'none'
        loading.classList.remove('disapear')
    },1000)

}

let cardNo = [4,3,2,1,0]

heroBg = function(){
    const card = document.querySelectorAll('.card-wrapper>.card');
    const windowW = window.screen.width;

    cardNo.forEach((ele, index)=>{
        let z5Number = cardNo[4]
        card[z5Number].style.left = windowW > 768 ? '20%' : '70%'
    })

    cardNo = cardNo.reduce((accu, curr)=> {
        let currAdd = curr + 1
        // [1,2,3,4,0]
        // z-index = 1,2,3,4,5
        if(currAdd > 4) currAdd = 0
        return accu.concat(currAdd)},[])

    

    setTimeout(()=>{
        cardNo.forEach((no, zindex)=>{
            let z1Number = cardNo[0]
            card[z1Number].style.left = windowW > 768 ? '0%' : '50%'
            card[no].style.zIndex = zindex + 1
        })
    }, 500)
    
}

let mobieBgIndex = 0
endMobileBg = function(){
    const cards = document.querySelectorAll('.carousel>.img');

    mobieBgIndex > 2 ?  mobieBgIndex=0 : mobieBgIndex+= 1

    cards.forEach((card, index)=>{
        if (index == mobieBgIndex) cards[index].style.opacity = 1;
        else cards[index].style.opacity = 0;
    })
    
}
// setInterval(()=>{heroBg()}, 3000)
setInterval(()=>{
    heroBg()
    endMobileBg()
}
    , 3000)


    const ctaMobile = document.querySelector('.mobile.cta')
    const carousel = document.querySelector('#carousel')

    document.addEventListener('scroll',()=>{
        let carouselHeight = form.getBoundingClientRect().top;
        let screenWidth = window.screen.width;

        if(screenWidth < 769){
            carouselHeight < 1130 ? 
        ctaMobile.style.display = "none" : ctaMobile.style.display = "flex"
        }
        
    })


    const form = document.querySelector('#form')
    const cta = document.querySelectorAll('.cta')
    const body = document.querySelector('body')
    cta.forEach(()=>{
        addEventListener('click',(e)=>{
            ctaMobile.style.animation = "mobile-button 1s ease-in";
            e.preventDefault();
            window.setTimeout(()=>{
                form.scrollIntoView({
                behavior: 'smooth'
            });
        }, 300)

        window.setTimeout(()=>{
            ctaMobile.style.animation = "";
        }, 1000)
    })
    })
 