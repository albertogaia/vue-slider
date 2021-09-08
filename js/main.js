Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    mounted() {
        this.startRotation();
        document.addEventListener("keyup", this.changePhotoArrow);
    },
    data: {
        counterPhoto: 0,
        imgPath: 'img/',
        photos: [
            'django',
            'hateful-eight',
            'Kill-Bill-Vol-2',
            'resevoir-dogs',
        ],
        imgExtension: '.jpg',
        active: false,
        timer: null,
    },

    methods: {
        prevPhoto(){
            this.counterPhoto -= 1;
            if(this.counterPhoto < 0)
                this.counterPhoto = this.photos.length - 1;
    
            this.resetRotation();
        },
        nextPhoto(){
            this.counterPhoto += 1;
            if(this.counterPhoto == this.photos.length)
                this.counterPhoto = 0;
            
            this.resetRotation();
        },

        changePhotoArrow(){
            if (event.keyCode == 37) {
                this.counterPhoto -= 1;
                if(this.counterPhoto < 0)
                this.counterPhoto = this.photos.length - 1;
                this.resetRotation();

            } else if (event.keyCode == 39) {
                this.counterPhoto += 1;
                if(this.counterPhoto == this.photos.length)
                this.counterPhoto = 0;
                this.resetRotation();
            }
        },

        startRotation(){
            this.timer = setInterval(this.nextPhoto, 3000);
        },

        stopRotation(){
            clearTimeout(this.timer);
            this.timer = null;
        },

        resetRotation(){
            clearTimeout(this.timer);
            this.startRotation();
        },

        selectedImg(i){
            this.counterPhoto = i;
            this.resetRotation();
        },
        mouseOver(){
            this.active = !this.active;
        },
        mouseOut(){
            this.active = false;
        }
    }
})