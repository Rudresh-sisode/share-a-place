class PlaceFinder{
    constructor(){
        const addressForm = document.querySelector('form');
        const locateUserBtn = document.getElementById('locate-btn');//locate-btn

        locateUserBtn.addEventListener('click',this.locateUserHandler);
        addressForm.addEventListener('submit',this.findAddressHandler);
    }

    locateUserHandler(){
        //mdn geolocation access for better docs
        if(!navigator.geolocation){
            alert("location feature is not available in your browser\nplease use modern browser");
            return;
        }
        navigator.geolocation.getCurrentPosition(successResult => {
            const coordinates ={
                lat:successResult.coords.latitude ,
                lng:successResult.coords.longitude
            };
            console.log('my coordinate ', coordinates);
        }, error =>{
            alert("couldn't locate your unfortunately. please come after one");
        });
    }

    findAddressHandler(){}
}
const placeHolder=new PlaceFinder();
