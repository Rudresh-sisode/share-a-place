class Model{
    constructor(contentId, fallbackCode){
        this.fallbackCode=fallbackCode;
        this.contentTemplateEl = document.getElementById(contentId);
        this.modelTemplateEl = document.getElementById('modal-template');
    }

    show(){
        //mdn template
        //to check if browser compatiable with template or not
        if('content' in document.createElement('template')){
            //here we are accessing following code
            /*
                <div class="backdrop"></div>
      <div class="modal"></div>
            */
            const modalElements = document.importNode(this.modelTemplateEl, true);
        }
        else{
            //fallback code
            alert(this.fallbackCode);
        }
    }

    hide(){

    }
}