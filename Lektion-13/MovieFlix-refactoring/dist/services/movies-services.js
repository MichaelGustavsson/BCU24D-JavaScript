export const listMovies = async () => {
    const key = 'c225640b9109317dc84c9f661f0ca0ba';
    const url = `https://api.themoviedb.org/3/discover/movie?page=1&api_key=${key}`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const body = await response.json(); //json() hämtar hela body paketet i http response paketet
            const movies = body.results;
            return movies;
        }
        else {
            throw new Error('Det gick galet!');
        }
    }
    catch (error) {
        throw new Error(error);
    }
};
export const searchMovies = async (filter) => {
    if (filter) {
        const key = 'c225640b9109317dc84c9f661f0ca0ba';
        const url = `https://api.themoviedb.org/3/search/movie?query=${filter}&api_key=${key}`;
        try {
            const response = await fetch(url);
            if (response.ok) {
                const body = await response.json();
                const movies = body.results;
                return movies;
            }
            else {
                throw new Error('Det gick galet!');
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
    else {
        return listMovies();
    }
};
export const findMovie = async (id) => {
    const key = 'c225640b9109317dc84c9f661f0ca0ba';
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const body = await response.json();
            const movie = body;
            return movie;
        }
        else {
            throw new Error(response.status.toString());
        }
    }
    catch (error) {
        throw new Error(error);
    }
};
