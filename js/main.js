Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        counterPhoto: 0,
        photos: [
            'img/django.jpg',
            'img/hateful-eight.jpg',
            'img/Kill-Bill-Vol-2.jpg',
            'img/resevoir-dogs.jpg',
        ]
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
            
        }
    }
})