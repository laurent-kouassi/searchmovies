/* eslint-disable */
import { get } from './Ajax';

export function Services() {

    var that = this;

    this.getMovies = (title, year, type, page) => {
        return new Promise(async (resolve, reject) =>{
            return await get({
                url: `s=${title}&y=${year}&type=${type}&page=${page}`
            }).then(e => resolve(e))
              .catch(that.handleError.bind(null, reject));
        })
    }

    this.handleError = function (reject, response) {
        if (response.message === "Failed to fetch") {
            return reject({ message: "server_is_down" });
        }
        
        let entity = response.entity;

        if (response.status && response.status === 401) {
            return Promise.resolve(response);
        }

       return reject({ message: entity.message });
    };
};

// export default new Services();
/* eslint-disable */