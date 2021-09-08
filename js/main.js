Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
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
        active: 'false',
    },
    methods: {
        prevPhoto(){
            this.counterPhoto -= 1;
            if(this.counterPhoto < 0)
                this.counterPhoto = this.photos.length - 1
            
        },
        nextPhoto(){
            this.counterPhoto += 1;
            if(this.counterPhoto == this.photos.length)
                this.counterPhoto = 0;
            
        },
    }
})