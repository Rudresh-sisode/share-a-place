import {Modal} from './UI/Model';
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
        const model= new Modal('loading-modal-content','Loading location - Please wait');
        model.show();//loading-modal-content
        navigator.geolocation.getCurrentPosition(successResult => {
            model.hide();
            const coordinates ={
                lat:successResult.coords.latitude ,
                lng:successResult.coords.longitude
            };
            console.log('my coordinate ', coordinates);
        }, error =>{
            model.hide();
            alert("couldn't locate your unfortunately. please come after one");
        });
    }

    findAddressHandler(){}
}
const placeHolder=new PlaceFinder();
