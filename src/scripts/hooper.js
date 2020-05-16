import Vue from 'vue';
  import { Hooper, Slide} from 'hooper';
  // import 'hooper/dist/hooper.css';

      new Vue({
        el: "#app",
        components: {
            Hooper,
            Slide
            
        },
        data() {
            return {
              hooperSettings: {
                itemsToShow: 1,
                itemsToSlide:1,
                centerMode: true,
                infiniteScroll: true,
                breakpoints: {
                  480: {
                    centerMode: false,
                    itemsToShow: 2,
                    itemsToSlide:2

                  }
                }
              }
            }
          },
    
          methods: {
            slidePrev: function (event) {
              
              this.$refs.carousel.slidePrev();
              
              console.dir(this.$refs);
            },
            slideNext: function (event) {
              
              this.$refs.carousel.slideNext();
            }
          
        
          }
        
    })
  
  