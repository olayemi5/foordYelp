import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer yMOQxIcbJa8O-ZxWwedXPJLIzpbspFrWUCa9UyaMzEm7pxWQ4hFGRTD7LGNPCFMugnJJ4tstuDXgQqLIHmMhxLye2GdiTuFi_03AJuh1xMDCkT1kNqChNp3xW7UfYnYx'
    }
})