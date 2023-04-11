const API_KEY = "23fd3551e9c7e9cdc4f0d9932df347b3"
const API_DNS="https://api.themoviedb.org/3/"

export const categories=[
{
    name:"trending",
    title:"Em Alta",
    path:"/trending/all/week?api_key="+API_KEY+"&language=pt-BR"
},
{
    name:"NetflixOriginals",
    title:"Originais Netflix",
    path:"/discover/tv/week?api_key="+API_KEY+"&with_networks=213"
},
{
    name:"Comedy",
    title:"Comedias",
    path:"/discover/tv/week?api_key="+API_KEY+"&with_networks=213"
},
{
    name:"Romaces",
    title:"Romances",
    path:"/discover/tv/week?api_key="+API_KEY+"&with_networks=213"
},
{
    name:"documentaries",
    title:"documentarios",
    path:"/discover/tv/api_key="+API_KEY+"&with_genres=99"
}
]

export const getMovies = async (path) =>{
    try {
        let url=API_DNS+path
        const response = fetch(url)
        return (await response)
    
}catch(error){
    console.log("error getMovies: ",error)

}}

export default getMovies;