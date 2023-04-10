const API_KEY = "23fd3551e9c7e9cdc4f0d9932df347b3"
const API_DNS="https://api.themoviedb.org/3/"

const categories=[
{
    name:"trending",
    titulo:"Em Alta",
    path:"/trending/all/week?api_key={API_KEY}&language=pt-BR"
},
{
    name:"documentaries",
    titulo:"documentarios",
    path:"/discover/tv/api_key="+API_KEY+"&with_genres=99"
}
]

const getMovies = (category) =>{
    let url=''
    categories.foreach((item)=>{
        if(item.name==category){
            url= API_DNS+item.path
        }
    })
    return API_DNS+categories[0].path
}

export default getMovies;