const app =  Vue.createApp({
    data(){
        return{
            url: 'https://vuejs.org/',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img:'assets/1.jpg', isFav: true},
                { title: 'the way of kings', author: 'brandon sanderson', img:'assets/2.jpg', isFav: false},
                { title: 'the final empire', author: 'brandon sanderson', img:'assets/3.jpg', isFav: true}
            ],
            title: 'the final empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y:0
        }
    },
    methods: {
        toogleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e){
            console.log(e,e.type);
            if (data){
                console.log(data);
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toogleFav(book){
            book.isFav = !book.isFav
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')