//get quote from API
async function getQuote(){
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0?method=getQuote&lan=en&format=json';
    try{
        const response = await fetch(proxyUrl+apiUrl);
        const data = await response.json();
        console.log(data);
    }catch(err){
        getQuote();
        console.log('SomeThing Went to wrong',err);
    }
}
// onLoad
getQuote();